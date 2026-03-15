output "lb_dns_name" {
  description = "DNS address do ALB"
  value       = aws_lb.main.dns_name
}

output "lb_arn" {
  value = aws_lb.main.arn
}

output "frontend_target_group_arn" {
  value = aws_lb_target_group.frontend.arn
}

output "backend_target_group_arn" {
  value = aws_lb_target_group.backend.arn
}
