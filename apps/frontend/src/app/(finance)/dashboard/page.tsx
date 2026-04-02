'use client';

import Link from 'next/link';
import { DashboardCard } from '@/components/finance/DashboardCard';
import { TransactionList } from '@/components/finance/TransactionList';

interface Transaction {
  id: string;
  date: string;
  dateLabel: string;
  category: string;
  amount: number;
  description?: string;
}

// Mock data
const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2026-04-02',
    dateLabel: 'Hoje',
    category: 'Delivery',
    amount: 45.00,
    description: 'iFood - Sushi'
  },
  {
    id: '2',
    date: '2026-04-02',
    dateLabel: 'Hoje',
    category: 'Café',
    amount: 12.50,
    description: 'Café com colega'
  },
  {
    id: '3',
    date: '2026-04-01',
    dateLabel: 'Ontem',
    category: 'Grocery',
    amount: 120.00,
    description: 'Compras no mercado'
  },
  {
    id: '4',
    date: '2026-04-01',
    dateLabel: 'Ontem',
    category: 'Transporte',
    amount: 35.00,
    description: 'Uber para o trabalho'
  },
  {
    id: '5',
    date: '2026-03-31',
    dateLabel: '31 mar',
    category: 'Assinaturas',
    amount: 29.99,
    description: 'Netflix'
  },
];

const monthlySpending = 1234.56;
const monthlyLimit = 2000;
const isAlert = monthlySpending > monthlyLimit;

const recentTransactions = mockTransactions.slice(0, 5);

export default function DashboardPage() {
  return (
    <div>
      <h1 className="finance-greeting">
        👋 Olá, João
      </h1>

      {/* Main Spending Card */}
      <DashboardCard
        amount={monthlySpending}
        limit={monthlyLimit}
        isAlert={isAlert}
      />

      {/* Recent Transactions */}
      <h2 className="finance-section-title">Transações Recentes</h2>
      <TransactionList transactions={recentTransactions} />

      {/* Action Buttons */}
      <Link href="/add-expense" className="finance-btn finance-btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        ➕ Adicionar Gasto
      </Link>

      <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
        <Link href="/alerts" className="finance-link">
          ⚙️ Configurar Alertas
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--finance-border)'
      }}>
        <Link href="/transactions" className="finance-link">
          📋 Ver todas as transações
        </Link>
        <Link href="/insights" className="finance-link">
          💡 Ver meus insights
        </Link>
      </div>
    </div>
  );
}
