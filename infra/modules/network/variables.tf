variable "project" {
  description = "Nome do projeto (usado como prefixo nos recursos)"
  type        = string
}

variable "environment" {
  description = "Nome do ambiente (dev, staging, prod)"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block da VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "Lista de Availability Zones disponíveis"
  type        = list(string)
}

variable "public_subnet_cidrs" {
  description = "CIDRs das subnets públicas (ALB)"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnet_cidrs" {
  description = "CIDRs das subnets privadas (ECS Fargate tasks)"
  type        = list(string)
  default     = ["10.0.3.0/24", "10.0.4.0/24"]
}

variable "data_subnet_cidrs" {
  description = "CIDRs das subnets de dados (Aurora PostgreSQL)"
  type        = list(string)
  default     = ["10.0.10.0/24", "10.0.11.0/24"]
}

variable "tags" {
  description = "Tags globais aplicadas a todos os recursos"
  type        = map(string)
  default     = {}
}
