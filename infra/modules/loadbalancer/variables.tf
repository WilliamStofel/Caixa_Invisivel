variable "project" {
  description = "Nome do projeto"
  type        = string
}

variable "vpc_id" {
  description = "ID da VPC"
  type        = string
}

variable "public_subnet_ids" {
  description = "IDs das subnets públicas para o ALB"
  type        = list(string)
}

variable "security_group_id" {
  description = "ID do Security Group do ALB"
  type        = string
}

variable "tags" {
  description = "Tags globais"
  type        = map(string)
  default     = {}
}
