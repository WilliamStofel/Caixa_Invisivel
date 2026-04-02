'use client';

import { useMemo } from 'react';
import { TransactionRow } from './TransactionRow';

interface Transaction {
  id: string;
  date: string;
  dateLabel: string;
  category: string;
  amount: number;
  description?: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

interface GroupedTransactions {
  [key: string]: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  const grouped = useMemo(() => {
    const groups: GroupedTransactions = {};

    transactions.forEach(transaction => {
      if (!groups[transaction.date]) {
        groups[transaction.date] = [];
      }
      groups[transaction.date].push(transaction);
    });

    return groups;
  }, [transactions]);

  // Sort dates in descending order (most recent first)
  const sortedDates = useMemo(
    () => Object.keys(grouped).sort((a, b) => new Date(b).getTime() - new Date(a).getTime()),
    [grouped]
  );

  return (
    <div className="transaction-list">
      {sortedDates.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--finance-text-muted)' }}>
          Nenhuma transação encontrada
        </p>
      ) : (
        sortedDates.map(dateKey => (
          <div key={dateKey} className="transaction-date-section">
            <div className="transaction-date-header">
              {dateKey}
            </div>
            {grouped[dateKey].map(transaction => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
}
