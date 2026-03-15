variable "project" { type = string }
variable "aws_region" { type = string }
variable "private_subnet_ids" { type = list(string) }
variable "security_group_id" { type = string }
variable "frontend_image" { type = string }
variable "backend_image" { type = string }
variable "frontend_target_group_arn" { type = string }
variable "backend_target_group_arn" { type = string }
variable "secret_database_url_arn" { type = string }
variable "secret_clerk_secret_key_arn" { type = string }
variable "secret_clerk_pub_key_arn" { type = string }
variable "secret_api_url_arn" { type = string }

variable "frontend_cpu" { default = 512 }
variable "frontend_memory" { default = 1024 }
variable "backend_cpu" { default = 1024 }
variable "backend_memory" { default = 2048 }

variable "tags" {
  type    = map(string)
  default = {}
}
