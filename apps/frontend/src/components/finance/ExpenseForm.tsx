'use client';

import { useState } from 'react';

interface ExpenseFormProps {
  onSave?: (data: {
    amount: number;
    category: string;
    date: string;
    description?: string;
  }) => void;
}

const CATEGORIES = [
  'Delivery',
  'Alimentação',
  'Compras',
  'Transporte',
  'Assinaturas',
  'Outro',
];

export function ExpenseForm({ onSave }: ExpenseFormProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && category && date) {
      onSave?.({
        amount: parseFloat(amount),
        category,
        date,
        description,
      });
      setAmount('');
      setCategory('');
      setDate(new Date().toISOString().split('T')[0]);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="finance-form">
      <div className="finance-form-group">
        <label className="finance-label" htmlFor="amount">
          Valor *
        </label>
        <input
          id="amount"
          type="number"
          className="finance-input"
          placeholder="R$ 0,00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
          required
        />
      </div>

      <div className="finance-form-group">
        <label className="finance-label" htmlFor="category">
          Categoria *
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
        <label className="finance-label" htmlFor="date">
          Data *
        </label>
        <input
          id="date"
          type="date"
          className="finance-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="finance-form-group">
        <label className="finance-label" htmlFor="description">
          Descrição (Opcional)
        </label>
        <textarea
          id="description"
          className="finance-input"
          placeholder="Descreva o gasto..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          style={{ resize: 'none' }}
        />
      </div>

      <button type="submit" className="finance-btn finance-btn-primary">
        Salvar Gasto
      </button>

      <a href="/dashboard" className="finance-link">
        Cancelar
      </a>
    </form>
  );
}
