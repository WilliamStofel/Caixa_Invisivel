# .stitch - Índice Central Caixa Invisível

Bem-vindo! Este diretório contém toda a documentação e artefatos para gerar as 7 telas do projeto "Caixa Invisível" usando o Stitch MCP.

**Status**: ✅ Pronto para execução | **Data**: 2026-03-30

---

## 🚀 Comece Por Aqui

### 1️⃣ Leia Primeiro (5 min)
📄 **[SUMARIO_EXECUTIVO.md](SUMARIO_EXECUTIVO.md)**
- Visão geral do projeto
- O que foi preparado
- Próximos passos
- Checklist rápido

### 2️⃣ Instruções Passo a Passo (15 min)
📋 **[SETUP_CAIXA_INVISIVEL.md](SETUP_CAIXA_INVISIVEL.md)**
- Como criar o projeto
- Como gerar cada tela
- Como compilar resultados

### 3️⃣ Copie e Cole os Prompts (5 min)
🎨 **[PROMPTS_CAIXA_INVISIVEL.md](PROMPTS_CAIXA_INVISIVEL.md)**
- 7 prompts prontos
- Um para cada tela
- Copiar exatamente como está

### 4️⃣ Referência Rápida (Consulta)
⚡ **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)**
- Todos os comandos MCP
- JSON formatado
- Pronto para copiar

---

## 📚 Documentação Completa

| Arquivo | Tipo | Tamanho | Descrição |
|---------|------|--------|-----------|
| **SUMARIO_EXECUTIVO.md** | 📄 Guia | 7.2K | Visão geral executiva e próximos passos |
| **SETUP_CAIXA_INVISIVEL.md** | 📋 Instruções | 7.2K | Passo a passo detalhado para gerar |
| **PROMPTS_CAIXA_INVISIVEL.md** | 🎨 Prompts | 12K | 7 prompts refinados prontos para copiar |
| **QUICK_REFERENCE.md** | ⚡ Referência | 13K | Todos os comandos MCP formatados |
| **DESIGN.md** | 🎨 Design System | 6.9K | Cores, tipografia, componentes, acessibilidade |
| **README.md** | 📖 Orientação | 6.2K | Guia de uso dos arquivos nesta pasta |
| **caixa-invisivel-metadata.json** | 📊 Template | 5.7K | Preencha com os resultados gerados |

---

## 📊 Resumo do Projeto

**Projeto**: Caixa Invisível - Aplicativo de Rastreamento Financeiro Pessoal

**Telas**: 7 interfaces
- INT-01: Login
- INT-02: Register
- INT-03: Dashboard Principal
- INT-04: Lista de Transações
- INT-05: Configuração de Alertas
- INT-06: Insights
- INT-07: Adicionar Gasto Manual

**Design System**:
- Primary: #4F46E5 (Indigo)
- Success: #10B981 (Green)
- Error: #EF4444 (Red)
- Font: Inter sans-serif
- Style: Minimal, clean, flat, mobile-first

---

## 🎯 Workflow Recomendado

```
┌─────────────────────────────────────────────────────────┐
│ 1. Leia SUMARIO_EXECUTIVO.md (5 min)                    │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ 2. Abra Claude Code e execute:                          │
│    - SETUP_CAIXA_INVISIVEL.md Passo 2 (criar projeto)  │
│    Resultado: projectId                                 │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ 3. Para cada tela (INT-01 a INT-07):                   │
│    - Copie prompt de PROMPTS_CAIXA_INVISIVEL.md         │
│    - Ou use QUICK_REFERENCE.md para JSON formatado      │
│    Resultado: screenId para cada tela                   │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ 4. Preencha caixa-invisivel-metadata.json com            │
│    projectId e screenIds gerados                        │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│ 5. Próxima Fase:                                        │
│    - Baixe designs (HTML + PNG)                         │
│    - Use skill /react:components para componentes React │
│    - Implemente backend (NestJS)                        │
└─────────────────────────────────────────────────────────┘
```

**Tempo total**: ~40-50 minutos

---

## 💡 Dicas Importantes

### ✅ Fazer
- Copiar prompts exatamente como estão
- Usar deviceType: "MOBILE" para todas
- Anotar cada screenId imediatamente
- Consultar DESIGN.md para referência
- Usar QUICK_REFERENCE.md para copy/paste

### ❌ Não Fazer
- Modificar os prompts
- Usar deviceType diferente
- Perder os screenIds
- Pular documentação
- Gerar duplicadas

---

## 📂 Estrutura de Pasta

```
.stitch/
├── INDEX.md ⬅️ Você está aqui
├── SUMARIO_EXECUTIVO.md ⬅️ Leia primeiro
├── SETUP_CAIXA_INVISIVEL.md ⬅️ Instruções
├── PROMPTS_CAIXA_INVISIVEL.md ⬅️ Prompts para copiar
├── QUICK_REFERENCE.md ⬅️ Referência rápida
├── DESIGN.md ⬅️ Design system completo
├── README.md ⬅️ Orientação geral
├── caixa-invisivel-metadata.json ⬅️ Preencha com resultados
└── designs/ (será criado após gerar)
    └── INT-*.{html,png} (screenshots e código)
```

---

## 🔗 Ligações Importantes

**Documentação do Projeto**:
- `docs/spec_ui.md` - Especificação original de UI
- `docs/spec_tech.md` - Especificação técnica
- `docs/prd.md` - Product Requirements Document
- `README.md` (raiz) - Documentação geral

**Skills Disponíveis**:
- `/stitch-design` - Gerador de design com Stitch MCP
- `/react:components` - Converter designs em React (próxima fase)

**Stitch Resources**:
- [Stitch Skills Repository](https://github.com/google-labs-code/stitch-skills)
- [Stitch MCP Documentation](https://github.com/google-labs-code/stitch-loop)

---

## ❓ Perguntas Frequentes

**P: Por onde começo?**
R: Leia SUMARIO_EXECUTIVO.md (5 min), depois SETUP_CAIXA_INVISIVEL.md

**P: Onde estão os prompts?**
R: Em PROMPTS_CAIXA_INVISIVEL.md (um para cada tela)

**P: Como copiar os comandos?**
R: Use QUICK_REFERENCE.md (JSON já formatado)

**P: E se algo der errado?**
R: Veja "Se Algo der Errado" em SETUP_CAIXA_INVISIVEL.md

**P: Quanto tempo leva?**
R: ~40-50 minutos total (5 min setup + 2-3 min por tela)

**P: E depois?**
R: Próxima fase: React components, backend, deploy

---

## ✅ Checklist de Pronto

Antes de começar:
- [ ] Li o INDEX.md (este arquivo)
- [ ] Tenho os 7 arquivos listados acima
- [ ] Entendo o workflow (5 etapas)
- [ ] Tenho Claude Code pronto
- [ ] Tenho um editor para anotar screenIds

---

## 🎉 Você Está Pronto!

Tudo que você precisa está neste diretório. Os 7 documentos contêm:

1. ✅ Visão geral completa (SUMARIO_EXECUTIVO.md)
2. ✅ Instruções passo a passo (SETUP_CAIXA_INVISIVEL.md)
3. ✅ Prompts prontos para copiar (PROMPTS_CAIXA_INVISIVEL.md)
4. ✅ Referência rápida (QUICK_REFERENCE.md)
5. ✅ Design system completo (DESIGN.md)
6. ✅ Guia de orientação (README.md)
7. ✅ Template de metadados (caixa-invisivel-metadata.json)

**Próxima ação**: Abra SUMARIO_EXECUTIVO.md e comece!

---

**Version**: 1.0 | **Status**: ✅ Pronto | **Last Updated**: 2026-03-30
