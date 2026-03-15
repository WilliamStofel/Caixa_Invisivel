output "database_url_arn" {
  value = aws_secretsmanager_secret.database_url.arn
}

output "clerk_secret_key_arn" {
  value = aws_secretsmanager_secret.clerk_secret_key.arn
}

output "clerk_publishable_key_arn" {
  value = aws_secretsmanager_secret.clerk_publishable_key.arn
}

output "next_public_api_url_arn" {
  value = aws_secretsmanager_secret.next_public_api_url.arn
}
