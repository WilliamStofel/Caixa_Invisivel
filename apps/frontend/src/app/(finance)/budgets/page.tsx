'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BudgetsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* TopAppBar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '48px',
          paddingRight: '48px',
          height: '80px',
          zIndex: 100,
          backgroundColor: 'rgba(16, 20, 26, 0.7)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <h1
          style={{
            fontFamily: '"Manrope", sans-serif',
            letterSpacing: '-0.03em',
            fontWeight: 700,
            fontSize: '22px',
            color: '#cdbdff',
            margin: 0,
          }}
        >
          Orçamentos
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ position: 'relative' }}>
            <button
              style={{
                padding: '8px',
                color: '#94a3b8',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(53, 57, 64, 0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              🔔
            </button>
            <span
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                backgroundColor: '#5d21df',
                borderRadius: '9999px',
              }}
            />
          </div>
          <button
            style={{
              padding: '8px',
              color: '#94a3b8',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(53, 57, 64, 0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            💰
          </button>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '9999px',
              backgroundColor: '#262a31',
              overflow: 'hidden',
              border: '1px solid rgba(73, 68, 86, 0.2)',
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPTP3gFMHBYNcnhz3rDORTmNBtzz8dOgtGOFvoc7FuvtrPfG21WacxqpPpT2YwJ02-6JTKHvd2Q40M4QM2q9W0KSNLxL0dImS53HDiqnLGDewrkY-f-NJy8u5s91Ygtq0p5Cgd_g1QJRypFZNCpLlPjSZTQWOReEyWsMKUnBC5ih9WCudVnEOSd4Yhc6t1nLPKpWpNWenG69G27uUlmKnHtLim6Yz0mOPrIRNkW25ErxAfhHBR2lUSu6Ysu_wYKmNgmPm3gaw5Kas")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </header>

      <div style={{ padding: '48px', maxWidth: '1344px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Header with Add Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '8px',
                margin: 0,
              }}
            >
              Gerenciar Orçamentos
            </h2>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '14px',
                color: '#cbc3d9',
                margin: '8px 0 0 0',
              }}
            >
              Defina limites para cada categoria e acompanhe seus gastos
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '12px',
              paddingBottom: '12px',
              backgroundImage: 'linear-gradient(to bottom right, #cdbdff, #5d21df)',
              color: '#370096',
              fontWeight: 700,
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Manrope", sans-serif',
              fontSize: '14px',
              transition: 'all 200ms',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span>➕</span> Novo Orçamento
          </button>
        </div>

        {/* Budget Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: '#1c2026', padding: '24px', borderRadius: '12px' }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: '0 0 8px 0',
              }}
            >
              Orçamento Total
            </p>
            <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '32px', fontWeight: 700, color: '#dfe2eb' }}>
              R$ 6.000,00
            </span>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#cbc3d9', margin: '8px 0 0 0' }}>
              Limite mensal para todas as categorias
            </p>
          </div>

          <div style={{ backgroundColor: '#1c2026', padding: '24px', borderRadius: '12px' }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: '0 0 8px 0',
              }}
            >
              Gasto Atual
            </p>
            <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '32px', fontWeight: 700, color: '#dfe2eb' }}>
              R$ 4.230,00
            </span>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#b0ffb0', margin: '8px 0 0 0' }}>
              ↓ 29% de margem disponível
            </p>
          </div>

          <div style={{ backgroundColor: '#1c2026', padding: '24px', borderRadius: '12px' }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: '0 0 8px 0',
              }}
            >
              Disponível
            </p>
            <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '32px', fontWeight: 700, color: '#dfe2eb' }}>
              R$ 1.770,00
            </span>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#cbc3d9', margin: '8px 0 0 0' }}>
              Ainda pode gastar este mês
            </p>
          </div>
        </div>

        {/* Budget Form (Conditional) */}
        {showForm && (
          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid rgba(205, 189, 255, 0.1)',
            }}
          >
            <h3
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '24px',
                margin: 0,
              }}
            >
              Criar Novo Orçamento
            </h3>
            <form
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
              onSubmit={(e) => {
                e.preventDefault();
                setShowForm(false);
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#cbc3d9',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Categoria
                </label>
                <select
                  style={{
                    backgroundColor: '#262a31',
                    border: '1px solid rgba(73, 68, 86, 0.3)',
                    color: '#dfe2eb',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 200ms',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(205, 189, 255, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                  }}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="delivery">Delivery</option>
                  <option value="compras">Compras</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="transporte">Transporte</option>
                  <option value="moradia">Moradia</option>
                  <option value="lazer">Lazer</option>
                  <option value="investimentos">Investimentos</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#cbc3d9',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Limite Mensal (R$)
                </label>
                <input
                  type="number"
                  placeholder="0,00"
                  style={{
                    backgroundColor: '#262a31',
                    border: '1px solid rgba(73, 68, 86, 0.3)',
                    color: '#dfe2eb',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 200ms',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(205, 189, 255, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  gridColumn: '1 / -1',
                  marginTop: '16px',
                }}
              >
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    backgroundImage: 'linear-gradient(to bottom right, #cdbdff, #5d21df)',
                    color: '#370096',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '14px',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Salvar Orçamento
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    flex: 1,
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    backgroundColor: 'transparent',
                    color: '#cdbdff',
                    fontWeight: 600,
                    borderRadius: '8px',
                    border: '1px solid rgba(205, 189, 255, 0.2)',
                    cursor: 'pointer',
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '14px',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(205, 189, 255, 0.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Budget List */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Orçamentos por Categoria
          </h3>

          {/* Budget Item 1 - Moradia */}
          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#262a31',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🏠
              </div>
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: '8px',
                  }}
                >
                  Moradia
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#cbc3d9',
                    marginBottom: '8px',
                  }}
                >
                  <span>R$ 2.450,00 de R$ 2.500,00</span>
                  <span>98%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#31353c',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '98%',
                      backgroundColor: '#ffb4ab',
                      boxShadow: '0 0 10px rgba(255, 180, 171, 0.3)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#cdbdff',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✎
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffb4ab',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Budget Item 2 - Alimentação */}
          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#262a31',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🍽️
              </div>
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: '8px',
                  }}
                >
                  Alimentação
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#cbc3d9',
                    marginBottom: '8px',
                  }}
                >
                  <span>R$ 680,00 de R$ 800,00</span>
                  <span>85%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#31353c',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '85%',
                      backgroundColor: '#dab9ff',
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#cdbdff',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✎
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffb4ab',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Budget Item 3 - Transporte */}
          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#262a31',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🚗
              </div>
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: '8px',
                  }}
                >
                  Transporte
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#cbc3d9',
                    marginBottom: '8px',
                  }}
                >
                  <span>R$ 320,00 de R$ 400,00</span>
                  <span>80%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#31353c',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '80%',
                      backgroundColor: '#b0c6ff',
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#cdbdff',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✎
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffb4ab',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Budget Item 4 - Compras */}
          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#262a31',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🛒
              </div>
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: '8px',
                  }}
                >
                  Compras
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#cbc3d9',
                    marginBottom: '8px',
                  }}
                >
                  <span>R$ 780,00 de R$ 1.000,00</span>
                  <span>78%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#31353c',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '78%',
                      backgroundColor: '#cdbdff',
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#cdbdff',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✎
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffb4ab',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Budget Item 5 - Lazer */}
          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#262a31',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🎬
              </div>
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: '8px',
                  }}
                >
                  Lazer
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#cbc3d9',
                    marginBottom: '8px',
                  }}
                >
                  <span>R$ 420,00 de R$ 600,00</span>
                  <span>70%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#31353c',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '70%',
                      backgroundColor: '#b0ffb0',
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#cdbdff',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✎
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffb4ab',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'transform 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ✕
              </button>
            </div>
          </div>
        </section>

        {/* Budget Tips Section */}
        <div
          style={{
            backgroundColor: 'rgba(93, 33, 223, 0.1)',
            border: '1px solid rgba(205, 189, 255, 0.2)',
            padding: '24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <span style={{ fontSize: '24px' }}>💡</span>
          <div>
            <h4
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 700,
                margin: 0,
                marginBottom: '8px',
              }}
            >
              Dica de Orçamento
            </h4>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '14px',
                color: '#cbc3d9',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              Você está próximo do limite de Moradia (98%). Considere revisar despesas ou aumentar o orçamento para esta
              categoria.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
