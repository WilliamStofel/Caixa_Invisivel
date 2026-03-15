# ============================================================
# Module: database
# Recursos: Amazon Aurora PostgreSQL Serverless v2
# ============================================================

resource "aws_db_subnet_group" "aurora" {
  name       = "${var.project}-aurora-subnet-group"
  subnet_ids = var.subnet_ids

  tags = merge(var.tags, {
    Name = "${var.project}-aurora-subnet-group"
  })
}

resource "aws_rds_cluster" "aurora" {
  cluster_identifier      = "${var.project}-aurora-cluster"
  engine                  = "aurora-postgresql"
  engine_mode             = "provisioned" # Requisito para Serverless v2
  engine_version          = var.engine_version
  database_name           = var.database_name
  master_username         = var.master_username
  master_password         = var.master_password
  backup_retention_period = 7
  preferred_backup_window = "02:00-03:00"
  skip_final_snapshot     = true # Para ambiente educacional/dev
  db_subnet_group_name    = aws_db_subnet_group.aurora.name
  vpc_security_group_ids  = [var.security_group_id]

  serverlessv2_scaling_configuration {
    max_capacity = var.max_capacity
    min_capacity = var.min_capacity
  }

  tags = var.tags
}

resource "aws_rds_cluster_instance" "instance" {
  count              = 1 # Single instance para custo reduzido em dev
  identifier         = "${var.project}-aurora-instance-1"
  cluster_identifier = aws_rds_cluster.aurora.id
  instance_class     = "db.serverless"
  engine             = aws_rds_cluster.aurora.engine
  engine_version     = aws_rds_cluster.aurora.engine_version

  tags = var.tags
}
