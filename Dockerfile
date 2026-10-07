FROM node:22-alpine AS builder

# Install Git LFS
RUN apk add --no-cache git git-lfs

WORKDIR /app

# Copy everything and pull LFS files
COPY . .
RUN git lfs install && git lfs pull

# Install dependencies and build
RUN npm ci && npm run build

# Use Caddy as the final image
FROM caddy:2.11-alpine
COPY --from=builder /app/dist /srv
