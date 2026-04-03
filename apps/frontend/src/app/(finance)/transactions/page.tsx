'use client';

import Link from 'next/link';

export default function TransactionsPage() {
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
          paddingLeft: '32px',
          paddingRight: '32px',
          height: '80px',
          zIndex: 100,
          backgroundColor: '#1c2026',
          backdropFilter: 'blur(20px)',
          borderBottom: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#cdbdff',
              textDecoration: 'none',
              transition: 'color 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#on-primary-container')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#cdbdff')}
          >
            <span>←</span>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: 500 }}>
              Voltar ao Dashboard
            </span>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(53, 57, 64, 0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              🔔
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(53, 57, 64, 0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              💰
            </button>
          </div>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '9999px',
              overflow: 'hidden',
              border: '2px solid rgba(205, 189, 255, 0.2)',
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIDT16srQBnsPXJJ6-5Gf_QgIoxL-5X3BnBPWD8F_b8JYHC70clegYePmiXQDgXoCJQAoY0dkn5T1ZizgIOngF_ywPRV1wB4pNvkjbcG7Zc0KnWfrE5zeCPOAA5Any3veCvh-EjqmNpV-0r96mpOiottGImTzVQ67NheO8x70kmWukAmW0tnYsR0LZf7H6SWyOTPfrzqCRa1jkoDAlNO6hwT-attnK89WDKOUrikUAzrecb43byAoCdXKAiFbUBsJgrVqMxgGgVIc")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </header>

      <div
        style={{
          padding: '48px',
          maxWidth: '1344px',
          margin: '0 auto',
        }}
      >
        {/* Hero Section */}
        <section style={{ marginBottom: '48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '50px',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#dfe2eb',
                  marginBottom: '8px',
                  margin: 0,
                }}
              >
                Transações
              </h1>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  color: '#cbc3d9',
                  fontSize: '18px',
                  maxWidth: '752px',
                  margin: '16px 0 0 0',
                }}
              >
                Acompanhe cada detalhe do seu fluxo financeiro com precisão absoluta e segurança.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  backgroundColor: '#262a31',
                  color: '#cdbdff',
                  borderRadius: '12px',
                  fontWeight: 600,
                  transition: 'all 200ms',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
              >
                <span>🔍</span> Filtrar
              </button>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  backgroundColor: '#262a31',
                  color: '#cdbdff',
                  borderRadius: '12px',
                  fontWeight: 600,
                  transition: 'all 200ms',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
              >
                <span>↕️</span> Ordenar
              </button>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  backgroundImage: 'linear-gradient(to bottom right, #cdbdff, #5d21df)',
                  color: '#370096',
                  borderRadius: '12px',
                  fontWeight: 700,
                  transition: 'all 200ms',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span>➕</span> Adicionar Transação
              </button>
            </div>
          </div>
        </section>

        {/* Transactions Ledger */}
        <div
          style={{
            backgroundColor: '#181c22',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                textAlign: 'left',
                borderCollapse: 'collapse',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: 'rgba(38, 42, 49, 0.5)',
                  }}
                >
                  <th
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#94a3b8',
                      textAlign: 'left',
                    }}
                  >
                    Data
                  </th>
                  <th
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#94a3b8',
                      textAlign: 'left',
                    }}
                  >
                    Categoria
                  </th>
                  <th
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#94a3b8',
                      textAlign: 'left',
                    }}
                  >
                    Descrição
                  </th>
                  <th
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#94a3b8',
                      textAlign: 'right',
                    }}
                  >
                    Valor
                  </th>
                  <th
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#94a3b8',
                      textAlign: 'center',
                    }}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody
                style={{
                  borderTop: '1px solid rgba(49, 53, 60, 0.2)',
                }}
              >
                {/* Transaction Row 1 */}
                <tr
                  style={{
                    borderBottom: '1px solid rgba(49, 53, 60, 0.2)',
                    transition: 'background-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#dfe2eb' }}>
                    12 Mai 2024
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '9999px',
                          backgroundColor: '#06449e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#9ab7ff',
                        }}
                      >
                        🛒
                      </div>
                      <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                        Compras
                      </span>
                    </div>
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#cbc3d9' }}>
                    Supermercado Gourmet São Paulo
                  </td>
                  <td
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffb4ab',
                      textAlign: 'right',
                    }}
                  >
                    - R$ 450,20
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', textAlign: 'center' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '18px',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#cdbdff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>

                {/* Transaction Row 2 */}
                <tr
                  style={{
                    borderBottom: '1px solid rgba(49, 53, 60, 0.2)',
                    transition: 'background-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#dfe2eb' }}>
                    11 Mai 2024
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '9999px',
                          backgroundColor: '#6c37a9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#dbbbff',
                        }}
                      >
                        💳
                      </div>
                      <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                        Salário
                      </span>
                    </div>
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#cbc3d9' }}>
                    Pagamento Mensal - Tech Corp
                  </td>
                  <td
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#b0ffb0',
                      textAlign: 'right',
                    }}
                  >
                    + R$ 12.500,00
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', textAlign: 'center' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '18px',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#cdbdff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>

                {/* Transaction Row 3 */}
                <tr
                  style={{
                    borderBottom: '1px solid rgba(49, 53, 60, 0.2)',
                    transition: 'background-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#dfe2eb' }}>
                    10 Mai 2024
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '9999px',
                          backgroundColor: '#5d21df',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#cebfff',
                        }}
                      >
                        🍽️
                      </div>
                      <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                        Alimentação
                      </span>
                    </div>
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#cbc3d9' }}>
                    Restaurante Fasano Jantar
                  </td>
                  <td
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffb4ab',
                      textAlign: 'right',
                    }}
                  >
                    - R$ 890,00
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', textAlign: 'center' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '18px',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#cdbdff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>

                {/* Transaction Row 4 */}
                <tr
                  style={{
                    borderBottom: '1px solid rgba(49, 53, 60, 0.2)',
                    transition: 'background-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#dfe2eb' }}>
                    09 Mai 2024
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '9999px',
                          backgroundColor: '#06449e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#9ab7ff',
                        }}
                      >
                        🚗
                      </div>
                      <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                        Transporte
                      </span>
                    </div>
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#cbc3d9' }}>
                    Combustível e Estacionamento
                  </td>
                  <td
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffb4ab',
                      textAlign: 'right',
                    }}
                  >
                    - R$ 320,45
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', textAlign: 'center' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '18px',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#cdbdff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>

                {/* Transaction Row 5 */}
                <tr
                  style={{
                    transition: 'background-color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#dfe2eb' }}>
                    08 Mai 2024
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '9999px',
                          backgroundColor: '#6c37a9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#dbbbff',
                        }}
                      >
                        📈
                      </div>
                      <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}>
                        Investimentos
                      </span>
                    </div>
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', color: '#cbc3d9' }}>
                    Dividendos Carteira Global
                  </td>
                  <td
                    style={{
                      paddingLeft: '32px',
                      paddingRight: '32px',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#b0ffb0',
                      textAlign: 'right',
                    }}
                  >
                    + R$ 1.240,15
                  </td>
                  <td style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '24px', paddingBottom: '24px', textAlign: 'center' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '18px',
                        transition: 'color 200ms',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#cdbdff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination / Footer */}
          <div
            style={{
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '24px',
              paddingBottom: '24px',
              backgroundColor: 'rgba(38, 42, 49, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: '#cbc3d9',
                margin: 0,
              }}
            >
              Mostrando 5 de 142 transações
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#31353c',
                  color: '#dfe2eb',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: '"Manrope", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#31353c')}
              >
                ←
              </button>
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#cdbdff',
                  color: '#370096',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontFamily: '"Manrope", sans-serif',
                }}
              >
                1
              </button>
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#31353c',
                  color: '#dfe2eb',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: '"Manrope", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#31353c')}
              >
                2
              </button>
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#31353c',
                  color: '#dfe2eb',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: '"Manrope", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#31353c')}
              >
                3
              </button>
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#31353c',
                  color: '#dfe2eb',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: '"Manrope", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#31353c')}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Contextual Stats Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          <div style={{ backgroundColor: '#1c2026', padding: '32px', borderRadius: '12px' }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '8px',
                margin: 0,
              }}
            >
              Gasto Mensal
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '32px', fontWeight: 700, color: '#dfe2eb' }}>
                R$ 4.230
              </span>
              <span
                style={{
                  color: '#ffb4ab',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>↑</span> 12%
              </span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#31353c', height: '4px', borderRadius: '9999px', marginTop: '16px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#ffb4ab', height: '100%', width: '65%' }}></div>
            </div>
          </div>

          <div style={{ backgroundColor: '#1c2026', padding: '32px', borderRadius: '12px' }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '8px',
                margin: 0,
              }}
            >
              Entradas
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '32px', fontWeight: 700, color: '#dfe2eb' }}>
                R$ 15.800
              </span>
              <span
                style={{
                  color: '#b0ffb0',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>↑</span> 5%
              </span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#31353c', height: '4px', borderRadius: '9999px', marginTop: '16px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#cdbdff', height: '100%', width: '85%' }}></div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#1c2026',
              padding: '32px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 200ms',
              border: '2px dashed rgba(73, 68, 86, 0.3)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#cdbdff', fontSize: '40px', marginBottom: '8px', display: 'block' }}>☁️</span>
              <p
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontWeight: 700,
                  color: '#dfe2eb',
                  margin: 0,
                }}
              >
                Exportar Relatório
              </p>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '12px',
                  color: '#cbc3d9',
                  margin: '4px 0 0 0',
                }}
              >
                PDF, CSV ou XLSX
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
