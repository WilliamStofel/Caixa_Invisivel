'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

export default function FinanceLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor: '#10141a', color: '#dfe2eb', minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '256px',
          height: '100vh',
          backgroundColor: '#10141a',
          borderRight: '1px solid rgba(148, 141, 162, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          zIndex: 50,
          overflowY: 'auto',
          fontFamily: '"Manrope", sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: 900,
            color: '#cdbdff',
            marginBottom: '32px',
            letterSpacing: '-0.025em',
          }}
        >
          💸 Caixa Invisível
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link
            href="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: '#1c2026',
              color: '#cdbdff',
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'all 200ms',
            }}
          >
            📊 Painel
          </Link>
          <Link
            href="/transactions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              color: '#a0a3b1',
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#dfe2eb';
              e.currentTarget.style.backgroundColor = '#262a31';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a3b1';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            💱 Transações
          </Link>
          <Link
            href="/budgets"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              color: '#a0a3b1',
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#dfe2eb';
              e.currentTarget.style.backgroundColor = '#262a31';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a3b1';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            📊 Orçamentos
          </Link>
          <Link
            href="/insights"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              color: '#a0a3b1',
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#dfe2eb';
              e.currentTarget.style.backgroundColor = '#262a31';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a3b1';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ✨ Insights
          </Link>
          <Link
            href="/settings"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              color: '#a0a3b1',
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#dfe2eb';
              e.currentTarget.style.backgroundColor = '#262a31';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a3b1';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ⚙️ Configurações
          </Link>
        </nav>

        {/* Add Transaction Button */}
        <Link
          href="/add-expense"
          style={{
            width: '100%',
            padding: '16px',
            marginBottom: '16px',
            background: 'linear-gradient(to bottom right, #cdbdff, #5d21df)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 200ms',
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          ➕ Adicionar Transação
        </Link>

        {/* Footer links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link
            href="/support"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              color: '#a0a3b1',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 200ms',
            }}
          >
            ❓ Suporte
          </Link>
          <Link
            href="/logout"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              color: '#a0a3b1',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 200ms',
            }}
          >
            🚪 Sair
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '256px', width: 'calc(100% - 256px)', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
