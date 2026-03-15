output "vpc_id" {
  description = "ID da VPC"
  value       = aws_vpc.main.id
}

output "public_subnet_ids" {
  description = "IDs das subnets públicas (ALB)"
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "IDs das subnets privadas (ECS)"
  value       = aws_subnet.private[*].id
}

output "data_subnet_ids" {
  description = "IDs das subnets de dados (Aurora)"
  value       = aws_subnet.data[*].id
}

output "alb_security_group_id" {
  description = "ID do Security Group do ALB"
  value       = aws_security_group.alb.id
}

output "ecs_security_group_id" {
  description = "ID do Security Group dos ECS tasks"
  value       = aws_security_group.ecs.id
}

output "aurora_security_group_id" {
  description = "ID do Security Group do Aurora"
  value       = aws_security_group.aurora.id
}
