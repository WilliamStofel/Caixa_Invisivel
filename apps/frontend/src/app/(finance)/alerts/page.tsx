'use client';

import Link from 'next/link';

export default function AlertsPage() {
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
          Configurar Alertas
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

      <div style={{ padding: '48px', maxWidth: '1344px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Existing Alerts */}
          <section>
            <h2
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                margin: '0 0 24px 0',
              }}
            >
              Seus Alertas
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Alert Item 1 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#1c2026',
                  padding: '24px',
                  borderRadius: '12px',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#262a31',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    🍽️
                  </div>
                  <div>
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                      Delivery
                    </h4>
                    <p style={{ color: '#cbc3d9', fontSize: '12px', margin: 0, fontFamily: '"Inter", sans-serif' }}>
                      R$ 500/mês
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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

              {/* Alert Item 2 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#1c2026',
                  padding: '24px',
                  borderRadius: '12px',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#262a31')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1c2026')}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#262a31',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    🛒
                  </div>
                  <div>
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                      Compras
                    </h4>
                    <p style={{ color: '#cbc3d9', fontSize: '12px', margin: 0, fontFamily: '"Inter", sans-serif' }}>
                      R$ 800/mês
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
            </div>
          </section>

          {/* Create New Alert */}
          <section>
            <h2
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                margin: '0 0 24px 0',
              }}
            >
              Criar Novo Alerta
            </h2>
            <div
              style={{
                backgroundColor: '#1c2026',
                padding: '32px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
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
                    e.currentTarget.style.outline = 'none';
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
                  Limite (R$)
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
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                  }}
                />
              </div>

              <button
                style={{
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  backgroundImage: 'linear-gradient(to bottom right, #cdbdff, #5d21df)',
                  color: '#370096',
                  fontWeight: 700,
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Manrope", sans-serif',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Salvar Alerta
              </button>
            </div>
          </section>

          {/* Footer Link */}
          <div style={{ textAlign: 'center', paddingTop: '24px' }}>
            <Link
              href="/dashboard"
              style={{
                color: '#cdbdff',
                textDecoration: 'none',
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#dfe2eb')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cdbdff')}
            >
              ← Voltar ao Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
