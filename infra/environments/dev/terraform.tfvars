aws_region         = "us-east-1"
project            = "devai"
environment        = "dev"
availability_zones = ["us-east-1a", "us-east-1b"]

# Nota: A senha deve ser injetada via variavel de ambiente ou arquivo .tfvars nao versionado em prod
db_master_password = "CHANGE_ME_NOW_123!"

tags = {
  Project     = "DevAI"
  Environment = "dev"
  ManagedBy   = "Terraform"
}
