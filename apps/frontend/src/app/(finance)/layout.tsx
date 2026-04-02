'use client';

import Link from 'next/link';

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="finance-container">
      <header className="finance-header">
        <Link href="/dashboard" className="finance-header-brand">
          💸 Caixa Invisível
        </Link>
      </header>
      <main className="finance-main">
        {children}
      </main>
      <footer style={{
        borderTop: '1px solid var(--finance-border)',
        padding: '1.5rem 1.25rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: 'var(--finance-text-muted)',
        marginTop: 'auto'
      }}>
        <p style={{ margin: 0 }}>
          Caixa Invisível © {new Date().getFullYear()} — Seu controle financeiro inteligente
        </p>
      </footer>
    </div>
  );
}
