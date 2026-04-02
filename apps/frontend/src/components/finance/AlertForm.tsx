'use client';

import { useState } from 'react';

interface Alert {
  id: string;
  category: string;
  limit: number;
}

interface AlertFormProps {
  existingAlerts?: Alert[];
  onSave?: (category: string, limit: number) => void;
}

const CATEGORIES = [
  'Delivery',
  'Alimentação',
  'Compras',
  'Transporte',
  'Assinaturas',
  'Outro',
];

export function AlertForm({ existingAlerts = [], onSave }: AlertFormProps) {
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category && limit) {
      onSave?.(category, parseFloat(limit));
      setCategory('');
      setLimit('');
    }
  };

  return (
    <div>
      {/* Existing Alerts */}
      {existingAlerts.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 className="finance-section-title">Alertas Configurados</h3>
          {existingAlerts.map(alert => (
            <div key={alert.id} className="alert-item">
              <div className="alert-item-info">
                <div className="alert-item-category">{alert.category}</div>
                <div className="alert-item-limit">
                  Limite: R$ {alert.limit.toFixed(2)}
                </div>
              </div>
              <div className="alert-item-actions">
                <button className="alert-item-btn">✎</button>
                <button className="alert-item-btn">✕</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New Alert Form */}
      <div>
        <h3 className="finance-section-title">Novo Alerta</h3>
        <form onSubmit={handleSubmit} className="finance-form">
          <div className="finance-form-group">
            <label className="finance-label" htmlFor="category">
              Categoria
            </label>
            <select
              id="category"
              className="finance-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Selecione uma categoria...</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="finance-form-group">
            <label className="finance-label" htmlFor="limit">
              Limite Mensal
            </label>
            <input
              id="limit"
              type="number"
              className="finance-input"
              placeholder="R$ 500,00"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              step="0.01"
              min="0"
              required
            />
          </div>

          <button type="submit" className="finance-btn finance-btn-primary">
            Salvar Alerta
          </button>
        </form>
      </div>
    </div>
  );
}
