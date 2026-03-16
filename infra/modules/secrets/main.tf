resource "aws_secretsmanager_secret" "app_secrets" {
  name        = "${var.project_name}-app-secrets"
  description = "Application secrets for ${var.project_name}"
  recovery_window_in_days = 0

  tags = {
    Name        = "${var.project_name}-secrets"
    Environment = var.environment
  }
}
