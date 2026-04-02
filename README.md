# Caixa Invisível 💸

**Caixa Invisível** é um aplicativo de controle financeiro inteligente, projetado para monitorar gastos em tempo real, identificar padrões de consumo e enviar alertas proativos.

## 📖 O Que o Projeto Faz

Para jovens profissionais e freelancers com renda estável — mas que perdem o controle financeiro com pequenos gastos do dia a dia (os famosos "gastos invisíveis" com delivery, transporte e assinaturas) —, a **Caixa Invisível** oferece:

- **Monitoramento Automático:** Integração de dados para classificação de gastos sem esforço manual.
- **Alertas Inteligentes:** Notificações em tempo real ao ultrapassar limites ou detectar padrões de gastos fora do comum.
- **Insights Comportamentais:** Identificação de padrões de consumo com sugestões de melhoria acionáveis.
- **Dashboard Simplificado:** Visão geral da saúde financeira do mês compreensível em 5 segundos.

## 🎯 Por Que Este Projeto é Útil

Muitas pessoas chegam ao final do mês sem saber para onde o dinheiro foi, recorrendo a planilhas tediosas ou aplicativos complicados que exigem muita disciplina manual. A Caixa Invisível resolve isso focando no *comportamento* financeiro em tempo real, alertando o usuário e oferecendo insights no momento em que a decisão de gasto acontece. Nosso objetivo é transformar o controle financeiro em um processo que funciona no piloto automático.

## 🏗️ Estrutura do Projeto & Stack Tecnológica

O projeto é mantido sob um monorepo que utiliza **npm workspaces**:

- **Frontend (`apps/frontend`):** [Next.js 16.1+](https://nextjs.org/) (App Router), React 19, Vanilla CSS (Design System semântico).
- **Backend (`apps/backend`):** [NestJS 11+](https://nestjs.com/), [Prisma 7.5.0](https://www.prisma.io/), PostgreSQL 15, Clerk Auth.

```text
caixa-invisivel/
├── apps/
│   ├── frontend/       # Aplicação Web (Next.js)
│   └── backend/        # API Rest (NestJS)
├── docs/               # Documentação (PRD, Spec Técnica, Design System)
├── .agent/             # Skills e Workflows para agentes de IA
├── docker-compose.yml  # Infraestrutura de banco de dados local
└── package.json        # Configuração de workspaces
```

## 🚀 Como Começar (Getting Started)

### Pré-requisitos
- Node.js 24+
- Docker & Docker Compose
- Variáveis de ambiente configuradas (`.env`)

### Setup Local

1. **Instalar dependências (Raiz):**
   ```bash
   npm install
   ```
2. **Subir Infraestrutura (Docker):**
   ```bash
   docker-compose up -d
   ```
3. **Gerar Client e Migrações do Banco de Dados:**
   ```bash
   npm run prisma:generate --workspace=backend
   ```

### Comandos de Desenvolvimento
A partir da raiz do monorepo, utilize:
- **Executar Frontend:** `npm run dev:frontend`
- **Executar Backend:** `npm run dev:backend`

## 🤝 Onde Obter Ajuda

Para entender mais a fundo o produto, a arquitetura e detalhes técnicos, consulte a pasta `docs/`:
- [Product Requirements Document (PRD)](./docs/prd.md)
- [Declaração do Problema](./docs/definicao_problema.md)
- [Especificação Técnica](./docs/spec_tech.md)
- [Design System](./docs/design_system.md)

## 🧑‍💻 Mantenedores e Contribuição

O projeto evolui constantemente com base nas premissas técnicas de nossa stack, integridade de testes e padrões de design.

> [!IMPORTANT]
> **Convenções de Código:** Siga rigorosamente as diretrizes em [AGENTS.md](./AGENTS.md) ao realizar contribuições automáticas ou manuais, para garantir consistência dentro do monorepo abordando tanto linting, formatação quanto padrões de segurança.