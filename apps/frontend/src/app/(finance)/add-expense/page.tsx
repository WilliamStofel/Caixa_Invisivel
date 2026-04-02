'use client';

import Link from 'next/link';
import { ExpenseForm } from '@/components/finance/ExpenseForm';

export default function AddExpensePage() {
  const handleSaveExpense = (data: {
    amount: number;
    category: string;
    date: string;
    description?: string;
  }) => {
    console.log('Saving expense:', data);
    // Will be integrated with backend later
  };

  return (
    <div>
      <Link href="/dashboard" className="finance-back-link">
        ← Voltar
      </Link>

      <h1 className="finance-page-title">Adicionar Gasto</h1>

      <ExpenseForm onSave={handleSaveExpense} />

      <Link href="/dashboard" className="finance-link">
        Voltar ao Dashboard
      </Link>
    </div>
  );
}
