# Especificação Técnica

## Visão Geral Técnica

Este documento define a arquitetura técnica do produto "Caixa Invisível", focado em um MVP funcional, alinhado rigorosamente à stack oficial e convenções do repositório (AGENTS.md).

O objetivo é permitir a rápida construção, validação e demonstração do produto, mantendo a arquitetura de monorepo escalável e padronizada.

Público-alvo:

* Desenvolvedores iniciantes/intermediários
* Ferramentas de desenvolvimento com IA (ex: Antigravity)
* Projetos acadêmicos e MVPs

---

## Arquitetura de Referência

**Estilo arquitetural:**

* Arquitetura em Monorepo estruturada com npm workspaces (`apps/frontend`, `apps/backend`).
* Backend Desacoplado servindo APIs RESTful.

**Componentes principais:**

* **Frontend:** Aplicação Web com Server Components e Client Components em Next.js (App Router).
* **Backend:** Microsserviço monolith modular (Feature Modules) em NestJS.
* **Banco de dados:** PostgreSQL relacional.

**Observabilidade:**

* Logs estruturados no Backend (NestJS Logger).
* Monitoramento nativo da plataforma de deploy (Vercel).

**Autenticação e autorização:**

* **Clerk Auth:** Gestão unificada de Identidade e Sessão.

**Protocolos de Comunicação:**

* HTTP/HTTPS via chamadas REST (JSON).

**Infraestrutura de deployment:**

* Frontend: Vercel ou AWS.
* Backend: Serviço gerenciado (ex: Render, AWS, ou Vercel Serverless caso compatível).
* Banco de Dados: Instância gerenciada (Supabase PostgreSQL ou Neon).

---

## Stack Tecnológica

### Frontend (`apps/frontend`)

* **Linguagem**: TypeScript
* **Framework web**: Next.js 16+ (App Router), React 19
* **Bibliotecas**: Lucide React, clsx
* **Estilização**: Vanilla CSS (usando varíaveis do Design System predefinido, **sem** TailwindCSS)

---

### Backend (`apps/backend`)

* **Linguagem**: TypeScript
* **Framework**: NestJS 11
* **Banco de dados**: PostgreSQL
* **ORM**: Prisma ORM
* **Segurança**: DTOs validados via `class-validator` e `class-transformer` com `ValidationPipe`.

---

### Stack de Desenvolvimento

* **IDE**: VS Code / Google Antigravity
* **Gerenciamento de pacotes**: npm workspaces (dependências e scripts na raiz)
* **Ambiente local (Front)**: `npm run dev:frontend`
* **Ambiente local (Back)**: `npm run dev:backend`
* **Infra local**: Docker Compose para subir banco PostgreSQL (opcional, pode usar URL remota DBaaS).

---

### Integrações

* **Persistência**: PostgreSQL
* **Segurança (Autenticação)**: Clerk (Provider de Identidade, SDKs front/back)

---

## Segurança

### Autenticação e Gestão de Sessão

* O controle de sessão e emissão de tokens é delegado ao **Clerk**.
* O Frontend utiliza os Hooks rápidos e componentes prontos do Clerk (`@clerk/nextjs`).
* O Backend intercepta todas as chamadas em rotas protegidas validando o token JWT pelo guard customizado integrado ao SDK do Clerk (`@clerk/clerk-sdk-node`).

---

### Controle de Acesso e Autorização

* **Isolamento por Identidade:** Todas as requisições API extraem o `user_id` (sub) do token Clerk decodificado.
* O NestJS garante em nível de serviço (Services) que o cliente atue exclusivamente nas entidades `transactions`, `alerts` e `insights` que correspondam ao seu `user_id`.

---

### Segurança de Dados e Transações

* Validação rigorosa de todos os inputs utilizando DTOs tipados no Backend.
* Interação via ORM Prisma para blindar a aplicação de SQL Injections nativamente.
* Frontend não acessa o banco diretamente, apenas consome a API RESTful exposta pelo NestJS.

---

## APIs

**Padrão:**

* Endpoint principal: API RESTful sob rotas controladas pelo NestJS (ex: `/api/v1`).

**Principais Domínios Modulares (NestJS Feature Modules):**

* `users` (Integração de metadados do cadastro / webhook com Clerk opcional)
* `transactions` (Lançamentos de despesas vinculados à categoria)
* `alerts` (Regras de limitação cadastradas)
* `insights` (Processamento numérico e geração de alertas para UX)

**Operações principais (Exemplos):**

* `POST /transactions` - Inserir gasto manual / classificar
* `GET /transactions` - Listar filtro de extrato
* `POST /alerts` - Configurar alvo orçamentário
* `GET /insights` - Obter dados prontos para visualização no dashboard

---

## Tenancy

**Estratégia:**

* Single-schema lógico (banco compartilhado multitenant no prisma), pautado pelo ID do usuário como elo de pertencimento (`user_id`).

**Responsabilidade de Isolamento:**

* Filtros `WHERE user_id = ?` automáticos via Service Layer do NestJS (nunca processar atualizações/vistas que ultrapassem esse limite).

---

## Diretrizes para Desenvolvimento Assistido por IA

**Mandamentos (Aderência ao AGENTS.md):**
1. **Frontend:**
   * Usar convenção de grupos no Next.js `app/(auth)`, `app/(dashboard)`.
   * Componentizar intensamente em `src/components`, jamais deixar lógica solta em pages.
   * Não usar Tailwind, aplicar unicamente variáveis de Vanilla CSS (`globals.css`).
2. **Backend:**
   * Adotar Clean Architecture mitigada do NestJS. Manter separação de pasta por *Feature Module* (`src/modules/FEATURE`).
   * Desacoplar regras de ORM dos Controllers; Controllers lidam com web HTTP, API delega o core ao Service, que consome o banco via Prisma.
3. **Fluxo:**
   * Garantir tipagem restrita do TypeScript, jamais suprimir erros.
   * Obrigatório a injeção do Guard de validação lógica (Clerk JWKS) acima dos recursos logados.
   * Sempre usar MCP `context7` se tiver dúvidas nas sintaxes atualizadas do NextJS 16 Cache ou NestJS 11.
