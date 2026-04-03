'use client';

import Link from 'next/link';

export default function AddExpensePage() {
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
          Adicionar Gasto
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

      <div style={{ padding: '48px', maxWidth: '600px', margin: '0 auto' }}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Gasto adicionado com sucesso!');
          }}
        >
          {/* Amount Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#dfe2eb',
              }}
            >
              Valor (R$)
            </label>
            <input
              type="number"
              placeholder="0,00"
              step="0.01"
              required
              style={{
                backgroundColor: '#262a31',
                border: '1px solid rgba(73, 68, 86, 0.3)',
                color: '#dfe2eb',
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '16px',
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

          {/* Category Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#dfe2eb',
              }}
            >
              Categoria
            </label>
            <select
              required
              style={{
                backgroundColor: '#262a31',
                border: '1px solid rgba(73, 68, 86, 0.3)',
                color: '#dfe2eb',
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '16px',
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
              <option value="investimentos">Investimentos</option>
            </select>
          </div>

          {/* Date Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#dfe2eb',
              }}
            >
              Data
            </label>
            <input
              type="date"
              required
              style={{
                backgroundColor: '#262a31',
                border: '1px solid rgba(73, 68, 86, 0.3)',
                color: '#dfe2eb',
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '16px',
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
            />
          </div>

          {/* Description Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#dfe2eb',
              }}
            >
              Descrição (Opcional)
            </label>
            <textarea
              placeholder="Adicione uma descrição..."
              style={{
                backgroundColor: '#262a31',
                border: '1px solid rgba(73, 68, 86, 0.3)',
                color: '#dfe2eb',
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: '"Inter", sans-serif',
                fontSize: '16px',
                minHeight: '100px',
                resize: 'vertical',
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

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <button
              type="submit"
              style={{
                width: '100%',
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
              Salvar Gasto
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              style={{
                width: '100%',
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(205, 189, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Cancelar
            </button>
          </div>

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
        </form>
      </div>
    </>
  );
}
