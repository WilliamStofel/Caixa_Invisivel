# ============================================================
# Environment: dev
# Orquestra todos os módulos para o ambiente de desenvolvimento
# ============================================================

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ------------------------------------------------------------
# 1. Network
# ------------------------------------------------------------
module "network" {
  source             = "../../modules/network"
  project            = var.project
  environment        = var.environment
  availability_zones = var.availability_zones
  tags               = var.tags
}

# ------------------------------------------------------------
# 2. Registry (ECR)
# ------------------------------------------------------------
module "registry" {
  source  = "../../modules/registry"
  project = var.project
  tags    = var.tags
}

# ------------------------------------------------------------
# 3. Secrets Manager
# ------------------------------------------------------------
module "secrets" {
  source      = "../../modules/secrets"
  project     = var.project
  environment = var.environment
  tags        = var.tags
}

# ------------------------------------------------------------
# 4. Database (Aurora Serverless v2)
# ------------------------------------------------------------
module "database" {
  source            = "../../modules/database"
  project           = var.project
  subnet_ids        = module.network.data_subnet_ids
  security_group_id = module.network.aurora_security_group_id
  master_username   = var.db_master_username
  master_password   = var.db_master_password
  tags              = var.tags
}

# ------------------------------------------------------------
# 5. Load Balancer (ALB)
# ------------------------------------------------------------
module "loadbalancer" {
  source            = "../../modules/loadbalancer"
  project           = var.project
  vpc_id            = module.network.vpc_id
  public_subnet_ids = module.network.public_subnet_ids
  security_group_id = module.network.alb_security_group_id
  tags              = var.tags
}

# ------------------------------------------------------------
# 6. Compute (ECS Fargate)
# ------------------------------------------------------------
module "compute" {
  source                    = "../../modules/compute"
  project                   = var.project
  aws_region                = var.aws_region
  private_subnet_ids        = module.network.private_subnet_ids
  security_group_id         = module.network.ecs_security_group_id
  frontend_image            = module.registry.frontend_repository_url
  backend_image             = module.registry.backend_repository_url
  frontend_target_group_arn = module.loadbalancer.frontend_target_group_arn
  backend_target_group_arn  = module.loadbalancer.backend_target_group_arn

  # ARNs dos segredos
  secret_database_url_arn     = module.secrets.database_url_arn
  secret_clerk_secret_key_arn = module.secrets.clerk_secret_key_arn
  secret_clerk_pub_key_arn    = module.secrets.clerk_publishable_key_arn
  secret_api_url_arn          = module.secrets.next_public_api_url_arn

  tags = var.tags
}
