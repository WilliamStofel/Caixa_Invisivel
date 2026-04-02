interface InsightCardProps {
  message: string;
  type: 'success' | 'alert';
  icon?: string;
}

export function InsightCard({ message, type, icon = type === 'success' ? '🎉' : '⚠️' }: InsightCardProps) {
  return (
    <div className="insight-card">
      <div className={`insight-badge badge-${type}`}>
        {icon}
      </div>
      <div className="insight-text">
        {message}
      </div>
    </div>
  );
}
