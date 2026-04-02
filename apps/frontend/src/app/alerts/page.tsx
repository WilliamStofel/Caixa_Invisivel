'use client';

import React, { useState } from 'react';

interface Alert {
  id: string;
  category: string;
  limit: number;
  enabled: boolean;
}

const categories = ['Delivery', 'Transporte', 'Compras', 'Assinaturas', 'Outros'];

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: '1', category: 'Delivery', limit: 500, enabled: true },
    { id: '2', category: 'Compras', limit: 800, enabled: true },
    { id: '3', category: 'Assinaturas', limit: 200, enabled: false },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggle = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  const handleDelete = (id: string) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  const handleAddNew = () => {
    const newAlert: Alert = {
      id: Date.now().toString(),
      category: categories[0],
      limit: 500,
      enabled: true
    };
    setAlerts([...alerts, newAlert]);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Alertas salvos com sucesso!');
    setIsSubmitting(false);
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
            Configurar Alertas
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '24px'
        }}>

          {/* Alert Cards */}
          {alerts.map((alert) => (
            <div
              key={alert.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1F2937'
                }}>
                  {alert.category}
                </label>
                <button
                  type="button"
                  onClick={() => handleDelete(alert.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#FEE2E2',
                    color: '#DC2626',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  🗑️ Deletar
                </button>
              </div>

              <div style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center'
              }}>
                <span style={{ color: '#6B7280', fontSize: '14px' }}>Limite:</span>
                <input
                  type="number"
                  value={alert.limit}
                  onChange={(e) => setAlerts(alerts.map(a =>
                    a.id === alert.id ? { ...a, limit: parseFloat(e.target.value) } : a
                  ))}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
                <span style={{ color: '#6B7280', fontSize: '14px' }}>R$</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <input
                  type="checkbox"
                  checked={alert.enabled}
                  onChange={() => handleToggle(alert.id)}
                  style={{
                    cursor: 'pointer',
                    width: '18px',
                    height: '18px'
                  }}
                />
                <label style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  cursor: 'pointer'
                }}>
                  {alert.enabled ? 'Alerta ativado' : 'Alerta desativado'}
                </label>
              </div>
            </div>
          ))}

          {/* Add New Alert Button */}
          <button
            type="button"
            onClick={handleAddNew}
            style={{
              padding: '12px 16px',
              backgroundColor: '#FFFFFF',
              color: '#4F46E5',
              border: '2px dashed #4F46E5',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F4FF'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
          >
            + Adicionar Novo Alerta
          </button>

          {/* Save Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '12px 16px',
              backgroundColor: isSubmitting ? '#9333EA' : '#4F46E5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              marginTop: '12px'
            }}
            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#4338CA')}
            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#4F46E5')}
          >
            {isSubmitting ? 'Salvando...' : 'Salvar Alertas'}
          </button>
        </form>

        {/* Info */}
        <div style={{
          backgroundColor: '#F0F9FF',
          borderLeft: '4px solid #3B82F6',
          borderRadius: '8px',
          padding: '16px',
          fontSize: '14px',
          color: '#0C4A6E'
        }}>
          ℹ️ Você receberá uma notificação quando um gasto ultrapassar o limite de uma categoria.
        </div>

      </div>
    </main>
  );
}
