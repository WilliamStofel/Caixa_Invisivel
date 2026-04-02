# Stitch Design Assets - Caixa Invisível

Este diretório contém toda a documentação, prompts e metadados para gerar as 7 telas do projeto "Caixa Invisível" usando o Stitch MCP.

## 📋 Arquivos Disponíveis

### 1. **DESIGN.md** - Design System "Fonte da Verdade"
Documento completo com:
- Paleta de cores (Indigo, Green, Red, Neutrals)
- Tipografia (Inter, pesos e tamanhos)
- Espaçamento (grid 4px)
- Componentes (buttons, inputs, cards)
- Padrões de layout (mobile-first)
- Diretrizes de acessibilidade
- Princípios de design (minimal, clean, fast, trustworthy)

**Uso**: Referência durante geração das telas no Stitch MCP.

---

### 2. **SETUP_CAIXA_INVISIVEL.md** - Instruções de Setup
Passo a passo para:
- Listar projetos existentes no Stitch MCP
- Criar novo projeto "Caixa Invisível" (se necessário)
- Gerar as 7 telas (INT-01 a INT-07)
- Compilar resultados com screenIds

**Uso**: Seguir esta ordem quando usar o Stitch MCP no Claude Code.

---

### 3. **PROMPTS_CAIXA_INVISIVEL.md** - Prompts Refinados
Prompts prontos para copiar e colar, para cada tela:
- INT-01: Login
- INT-02: Register
- INT-03: Dashboard
- INT-04: Transaction List
- INT-05: Alert Configuration
- INT-06: Insights
- INT-07: Add Manual Expense

Cada prompt inclui:
- Design system tokens (cores, fontes)
- Estrutura de página
- Componentes esperados
- Requisitos visuais
- Prioridades UX

**Uso**: Copiar cada prompt e invocar `mcp_StitchMCP_generate_screen_from_text` no Claude Code.

---

### 4. **caixa-invisivel-metadata.json** - Template de Metadados
Estrutura JSON para compilar:
- projectId (após criação do projeto)
- screenIds (após geração de cada tela)
- Status de cada tela
- URLs do Stitch (screenshots, HTML)
- Informações do design system

**Uso**: Preencher após gerar cada tela no Stitch MCP.

---

## 🚀 Quick Start Guide

### Passo 1: Prepare-se
1. Abra o Claude Code
2. Tenha em mãos o arquivo `PROMPTS_CAIXA_INVISIVEL.md`
3. Tenha em mãos o arquivo `DESIGN.md` como referência

### Passo 2: Crie o Projeto
Execute no Claude Code:
```
mcp_StitchMCP_create_project
{
  "title": "Caixa Invisível"
}
```
Anote o `projectId` retornado.

### Passo 3: Gere as 7 Telas
Para cada tela, execute:
```
mcp_StitchMCP_generate_screen_from_text
{
  "projectId": "[ANOTE AQUI]",
  "prompt": "[COPIE DO PROMPTS_CAIXA_INVISIVEL.md]",
  "deviceType": "MOBILE"
}
```

Anote cada `screenId` retornado.

**Ordem recomendada**:
1. INT-01 Login
2. INT-02 Register
3. INT-03 Dashboard (mais complexo)
4. INT-04 Transaction List
5. INT-05 Alert Configuration
6. INT-06 Insights
7. INT-07 Add Manual Expense

### Passo 4: Compile Resultados
Preencha o arquivo `caixa-invisivel-metadata.json` com:
- projectId
- screenIds de cada tela
- URLs do Stitch (screenshots, HTML)

### Passo 5: Próximas Etapas
- Download dos designs (HTML e PNG)
- Usar skill `react:components` para gerar componentes React
- Implementar lógica de backend
- Integrar com Clerk para autenticação

---

## 📁 Estrutura de Diretórios

```
.stitch/
├── README.md (this file)
├── DESIGN.md ⭐ Design System "Fonte da Verdade"
├── SETUP_CAIXA_INVISIVEL.md 📋 Instruções passo a passo
├── PROMPTS_CAIXA_INVISIVEL.md 🎨 Prompts prontos para copiar
├── caixa-invisivel-metadata.json 📊 Template de metadados
└── designs/ (será criado após gerar)
    ├── INT-01-login.html
    ├── INT-01-login.png
    ├── INT-02-register.html
    ├── INT-02-register.png
    ├── INT-03-dashboard.html
    ├── INT-03-dashboard.png
    └── ... (outras telas)
```

---

## 🎨 Design System Highlights

### Cores
- **Primary (Indigo)**: `#4F46E5` - Botões e CTAs
- **Success (Green)**: `#10B981` - Status "seguro"
- **Error (Red)**: `#EF4444` - Status "alerta"
- **Background**: `#FFFFFF` - Branco limpo

### Tipografia
- **Font**: Inter sans-serif
- **Abordagem**: Mobile-first, responsive
- **Hierarquia**: Clara e intuitiva

### Princípios
1. **Minimal** - Sem elementos desnecessários
2. **Clean** - Espaçamento generoso
3. **Fast** - Foco em rapidez
4. **Trust** - Design honesto
5. **Accessible** - Funciona para todos

---

## ✅ Checklist de Geração

Ao executar a geração no Stitch MCP, siga este checklist:

- [ ] Projeto "Caixa Invisível" criado
- [ ] INT-01 Login gerado (screenId anotado)
- [ ] INT-02 Register gerado (screenId anotado)
- [ ] INT-03 Dashboard gerado (screenId anotado)
- [ ] INT-04 Transaction List gerado (screenId anotado)
- [ ] INT-05 Alert Configuration gerado (screenId anotado)
- [ ] INT-06 Insights gerado (screenId anotado)
- [ ] INT-07 Add Manual Expense gerado (screenId anotado)
- [ ] Metadados compilados em `caixa-invisivel-metadata.json`
- [ ] Designs baixados para `designs/` directory
- [ ] Screenshots salvas para referência
- [ ] HTML exportado para componentes React

---

## 🔗 Related Files

- `docs/spec_ui.md` - Especificação original de UI
- `docs/spec_tech.md` - Especificação técnica
- `docs/prd.md` - Product Requirements Document
- `README.md` - Documentação geral do projeto

---

## 📝 Notes & Tips

### Dicas para Melhor Geração
1. **Design System Consistency**: Todos os prompts já incluem cores e tokens
2. **Iteração**: Se uma tela não sair perfeita, use `mcp_StitchMCP_edit_screens` para ajustes
3. **Mobile First**: Todos os designs são mobile 375px+
4. **Acessibilidade**: Cores já testadas para WCAG AAA compliance
5. **Rápido**: Procure gerar tudo em uma sessão

### Se Algo der Errado
- Verifique o `projectId` - certifique-se que está correto
- Confirme o deviceType é "MOBILE"
- Revise o prompt para prazos, sem caracteres especiais que possam quebrar JSON
- Tente gerar novamente ou use `edit_screens` para ajustes

### Próxima Fase
Após gerar todas as 7 telas:
1. Use o skill `react:components` para converter em componentes React
2. Implemente a lógica de backend (NestJS)
3. Configure integração com Clerk
4. Deploy no Vercel

---

## 📞 Support & References

**Stitch Skills Repository**: https://github.com/google-labs-code/stitch-skills

**Stitch MCP Tool Schemas**: Ver `PROMPTS_CAIXA_INVISIVEL.md` section "Tool Schemas"

**Design Tokens**: Ver `DESIGN.md` para referência completa

---

**Version**: 1.0
**Last Updated**: 2026-03-30
**Status**: Ready for generation
