'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useInternalAuth } from '@/hooks/AuthContext';

export function RegisterFormFinance() {
  const router = useRouter();
  const { register } = useInternalAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await register(name, email, password);
      router.push('/dashboard');
      router.refresh();
    } catch (err: unknown) {
      console.error('Register failed:', err);
      const message =
        err instanceof Error
          ? err.message
          : 'Falha ao realizar registro. Tente novamente.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--finance-bg-light)',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'var(--finance-bg)',
          border: '1px solid var(--finance-border)',
          borderRadius: '0.5rem',
          padding: '2rem',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1
            className="finance-header-brand"
            style={{ marginBottom: '0.5rem' }}
          >
            💸 Caixa Invisível
          </h1>
          <p style={{ color: 'var(--finance-text-muted)', margin: 0 }}>
            Criar uma conta
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="finance-form">
          {error && (
            <div
              style={{
                background: '#FEE2E2',
                color: '#991B1B',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                marginBottom: '1rem',
              }}
            >
              {error}
            </div>
          )}

          <div className="finance-form-group">
            <label className="finance-label" htmlFor="name">
              Nome Completo
            </label>
            <input
              id="name"
              type="text"
              className="finance-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="finance-form-group">
            <label className="finance-label" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="finance-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="finance-form-group">
            <label className="finance-label" htmlFor="password">
              Crie uma Senha
            </label>
            <input
              id="password"
              type="password"
              className="finance-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className="finance-btn finance-btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? '⏳ Criando conta...' : '→ Criar Conta'}
          </button>
        </form>

        {/* Footer */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--finance-text-muted)' }}>
            Já tem uma conta?{' '}
            <Link
              href="/login"
              style={{
                color: 'var(--finance-primary)',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
