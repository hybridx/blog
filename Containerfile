# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost:4321/api/health || exit 1
CMD ["node", "dist/server/entry.mjs"]
