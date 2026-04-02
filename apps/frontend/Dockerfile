FROM node:lts-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/frontend/package.json ./apps/frontend/
RUN npm ci --workspace=frontend

FROM deps AS builder
WORKDIR /app
COPY apps/frontend/ ./apps/frontend/
RUN npm run build --workspace=frontend

FROM node:lts-alpine AS runner
WORKDIR /app
ENV PORT=3000
COPY --from=builder /app/apps/frontend/.next/standalone ./
COPY --from=builder /app/apps/frontend/.next/static ./apps/frontend/.next/static
EXPOSE $PORT
CMD ["node", "apps/frontend/server.js"]
