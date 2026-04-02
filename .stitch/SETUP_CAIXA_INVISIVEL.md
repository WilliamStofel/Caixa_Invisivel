# Stitch MCP - Setup Caixa Invisível

Instruções completas para gerar as 7 telas do projeto "Caixa Invisível" usando o Stitch MCP.

## Design System
- **Primary**: #4F46E5 (indigo)
- **Success**: #10B981 (green)
- **Error**: #EF4444 (red)
- **Font**: Inter
- **Style**: Minimal, clean, mobile-first

## Passo 1: Listar Projetos Existentes

Execute:
```
mcp_StitchMCP_list_projects
```

Se encontrar um projeto chamado "Caixa Invisível", anote o `projectId`.

## Passo 2: Criar Projeto (se necessário)

Se o projeto não existir, execute:
```
mcp_StitchMCP_create_project
{
  "title": "Caixa Invisível"
}
```

Anote o `projectId` retornado.

---

## Passo 3: Gerar as 7 Telas

Use o comando `mcp_StitchMCP_generate_screen_from_text` para cada tela com o prompt específico.

### INT-01: Login (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Minimal login page for a financial tracking app. Design system uses indigo (#4F46E5) as primary color, clean white background. Components: 1) Header with app logo/branding at top 2) Email input field 3) Password input field 4) Blue 'Sign In' button 5) 'Create Account' link in light gray 6) 'Forgot Password?' link at bottom. Use Inter font family. Style: minimal, flat design, no shadows. Spacing: generous padding. Focus on speed and simplicity.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

### INT-02: Register (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Minimal registration/signup form for financial app. Design system: indigo (#4F46E5) primary, white background, Inter font. Components: 1) Header with 'Create Account' title 2) Name input field 3) Email input field 4) Password input field 5) Indigo 'Create Account' button 6) 'Already have account?' link in gray. Style: minimal, flat, clean. Avoid friction - only essential fields. Generous spacing, responsive.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

### INT-03: Dashboard (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Main dashboard for personal finance app. Design system: primary indigo (#4F46E5), success green (#10B981), error red (#EF4444), white background, Inter font. Components: 1) Top header with user greeting 2) Large card showing 'Monthly Spending: $XXX' with green badge if under control, red if alert 3) Optional monthly limit display 4) Quick transaction preview list (3-5 recent transactions with date, category, amount) 5) Bottom action buttons: indigo 'Add Expense' button, 'Configure Alerts' link 6) Navigation links to 'View All Transactions' and 'View Insights'. Style: minimal, cards with subtle borders, responsive, mobile-first.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

### INT-04: Transaction List (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Transaction list page for financial app. Design system: indigo (#4F46E5), white background, Inter font, green (#10B981) for positive, red (#EF4444) for expenses. Components: 1) Header with 'Transactions' title and back button 2) Filter and Sort buttons (top) 3) List of transactions each showing: date, category with icon placeholder, amount in red for expenses, description 4) Transactions organized by date (most recent first) 5) Link/button to return to dashboard. Style: minimal, clean list layout, generous spacing, scannable. Each transaction is a subtle row.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

### INT-05: Alert Configuration (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Alert configuration form for expense tracking. Design system: indigo (#4F46E5), white background, Inter font. Components: 1) Header 'Configure Spending Alerts' 2) Form section with: Category dropdown/selector 3) Spending limit input field (e.g., $500) 4) Indigo 'Save Alert' button 5) Back link to dashboard 6) Optional: Show existing alerts as editable list above form. Style: minimal, flat form design, clean spacing, easy to use.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

### INT-06: Insights (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Insights page showing spending patterns. Design system: indigo (#4F46E5), success green (#10B981), error red (#EF4444), white background, Inter font. Components: 1) Header 'Spending Insights' with back button 2) Insight cards showing: 'You spent 30% more on delivery this week' or similar simple messages 3) Weekly comparison cards (e.g., this week vs last week) 4) 'Refresh Insights' button in indigo 5) Simple chart or visual indicator if possible. Style: minimal, text-focused, avoid technical language, direct messaging. Clean cards with subtle styling.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

### INT-07: Add Manual Expense (MOBILE)

```json
{
  "projectId": "[projectId]",
  "prompt": "Form to manually add an expense (fallback functionality). Design system: indigo (#4F46E5), white background, Inter font. Components: 1) Header 'Add Expense' 2) Form fields: Amount input (number) 3) Category dropdown/selector 4) Date picker 5) Description/notes input 6) Indigo 'Save' button 7) 'Cancel' link or button 8) Link to return to dashboard. Style: minimal, flat form, clean spacing, straightforward layout. Focus on ease of use.",
  "deviceType": "MOBILE"
}
```

**Expected Output**: projectId + screenId

---

## Passo 4: Compilar Resultados

Após gerar todas as telas, compile os resultados no formato abaixo:

```json
{
  "projectId": "[projectId]",
  "project_title": "Caixa Invisível",
  "screens": [
    {
      "interface": "INT-01 Login",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    },
    {
      "interface": "INT-02 Register",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    },
    {
      "interface": "INT-03 Dashboard",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    },
    {
      "interface": "INT-04 Transaction List",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    },
    {
      "interface": "INT-05 Alert Configuration",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    },
    {
      "interface": "INT-06 Insights",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    },
    {
      "interface": "INT-07 Add Manual Expense",
      "screenId": "[screenId]",
      "deviceType": "MOBILE",
      "status": "generated"
    }
  ]
}
```

---

## Observações Importantes

1. **Device Type**: Todas as telas são MOBILE-first conforme especificação
2. **Design System**: Mantém consistência com cores, fonte e estilo minimalista
3. **Iteração**: Se alguma tela não sair como esperado, use `mcp_StitchMCP_edit_screens` para ajustes
4. **Assets**: Após gerar, faça download das telas em HTML/PNG para referência
5. **Documentação**: Este processo cria a base visual para implementação frontend em Next.js

---

## Referências

- Especificação UI: `docs/spec_ui.md`
- Design System Colors: Primary #4F46E5, Success #10B981, Error #EF4444
- Font: Inter sans-serif
- Platform: Mobile-first (Web responsive)
