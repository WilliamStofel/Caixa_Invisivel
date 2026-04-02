'use client';

import { useEffect, useState } from 'react';

interface Transaction {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
}

const mockTransactions: Transaction[] = [
  { id: '1', date: 'Hoje', category: 'Delivery', description: 'iFood - Almoço', amount: 45.90 },
  { id: '2', date: 'Ontem', category: 'Transporte', description: 'Uber para trabalho', amount: 28.50 },
  { id: '3', date: '2 dias atrás', category: 'Compras', description: 'Supermarket', amount: 156.30 },
  { id: '4', date: '3 dias atrás', category: 'Assinaturas', description: 'Netflix', amount: 49.90 },
  { id: '5', date: '4 dias atrás', category: 'Delivery', description: 'Rappi - Café', amount: 15.00 },
];

export default function Dashboard() {
  const [userName] = useState('João Silva');
  const [totalSpent] = useState(1234.50);
  const [monthlyLimit] = useState(2000);
  const [isUnderControl] = useState(totalSpent < monthlyLimit);
  const [apiStatus, setApiStatus] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setApiStatus(`✓ API conectada`))
      .catch(() => setApiStatus('✗ Erro na API'));
  }, []);

  const percentUsed = Math.round((totalSpent / monthlyLimit) * 100);
  const remaining = monthlyLimit - totalSpent;

  return (
    <main style={{
      backgroundColor: '#F8FAFC',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Status da API */}
        <div style={{
          fontSize: '12px',
          color: '#6B7280',
          marginBottom: '20px',
          textAlign: 'right'
        }}>
          {apiStatus}
        </div>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '4px'
          }}>
            Olá, {userName}
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6B7280',
            marginBottom: '16px'
          }}>
            Março de 2025
          </p>
        </div>

        {/* Primary Card - Spending Status */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <p style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '8px'
              }}>
                Gasto este mês
              </p>
              <p style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1F2937'
              }}>
                R$ {totalSpent.toFixed(2)}
              </p>
            </div>
            <div style={{
              backgroundColor: isUnderControl ? '#D1FAE5' : '#FEE2E2',
              color: isUnderControl ? '#047857' : '#DC2626',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {isUnderControl ? '✓ Sob Controle' : '⚠ Alerta'}
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              backgroundColor: '#E5E7EB',
              borderRadius: '8px',
              height: '8px',
              overflow: 'hidden',
              marginBottom: '8px'
            }}>
              <div style={{
                backgroundColor: isUnderControl ? '#10B981' : '#EF4444',
                height: '100%',
                width: `${percentUsed}%`
              }} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#6B7280'
            }}>
              <span>{percentUsed}% do limite</span>
              <span>Restante: R$ {remaining.toFixed(2)}</span>
            </div>
          </div>

          {/* Limit Info */}
          <div style={{
            borderTop: '1px solid #E5E7EB',
            paddingTop: '12px',
            fontSize: '14px',
            color: '#6B7280'
          }}>
            Limite mensal: R$ {monthlyLimit.toFixed(2)}
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1F2937',
            marginBottom: '12px'
          }}>
            Transações Recentes
          </h2>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
            overflow: 'hidden'
          }}>
            {mockTransactions.map((tx, idx) => (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  borderBottom: idx < mockTransactions.length - 1 ? '1px solid #E5E7EB' : 'none'
                }}
              >
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
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#EF4444'
                }}>
                  -R$ {tx.amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <button style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338CA'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
          >
            + Adicionar Gasto
          </button>

          <button style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#FFFFFF',
            color: '#4F46E5',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F3F4F6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
          }}
          >
            ⚙ Configurar Alertas
          </button>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          textAlign: 'center'
        }}>
          <a href="/transactions" style={{
            fontSize: '14px',
            color: '#4F46E5',
            textDecoration: 'none',
            cursor: 'pointer'
          }}>
            Ver todas transações →
          </a>
          <a href="/insights" style={{
            fontSize: '14px',
            color: '#4F46E5',
            textDecoration: 'none',
            cursor: 'pointer'
          }}>
            Ver insights →
          </a>
        </div>
      </div>
    </main>
  );
}
