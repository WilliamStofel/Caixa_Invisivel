import type { NextConfig } from "next";
import path from "path";
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, "../../.env") });

const nextConfig: NextConfig = {
  /* config options here */
  distDir: process.env.VERCEL ? '.next' : undefined,
  reactCompiler: true,
  // No Vercel, o standalone não é necessário e o tracing é gerenciado pela plataforma.
  // No Docker, o standalone é obrigatório (veja Dockerfile).
  output: process.env.VERCEL ? undefined : 'standalone',

  // No monorepo, o root do workspace é o diretório pai.
  // AMBOS devem ter o mesmo valor ou ambos undefined para evitar conflitos.
  // No Vercel, a plataforma gerencia o root automaticamente.
  outputFileTracingRoot: process.env.VERCEL ? undefined : path.resolve(__dirname, "../.."),
  turbopack: process.env.VERCEL ? undefined : {
    root: path.resolve(__dirname, "../.."),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
};

export default nextConfig;
