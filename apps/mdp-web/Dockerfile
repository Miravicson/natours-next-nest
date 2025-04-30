ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g pnpm
ARG TURBO_MAJOR_VERSION=2
RUN npm install -g turbo@^${TURBO_MAJOR_VERSION}
# generate zod-schemas for @repo/zod-schemas
RUN pnpm --filter=api exec prisma generate --schema ./prisma/schema.prisma 
COPY . .
RUN turbo prune web --docker

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app
COPY --from=builder /app/out/json/ ./
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build --filter=web

FROM base AS packager
WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/package.json ./package.json
COPY --from=installer /app/turbo.json ./turbo.json

# copy web application
COPY --from=installer /app/apps/web/.next ./apps/web/.next
COPY --from=installer /app/apps/web/public ./apps/web/public
COPY --from=installer /app/apps/web/package.json ./apps/web/package.json
COPY --from=installer /app/apps/web/next.config.js ./apps/web/next.config.js

# copy @repo/utils files
COPY --from=installer /app/packages/utils/dist ./packages/utils/dist
COPY --from=installer /app/packages/utils/node_modules ./packages/utils/node_modules
COPY --from=installer /app/packages/utils/package.json ./packages/utils/package.json

# copy @repo/zod-schemas files
COPY --from=installer /app/packages/prisma-client/dist ./packages/prisma-client/dist
COPY --from=installer /app/packages/prisma-client/node_modules ./packages/prisma-client/node_modules
COPY --from=installer /app/packages/prisma-client/package.json ./packages/prisma-client/package.json


ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
EXPOSE 3000

CMD ["pnpm", "--filter=web", "start"]