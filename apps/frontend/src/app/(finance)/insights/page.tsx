'use client';



export default function InsightsPage() {
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
          Insights Financeiros
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
        {/* Hero Insight Section */}
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '40px',
            backgroundColor: '#181c22',
            padding: '64px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none' }}>
            <div
              style={{
                position: 'absolute',
                top: '-96px',
                right: '-96px',
                width: '384px',
                height: '384px',
                backgroundColor: '#cdbdff',
                filter: 'blur(120px)',
                borderRadius: '9999px',
              }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 10 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(93, 33, 223, 0.2)',
                color: '#cdbdff',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                width: 'fit-content',
              }}
            >
              <span>✨</span> Atenção este mês
            </div>
            <h2
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '56px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
              }}
            >
              Você gastou <span style={{ color: '#cdbdff' }}>30% a mais</span> com delivery este mês.
            </h2>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '18px',
                color: '#cbc3d9',
                maxWidth: '500px',
              }}
            >
              Parece que a rotina está mais corrida. Que tal planejar as refeições do próximo fim de semana para
              equilibrar as contas?
            </p>
            <div style={{ paddingTop: '16px' }}>
              <button
                style={{
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  paddingTop: '16px',
                  paddingBottom: '16px',
                  backgroundColor: '#31353c',
                  color: '#cdbdff',
                  fontWeight: 700,
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 200ms',
                  fontFamily: '"Manrope", sans-serif',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#31353c')}
              >
                <span>🔄</span> Atualizar insights
              </button>
            </div>
          </div>
          <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 256 256">
                <circle cx="128" cy="128" r="110" fill="transparent" stroke="#262a31" strokeWidth="24" />
                <circle
                  cx="128"
                  cy="128"
                  r="110"
                  fill="transparent"
                  stroke="#5d21df"
                  strokeWidth="24"
                  strokeDasharray="691"
                  strokeDashoffset="207"
                  strokeLinecap="round"
                />
              </svg>
              <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '36px', fontWeight: 700 }}>30%</span>
                <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#cbc3d9' }}>
                  Aumento
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Layout for Comparison and Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {/* Weekly Comparison Card */}
          <div
            style={{
              gridColumn: 'span 2',
              backgroundColor: '#1c2026',
              borderRadius: '32px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '400px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                    color: '#cdbdff',
                    margin: 0,
                  }}
                >
                  Comparativo Semanal
                </h3>
                <p style={{ color: '#cbc3d9', margin: '0 0 0 0', fontFamily: '"Inter", sans-serif' }}>
                  Como você se saiu em relação à semana passada.
                </p>
              </div>
              <div
                style={{
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.3)',
                  color: '#b0c6ff',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 600,
                  fontSize: '12px',
                }}
              >
                <span>📉</span> 10% mais econômico
              </div>
            </div>

            {/* Simplified Chart Visualization */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '192px',
                gap: '16px',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
            >
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map((day, idx) => (
                <div key={day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: idx === 2 ? '#5d21df' : '#262a31',
                      borderRadius: '12px 12px 0 0',
                      height: ['80%', '60%', '40%', '70%', '90%', '30%', '20%'][idx],
                      boxShadow: idx === 2 ? '0 0 30px rgba(93, 33, 223, 0.3)' : 'none',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: idx === 2 ? '#cdbdff' : '#94a3b8',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fast Actions / Small Insights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div
              style={{
                backgroundColor: '#262a31',
                borderRadius: '32px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  backgroundColor: '#5d21df',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                💰
              </div>
              <h4 style={{ fontFamily: '"Manrope", sans-serif', fontSize: '18px', fontWeight: 700, margin: 0 }}>
                Meta de Economia
              </h4>
              <p
                style={{
                  color: '#cbc3d9',
                  fontSize: '12px',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Você está a apenas <span style={{ color: '#dfe2eb', fontWeight: 700 }}>R$ 150,00</span> de atingir sua meta
                reserva deste mês.
              </p>
              <div style={{ width: '100%', backgroundColor: '#1c2026', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
                <div
                  style={{
                    backgroundColor: '#cdbdff',
                    height: '100%',
                    width: '85%',
                    borderRadius: '9999px',
                    boxShadow: '0 0 10px rgba(205, 189, 255, 0.4)',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#31353c',
                borderRadius: '32px',
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                cursor: 'pointer',
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#353940')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#31353c')}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLiiMo8qAx1ers7xyG8ZCbwDMhpz02A-HO-_B1aVyyaPHcrsrk8C4toYJKhlnL70HqbsssHeZ1Gk0YO257rS8N4w6dwZIrnhz5NzKqELEKiBf6tIgnMiJZehPz_c6Dp4t3BLnpoYiI4IjeK9Z204uxo7AALu0f-Bd_K6NGWYK4lS-lReINdWP8oDDeiVUzBESaGeW5ImNgiRiwEpPkzA7Wpy_IEOI3dqIB_s1kUoK5HgUKCawAMyPb2dnKfLFWvKXShkHO9el_x9c")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#cdbdff',
                    fontWeight: 700,
                    margin: '0 0 4px 0',
                    fontFamily: '"Manrope", sans-serif',
                  }}
                >
                  Dica do Especialista
                </p>
                <h4
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    margin: 0,
                  }}
                >
                  Como reduzir taxas de assinatura em 15%
                </h4>
              </div>
              <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '18px' }}>→</span>
            </div>
          </div>
        </div>

        {/* Detailed Categories Bento */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h3
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Onde seu dinheiro está indo
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {/* Category 1 */}
            <div
              style={{
                backgroundColor: '#1c2026',
                padding: '24px',
                borderRadius: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: '#262a31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cdbdff',
                    fontSize: '18px',
                  }}
                >
                  🍽️
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffb4ab' }}>+30%</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#cbc3d9', fontSize: '12px', fontFamily: '"Inter", sans-serif' }}>
                  Delivery
                </span>
                <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '24px', fontWeight: 700 }}>R$ 1.240,00</span>
              </div>
            </div>

            {/* Category 2 */}
            <div
              style={{
                backgroundColor: '#1c2026',
                padding: '24px',
                borderRadius: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: '#262a31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cdbdff',
                    fontSize: '18px',
                  }}
                >
                  🚗
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#b0c6ff' }}>-12%</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#cbc3d9', fontSize: '12px', fontFamily: '"Inter", sans-serif' }}>
                  Transporte
                </span>
                <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '24px', fontWeight: 700 }}>R$ 450,00</span>
              </div>
            </div>

            {/* Category 3 */}
            <div
              style={{
                backgroundColor: '#1c2026',
                padding: '24px',
                borderRadius: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                border: '1px solid rgba(205, 189, 255, 0.1)',
                boxShadow: '0 8px 16px rgba(205, 189, 255, 0.05)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: '#262a31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cdbdff',
                    fontSize: '18px',
                  }}
                >
                  🛍️
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#cbc3d9' }}>Estável</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#cbc3d9', fontSize: '12px', fontFamily: '"Inter", sans-serif' }}>
                  Compras
                </span>
                <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '24px', fontWeight: 700 }}>R$ 890,00</span>
              </div>
            </div>

            {/* Category 4 */}
            <div
              style={{
                backgroundColor: '#1c2026',
                padding: '24px',
                borderRadius: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    backgroundColor: '#262a31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cdbdff',
                    fontSize: '18px',
                  }}
                >
                  ⚡
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffb4ab' }}>+5%</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#cbc3d9', fontSize: '12px', fontFamily: '"Inter", sans-serif' }}>
                  Contas Fixas
                </span>
                <span style={{ fontFamily: '"Manrope", sans-serif', fontSize: '24px', fontWeight: 700 }}>R$ 2.100,00</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
