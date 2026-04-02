# Stitch MCP - Prompts Refinados Caixa Invisível

Prompts prontos para copiar e colar no Claude Code. Todos os prompts já incorporam as diretrizes de design system e melhorias UX.

## Pré-requisitos
1. Projeto "Caixa Invisível" criado no Stitch MCP
2. `projectId` anotado
3. Usar ferramenta: `mcp_StitchMCP_generate_screen_from_text`

---

## INT-01: Tela de Login

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Minimal login page for a premium financial tracking app. The design should feel clean, modern, and trust-building.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first, Responsive web
- Palette: Primary Indigo (#4F46E5), Neutral White (#FFFFFF), Neutral Gray (#6B7280)
- Styles: Flat design, no shadows, 8px border radius for inputs, generous padding (20px minimum)
- Typography: Inter font family, clean hierarchy

**PAGE STRUCTURE:**
1. **Header/Top Section:** App logo or "Caixa Invisível" wordmark centered, with subtle bottom padding
2. **Form Section:**
   - Email input field with placeholder "seu@email.com"
   - Password input field with placeholder "Senha"
   - Indigo "Entrar" button (full-width)
3. **Secondary Links:**
   - "Criar conta" link below button (centered, light gray text)
   - "Esqueci minha senha" link (bottom, smaller text)
4. **Footer:** Optional: Subtle line separator or branding

**Visual Requirements:**
- Generous vertical spacing between elements (minimum 16px)
- Form inputs: white background, light gray border, padding inside
- Button: full-width indigo background, white text, no shadow
- Background: clean white
- All text: Inter font, left-aligned inputs
- Focus states: subtle indigo outline
- Mobile padding: 20px left and right

This is a speed-focused interface - user should understand their action in under 2 seconds.
```

---

## INT-02: Cadastro de Usuário

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Minimal signup/registration form for a financial app. Design should feel inviting and low-friction.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first, Responsive web
- Palette: Primary Indigo (#4F46E5), Neutral White, Neutral Gray (#6B7280)
- Styles: Flat design, 8px border radius, generous padding (20px)
- Typography: Inter font family

**PAGE STRUCTURE:**
1. **Header:** "Criar Conta" title, centered
2. **Form Section:**
   - Nome input field (full-width, placeholder "Seu Nome")
   - Email input field (full-width, placeholder "seu@email.com")
   - Senha input field (full-width, placeholder "Crie uma senha")
   - Indigo "Criar Conta" button (full-width)
3. **Footer Link:** "Já tenho conta" link (centered, gray text)

**Visual Requirements:**
- NO extra fields - only name, email, password
- Inputs: white background, light gray border
- Button: indigo, full-width, white text
- Vertical spacing: 16-20px between elements
- Form should look fast and simple
- Mobile padding: 20px sides
- Focus states: indigo outline on inputs

Goal: User should complete signup in under 30 seconds. Avoid friction.
```

---

## INT-03: Dashboard Principal

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Main dashboard for personal finance control. This is the most important screen - user must understand their financial situation in 5 seconds.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Success Green (#10B981), Error Red (#EF4444), White background
- Styles: Card-based layout, subtle 1px borders, flat design, 8px radius
- Typography: Inter font, clear hierarchy

**PAGE STRUCTURE:**
1. **Top Section:**
   - Greeting header "Olá, [Nome]" or similar
   - Date or period indicator
2. **Primary Card - Spending Status:**
   - Large card showing "Gasto este mês: $XXX"
   - Indicator badge: GREEN (#10B981) if under control OR RED (#EF4444) if alert
   - Optional monthly limit below: "Limite: $2.000"
3. **Secondary Section - Recent Transactions:**
   - Title "Transações Recentes"
   - List of 3-5 most recent transactions showing:
     * Date (e.g., "Ontem")
     * Category (e.g., "Delivery", "Compras")
     * Amount in RED text
     * Subtle dividers between items
4. **Action Buttons (stacked):**
   - Primary: Indigo "Adicionar Gasto" button (full-width)
   - Secondary: "Configurar Alertas" link (gray text)
5. **Navigation Links:**
   - "Ver todas transações" link
   - "Ver insights" link

**Visual Requirements:**
- Clean card design with subtle borders
- Large prominent spending amount (status indicator most important)
- Color coding critical: GREEN = safe, RED = alert
- Generous spacing (20px mobile padding)
- Each transaction is a row with subtle divider
- Buttons and links clearly distinguish primary actions
- Background: clean white
- Mobile responsive, no horizontal scroll

**Critical Success Factor:** User sees "I'm under control" or "Alert!" immediately in under 5 seconds.
```

---

## INT-04: Lista de Transações

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Transaction list page showing all spending. Design should be scannable and organized by date.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Error Red (#EF4444) for amounts, Gray for secondary text
- Styles: List-based, subtle row dividers, flat design
- Typography: Inter font

**PAGE STRUCTURE:**
1. **Header:**
   - "Transações" title with back button to dashboard
   - Optional: Filter and Sort buttons (secondary)
2. **Action Bar (Optional):** Filtrar | Ordenar buttons
3. **Transaction List:**
   - Grouped by date (e.g., "Esta Semana", "Semana Passada")
   - Each transaction row shows:
     * Date/Time on left (small, gray)
     * Category icon placeholder and name (center-left)
     * Amount in RED (#EF4444) on right (bold)
     * Optional description/note below category
   - Subtle divider line between transactions
   - Rows have hover/tap state (slightly different background)
4. **Footer:** Link or button to "Voltar ao Dashboard"

**Visual Requirements:**
- Rows: white background with 1px gray bottom border
- Amount text: red, bold, right-aligned
- Dates as section headers: small gray text
- Icons: placeholder squares (for category icons)
- Padding: 16px per row, 20px sides
- Clean, scannable layout
- Most recent transactions first
- No complex animations - simple and fast

**UX Priority:** User can quickly scan and understand all spending. Categorization via visual icons.
```

---

## INT-05: Configuração de Alertas

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Simple alert configuration form. No complex rules - MVP should be straightforward category + limit.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), White background, Gray text
- Styles: Flat forms, 8px radius inputs, card-based
- Typography: Inter font

**PAGE STRUCTURE:**
1. **Header:** "Configurar Alertas" title with back button
2. **Form Section:**
   - Existing Alerts (if any): List of current alerts as editable rows (optional, can be simplified)
   - Add New Alert Form:
     * Category selector/dropdown (e.g., "Delivery", "Compras", "Alimentação")
     * Limit input field (number input, placeholder "$500")
     * Indigo "Salvar Alerta" button (full-width)
3. **Links:** "Voltar" or back to dashboard

**Visual Requirements:**
- Form inputs: white background, light gray border
- Dropdown: clean styling, Indigo on select
- Button: indigo, full-width
- Spacing: 20px vertical between form sections
- No complex validation UX - keep it simple
- Mobile padding: 20px sides
- Category dropdown with clear labels

**Simplicity:** This is MVP - single category + limit per alert. No advanced rules or complexity.
```

---

## INT-06: Tela de Insights

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Insights page showing spending patterns and comparisons. Text should be simple, direct, non-technical.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Success Green (#10B981), Error Red (#EF4444), White
- Styles: Card-based, flat design, subtle shadows optional
- Typography: Inter font, easy to read

**PAGE STRUCTURE:**
1. **Header:** "Seus Insights" with back button
2. **Insight Cards (stacked):**
   - Card 1: "Você gastou 30% a mais com delivery esta semana" (example message)
   - Card 2: Weekly comparison visual (this week vs last week)
   - Additional insight cards with similar simple messages
   - Each card: icon or color badge (success/alert) + message text + optional small chart
3. **Refresh Button:** Indigo "Atualizar Insights" button (secondary, not primary focus)
4. **Footer:** Link to "Voltar ao Dashboard"

**Visual Requirements:**
- Each insight: card with subtle border, 16px padding inside
- Text: simple, direct language (avoid technical terms)
- Color badges: GREEN for positive, RED for alert insights
- Optional: small chart or graph showing trend (if visual)
- Spacing: 16px between cards
- Mobile padding: 20px sides
- Font size: readable, clear hierarchy

**Content Tone:** "You spent 30% more" NOT "Variance analysis indicates anomaly". Simple, actionable insights.
```

---

## INT-07: Adicionar Gasto Manual

**Parametros:**
- projectId: [cole aqui]
- deviceType: MOBILE
- prompt:

```
Form to manually add an expense. Fallback feature for when automatic integration fails. Keep simple.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), White background, Gray text
- Styles: Flat form design, 8px radius inputs
- Typography: Inter font

**PAGE STRUCTURE:**
1. **Header:** "Adicionar Gasto" title with back button
2. **Form Fields (stacked, full-width):**
   - Valor input (number, placeholder "R$ 0.00")
   - Categoria dropdown (e.g., "Delivery", "Compras", "Alimentação", "Outro")
   - Data input/picker (date field)
   - Descrição input (text area, placeholder "Opcional: descrição do gasto")
3. **Action Buttons:**
   - Indigo "Salvar" button (full-width)
   - "Cancelar" link below button
4. **Navigation:** Link to "Voltar ao Dashboard"

**Visual Requirements:**
- All inputs: white background, light gray border, padding inside
- Dropdown: Indigo on select, clear options
- Date picker: standard mobile date input
- Button: indigo, full-width, white text
- Spacing: 16-20px between fields
- Mobile padding: 20px sides
- Form should feel fast - no unnecessary validations shown
- All fields except Descrição should be required

**Purpose:** Simple fallback. User should complete in under 30 seconds. Essential fields only.
```

---

## Checklist de Próximas Etapas

Após gerar todas as 7 telas, você terá:

- [ ] INT-01 Login screenId
- [ ] INT-02 Register screenId
- [ ] INT-03 Dashboard screenId
- [ ] INT-04 Transaction List screenId
- [ ] INT-05 Alert Config screenId
- [ ] INT-06 Insights screenId
- [ ] INT-07 Add Manual Expense screenId

**Próximas Ações:**
1. Salvar cada screenId em um documento
2. Fazer download dos HTML/PNG das telas geradas
3. Usar esses designs como referência para a implementação Next.js/React
4. Considerar usar o skill `react:components` para converter designs em componentes
5. Atualizar `docs/spec_ui.md` com links para os designs no Stitch
