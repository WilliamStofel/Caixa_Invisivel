# Stitch MCP - Quick Reference Card

Copiar e executar no Claude Code. Substitua `[projectId]` pelo ID retornado na Etapa 2.

---

## 📌 Etapa 1: Listar Projetos Existentes

**Comando**: `mcp_StitchMCP_list_projects`

**Parâmetros**: Nenhum (objecto vazio)

```json
{}
```

**Esperado**: Lista de projectIds
- Se encontrar "Caixa Invisível", anote o ID
- Se não encontrar, vá para Etapa 2

---

## 📌 Etapa 2: Criar Novo Projeto

**Comando**: `mcp_StitchMCP_create_project`

```json
{
  "title": "Caixa Invisível"
}
```

**Esperado**:
```json
{
  "projectId": "4044680601076201931",
  "title": "Caixa Invisível"
}
```

⚠️ **ANOTE O projectId** - Você vai usar em todas as etapas seguintes

---

## 📌 Etapa 3: Gerar INT-01 Login

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Minimal login page for a premium financial tracking app. The design should feel clean, modern, and trust-building.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first, Responsive web\n- Palette: Primary Indigo (#4F46E5), Neutral White (#FFFFFF), Neutral Gray (#6B7280)\n- Styles: Flat design, no shadows, 8px border radius for inputs, generous padding (20px minimum)\n- Typography: Inter font family, clean hierarchy\n\n**PAGE STRUCTURE:**\n1. **Header/Top Section:** App logo or \"Caixa Invisível\" wordmark centered, with subtle bottom padding\n2. **Form Section:**\n   - Email input field with placeholder \"seu@email.com\"\n   - Password input field with placeholder \"Senha\"\n   - Indigo \"Entrar\" button (full-width)\n3. **Secondary Links:**\n   - \"Criar conta\" link below button (centered, light gray text)\n   - \"Esqueci minha senha\" link (bottom, smaller text)\n4. **Footer:** Optional: Subtle line separator or branding\n\n**Visual Requirements:**\n- Generous vertical spacing between elements (minimum 16px)\n- Form inputs: white background, light gray border, padding inside\n- Button: full-width indigo background, white text, no shadow\n- Background: clean white\n- All text: Inter font, left-aligned inputs\n- Focus states: subtle indigo outline\n- Mobile padding: 20px left and right\n\nThis is a speed-focused interface - user should understand their action in under 2 seconds.",
  "deviceType": "MOBILE"
}
```

**Esperado**:
```json
{
  "screenId": "98b50e2ddc9943efb387052637738f61",
  "title": "INT-01 Login"
}
```

⚠️ **ANOTE O screenId**

---

## 📌 Etapa 4: Gerar INT-02 Register

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Minimal signup/registration form for a financial app. Design should feel inviting and low-friction.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first, Responsive web\n- Palette: Primary Indigo (#4F46E5), Neutral White, Neutral Gray (#6B7280)\n- Styles: Flat design, 8px border radius, generous padding (20px)\n- Typography: Inter font family\n\n**PAGE STRUCTURE:**\n1. **Header:** \"Criar Conta\" title, centered\n2. **Form Section:**\n   - Nome input field (full-width, placeholder \"Seu Nome\")\n   - Email input field (full-width, placeholder \"seu@email.com\")\n   - Senha input field (full-width, placeholder \"Crie uma senha\")\n   - Indigo \"Criar Conta\" button (full-width)\n3. **Footer Link:** \"Já tenho conta\" link (centered, gray text)\n\n**Visual Requirements:**\n- NO extra fields - only name, email, password\n- Inputs: white background, light gray border\n- Button: indigo, full-width, white text\n- Vertical spacing: 16-20px between elements\n- Form should look fast and simple\n- Mobile padding: 20px sides\n- Focus states: indigo outline on inputs\n\nGoal: User should complete signup in under 30 seconds. Avoid friction.",
  "deviceType": "MOBILE"
}
```

⚠️ **ANOTE O screenId**

---

## 📌 Etapa 5: Gerar INT-03 Dashboard

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Main dashboard for personal finance control. This is the most important screen - user must understand their financial situation in 5 seconds.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first\n- Palette: Primary Indigo (#4F46E5), Success Green (#10B981), Error Red (#EF4444), White background\n- Styles: Card-based layout, subtle 1px borders, flat design, 8px radius\n- Typography: Inter font, clear hierarchy\n\n**PAGE STRUCTURE:**\n1. **Top Section:**\n   - Greeting header \"Olá, [Nome]\" or similar\n   - Date or period indicator\n2. **Primary Card - Spending Status:**\n   - Large card showing \"Gasto este mês: $XXX\"\n   - Indicator badge: GREEN (#10B981) if under control OR RED (#EF4444) if alert\n   - Optional monthly limit below: \"Limite: $2.000\"\n3. **Secondary Section - Recent Transactions:**\n   - Title \"Transações Recentes\"\n   - List of 3-5 most recent transactions showing:\n     * Date (e.g., \"Ontem\")\n     * Category (e.g., \"Delivery\", \"Compras\")\n     * Amount in RED text\n     * Subtle dividers between items\n4. **Action Buttons (stacked):**\n   - Primary: Indigo \"Adicionar Gasto\" button (full-width)\n   - Secondary: \"Configurar Alertas\" link (gray text)\n5. **Navigation Links:**\n   - \"Ver todas transações\" link\n   - \"Ver insights\" link\n\n**Visual Requirements:**\n- Clean card design with subtle borders\n- Large prominent spending amount (status indicator most important)\n- Color coding critical: GREEN = safe, RED = alert\n- Generous spacing (20px mobile padding)\n- Each transaction is a row with subtle divider\n- Buttons and links clearly distinguish primary actions\n- Background: clean white\n- Mobile responsive, no horizontal scroll\n\n**Critical Success Factor:** User sees \"I'm under control\" or \"Alert!\" immediately in under 5 seconds.",
  "deviceType": "MOBILE"
}
```

⚠️ **ANOTE O screenId**

---

## 📌 Etapa 6: Gerar INT-04 Transaction List

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Transaction list page showing all spending. Design should be scannable and organized by date.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first\n- Palette: Primary Indigo (#4F46E5), Error Red (#EF4444) for amounts, Gray for secondary text\n- Styles: List-based, subtle row dividers, flat design\n- Typography: Inter font\n\n**PAGE STRUCTURE:**\n1. **Header:**\n   - \"Transações\" title with back button to dashboard\n   - Optional: Filter and Sort buttons (secondary)\n2. **Action Bar (Optional):** Filtrar | Ordenar buttons\n3. **Transaction List:**\n   - Grouped by date (e.g., \"Esta Semana\", \"Semana Passada\")\n   - Each transaction row shows:\n     * Date/Time on left (small, gray)\n     * Category icon placeholder and name (center-left)\n     * Amount in RED (#EF4444) on right (bold)\n     * Optional description/note below category\n   - Subtle divider line between transactions\n   - Rows have hover/tap state (slightly different background)\n4. **Footer:** Link or button to \"Voltar ao Dashboard\"\n\n**Visual Requirements:**\n- Rows: white background with 1px gray bottom border\n- Amount text: red, bold, right-aligned\n- Dates as section headers: small gray text\n- Icons: placeholder squares (for category icons)\n- Padding: 16px per row, 20px sides\n- Clean, scannable layout\n- Most recent transactions first\n- No complex animations - simple and fast\n\n**UX Priority:** User can quickly scan and understand all spending. Categorization via visual icons.",
  "deviceType": "MOBILE"
}
```

⚠️ **ANOTE O screenId**

---

## 📌 Etapa 7: Gerar INT-05 Alert Configuration

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Simple alert configuration form. No complex rules - MVP should be straightforward category + limit.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first\n- Palette: Primary Indigo (#4F46E5), White background, Gray text\n- Styles: Flat forms, 8px radius inputs, card-based\n- Typography: Inter font\n\n**PAGE STRUCTURE:**\n1. **Header:** \"Configurar Alertas\" title with back button\n2. **Form Section:**\n   - Existing Alerts (if any): List of current alerts as editable rows (optional, can be simplified)\n   - Add New Alert Form:\n     * Category selector/dropdown (e.g., \"Delivery\", \"Compras\", \"Alimentação\")\n     * Limit input field (number input, placeholder \"$500\")\n     * Indigo \"Salvar Alerta\" button (full-width)\n3. **Links:** \"Voltar\" or back to dashboard\n\n**Visual Requirements:**\n- Form inputs: white background, light gray border\n- Dropdown: clean styling, Indigo on select\n- Button: indigo, full-width\n- Spacing: 20px vertical between form sections\n- No complex validation UX - keep it simple\n- Mobile padding: 20px sides\n- Category dropdown with clear labels\n\n**Simplicity:** This is MVP - single category + limit per alert. No advanced rules or complexity.",
  "deviceType": "MOBILE"
}
```

⚠️ **ANOTE O screenId**

---

## 📌 Etapa 8: Gerar INT-06 Insights

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Insights page showing spending patterns and comparisons. Text should be simple, direct, non-technical.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first\n- Palette: Primary Indigo (#4F46E5), Success Green (#10B981), Error Red (#EF4444), White\n- Styles: Card-based, flat design, subtle shadows optional\n- Typography: Inter font, easy to read\n\n**PAGE STRUCTURE:**\n1. **Header:** \"Seus Insights\" with back button\n2. **Insight Cards (stacked):**\n   - Card 1: \"Você gastou 30% a mais com delivery esta semana\" (example message)\n   - Card 2: Weekly comparison visual (this week vs last week)\n   - Additional insight cards with similar simple messages\n   - Each card: icon or color badge (success/alert) + message text + optional small chart\n3. **Refresh Button:** Indigo \"Atualizar Insights\" button (secondary, not primary focus)\n4. **Footer:** Link to \"Voltar ao Dashboard\"\n\n**Visual Requirements:**\n- Each insight: card with subtle border, 16px padding inside\n- Text: simple, direct language (avoid technical terms)\n- Color badges: GREEN for positive, RED for alert insights\n- Optional: small chart or graph showing trend (if visual)\n- Spacing: 16px between cards\n- Mobile padding: 20px sides\n- Font size: readable, clear hierarchy\n\n**Content Tone:** \"You spent 30% more\" NOT \"Variance analysis indicates anomaly\". Simple, actionable insights.",
  "deviceType": "MOBILE"
}
```

⚠️ **ANOTE O screenId**

---

## 📌 Etapa 9: Gerar INT-07 Add Manual Expense

**Comando**: `mcp_StitchMCP_generate_screen_from_text`

```json
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "Form to manually add an expense. Fallback feature for when automatic integration fails. Keep simple.\n\n**DESIGN SYSTEM (REQUIRED):**\n- Platform: Mobile-first\n- Palette: Primary Indigo (#4F46E5), White background, Gray text\n- Styles: Flat form design, 8px radius inputs\n- Typography: Inter font\n\n**PAGE STRUCTURE:**\n1. **Header:** \"Adicionar Gasto\" title with back button\n2. **Form Fields (stacked, full-width):**\n   - Valor input (number, placeholder \"R$ 0.00\")\n   - Categoria dropdown (e.g., \"Delivery\", \"Compras\", \"Alimentação\", \"Outro\")\n   - Data input/picker (date field)\n   - Descrição input (text area, placeholder \"Opcional: descrição do gasto\")\n3. **Action Buttons:**\n   - Indigo \"Salvar\" button (full-width)\n   - \"Cancelar\" link below button\n4. **Navigation:** Link to \"Voltar ao Dashboard\"\n\n**Visual Requirements:**\n- All inputs: white background, light gray border, padding inside\n- Dropdown: Indigo on select, clear options\n- Date picker: standard mobile date input\n- Button: indigo, full-width, white text\n- Spacing: 16-20px between fields\n- Mobile padding: 20px sides\n- Form should feel fast - no unnecessary validations shown\n- All fields except Descrição should be required\n\n**Purpose:** Simple fallback. User should complete in under 30 seconds. Essential fields only.",
  "deviceType": "MOBILE"
}
```

⚠️ **ANOTE O screenId**

---

## 📝 Tabela de Anotação

Preencha com os IDs retornados:

```
Projeto ID: ___________________________

INT-01 Login screenId:                  ___________________________
INT-02 Register screenId:               ___________________________
INT-03 Dashboard screenId:              ___________________________
INT-04 Transaction List screenId:       ___________________________
INT-05 Alert Configuration screenId:    ___________________________
INT-06 Insights screenId:               ___________________________
INT-07 Add Manual Expense screenId:     ___________________________
```

---

## ⏱️ Tempo Estimado

- Etapa 2 (criar projeto): 2-3 min
- Etapa 3-9 (cada tela): 2-3 min por tela
- **Total**: ~20-25 minutos

---

## ✅ Próximos Passos Após Gerar

1. Salve todos os screenIds
2. Preencha `caixa-invisivel-metadata.json`
3. Baixe os designs (HTML + PNG)
4. Use skill `/react:components` para converter em componentes React

---

**Reference Card v1.0 | Caixa Invisível | 2026-03-30**
