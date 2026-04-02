# Stitch MCP - Sumário de Preparação Caixa Invisível

**Data**: 2026-03-30
**Status**: ✅ Preparação Completa - Pronto para Geração
**Próxima Ação**: Abrir Claude Code e executar as chamadas ao Stitch MCP

---

## 🎯 O Que Foi Preparado

Todos os artefatos necessários para gerar as 7 telas do projeto "Caixa Invisível" usando o Stitch MCP:

### ✅ 5 Documentos Criados

1. **README.md** (6.2 KB)
   - Guia de orientação geral
   - Quick Start (4 passos principais)
   - Checklist de geração
   - Dicas e troubleshooting

2. **DESIGN.md** (6.9 KB)
   - Design System "fonte de verdade"
   - Paleta de cores com hex codes
   - Tipografia (Inter, pesos, tamanhos)
   - Espaçamento (grid 4px)
   - Componentes (buttons, inputs, cards)
   - Acessibilidade e princípios

3. **SETUP_CAIXA_INVISIVEL.md** (7.2 KB)
   - Instruções passo a passo
   - Comandos MCP prontos para copiar
   - Detalhes de cada tela
   - Template de compilação de resultados

4. **PROMPTS_CAIXA_INVISIVEL.md** (12 KB)
   - 7 prompts refinados (um para cada tela)
   - Design system integrado
   - Especificações detalhadas
   - Prontos para copiar e colar

5. **caixa-invisivel-metadata.json** (5.7 KB)
   - Template de metadados
   - Estrutura para compilar resultados
   - Referências de design system
   - Checklist de componentes

---

## 📊 Especificações das 7 Telas

| # | Interface | Título | Tipo | Componentes | Status |
|---|-----------|--------|------|------------|--------|
| 1 | INT-01 | Login | Página | Email, Senha, Botões | 📋 Pronto |
| 2 | INT-02 | Cadastro | Formulário | Nome, Email, Senha | 📋 Pronto |
| 3 | INT-03 | Dashboard | Página Principal | Gastos, Status, Links | 📋 Pronto |
| 4 | INT-04 | Lista Transações | Tabela | Data, Categoria, Valor | 📋 Pronto |
| 5 | INT-05 | Alertas | Formulário | Categoria, Limite | 📋 Pronto |
| 6 | INT-06 | Insights | Página | Mensagens, Comparações | 📋 Pronto |
| 7 | INT-07 | Gasto Manual | Formulário | Valor, Categoria, Data | 📋 Pronto |

---

## 🎨 Design System

### Cores
```
Primary:    #4F46E5 (Indigo) → Botões, CTAs, headers
Success:    #10B981 (Green)  → Status "sob controle"
Error:      #EF4444 (Red)    → Status "alerta", valores
Background: #FFFFFF (White)  → Fundo limpo
Text:       #1F2937 (Dark)   → Texto principal
Secondary:  #6B7280 (Gray)   → Texto secundário
```

### Tipografia
- **Font**: Inter sans-serif
- **Heading 1**: 28-32px bold
- **Body**: 14-16px regular
- **Small**: 12px regular

### Spacing (grid 4px)
- Padding inputs: 12-16px
- Gap entre campos: 16px
- Mobile padding sides: 20px
- Button height: 44px (touch-friendly)

### Estilo
- **Minimal**: Sem elementos desnecessários
- **Clean**: Espaçamento generoso
- **Fast**: Rápido e responsivo
- **Flat**: Sem sombras complexas
- **Mobile-First**: 375px+ prioritário

---

## 🚀 Próximos Passos (Como Usar)

### Passo 1: Abrir Claude Code
```bash
claude code .
```

### Passo 2: Criar Projeto (Copiar e Executar)
Execute no Claude Code:
```
/stitch-design

Use a ferramenta mcp_StitchMCP_create_project com:
{
  "title": "Caixa Invisível"
}
```

Anote o `projectId` retornado (exemplo: `4044680601076201931`)

### Passo 3: Gerar 7 Telas
Para CADA tela, execute no Claude Code:
```
/stitch-design

Use a ferramenta mcp_StitchMCP_generate_screen_from_text com:
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "[COPIE DO PROMPTS_CAIXA_INVISIVEL.md]",
  "deviceType": "MOBILE"
}
```

**Ordem recomendada**:
1. INT-01 Login (simples, rápido)
2. INT-02 Register (simples)
3. INT-03 Dashboard (mais complexo, mais tempo)
4. INT-04 Transaction List
5. INT-05 Alert Configuration
6. INT-06 Insights
7. INT-07 Add Manual Expense

### Passo 4: Compilar Resultados
Para cada tela gerada, preencha `caixa-invisivel-metadata.json`:
- screenId
- status: "generated"
- stitch_url (do output do Stitch MCP)

### Passo 5: Download de Assets
Após gerar, faça download dos designs:
- HTML (para referência)
- PNG (screenshots)
- Salve em `.stitch/designs/`

---

## 📂 Localização dos Arquivos

Todos os arquivos estão em:
```
c:\Users\User\Documents\devai\.stitch\
├── README.md ⬅️ Comece aqui
├── DESIGN.md ⬅️ Referência de design
├── SETUP_CAIXA_INVISIVEL.md ⬅️ Instruções detalhadas
├── PROMPTS_CAIXA_INVISIVEL.md ⬅️ Prompts para copiar
└── caixa-invisivel-metadata.json ⬅️ Preencha com resultados
```

---

## 💡 Dicas Importantes

### ✅ Fazer
- ✓ Copiar prompts exatamente como estão em `PROMPTS_CAIXA_INVISIVEL.md`
- ✓ Usar `deviceType: "MOBILE"` para todas as telas
- ✓ Anotar cada screenId imediatamente após geração
- ✓ Verificar design consistency com `DESIGN.md`
- ✓ Iterar com `edit_screens` se necessário

### ❌ Não Fazer
- ✗ Modificar os prompts (estão otimizados)
- ✗ Usar deviceType diferente (DESKTOP, TABLET)
- ✗ Perder os screenIds (anotar imediatamente)
- ✗ Gerar duplicadas (pode confundir)
- ✗ Pular passos da documentação

---

## 🔄 Workflow Recomendado

```
1. Ler README.md (5 min) ← VOCÊ ESTÁ AQUI
   ↓
2. Abrir Claude Code e executar Passo 2 (criar projeto) (5 min)
   ↓
3. Gerar cada tela (INT-01 a INT-07) (15-20 min total)
   ↓
4. Anotar screenIds em caixa-invisivel-metadata.json (5 min)
   ↓
5. Download de assets (opcional, 5 min)
   ↓
6. Próxima fase: Converter em componentes React com /react:components
```

**Tempo total estimado**: 40-50 minutos

---

## 📋 Checklist Rápido

Antes de começar:
- [ ] Li o README.md nesta pasta
- [ ] Tenho o PROMPTS_CAIXA_INVISIVEL.md aberto
- [ ] Tenho o DESIGN.md como referência
- [ ] Estou pronto para abrir Claude Code
- [ ] Tenho um editor de texto para anotar screenIds

Após gerar cada tela:
- [ ] Copiei o screenId retornado
- [ ] Anotei em caixa-invisivel-metadata.json
- [ ] Verifiquei visual da tela (matching com design)

Após todas as 7 telas:
- [ ] Todos os screenIds anotados
- [ ] Metadados compilados
- [ ] Assets baixados (opcional)
- [ ] Pronto para próxima fase (React components)

---

## 🎓 Referências Úteis

**Arquivos nesta pasta:**
- `.stitch/README.md` - Orientação geral
- `.stitch/DESIGN.md` - Design system completo
- `.stitch/SETUP_CAIXA_INVISIVEL.md` - Instruções passo a passo
- `.stitch/PROMPTS_CAIXA_INVISIVEL.md` - Prompts para copiar
- `.stitch/caixa-invisivel-metadata.json` - Template de resultados

**Documentação do projeto:**
- `docs/spec_ui.md` - Especificação original de UI
- `docs/spec_tech.md` - Especificação técnica
- `docs/prd.md` - Product Requirements Document

**Skills do Claude:**
- `/stitch-design` - Skill para design com Stitch MCP
- `/react:components` - Converter designs em componentes React (próxima fase)

---

## 🎉 Pronto?

Você tem tudo que precisa! Os 5 documentos criados contêm:

1. ✅ Especificações completas de design (DESIGN.md)
2. ✅ Instruções passo a passo (SETUP_CAIXA_INVISIVEL.md)
3. ✅ Prompts prontos para usar (PROMPTS_CAIXA_INVISIVEL.md)
4. ✅ Template de metadados (caixa-invisivel-metadata.json)
5. ✅ Guia de orientação (README.md)

**Próxima ação**: Abra Claude Code e comece com o Passo 1 do README.md

---

**Version**: 1.0
**Status**: ✅ Pronto para execução
**Última atualização**: 2026-03-30
