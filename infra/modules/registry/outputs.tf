output "frontend_repository_url" {
  description = "URL do repositório ECR para o frontend"
  value       = aws_ecr_repository.frontend.repository_url
}

output "backend_repository_url" {
  description = "URL do repositório ECR para o backend"
  value       = aws_ecr_repository.backend.repository_url
}
