'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div
      style={{
        backgroundColor: '#050514',
        color: '#dfe2eb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <main style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        {/* Header */}
        <header style={{ width: '100%', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, #312E81 0%, #4338CA 35%, #7C3AED 70%, #C084FC 100%)',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)',
              }}
            >
              <span style={{ fontSize: '20px' }}>💳</span>
            </div>
            <h1
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '18px',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#F1F5F9',
                margin: 0,
              }}
            >
              Caixa Invisível
            </h1>
          </div>
          <h2
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: '40px',
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#F1F5F9',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Editorial Finance.
          </h2>
          <p style={{ color: '#94A3B8', fontWeight: 500, marginTop: '8px', margin: '8px 0 0 0' }}>
            Acesse sua transparência financeira.
          </p>
        </header>

        {/* Form Container */}
        <div
          style={{
            width: '100%',
            background: 'linear-gradient(160deg, #0C0C24 0%, #161632 100%)',
            border: '1px solid rgba(139, 92, 246, 0.1)',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Login submitted!');
            }}
          >
            {/* Email Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#94A3B8',
                  marginLeft: '4px',
                }}
              >
                Email
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: '#0C0C24',
                    border: '1px solid rgba(51, 65, 85, 0.3)',
                    color: '#F1F5F9',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '14px',
                    transition: 'all 200ms',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '4px', marginRight: '4px' }}>
                <label
                  htmlFor="password"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#94A3B8',
                  }}
                >
                  Senha
                </label>
                <a
                  href="#"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#8B5CF6',
                    textDecoration: 'none',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C7B2FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8B5CF6')}
                >
                  Esqueci minha senha
                </a>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  style={{
                    width: '100%',
                    backgroundColor: '#0C0C24',
                    border: '1px solid rgba(51, 65, 85, 0.3)',
                    color: '#F1F5F9',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '14px',
                    transition: 'all 200ms',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #312E81 0%, #4338CA 35%, #7C3AED 70%, #C084FC 100%)',
                color: 'white',
                fontWeight: 700,
                paddingTop: '16px',
                paddingBottom: '16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontFamily: '"Manrope", sans-serif',
                fontSize: '14px',
                letterSpacing: '-0.01em',
                boxShadow: '0 8px 16px rgba(139, 92, 246, 0.2)',
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(139, 92, 246, 0.2)';
              }}
            >
              Entrar
              <span style={{ fontSize: '16px' }}>→</span>
            </button>
          </form>

          {/* Divider */}
          <div style={{ position: 'relative', marginTop: '40px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, borderTop: '1px solid rgba(51, 65, 85, 0.2)' }} />
            <span
              style={{
                marginLeft: '16px',
                marginRight: '16px',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#475569',
              }}
            >
              OU
            </span>
            <div style={{ flex: 1, borderTop: '1px solid rgba(51, 65, 85, 0.2)' }} />
          </div>

          {/* Register Link */}
          <Link
            href="/register"
            style={{
              width: '100%',
              backgroundColor: 'rgba(30, 30, 69, 0.5)',
              color: '#F1F5F9',
              fontWeight: 600,
              paddingTop: '16px',
              paddingBottom: '16px',
              borderRadius: '8px',
              border: '1px solid rgba(51, 65, 85, 0.2)',
              cursor: 'pointer',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
              fontFamily: '"Manrope", sans-serif',
              fontSize: '14px',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(30, 30, 69, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(30, 30, 69, 0.5)';
            }}
          >
            Criar conta
          </Link>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: '48px', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              opacity: 0.3,
              transition: 'opacity 200ms',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.3')}
          >
            <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8' }}>
              Segurança Nível Bancário
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8' }}>
              Suporte 24/7
            </span>
          </div>
        </footer>

        {/* Background Gradients */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -10,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #312E81 0%, #4338CA 35%, #7C3AED 70%, #C084FC 100%)',
              opacity: 0.2,
              filter: 'blur(140px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              backgroundColor: 'rgba(75, 56, 170, 0.2)',
              opacity: 0.2,
              filter: 'blur(120px)',
            }}
          />
        </div>
      </main>

      {/* Side Quote - Desktop Only */}
      <div
        style={{
          display: 'none',
          position: 'fixed',
          left: '48px',
          bottom: '48px',
          maxWidth: '360px',
          zIndex: 20,
        }}
      >
        <div
          style={{
            padding: '24px',
            backgroundColor: 'rgba(24, 28, 34, 0.4)',
            backdropFilter: 'blur(60px)',
            border: '1px solid rgba(139, 92, 246, 0.1)',
            borderRadius: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span style={{ color: '#8B5CF6', marginBottom: '16px', display: 'block', fontSize: '20px' }}>💡</span>
          <p
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#F1F5F9',
              lineHeight: 1.4,
            }}
          >
            "A clareza financeira é o primeiro passo para a liberdade invisível."
          </p>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: '#94A3B8',
              marginTop: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: '12px 0 0 0',
            }}
          >
            Relatório Editorial 2024
          </p>
        </div>
      </div>
    </div>
  );
}

