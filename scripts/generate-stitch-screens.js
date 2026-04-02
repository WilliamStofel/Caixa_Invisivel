#!/usr/bin/env node

/**
 * Script para gerar telas do Caixa Invisível via Stitch MCP
 */

const fs = require('fs');
const path = require('path');

// Carregar variáveis de ambiente
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const STITCH_API_KEY = process.env.STITCH_API_KEY;
const BASE_URL = 'https://api.stitch.app';

if (!STITCH_API_KEY) {
  console.error('❌ STITCH_API_KEY não encontrada no .env');
  process.exit(1);
}

const prompts = {
  'INT-01-login': `Minimal login page for a premium financial tracking app. The design should feel clean, modern, and trust-building.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first, Responsive web
- Palette: Primary Indigo (#4F46E5), Neutral White (#FFFFFF), Neutral Gray (#6B7280)
- Styles: Flat design, no shadows, 8px border radius for inputs, generous padding (20px minimum)
- Typography: Inter font family, clean hierarchy

**PAGE STRUCTURE:**
1. **Header/Top Section:** App logo or "Caixa Invisível" wordmark centered
2. **Form Section:**
   - Email input field with placeholder "seu@email.com"
   - Password input field with placeholder "Senha"
   - Indigo "Entrar" button (full-width)
3. **Secondary Links:**
   - "Criar conta" link below button (centered, light gray text)
   - "Esqueci minha senha" link (bottom, smaller text)

**Visual Requirements:**
- Generous vertical spacing between elements (minimum 16px)
- Form inputs: white background, light gray border, padding inside
- Button: full-width indigo background, white text, no shadow
- Background: clean white
- All text: Inter font
- Focus states: subtle indigo outline
- Mobile padding: 20px left and right`,

  'INT-02-register': `Minimal signup/registration form for a financial app. Design should feel inviting and low-friction.

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

Goal: User should complete signup in under 30 seconds.`,

  'INT-03-dashboard': `Main dashboard for personal finance control. This is the most important screen - user must understand their financial situation in 5 seconds.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Success Green (#10B981), Error Red (#EF4444), White background
- Styles: Card-based layout, subtle 1px borders, flat design, 8px radius
- Typography: Inter font, clear hierarchy

**PAGE STRUCTURE:**
1. **Top Section:**
   - Greeting header "Olá, [Nome]"
   - Date or period indicator

2. **Primary Card - Spending Status:**
   - Large card showing "Gasto este mês: R$ 1.234"
   - Indicator badge: GREEN (#10B981) if under control OR RED (#EF4444) if alert
   - Monthly limit: "Limite: R$ 2.000"

3. **Secondary Section - Recent Transactions:**
   - Title "Transações Recentes"
   - List of 3-5 most recent transactions:
     * Date (e.g., "Ontem")
     * Category (e.g., "Delivery", "Compras")
     * Amount in RED text
     * Subtle dividers between items

4. **Action Buttons:**
   - Primary: Indigo "Adicionar Gasto" button (full-width)
   - Secondary: "Configurar Alertas" link (gray text)

5. **Navigation Links:**
   - "Ver todas transações" link
   - "Ver insights" link

**Visual Requirements:**
- Clean card design with subtle borders
- Large prominent spending amount
- Color coding: GREEN = safe, RED = alert
- Generous spacing (20px mobile padding)
- Each transaction is a row with subtle divider
- Background: clean white
- Mobile responsive

**Critical:** User sees status immediately in under 5 seconds.`,

  'INT-04-transactions': `Transaction list page for financial app. Users need to see, filter, and analyze their spending patterns.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first, Responsive
- Palette: Primary Indigo (#4F46E5), Neutral colors
- Styles: Table/List view, clean rows, 1px dividers
- Typography: Inter font

**PAGE STRUCTURE:**
1. **Header:** "Todas as Transações" title
2. **Filter/Sort Section:**
   - Dropdown filter by Category
   - Sort options (Date, Amount)
3. **Transaction List:**
   - Each row showing: Date | Category (with icon) | Description | Amount (RED)
   - Subtle dividers between rows
   - Scrollable list
4. **Footer Link:** "Voltar ao Dashboard" link

**Visual Requirements:**
- Clean table design
- Consistent row height
- Icons for categories (Delivery, Compras, Transporte, etc)
- Amount in red for clarity
- Light background alternation optional
- Mobile: stacked card view
- Smooth scrolling`,

  'INT-05-alerts': `Alert configuration form. Users set spending limits per category to receive notifications.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Warning Yellow (#FBBF24)
- Styles: Form-based, cards for each alert, flat design
- Typography: Inter font

**PAGE STRUCTURE:**
1. **Header:** "Configurar Alertas" title
2. **Alert Cards (repeating):**
   - Category dropdown (e.g., "Delivery", "Compras", "Assinaturas")
   - Limit amount input (e.g., "R$ 500")
   - Toggle switch for enable/disable
   - Small delete button (trash icon)
3. **Add Button:** "Adicionar Novo Alerta" (indigo)
4. **Action Button:** "Salvar" (full-width indigo)
5. **Footer Link:** "Voltar"

**Visual Requirements:**
- Each alert as a distinct card with subtle border
- Inputs clear and accessible
- Toggle visually obvious
- Delete button subtle but accessible
- "Add new" button easy to find
- Spacing: 16px between cards
- Mobile padding: 20px`,

  'INT-06-insights': `Insights page showing spending patterns and behavioral recommendations.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Success Green (#10B981), Info Blue (#3B82F6)
- Styles: Card-based insights, icon support, clean layout
- Typography: Inter font, readable body text

**PAGE STRUCTURE:**
1. **Header:** "Insights" title with "Atualizar" button
2. **Insight Cards (examples):**
   - "Você gastou 30% a mais com delivery este mês" (with trend icon ↑)
   - "Categoria Compras: R$ 850 (média semanal)"
   - "Você economizou R$ 200 comparado ao mês anterior" (positive, green)
   - "Assinaturas: Você tem 5 ativas" (info card)
3. **Weekly Comparison:**
   - Simple bar chart or text showing "Semana passada vs. Esta semana"
   - Color coded (green=improvement, red=worse)
4. **Footer Link:** "Voltar ao Dashboard"

**Visual Requirements:**
- Each insight is a distinct card
- Use icons/emojis for categories
- Positive insights in green
- Warnings in yellow/orange
- Clear, non-technical language
- Readable font sizes (16px+ for body)
- Cards with subtle shadows
- Mobile responsive`,

  'INT-07-add-expense': `Manual expense entry form. Fallback UI when automatic categorization is unavailable.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Palette: Primary Indigo (#4F46E5), Neutral White, Gray
- Styles: Form-based, clear inputs, flat design
- Typography: Inter font

**PAGE STRUCTURE:**
1. **Header:** "Adicionar Gasto" title
2. **Form Fields:**
   - Valor input (R$ currency prefix, e.g., "R$ _____")
   - Categoria dropdown (required)
   - Data picker (date input)
   - Descrição textarea (optional, placeholder "Descreva o gasto...")
3. **Action Buttons:**
   - Primary: Indigo "Salvar" button (full-width)
   - Secondary: "Cancelar" link (gray)
4. **Form Layout:** Vertical stack, generous spacing

**Visual Requirements:**
- Clear labels for each field
- Inputs: white background, light gray border
- Dropdown accessible and clear
- Date picker intuitive
- Textarea has word count or char counter optional
- Buttons stacked, full-width on mobile
- Padding: 20px mobile
- Focus states: indigo outline`,
};

async function generateScreens(projectId) {
  console.log(`\n🎨 Gerando 7 telas para o Caixa Invisível...\n`);

  const screens = [];

  for (const [key, prompt] of Object.entries(prompts)) {
    console.log(`⏳ Gerando ${key}...`);

    try {
      // Aqui você chamaria real o Stitch MCP
      // Por enquanto, simulamos
      const screen = {
        id: `screen-${key}-${Date.now()}`,
        title: key.toUpperCase(),
        key: key,
        prompt: prompt,
        projectId: projectId,
        status: 'pending', // Será 'generated' após Stitch processar
      };
      screens.push(screen);
      console.log(`✅ ${key} adicionado à fila\n`);
    } catch (error) {
      console.error(`❌ Erro ao gerar ${key}:`, error.message);
    }
  }

  // Salvar metadados
  const metadata = {
    projectId,
    generatedAt: new Date().toISOString(),
    screens,
    totalScreens: screens.length,
    instructions: 'Use estas screen keys para invocar o Stitch MCP real',
  };

  const metadataPath = path.join(__dirname, '..', '.stitch', 'screens-metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

  console.log(`\n✅ Metadados salvos em: ${metadataPath}`);
  console.log(`\n📊 Resumo:`);
  console.log(`   - Project ID: ${projectId}`);
  console.log(`   - Telas preparadas: ${screens.length}`);
  console.log(`   - Status: Aguardando Stitch MCP processar`);

  return metadata;
}

// Executar
(async () => {
  try {
    const projectId = process.argv[2] || 'caixa-invisivel-default';
    await generateScreens(projectId);
    console.log('\n✅ Script concluído com sucesso!');
  } catch (error) {
    console.error('❌ Erro Fatal:', error);
    process.exit(1);
  }
})();
