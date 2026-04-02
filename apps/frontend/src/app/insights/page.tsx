'use client';

import React, { useState } from 'react';

interface Insight {
  id: string;
  message: string;
  type: 'positive' | 'warning' | 'info';
  icon: string;
}

const mockInsights: Insight[] = [
  {
    id: '1',
    message: 'Você gastou 30% a mais com delivery este mês 📈',
    type: 'warning',
    icon: '⚠️'
  },
  {
    id: '2',
    message: 'Categoria Compras: R$ 850 (média semanal) 📊',
    type: 'info',
    icon: 'ℹ️'
  },
  {
    id: '3',
    message: 'Você economizou R$ 200 vs. mês anterior ✨',
    type: 'positive',
    icon: '✓'
  },
  {
    id: '4',
    message: 'Você tem 5 assinaturas ativas (total: R$ 138.70/mês) 📡',
    type: 'info',
    icon: 'ℹ️'
  },
  {
    id: '5',
    message: 'Transporte: +15% na última semana 📈',
    type: 'warning',
    icon: '⚠️'
  },
];

export default function InsightsPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  return (
    <main style={{
      backgroundColor: '#F8FAFC',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <div>
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
              Insights
            </h1>
          </div>
          <button
            onClick={handleRefresh}
            style={{
              padding: '8px 16px',
              backgroundColor: '#FFFFFF',
              color: '#4F46E5',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: isRefreshing ? 'not-allowed' : 'pointer',
              opacity: isRefreshing ? 0.6 : 1
            }}
          >
            {isRefreshing ? 'Atualizando...' : 'Atualizar'}
          </button>
        </div>

        {/* Insights Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {mockInsights.map((insight) => (
            <div
              key={insight.id}
              style={{
                backgroundColor: insight.type === 'positive'
                  ? '#F0FDF4'
                  : insight.type === 'warning'
                  ? '#FFFBEB'
                  : '#F0F9FF',
                borderLeft: `4px solid ${insight.type === 'positive'
                  ? '#10B981'
                  : insight.type === 'warning'
                  ? '#F59E0B'
                  : '#3B82F6'
                }`,
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>{insight.icon}</span>
                <p style={{
                  fontSize: '14px',
                  color: insight.type === 'positive'
                    ? '#065F46'
                    : insight.type === 'warning'
                    ? '#92400E'
                    : '#0C4A6E',
                  lineHeight: '1.6'
                }}>
                  {insight.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Comparison */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1F2937',
            marginBottom: '16px'
          }}>
            Comparação Semanal
          </h2>

          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '12px'
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '8px'
              }}>
                Semana Passada
              </p>
              <div style={{
                backgroundColor: '#E0E7FF',
                borderRadius: '8px',
                height: '60px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '8px'
              }}>
                <span style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#4F46E5'
                }}>
                  R$ 1.050
                </span>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '8px'
              }}>
                Esta Semana
              </p>
              <div style={{
                backgroundColor: '#DCFCE7',
                borderRadius: '8px',
                height: '60px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '8px'
              }}>
                <span style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#10B981'
                }}>
                  R$ 920
                </span>
              </div>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#10B981',
            fontWeight: '600'
          }}>
            ✓ Melhora de 12% comparado à semana anterior
          </div>
        </div>

      </div>
    </main>
  );
}
