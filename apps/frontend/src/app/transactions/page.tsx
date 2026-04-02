'use client';

interface Transaction {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
}

const allTransactions: Transaction[] = [
  { id: '1', date: '30/03', category: 'Delivery', description: 'iFood - Almoço', amount: 45.90 },
  { id: '2', date: '29/03', category: 'Transporte', description: 'Uber para trabalho', amount: 28.50 },
  { id: '3', date: '28/03', category: 'Compras', description: 'Supermarket', amount: 156.30 },
  { id: '4', date: '27/03', category: 'Assinaturas', description: 'Netflix', amount: 49.90 },
  { id: '5', date: '26/03', category: 'Delivery', description: 'Rappi - Café', amount: 15.00 },
  { id: '6', date: '25/03', category: 'Compras', description: 'Amazon', amount: 199.99 },
  { id: '7', date: '24/03', category: 'Delivery', description: 'Doordash - Jantar', amount: 67.80 },
  { id: '8', date: '23/03', category: 'Transporte', description: 'Taxi', amount: 35.00 },
  { id: '9', date: '22/03', category: 'Assinaturas', description: 'Spotify', amount: 19.90 },
  { id: '10', date: '21/03', category: 'Compras', description: 'Mercado livre', amount: 89.50 },
];

const categories = ['Delivery', 'Transporte', 'Compras', 'Assinaturas', 'Outros'];
const categoryIcons: Record<string, string> = {
  'Delivery': '🍕',
  'Transporte': '🚕',
  'Compras': '🛍️',
  'Assinaturas': '📡',
  'Outros': '💳'
};

export default function TransactionsPage() {
  const [filteredCategory, setFilteredCategory] = React.useState<string>('');
  const [sortBy, setSortBy] = React.useState<'date' | 'amount'>('date');

  const filtered = filteredCategory
    ? allTransactions.filter(tx => tx.category === filteredCategory)
    : allTransactions;

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date) as any - new Date(a.date) as any;
    return b.amount - a.amount;
  });

  return (
    <main style={{
      backgroundColor: '#F8FAFC',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <a href="/" style={{
            fontSize: '14px',
            color: '#4F46E5',
            textDecoration: 'none',
            marginBottom: '12px',
            display: 'block'
          }}>
            ← Voltar ao Dashboard
          </a>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginTop: '12px'
          }}>
            Todas as Transações
          </h1>
        </div>

        {/* Filter Section */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '24px',
          backgroundColor: '#FFFFFF',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB'
        }}>
          <select
            value={filteredCategory}
            onChange={(e) => setFilteredCategory(e.target.value)}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <option value="">Todas as categorias</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <option value="date">Mais recentes</option>
            <option value="amount">Maior valor</option>
          </select>
        </div>

        {/* Transactions List */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {sorted.length === 0 ? (
            <div style={{
              padding: '24px',
              textAlign: 'center',
              color: '#6B7280'
            }}>
              Nenhuma transação encontrada
            </div>
          ) : (
            sorted.map((tx, idx) => (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  borderBottom: idx < sorted.length - 1 ? '1px solid #E5E7EB' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>
                    {categoryIcons[tx.category] || '💳'}
                  </span>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#1F2937',
                      marginBottom: '4px'
                    }}>
                      {tx.description}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#6B7280'
                    }}>
                      {tx.date} • {tx.category}
                    </p>
                  </div>
                </div>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EF4444'
                }}>
                  -R$ {tx.amount.toFixed(2)}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#F0F9FF',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '14px', color: '#0369A1' }}>
            Total: R$ {sorted.reduce((sum, tx) => sum + tx.amount, 0).toFixed(2)}
          </p>
        </div>
      </div>
    </main>
  );
}

import React from 'react';
