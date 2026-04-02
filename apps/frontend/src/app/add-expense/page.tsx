'use client';

import React, { useState } from 'react';

const categories = ['Delivery', 'Transporte', 'Compras', 'Assinaturas', 'Outros'];

export default function AddExpensePage() {
  const [formData, setFormData] = useState({
    amount: '',
    category: 'Delivery',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Gasto adicionado com sucesso!');
    setFormData({
      amount: '',
      category: 'Delivery',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
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
            ← Cancelar
          </a>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1F2937',
            marginTop: '12px'
          }}>
            Adicionar Gasto
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>

          {/* Valor */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1F2937',
              marginBottom: '8px'
            }}>
              Valor (R$)
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '12px',
                color: '#6B7280',
                fontSize: '16px'
              }}>
                R$
              </span>
              <input
                type="number"
                name="amount"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleChange}
                required
                step="0.01"
                min="0"
                style={{
                  width: '100%',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  boxSizing: 'border-box',
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
          </div>

          {/* Categoria */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1F2937',
              marginBottom: '8px'
            }}>
              Categoria
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Data */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1F2937',
              marginBottom: '8px'
            }}>
              Data
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          {/* Descrição */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1F2937',
              marginBottom: '8px'
            }}>
              Descrição (opcional)
            </label>
            <textarea
              name="description"
              placeholder="Descreva o gasto..."
              value={formData.description}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                boxSizing: 'border-box',
                outline: 'none',
                minHeight: '100px',
                resize: 'vertical'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
              onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                flex: 1,
                padding: '12px 16px',
                backgroundColor: isSubmitting ? '#9F1239' : '#4F46E5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.8 : 1
              }}
            >
              {isSubmitting ? 'Salvando...' : 'Salvar'}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              style={{
                flex: 1,
                padding: '12px 16px',
                backgroundColor: '#FFFFFF',
                color: '#6B7280',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
          </div>
        </form>

      </div>
    </main>
  );
}
