'use client';

import Link from 'next/link';
import { TransactionList } from '@/components/finance/TransactionList';

interface Transaction {
  id: string;
  date: string;
  dateLabel: string;
  category: string;
  amount: number;
  description?: string;
}

// Mock data - All transactions
const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2026-04-02',
    dateLabel: 'Hoje',
    category: 'Delivery',
    amount: 45.00,
  },
  {
    id: '2',
    date: '2026-04-02',
    dateLabel: 'Hoje',
    category: 'Café',
    amount: 12.50,
  },
  {
    id: '3',
    date: '2026-04-01',
    dateLabel: 'Ontem',
    category: 'Grocery',
    amount: 120.00,
  },
  {
    id: '4',
    date: '2026-04-01',
    dateLabel: 'Ontem',
    category: 'Transporte',
    amount: 35.00,
  },
  {
    id: '5',
    date: '2026-03-31',
    dateLabel: '31 mar',
    category: 'Assinaturas',
    amount: 29.99,
  },
  {
    id: '6',
    date: '2026-03-30',
    dateLabel: '30 mar',
    category: 'Compras',
    amount: 89.90,
  },
  {
    id: '7',
    date: '2026-03-30',
    dateLabel: '30 mar',
    category: 'Alimentação',
    amount: 55.00,
  },
  {
    id: '8',
    date: '2026-03-29',
    dateLabel: '29 mar',
    category: 'Transporte',
    amount: 42.00,
  },
  {
    id: '9',
    date: '2026-03-29',
    dateLabel: '29 mar',
    category: 'Delivery',
    amount: 38.50,
  },
  {
    id: '10',
    date: '2026-03-28',
    dateLabel: '28 mar',
    category: 'Assinaturas',
    amount: 19.99,
  },
];

export default function TransactionsPage() {
  return (
    <div>
      <Link href="/dashboard" className="finance-back-link">
        ← Voltar
      </Link>

      <h1 className="finance-page-title">Transações</h1>

      {/* Optional: Filter/Sort buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}>
        <button className="finance-btn finance-btn-secondary">
          Filtrar
        </button>
        <button className="finance-btn finance-btn-secondary">
          Ordenar
        </button>
      </div>

      {/* Transaction List */}
      <TransactionList transactions={mockTransactions} />

      {/* Back Link */}
      <Link href="/dashboard" className="finance-link">
        Voltar ao Dashboard
      </Link>
    </div>
  );
}
