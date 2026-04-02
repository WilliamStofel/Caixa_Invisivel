# Definição de Requisitos do Produto (PRD)

## Descrição do produto

**Problema**
Pessoas com renda estável enfrentam dificuldades para controlar seus gastos no dia a dia devido à falta de visibilidade em tempo real e à fragmentação das despesas recorrentes, levando à perda de controle financeiro e ausência de economia no fim do mês.

**Solução**
Um aplicativo de controle financeiro automatizado que monitora gastos em tempo real, identifica padrões de consumo e envia alertas inteligentes para ajudar o usuário a tomar decisões financeiras mais conscientes ao longo do mês.

Para o **adulto jovem economicamente ativo (CLT ou freelancer)** que deseja maior controle financeiro sem esforço manual, o produto oferece visibilidade contínua, insights comportamentais e suporte à tomada de decisão.

**Nossos Diferenciais:**

* Monitoramento automático de gastos (sem input manual)
* Alertas inteligentes em tempo real
* Foco em comportamento financeiro (não só registro)
* Interface simples e sem complexidade
* Insights personalizados baseados em padrão de consumo

---

## Perfis de Usuário

### Usuário 1: Jovem Profissional Digital

* Problemas: Falta de controle financeiro, gastos invisíveis no dia a dia
* Objetivos: Economizar dinheiro e entender melhor seus hábitos de consumo
* Dados demográficos: 25–35 anos, renda média/alta, usuário de apps digitais
* Motivações: Ter mais controle e alcançar objetivos financeiros (viagem, investimentos)
* Frustrações: Apps financeiros complexos e que exigem disciplina manual

---

### Usuário 2: Freelancer / Autônomo

* Problemas: Renda variável e falta de previsibilidade financeira
* Objetivos: Melhorar controle de gastos e evitar excessos em períodos de maior renda
* Dados demográficos: 25–40 anos, renda variável, uso frequente de serviços digitais
* Motivações: Estabilidade financeira e organização pessoal
* Frustrações: Dificuldade em acompanhar fluxo financeiro no dia a dia

---

## Principais Funcionalidades

### RFN-01 Monitoramento automático de gastos

* Integração com dados financeiros (Open Finance ou leitura de transações)
* Classificação automática por categoria (alimentação, transporte, etc.)

Critérios de Aceitação:

* Sistema deve importar transações automaticamente
* Deve classificar ao menos 80% dos gastos corretamente
* Atualização de dados em tempo próximo ao real

---

### RFN-02 Alertas inteligentes em tempo real

* Notificações baseadas em comportamento de gasto
* Alertas ao atingir limites ou padrões fora do comum

Critérios de Aceitação:

* Usuário recebe alertas ao ultrapassar limites definidos
* Alertas devem ser personalizados por categoria
* Tempo de envio inferior a 5 minutos após transação

---

### RFN-03 Dashboard financeiro simplificado

* Visão geral de gastos do mês
* Indicadores de tendência (controle vs risco)

Critérios de Aceitação:

* Tela inicial deve exibir resumo mensal
* Usuário deve entender sua situação financeira em até 5 segundos
* Interface simples e intuitiva

---

### RFN-04 Insights comportamentais

* Identificação de padrões de consumo
* Sugestões simples de melhoria

Critérios de Aceitação:

* Sistema deve gerar insights semanais
* Insights devem ser claros e acionáveis
* Baseados em histórico real do usuário

---

## Requisitos Não Funcionais

### RNF-01 - Performance

O sistema deve processar e exibir dados em até 2 segundos após abertura do app.

---

### RNF-02 - Segurança de dados

Os dados financeiros devem ser protegidos com criptografia e seguir boas práticas de segurança (LGPD).

---

### RNF-03 - Disponibilidade

O sistema deve ter disponibilidade mínima de 99%.

---

### RNF-04 - Usabilidade

Interface deve ser simples, intuitiva e acessível para usuários não técnicos.

---

## Métricas de Sucesso

* Taxa de retenção de usuários (30 dias)
* Frequência de acesso semanal
* Taxa de interação com alertas
* Redução de gastos em categorias específicas
* NPS (satisfação do usuário)

---

## Premissas e restrições

* Usuários aceitam integrar seus dados financeiros
* Dependência de APIs de Open Finance ou fontes de dados
* Possível resistência inicial ao uso de alertas
* Necessidade de garantir alta segurança de dados

---

## Escopo

**V1 (MVP):**

* Monitoramento automático de gastos (mock ou integração básica)
* Classificação por categoria
* Alertas simples por limite
* Dashboard básico

**V2:**

* Insights comportamentais avançados
* Personalização de alertas
* Melhorias de UX/UI

**V3:**

* Integração completa com Open Finance
* Recomendações financeiras inteligentes (IA)
* Gamificação de economia
