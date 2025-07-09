# Multi-stage Docker build for MEMOPYK
FROM node:18-alpine as builder

# Stage 1: Build stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Production runtime
FROM node:18-alpine
WORKDIR /app

# Install curl for health checks
RUN apk add --no-cache curl

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built application
COPY --from=builder /usr/src/app/dist ./dist
RUN mkdir -p public
COPY --from=builder /usr/src/app/dist/public ./public

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "--experimental-specifier-resolution=node", "dist/index.js"]