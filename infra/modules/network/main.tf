# ============================================================
# Module: network
# Recursos: VPC, Subnets, IGW, NAT Gateway, Route Tables,
#           Security Groups
# ============================================================

# ------------------------------------------------------------
# VPC
# ------------------------------------------------------------
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge(var.tags, {
    Name = "${var.project}-vpc"
  })
}

# ------------------------------------------------------------
# Internet Gateway (acesso público para ALB e NAT)
# ------------------------------------------------------------
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = merge(var.tags, {
    Name = "${var.project}-igw"
  })
}

# ------------------------------------------------------------
# Subnets Públicas (ALB) — 2 AZs
# ------------------------------------------------------------
resource "aws_subnet" "public" {
  count             = length(var.public_subnet_cidrs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.public_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]

  map_public_ip_on_launch = true

  tags = merge(var.tags, {
    Name = "${var.project}-public-subnet-${count.index + 1}"
    Tier = "public"
  })
}

# ------------------------------------------------------------
# Subnets Privadas (ECS Tasks) — 2 AZs
# ------------------------------------------------------------
resource "aws_subnet" "private" {
  count             = length(var.private_subnet_cidrs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    Name = "${var.project}-private-subnet-${count.index + 1}"
    Tier = "private"
  })
}

# ------------------------------------------------------------
# Subnets de Dados (Aurora) — 2 AZs
# ------------------------------------------------------------
resource "aws_subnet" "data" {
  count             = length(var.data_subnet_cidrs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.data_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    Name = "${var.project}-data-subnet-${count.index + 1}"
    Tier = "data"
  })
}

# ------------------------------------------------------------
# Elastic IP para NAT Gateway
# ------------------------------------------------------------
resource "aws_eip" "nat" {
  domain = "vpc"

  tags = merge(var.tags, {
    Name = "${var.project}-nat-eip"
  })
}

# ------------------------------------------------------------
# NAT Gateway (na primeira subnet pública)
# Permite que ECS tasks (privadas) acessem ECR e Secrets Manager
# ------------------------------------------------------------
resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public[0].id

  tags = merge(var.tags, {
    Name = "${var.project}-nat-gw"
  })

  depends_on = [aws_internet_gateway.main]
}

# ------------------------------------------------------------
# Route Table Pública → Internet Gateway
# ------------------------------------------------------------
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = merge(var.tags, {
    Name = "${var.project}-public-rt"
  })
}

resource "aws_route_table_association" "public" {
  count          = length(aws_subnet.public)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

# ------------------------------------------------------------
# Route Table Privada → NAT Gateway
# ------------------------------------------------------------
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main.id
  }

  tags = merge(var.tags, {
    Name = "${var.project}-private-rt"
  })
}

resource "aws_route_table_association" "private" {
  count          = length(aws_subnet.private)
  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private.id
}

# ------------------------------------------------------------
# Route Table Dados (sem rota pública — isolamento total)
# ------------------------------------------------------------
resource "aws_route_table" "data" {
  vpc_id = aws_vpc.main.id

  tags = merge(var.tags, {
    Name = "${var.project}-data-rt"
  })
}

resource "aws_route_table_association" "data" {
  count          = length(aws_subnet.data)
  subnet_id      = aws_subnet.data[count.index].id
  route_table_id = aws_route_table.data.id
}

# ============================================================
# Security Groups
# ============================================================

# ALB: aceita tráfego HTTP da internet
resource "aws_security_group" "alb" {
  name        = "${var.project}-alb-sg"
  description = "Security group para o Application Load Balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP da Internet"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(var.tags, {
    Name = "${var.project}-alb-sg"
  })
}

# ECS Tasks: aceita tráfego apenas do ALB
resource "aws_security_group" "ecs" {
  name        = "${var.project}-ecs-sg"
  description = "Security group para ECS Fargate tasks (frontend e backend)"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "Porta do frontend (Next.js)"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  ingress {
    description     = "Porta do backend (NestJS)"
    from_port       = 3001
    to_port         = 3001
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  egress {
    description = "Unlimited egress (ECR, Secrets Manager, Aurora)"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(var.tags, {
    Name = "${var.project}-ecs-sg"
  })
}

# Aurora: aceita tráfego PostgreSQL apenas dos ECS tasks
resource "aws_security_group" "aurora" {
  name        = "${var.project}-aurora-sg"
  description = "Security group para Aurora PostgreSQL"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "PostgreSQL dos ECS tasks"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(var.tags, {
    Name = "${var.project}-aurora-sg"
  })
}
