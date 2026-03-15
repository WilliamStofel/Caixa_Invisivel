# Infraestrutura da AWS (Terraform)

Este diretório contém os artefatos de Infraestrutura como Código (IaC) para o deploy do DevAI na AWS, baseado no cenário **ECS Fargate + Aurora Serverless v2 + ALB**.

## Estrutura

- `modules/`: Módulos reutilizáveis (Network, Compute, Database, etc.)
- `environments/`: Configurações de ambientes específicos (ex: `dev/`)

## Pré-requisitos

1. AWS CLI configurado
2. Terraform instalado (>= 1.5.0)
3. Credenciais da AWS com permissões suficientes (AdministratorAccess recomendado para bootstrap)

## Como provisionar (Ambiente Dev)

1. Entre no diretório do ambiente:
   ```bash
   cd environments/dev
   ```

2. Inicialize o Terraform:
   ```bash
   terraform init
   ```

3. Configure os segredos no `terraform.tfvars` ou injete via variáveis de ambiente.

4. Verifique o plano:
   ```bash
   terraform plan
   ```

5. Aplique as mudanças:
   ```bash
   terraform apply
   ```

## Configuração Pós-Apply

Após o provisionamento bem-sucedido:

1. Obtenha o DNS do ALB através dos outputs do Terraform.
2. Acesse o **AWS Secrets Manager** no console e preencha os valores para:
   - `devai/dev/clerk_secret_key`
   - `devai/dev/clerk_publishable_key`
   - `devai/dev/database_url` (Format: `postgresql://user:password@aurora-endpoint:5432/devai`)
   - `devai/dev/next_public_api_url` (Format: `http://<alb-dns>/api`)
3. Configure os **GitHub Secrets** no repositório para o workflow `deploy-aws.yml`.
4. Dispare o primeiro deploy via GitHub Actions.

## Manutenção

Para destruir os recursos:
```bash
terraform destroy
```
