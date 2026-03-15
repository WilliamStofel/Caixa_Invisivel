variable "aws_region" {
  description = "Região da AWS"
  type        = string
  default     = "us-east-1"
}

variable "project" {
  description = "Nome do projeto"
  type        = string
  default     = "devai"
}

variable "environment" {
  description = "Ambiente"
  type        = string
  default     = "dev"
}

variable "availability_zones" {
  description = "AZs para deploy"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}

variable "db_master_username" {
  type    = string
  default = "postgres"
}

variable "db_master_password" {
  type      = string
  sensitive = true
}

variable "tags" {
  type = map(string)
  default = {
    Project     = "DevAI"
    Environment = "dev"
    ManagedBy   = "Terraform"
  }
}
