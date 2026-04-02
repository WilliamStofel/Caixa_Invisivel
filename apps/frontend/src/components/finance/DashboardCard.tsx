interface DashboardCardProps {
  amount: number;
  limit?: number;
  isAlert?: boolean;
}

export function DashboardCard({ amount, limit = 2000, isAlert = false }: DashboardCardProps) {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);

  const formattedLimit = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(limit);

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-label">Gasto este mês</div>
      <div className="dashboard-card-amount">{formattedAmount}</div>
      <div style={{ marginBottom: '1rem' }}>
        <span className={`dashboard-card-badge ${isAlert ? 'badge-error' : 'badge-success'}`}>
          {isAlert ? '⚠️ Alerta!' : '✓ Sob controle'}
        </span>
      </div>
      <div style={{ fontSize: '0.875rem', color: 'var(--finance-text-muted)' }}>
        Limite: <strong>{formattedLimit}</strong>
      </div>
    </div>
  );
}
