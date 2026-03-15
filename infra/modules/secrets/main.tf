# ============================================================
# Module: secrets
# Recursos: AWS Secrets Manager para gerenciar credenciais
# ============================================================

resource "aws_secretsmanager_secret" "database_url" {
  name        = "${var.project}/${var.environment}/database_url"
  description = "URL de conexão do banco de dados (Prisma format)"
  tags        = var.tags
}

resource "aws_secretsmanager_secret" "clerk_secret_key" {
  name        = "${var.project}/${var.environment}/clerk_secret_key"
  description = "Chave secreta do Clerk Auth"
  tags        = var.tags
}

resource "aws_secretsmanager_secret" "clerk_publishable_key" {
  name        = "${var.project}/${var.environment}/clerk_publishable_key"
  description = "Chave pública do Clerk Auth"
  tags        = var.tags
}

resource "aws_secretsmanager_secret" "next_public_api_url" {
  name        = "${var.project}/${var.environment}/next_public_api_url"
  description = "URL do endpoint da API (Backend via ALB)"
  tags        = var.tags
}
