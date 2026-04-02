interface Transaction {
  id: string;
  date: string;
  dateLabel: string;
  category: string;
  amount: number;
  description?: string;
}

interface TransactionRowProps {
  transaction: Transaction;
}

export function TransactionRow({ transaction }: TransactionRowProps) {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(transaction.amount);

  return (
    <div className="transaction-row">
      <span className="transaction-date">{transaction.dateLabel}</span>
      <span className="transaction-category">{transaction.category}</span>
      <span className="transaction-amount">-{formattedAmount}</span>
    </div>
  );
}
