import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      {/* Top App Bar */}
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
          backgroundColor: 'rgba(28, 32, 38, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: 'none',
        }}
      >
        <h1
          style={{
            fontFamily: '"Manrope", sans-serif',
            letterSpacing: '-0.03em',
            fontWeight: 700,
            fontSize: '24px',
            color: '#cdbdff',
          }}
        >
          Painel Principal
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#262a31',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderRadius: '9999px',
            }}
          >
            <span style={{ color: '#cdbdff', fontSize: '14px', marginRight: '8px' }}>🔍</span>
            <input
              type="text"
              placeholder="Buscar..."
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                width: '192px',
                color: '#dfe2eb',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ color: '#94a3b8', cursor: 'pointer' }}>🔔</span>
            <span style={{ color: '#94a3b8', cursor: 'pointer' }}>💰</span>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                overflow: 'hidden',
                border: '1px solid rgba(205, 189, 255, 0.2)',
                backgroundColor: '#262a31',
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXaJwwIu6pmt7RL0U8Im_zvEN7FK8u5c6trpFVr8f6A5fQCLMYSGECAGe35p7s34VUfraCa5wmANrT1wUokptm6P9LVIA3jzG7bC06xNlkhv44d_a3qhRyi3lBpt9K7sCSa6WmZa83xh432lKa8Gdq38mRktjRM3DjwPm6d4nWTfUbEoOVhkOb7v9WeSdFedlrIROfuc1_d6uH-sDDjN4-AGK6jquCQoKfzF7PnsEfh2dwBI6ViXLnm4ojNPxNiLzAKhthLzdlbvI")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </header>

      {/* Content Canvas */}
      <div
        style={{
          padding: '32px',
          maxWidth: '1344px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* Hero Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            gridAutoFlow: 'dense',
          }}
        >
          {/* Main Balance Card */}
          <div
            style={{
              gridColumn: 'span 2',
              backgroundColor: '#181c22',
              padding: '32px',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    color: '#cbc3d9',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Gasto Total Mensal
                </span>
                <span
                  style={{
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(57, 255, 20, 0.1)',
                    color: '#39FF14',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    border: '1px solid rgba(57, 255, 20, 0.2)',
                    textShadow: '0 0 10px rgba(57, 255, 20, 0.4)',
                  }}
                >
                  SOB CONTROLE
                </span>
              </div>
              <h2
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '60px',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#dfe2eb',
                  marginBottom: '8px',
                  lineHeight: 1,
                }}
              >
                R$ 4.280,50
              </h2>
              <p
                style={{
                  color: '#cbc3d9',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '18px',
                }}
              >
                Seus gastos estão 28% abaixo da média do mês passado.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: '"Inter", sans-serif',
                    color: '#94a3b8',
                  }}
                >
                  Progresso do Limite: R$ 6.000,00
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: '"Inter", sans-serif',
                    color: '#cdbdff',
                    fontWeight: 700,
                  }}
                >
                  71%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '12px',
                  backgroundColor: '#31353c',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '71%',
                    backgroundImage:
                      'linear-gradient(to right, #5d21df, #cdbdff)',
                    borderRadius: '9999px',
                  }}
                />
              </div>
            </div>
            {/* Abstract Background Texture */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '256px',
                height: '256px',
                backgroundColor: 'rgba(205, 189, 255, 0.1)',
                filter: 'blur(100px)',
                zIndex: -1,
                borderRadius: '9999px',
              }}
            />
          </div>

          {/* Action Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Link
              href="/add-expense"
              style={{
                flex: 1,
                backgroundColor: '#262a31',
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 200ms',
                border: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '140px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#353940';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#262a31';
              }}
            >
              <span style={{ fontSize: '32px', marginBottom: '16px' }}>➕</span>
              <span
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                Adicionar gasto
              </span>
              <span style={{ color: '#94a3b8', fontSize: '12px', marginTop: '4px' }}>
                Registre uma nova saída rápida
              </span>
            </Link>
            <Link
              href="/alerts"
              style={{
                flex: 1,
                backgroundColor: '#262a31',
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 200ms',
                border: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '140px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#353940';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#262a31';
              }}
            >
              <span style={{ fontSize: '32px', marginBottom: '16px' }}>⚠️</span>
              <span
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                Configurar alertas
              </span>
              <span style={{ color: '#94a3b8', fontSize: '12px', marginTop: '4px' }}>
                Gerencie notificações de limite
              </span>
            </Link>
          </div>
        </div>

        {/* Transactions & Analytics Bento */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
          {/* Recent Transactions List */}
          <div
            style={{
              gridColumn: 'span 3',
              backgroundColor: '#1c2026',
              padding: '32px',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '24px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Transações Recentes
              </h3>
              <Link
                href="/transactions"
                style={{
                  color: '#cdbdff',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Ver todas
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Transaction Item 1 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#262a31',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cdbdff',
                      fontSize: '20px',
                    }}
                  >
                    🛒
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: '#dfe2eb',
                        margin: 0,
                      }}
                    >
                      Mercado Central
                    </h4>
                    <p
                      style={{
                        color: '#64748b',
                        fontSize: '12px',
                        margin: '4px 0 0 0',
                      }}
                    >
                      Alimentação • Hoje, 14:20
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#ffb4ab',
                  }}
                >
                  - R$ 342,20
                </span>
              </div>

              {/* Transaction Item 2 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#262a31',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cdbdff',
                      fontSize: '20px',
                    }}
                  >
                    ⛽
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: '#dfe2eb',
                        margin: 0,
                      }}
                    >
                      Posto de Gasolina
                    </h4>
                    <p
                      style={{
                        color: '#64748b',
                        fontSize: '12px',
                        margin: '4px 0 0 0',
                      }}
                    >
                      Transporte • Ontem
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#ffb4ab',
                  }}
                >
                  - R$ 215,00
                </span>
              </div>

              {/* Transaction Item 3 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#262a31',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cdbdff',
                      fontSize: '20px',
                    }}
                  >
                    🏠
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: '#dfe2eb',
                        margin: 0,
                      }}
                    >
                      Aluguel
                    </h4>
                    <p
                      style={{
                        color: '#64748b',
                        fontSize: '12px',
                        margin: '4px 0 0 0',
                      }}
                    >
                      Moradia • 05 Jun
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#ffb4ab',
                  }}
                >
                  - R$ 2.450,00
                </span>
              </div>
            </div>
          </div>

          {/* Categorical Insights */}
          <div
            style={{
              gridColumn: 'span 2',
              backgroundColor: '#181c22',
              padding: '32px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}
            >
              Categorias
            </h3>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
              {/* Category 1 - Moradia */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '48px',
                    backgroundColor: '#cdbdff',
                    borderRadius: '9999px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      marginBottom: '4px',
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>Moradia</span>
                    <span style={{ color: '#94a3b8' }}>57%</span>
                  </div>
                  <div
                    style={{
                      height: '4px',
                      backgroundColor: '#31353c',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '57%',
                        backgroundColor: '#cdbdff',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Category 2 - Alimentação */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '48px',
                    backgroundColor: '#dab9ff',
                    borderRadius: '9999px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      marginBottom: '4px',
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>Alimentação</span>
                    <span style={{ color: '#94a3b8' }}>22%</span>
                  </div>
                  <div
                    style={{
                      height: '4px',
                      backgroundColor: '#31353c',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '22%',
                        backgroundColor: '#dab9ff',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Category 3 - Outros */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '48px',
                    backgroundColor: '#b0c6ff',
                    borderRadius: '9999px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      marginBottom: '4px',
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>Outros</span>
                    <span style={{ color: '#94a3b8' }}>21%</span>
                  </div>
                  <div
                    style={{
                      height: '4px',
                      backgroundColor: '#31353c',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '21%',
                        backgroundColor: '#b0c6ff',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '32px',
                padding: '16px',
                backgroundColor: '#262a31',
                borderRadius: '12px',
                border: '1px solid rgba(73, 68, 86, 0.2)',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  color: '#cbc3d9',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                <span style={{ fontWeight: 700, color: '#cdbdff' }}>Dica Editorial:</span> Você
                economizou R$ 420,00 em lazer este mês. Considere investir esse valor em sua
                reserva de emergência.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Decorative Element */}
        <div
          style={{
            width: '100%',
            height: '128px',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#31353c',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '48px',
            paddingRight: '48px',
          }}
        >
          <div style={{ zIndex: 10 }}>
            <p
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '32px',
                fontWeight: 900,
                color: '#dfe2eb',
                opacity: 0.4,
                margin: 0,
              }}
            >
              CAIXA INVISÍVEL
            </p>
            <p
              style={{
                color: '#cdbdff',
                fontFamily: '"Inter", sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                marginTop: '8px',
                margin: '8px 0 0 0',
              }}
            >
              SECURE FINANCIAL VAULT
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(to right, transparent, rgba(205, 189, 255, 0.05), rgba(205, 189, 255, 0.1))',
            }}
          />
        </div>
      </div>
    </>
  );
}
