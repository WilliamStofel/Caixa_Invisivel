FROM node:lts-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/backend/package.json ./apps/backend/
RUN npm ci --workspace=backend

FROM deps AS builder
WORKDIR /app
COPY apps/backend ./apps/backend
RUN npm run build --workspace=backend

FROM node:lts-alpine AS runner
WORKDIR /app
ENV PORT=3001
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE $PORT
CMD ["node", "apps/backend/dist/main"]