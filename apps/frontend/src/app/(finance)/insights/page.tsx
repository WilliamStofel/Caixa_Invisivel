'use client';

import Link from 'next/link';
import { InsightCard } from '@/components/finance/InsightCard';

export default function InsightsPage() {
  return (
    <div>
      <Link href="/dashboard" className="finance-back-link">
        ← Voltar
      </Link>

      <h1 className="finance-page-title">Seus Insights</h1>

      {/* Insight Cards */}
      <InsightCard
        type="alert"
        message="Você gastou 30% mais com delivery esta semana comparado à semana anterior"
        icon="⚠️"
      />

      <InsightCard
        type="success"
        message="Sua alimentação está dentro do orçamento! Continue assim 🎉"
        icon="✓"
      />

      <InsightCard
        type="alert"
        message="Gastos com assinaturas somam R$ 99,98 por mês"
        icon="📊"
      />

      <InsightCard
        type="success"
        message="Você economizou R$ 150,00 em transporte este mês usando aplicativos com cashback"
        icon="💰"
      />

      <div style={{ marginTop: '2rem' }}>
        <button className="finance-btn finance-btn-secondary">
          🔄 Atualizar Insights
        </button>
      </div>

      <Link href="/dashboard" className="finance-link">
        Voltar ao Dashboard
      </Link>
    </div>
  );
}
