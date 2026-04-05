import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { AuthProvider } from '@/hooks/AuthContext';

export const metadata: Metadata = {
  title: 'Caixa Invisível',
  description: 'Controle financeiro editorial e minimalista',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <AuthProvider>
        <html lang="pt-BR">
          <body>{children}</body>
        </html>
      </AuthProvider>
    </ClerkProvider>
  );
}
