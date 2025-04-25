ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g pnpm
ARG TURBO_MAJOR_VERSION=2
RUN npm install -g turbo@^${TURBO_MAJOR_VERSION}
COPY . .
RUN turbo prune api --docker

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app
COPY --from=builder /app/out/json/ ./
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build --filter=api


FROM base AS packager
WORKDIR /app

# Install curl for the healthcheck
RUN apk add --no-cache curl

# copy root workspace files
COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/package.json ./package.json
COPY --from=installer /app/turbo.json ./turbo.json

# # copy @repo/utils files
# COPY --from=installer /app/packages/utils/dist ./packages/utils/dist
# COPY --from=installer /app/packages/utils/node_modules ./packages/utils/node_modules
# COPY --from=installer /app/packages/utils/package.json ./packages/utils/package.json

# copy api application files
COPY --from=installer /app/apps/api/dist ./apps/api/dist
COPY --from=installer /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=installer /app/apps/api/package.json ./apps/api/package.json

ENV NODE_ENV=production
RUN npm install -g pnpm
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

HEALTHCHECK --interval=30s --timeout=20s --retries=3 --start-period=15s \
  CMD curl -fSs localhost:8080/health || exit 1

EXPOSE 8080

CMD ["pnpm", "--filter=api", "start:prod"]