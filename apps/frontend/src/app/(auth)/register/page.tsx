'use client';

import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';

export default function RegisterPage() {
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
            Criar Conta.
          </h2>
          <p style={{ color: '#94A3B8', fontWeight: 500, margin: '8px 0 0 0' }}>
            Comece sua jornada de transparência financeira.
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
          <SignUp
            routing="hash"
            appearance={{
              variables: {
                colorPrimary: '#8B5CF6',
                colorBackground: 'transparent',
                colorText: '#F1F5F9',
                colorInputText: '#F1F5F9',
                colorInputBackground: '#0C0C24',
              },
              elements: {
                card: 'bg-transparent shadow-none w-full max-w-full',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                formButtonPrimary: 'bg-gradient-to-r from-indigo-800 to-purple-400 text-white font-bold py-4 rounded-lg',
                formFieldInput: 'bg-[#0C0C24] border-slate-700/30 text-slate-100 p-3 rounded-lg',
                formFieldLabel: 'text-slate-400 font-medium',
                footerActionText: 'hidden',
                footerActionLink: 'hidden'
              }
            }}
          />

          {/* Divider */}
          <div style={{ position: 'relative', marginTop: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, borderTop: '1px solid rgba(45, 68, 100, 0.2)' }} />
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

          {/* Login Link */}
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#cbc3d9' }}>
            Já tem uma conta?{' '}
            <Link
              href="/login"
              style={{
                color: '#8B5CF6',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Faça login
            </Link>
          </p>
        </div>

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
    </div>
  );
}
