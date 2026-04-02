# Guia de Execução - Gerar as 7 Telas no Claude Code

Este documento resume os passos exatos que você precisa executar no Claude Code para gerar as telas do Caixa Invisível.

---

## 📋 Pré-requisitos Checados

✅ Todos os prompts foram preparados e refinados
✅ Design system foi definido e documentado
✅ Instruções passo a passo foram criadas
✅ Referência rápida com comandos formatados existe
✅ Você tem acesso ao Stitch MCP com API key

---

## 🎯 5 Passos Simples

### Passo 1: Preparação (5 min)
1. Abra Claude Code no seu terminal:
   ```bash
   claude code .
   ```
2. Tenha os seguintes arquivos à mão:
   - `.stitch/SUMARIO_EXECUTIVO.md`
   - `.stitch/QUICK_REFERENCE.md`
   - `.stitch/caixa-invisivel-metadata.json`

### Passo 2: Criar Projeto (3 min)
No Claude Code, execute:
```
Quero usar o Stitch MCP para criar um projeto chamado "Caixa Invisível".
Use a ferramenta mcp_StitchMCP_create_project com title: "Caixa Invisível"
```

**Resultado esperado**:
```json
{
  "projectId": "4044680601076201931"
}
```

**Ação**: Copie o `projectId` e anote em um arquivo temporário.

### Passo 3: Gerar Tela INT-01 (Login) (2-3 min)
No Claude Code, execute:
```
Use a ferramenta mcp_StitchMCP_generate_screen_from_text com os seguintes parâmetros:
- projectId: [cole seu ID aqui]
- deviceType: MOBILE
- prompt: [veja conteúdo em .stitch/PROMPTS_CAIXA_INVISIVEL.md - seção INT-01]
```

Ou copie diretamente de `.stitch/QUICK_REFERENCE.md` Etapa 3.

**Resultado esperado**:
```json
{
  "screenId": "98b50e2ddc9943efb387052637738f61",
  "title": "INT-01 Login"
}
```

**Ação**: Copie o `screenId` e anote junto ao projectId.

### Passo 4: Repetir para Telas INT-02 a INT-07 (12-18 min)
Siga o mesmo padrão do Passo 3 para cada tela:

1. **INT-02 Register** (Etapa 4 em QUICK_REFERENCE.md)
2. **INT-03 Dashboard** (Etapa 5 em QUICK_REFERENCE.md) - Mais complexo
3. **INT-04 Transaction List** (Etapa 6 em QUICK_REFERENCE.md)
4. **INT-05 Alert Configuration** (Etapa 7 em QUICK_REFERENCE.md)
5. **INT-06 Insights** (Etapa 8 em QUICK_REFERENCE.md)
6. **INT-07 Add Manual Expense** (Etapa 9 em QUICK_REFERENCE.md)

**Para cada uma**:
- Copie o prompt de `QUICK_REFERENCE.md`
- Cole no Claude Code
- Anote o screenId retornado

### Passo 5: Compilar Resultados (5 min)
Após gerar todas as 7 telas:

1. Abra `.stitch/caixa-invisivel-metadata.json`
2. Preencha com os IDs gerados:
   ```json
   {
     "project": {
       "projectId": "[COLE AQUI]",
       "screens": [
         {
           "interface": "INT-01 Login",
           "screenId": "[COLE AQUI]",
           ...
         },
         // ... repita para as outras 6 telas
       ]
     }
   }
   ```

---

## 📊 Tabela de Compilação

Use esta tabela para rastrear os IDs conforme você os gera:

| # | Tela | Tipo | screenId | Status |
|---|------|------|----------|--------|
| 1 | INT-01 Login | MOBILE | _________________ | ⏳ |
| 2 | INT-02 Register | MOBILE | _________________ | ⏳ |
| 3 | INT-03 Dashboard | MOBILE | _________________ | ⏳ |
| 4 | INT-04 Transactions | MOBILE | _________________ | ⏳ |
| 5 | INT-05 Alerts | MOBILE | _________________ | ⏳ |
| 6 | INT-06 Insights | MOBILE | _________________ | ⏳ |
| 7 | INT-07 Add Expense | MOBILE | _________________ | ⏳ |

**projectId**: _________________________

---

## 🔗 Referências Rápidas

### Onde Encontrar os Prompts
- Versão completa: `.stitch/PROMPTS_CAIXA_INVISIVEL.md`
- Versão JSON pronta: `.stitch/QUICK_REFERENCE.md` (Etapas 3-9)

### Design System de Referência
- Arquivo: `.stitch/DESIGN.md`
- Use para validar se as telas saíram corretas

### Template de Resultados
- Arquivo: `.stitch/caixa-invisivel-metadata.json`
- Preencha após gerar todas as telas

---

## ⚠️ Dicas Importantes

### Copiar Exatamente Como Está
- Os prompts foram otimizados com design system integrado
- Não modifique, copie literal
- Incluem hex codes de cores, especificações de componentes, etc.

### Usar deviceType: "MOBILE"
- Todas as 7 telas são MOBILE-first
- Não use DESKTOP ou TABLET
- Consistência de plataforma é crítica

### Anotar screenIds Imediatamente
- Assim que gerar, copie o screenId
- Cole na tabela acima ou em um arquivo
- Não perca os IDs - você precisa depois

### Se Algo Der Errado
- Verifique se o projectId está correto
- Confirme que o JSON está bem formatado
- Tente novamente ou use `mcp_StitchMCP_edit_screens` para ajustes

---

## 📈 Progresso Esperado

**Tempo por etapa**:
- Setup: 3-5 min
- INT-01 Login: 2-3 min
- INT-02 Register: 2-3 min
- INT-03 Dashboard: 3-5 min (mais complexo)
- INT-04 Transactions: 2-3 min
- INT-05 Alerts: 2-3 min
- INT-06 Insights: 2-3 min
- INT-07 Add Expense: 2-3 min
- Compilação: 5 min

**Total estimado**: 25-40 minutos

---

## 🎯 Resultado Final

Após completar os 5 passos, você terá:

✅ 1 projeto "Caixa Invisível" no Stitch MCP
✅ 7 telas geradas (INT-01 a INT-07)
✅ 7 screenIds documentados
✅ Design system aplicado consistentemente
✅ Arquivo JSON com todos os metadados compilados
✅ Pronto para baixar designs (HTML + PNG)
✅ Pronto para próxima fase (React components)

---

## 📞 Próxima Fase

Após gerar as 7 telas:

1. **Download de Assets**
   - Baixe HTML de cada tela (para referência de código)
   - Baixe PNG de cada tela (screenshots)
   - Organize em `.stitch/designs/`

2. **Conversão para React**
   - Use skill `/react:components` para converter designs em componentes
   - Você pode gerar componentes reutilizáveis automaticamente

3. **Implementação Backend**
   - Implemente APIs em NestJS
   - Configure banco de dados (Prisma)

4. **Autenticação**
   - Configure Clerk para autenticação
   - Integre em frontend React

5. **Deploy**
   - Deploy no Vercel (frontend)
   - Deploy no AWS/ECS (backend)

---

## ✅ Checklist Final

Antes de começar:
- [ ] Li este documento (5 min)
- [ ] Tenho `.stitch/QUICK_REFERENCE.md` aberto
- [ ] Tenho `.stitch/caixa-invisivel-metadata.json` pronto
- [ ] Estou pronto para abrir Claude Code
- [ ] Tenho ~30-40 minutos disponíveis

Após terminar:
- [ ] Todas as 7 telas foram geradas
- [ ] Todos os screenIds foram anotados
- [ ] Arquivo JSON foi preenchido
- [ ] Resultados foram validados
- [ ] Próxima fase documentada

---

**Versão**: 1.0
**Data**: 2026-03-30
**Status**: Pronto para execução
**Tempo estimado**: 30-40 minutos
