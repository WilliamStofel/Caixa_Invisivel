# Especificação de UI

## Interfaces gráficas

### INT-01 - Tela de Login

* Página
* **Campos:** Email, Senha
* **Botões:** Entrar, Criar conta
* **Links:** Esqueci minha senha
* **Considerações:**
  Interface simples com foco em rapidez. Login via email/senha utilizando autenticação do Clerk e componentes pré-construídos.

---

### INT-02 - Cadastro de Usuário

* Formulário
* **Campos:** Nome, Email, Senha
* **Botões:** Criar conta
* **Links:** Já tenho conta
* **Considerações:**
  Cadastro rápido, sem fricção. Evitar excesso de campos.

---

### INT-03 - Dashboard Principal

* Página

* **Campos:**

  * Total gasto no mês
  * Limite mensal (opcional)
  * Indicador de status (controlado / risco)
  * Lista resumida de transações

* **Botões:**

  * Adicionar gasto (manual - fallback)
  * Configurar alertas

* **Links:**

  * Ver todas transações
  * Ver insights

* **Considerações:**
  Tela mais importante do produto.
  O usuário deve entender sua situação financeira em até 5 segundos.
  Uso de cores:

* Verde = sob controle

* Vermelho = alerta

---

### INT-04 - Lista de Transações

* Tabela / Lista
* **Campos:** Data, Categoria, Valor, Descrição
* **Botões:** Filtrar, Ordenar
* **Links:** Voltar para dashboard
* **Considerações:**
  Lista simples e escaneável.
  Categorias devem ser visuais (ícones ajudam).

---

### INT-05 - Configuração de Alertas

* Formulário
* **Campos:** Categoria, Limite de gasto
* **Botões:** Salvar alerta
* **Links:** Voltar
* **Considerações:**
  Configuração simples (sem complexidade de regras no MVP).

---

### INT-06 - Tela de Insights

* Página

* **Campos:**

  * Mensagens de insight (ex: “Você gastou 30% a mais com delivery”)
  * Comparações semanais

* **Botões:** Atualizar insights

* **Links:** Voltar ao dashboard

* **Considerações:**
  Texto simples e direto.
  Evitar linguagem técnica.

---

### INT-07 - Adicionar Gasto Manual (Fallback)

* Formulário
* **Campos:** Valor, Categoria, Data, Descrição
* **Botões:** Salvar
* **Links:** Cancelar
* **Considerações:**
  Funcionalidade secundária (caso integração não funcione).

---

## Fluxo de Navegação

1. Usuário acessa o app → Tela de Login (INT-01)
2. Se não possui conta → Cadastro (INT-02)
3. Após login → Dashboard (INT-03)

No Dashboard:

* Pode visualizar resumo financeiro
* Pode acessar:

  * Lista de Transações (INT-04)
  * Configuração de Alertas (INT-05)
  * Insights (INT-06)

Fluxos principais:

* **Monitoramento:**
  Dashboard → Lista de Transações

* **Controle:**
  Dashboard → Configurar Alertas

* **Análise:**
  Dashboard → Insights

* **Fallback manual:**
  Dashboard → Adicionar Gasto

Navegação sempre simples com botão de “voltar”.

---

## Diretrizes para IA

* Priorizar interfaces simples e minimalistas
* Evitar excesso de informações na tela
* Foco na ação principal do usuário (entender gastos rapidamente)
* Utilizar componentes reutilizáveis
* Garantir responsividade (mobile-first)
* Usar feedback visual claro (cores, alertas, status)
* Reduzir fricção (menos cliques possível)
* Priorizar legibilidade (tipografia clara e espaçamento adequado)

A IA deve interpretar este documento como base para:

* Criação das telas principais
* Organização dos componentes
* Definição da hierarquia visual
* Implementação de navegação simples e intuitiva

---
