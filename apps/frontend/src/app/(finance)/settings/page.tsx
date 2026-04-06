'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');

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
          Configurações
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

      <div style={{ padding: '48px', maxWidth: '1344px', margin: '0 auto', display: 'flex', gap: '48px' }}>
        {/* Settings Sidebar */}
        <aside
          style={{
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {[
            { id: 'account', label: '👤 Conta', icon: '👤' },
            { id: 'security', label: '🔒 Segurança', icon: '🔒' },
            { id: 'notifications', label: '🔔 Notificações', icon: '🔔' },
            { id: 'privacy', label: '👁️ Privacidade', icon: '👁️' },
            { id: 'appearance', label: '🎨 Aparência', icon: '🎨' },
            { id: 'data', label: '💾 Dados', icon: '💾' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 16px',
                backgroundColor: activeTab === tab.id ? '#262a31' : 'transparent',
                color: activeTab === tab.id ? '#cdbdff' : '#a0a3b1',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: '"Manrope", sans-serif',
                fontWeight: activeTab === tab.id ? 600 : 500,
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(38, 42, 49, 0.5)';
                  e.currentTarget.style.color = '#dfe2eb';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#a0a3b1';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Settings Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Account Settings */}
          {activeTab === 'account' && (
            <>
              <section>
                <h2
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    margin: '0 0 24px 0',
                  }}
                >
                  Informações da Conta
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Profile Picture */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '24px',
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        backgroundColor: '#262a31',
                        overflow: 'hidden',
                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPTP3gFMHBYNcnhz3rDORTmNBtzz8dOgtGOFvoc7FuvtrPfG21WacxqpPpT2YwJ02-6JTKHvd2Q40M4QM2q9W0KSNLxL0dImS53HDiqnLGDewrkY-f-NJy8u5s91Ygtq0p5Cgd_g1QJRypFZNCpLlPjSZTQWOReEyWsMKUnBC5ih9WCudVnEOSd4Yhc6t1nLPKpWpNWenG69G27uUlmKnHtLim6Yz0mOPrIRNkW25ErxAfhHBR2lUSu6Ysu_wYKmNgmPm3gaw5Kas")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div>
                      <h4
                        style={{
                          fontFamily: '"Manrope", sans-serif',
                          fontWeight: 700,
                          margin: 0,
                          marginBottom: '8px',
                        }}
                      >
                        Foto de Perfil
                      </h4>
                      <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0, marginBottom: '12px' }}>
                        Formato: JPG, PNG (máximo 5MB)
                      </p>
                      <button
                        style={{
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          backgroundColor: '#262a31',
                          color: '#cdbdff',
                          border: '1px solid rgba(205, 189, 255, 0.2)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          transition: 'all 200ms',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(38, 42, 49, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#262a31';
                        }}
                      >
                        Alterar
                      </button>
                    </div>
                  </div>

                  {/* Account Details */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbc3d9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        defaultValue="João Silva"
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
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbc3d9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="joao.silva@exemplo.com"
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
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbc3d9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Telefone
                      </label>
                      <input
                        type="tel"
                        defaultValue="+55 11 98765-4321"
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
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbc3d9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Data de Nascimento
                      </label>
                      <input
                        type="date"
                        defaultValue="1990-05-15"
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
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                        }}
                      />
                    </div>
                  </div>

                  {/* Save Button */}
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
                      fontSize: '14px',
                      transition: 'all 200ms',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Salvar Alterações
                  </button>
                </div>
              </section>
            </>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <>
              <section>
                <h2
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    margin: '0 0 24px 0',
                  }}
                >
                  Segurança da Conta
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Change Password */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                        Senha
                      </h4>
                      <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0 }}>
                        Última alteração há 3 meses
                      </p>
                    </div>
                    <button
                      style={{
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        backgroundColor: '#262a31',
                        color: '#cdbdff',
                        border: '1px solid rgba(205, 189, 255, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      Alterar
                    </button>
                  </div>

                  {/* Two Factor Authentication */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                        Autenticação de Dois Fatores
                      </h4>
                      <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0 }}>
                        Adicione uma camada extra de segurança
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '48px',
                        height: '24px',
                        backgroundColor: '#31353c',
                        borderRadius: '9999px',
                        padding: '2px',
                        cursor: 'pointer',
                        transition: 'all 200ms',
                      }}
                      onClick={(e) => {
                        const toggle = e.currentTarget;
                        const isActive = toggle.style.backgroundColor === 'rgb(205, 189, 255)';
                        toggle.style.backgroundColor = isActive ? '#31353c' : '#cdbdff';
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: '#10141a',
                          borderRadius: '9999px',
                          transition: 'all 200ms',
                        }}
                      />
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                    }}
                  >
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: '0 0 16px 0' }}>
                      Sessões Ativas
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px',
                          backgroundColor: '#262a31',
                          borderRadius: '8px',
                        }}
                      >
                        <div>
                          <p style={{ margin: 0, fontWeight: 600, marginBottom: '4px' }}>💻 Desktop - Chrome</p>
                          <p style={{ margin: 0, fontSize: '12px', color: '#cbc3d9' }}>São Paulo, Brasil • Ativo agora</p>
                        </div>
                        <button
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#ffb4ab',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 600,
                          }}
                        >
                          Sair
                        </button>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px',
                          backgroundColor: '#262a31',
                          borderRadius: '8px',
                        }}
                      >
                        <div>
                          <p style={{ margin: 0, fontWeight: 600, marginBottom: '4px' }}>📱 Mobile - Safari</p>
                          <p style={{ margin: 0, fontSize: '12px', color: '#cbc3d9' }}>São Paulo, Brasil • Há 12 horas</p>
                        </div>
                        <button
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#ffb4ab',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 600,
                          }}
                        >
                          Sair
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <>
              <section>
                <h2
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    margin: '0 0 24px 0',
                  }}
                >
                  Preferências de Notificações
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Alertas de Limite de Gasto', description: 'Receba notificações quando se aproximar do limite mensal' },
                    { label: 'Lembretes de Orçamento', description: 'Lembretes semanais sobre seu orçamento' },
                    { label: 'Transações Recentes', description: 'Notificações de novas transações' },
                    { label: 'Dicas Financeiras', description: 'Recomendações de economia e investimento' },
                  ].map((notif, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#1c2026',
                        padding: '24px',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                          {notif.label}
                        </h4>
                        <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0 }}>
                          {notif.description}
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '48px',
                          height: '24px',
                          backgroundColor: '#cdbdff',
                          borderRadius: '9999px',
                          padding: '2px',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            marginLeft: 'auto',
                            marginRight: '2px',
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#10141a',
                            borderRadius: '9999px',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Privacy Settings */}
          {activeTab === 'privacy' && (
            <>
              <section>
                <h2
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    margin: '0 0 24px 0',
                  }}
                >
                  Privacidade e Dados
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Perfil Público', description: 'Permita que outros usuários vejam seu perfil' },
                    { label: 'Análise de Dados', description: 'Nos ajude a melhorar compartilhando dados de uso' },
                    { label: 'Marketing', description: 'Receba comunicações sobre promoções e novos recursos' },
                  ].map((privacy, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#1c2026',
                        padding: '24px',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                          {privacy.label}
                        </h4>
                        <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0 }}>
                          {privacy.description}
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '48px',
                          height: '24px',
                          backgroundColor: '#31353c',
                          borderRadius: '9999px',
                          padding: '2px',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#10141a',
                            borderRadius: '9999px',
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Delete Account */}
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 180, 171, 0.1)',
                      border: '1px solid rgba(255, 180, 171, 0.2)',
                      padding: '24px',
                      borderRadius: '12px',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: '"Manrope", sans-serif',
                        fontWeight: 700,
                        margin: 0,
                        marginBottom: '4px',
                        color: '#ffb4ab',
                      }}
                    >
                      Deletar Conta
                    </h4>
                    <p style={{ fontSize: '12px', color: '#cbc3d9', margin: '0 0 12px 0' }}>
                      Esta ação é permanente e não pode ser desfeita
                    </p>
                    <button
                      style={{
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        backgroundColor: '#ffb4ab',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      Deletar Minha Conta
                    </button>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Appearance Settings */}
          {activeTab === 'appearance' && (
            <>
              <section>
                <h2
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    margin: '0 0 24px 0',
                  }}
                >
                  Aparência
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Theme Selection */}
                  <div>
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: '0 0 12px 0' }}>
                      Tema
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                      {[
                        { name: 'Escuro', color: '#10141a' },
                        { name: 'Claro', color: '#f1f5f9' },
                        { name: 'Automático', color: '#31353c' },
                      ].map((theme) => (
                        <button
                          key={theme.name}
                          style={{
                            padding: '16px',
                            backgroundColor: '#1c2026',
                            border: theme.name === 'Escuro' ? '2px solid #cdbdff' : '1px solid rgba(73, 68, 86, 0.3)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 200ms',
                          }}
                          onMouseEnter={(e) => {
                            if (theme.name !== 'Escuro') {
                              e.currentTarget.style.borderColor = 'rgba(205, 189, 255, 0.5)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (theme.name !== 'Escuro') {
                              e.currentTarget.style.borderColor = 'rgba(73, 68, 86, 0.3)';
                            }
                          }}
                        >
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '8px',
                              backgroundColor: theme.color,
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          />
                          <span style={{ fontSize: '12px', fontWeight: 600 }}>{theme.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language Selection */}
                  <div>
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: '0 0 12px 0' }}>
                      Idioma
                    </h4>
                    <select
                      style={{
                        width: '100%',
                        backgroundColor: '#262a31',
                        border: '1px solid rgba(73, 68, 86, 0.3)',
                        color: '#dfe2eb',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        fontFamily: '"Inter", sans-serif',
                        cursor: 'pointer',
                      }}
                      defaultValue="pt-BR"
                    >
                      <option value="pt-BR">Português (Brasil)</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>

                  {/* Font Size */}
                  <div>
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: '0 0 12px 0' }}>
                      Tamanho da Fonte
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px' }}>A</span>
                      <input
                        type="range"
                        min="12"
                        max="18"
                        defaultValue="14"
                        style={{ flex: 1 }}
                      />
                      <span style={{ fontSize: '16px' }}>A</span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Data Settings */}
          {activeTab === 'data' && (
            <>
              <section>
                <h2
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '24px',
                    margin: '0 0 24px 0',
                  }}
                >
                  Dados e Privacidade
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Export Data */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                        Exportar Dados
                      </h4>
                      <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0 }}>
                        Baixe uma cópia de seus dados em JSON ou CSV
                      </p>
                    </div>
                    <button
                      style={{
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        backgroundColor: '#262a31',
                        color: '#cdbdff',
                        border: '1px solid rgba(205, 189, 255, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      Exportar
                    </button>
                  </div>

                  {/* Clear Cache */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '4px' }}>
                        Limpar Cache
                      </h4>
                      <p style={{ fontSize: '12px', color: '#cbc3d9', margin: 0 }}>
                        Libere espaço de armazenamento local (~2.5 MB)
                      </p>
                    </div>
                    <button
                      style={{
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        backgroundColor: '#262a31',
                        color: '#cdbdff',
                        border: '1px solid rgba(205, 189, 255, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      Limpar
                    </button>
                  </div>

                  {/* Storage Info */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                    }}
                  >
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '16px' }}>
                      Armazenamento
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '12px',
                            marginBottom: '8px',
                          }}
                        >
                          <span>Espaço Usado</span>
                          <span>5.2 MB / 100 MB</span>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: '8px',
                            backgroundColor: '#262a31',
                            borderRadius: '9999px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: '5.2%',
                              backgroundColor: '#cdbdff',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* API Access */}
                  <div
                    style={{
                      backgroundColor: '#1c2026',
                      padding: '24px',
                      borderRadius: '12px',
                    }}
                  >
                    <h4 style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, margin: 0, marginBottom: '8px' }}>
                      Chave de API
                    </h4>
                    <p style={{ fontSize: '12px', color: '#cbc3d9', margin: '0 0 12px 0' }}>
                      Use para integração com aplicações externas
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                      }}
                    >
                      <input
                        type="password"
                        defaultValue="sk_live_****...****"
                        readOnly
                        style={{
                          flex: 1,
                          backgroundColor: '#262a31',
                          border: '1px solid rgba(73, 68, 86, 0.3)',
                          color: '#dfe2eb',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      />
                      <button
                        style={{
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          backgroundColor: '#262a31',
                          color: '#cdbdff',
                          border: '1px solid rgba(205, 189, 255, 0.2)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        Regenerar
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}
