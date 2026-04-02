'use client';

import Link from 'next/link';
import { AlertForm } from '@/components/finance/AlertForm';

interface Alert {
  id: string;
  category: string;
  limit: number;
}

// Mock existing alerts
const mockAlerts: Alert[] = [
  {
    id: '1',
    category: 'Delivery',
    limit: 500,
  },
  {
    id: '2',
    category: 'Alimentação',
    limit: 800,
  },
];

export default function AlertsPage() {
  const handleSaveAlert = (category: string, limit: number) => {
    console.log('Saving alert:', { category, limit });
    // Will be integrated with backend later
  };

  return (
    <div>
      <Link href="/dashboard" className="finance-back-link">
        ← Voltar
      </Link>

      <h1 className="finance-page-title">Configurar Alertas</h1>

      <AlertForm
        existingAlerts={mockAlerts}
        onSave={handleSaveAlert}
      />

      <Link href="/dashboard" className="finance-link">
        Voltar ao Dashboard
      </Link>
    </div>
  );
}
