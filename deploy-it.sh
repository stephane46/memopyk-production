#!/bin/bash

# MEMOPYK Production Deployment Script
# Complete one-click deployment with all credentials

set -e

echo "🚀 MEMOPYK Production Deployment"
echo "📍 $(pwd) at $(date)"

# Validate environment
if [ ! -f "docker-compose.yaml" ]; then
    echo "❌ Missing docker-compose.yaml"
    exit 1
fi

# Production environment with all credentials
echo "🔧 Configuring production environment..."
cat > .env << 'EOF'
DATABASE_PASSWORD=8rcP03lp6vxrzCeeW1tkJCKa5yHSm04Y
DATABASE_URL=postgresql://postgres:8rcP03lp6vxrzCeeW1tkJCKa5yHSm04Y@supabase.memopyk.org:5432/postgres
SUPABASE_URL=https://supabase.memopyk.org
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYm5ybHNrZGR5cGx2eG96ZmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDMzODU5OCwiZXhwIjoyMDM1OTE0NTk4fQ.dummy
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYm5ybHNrZGR5cGx2eG96ZmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzMzg1OTgsImV4cCI6MjAzNTkxNDU5OH0.dummy
NODE_ENV=production
PORT=3000
PUBLIC_DIR=/usr/src/app/dist/public
SESSION_SECRET=memopyk-production-secret-2025
EOF

# Container deployment
echo "🛑 Stopping existing containers..."
docker compose down --remove-orphans || true

echo "🧹 Cleanup..."
docker system prune -f

echo "🏗️ Building production containers..."
docker compose up -d --build

echo "⏳ Waiting 30 seconds for startup..."
sleep 30

# Health verification
echo "🏥 Health checks..."
for i in {1..15}; do
    if curl -f -s http://localhost:3000/health > /dev/null; then
        echo "✅ Service healthy!"
        break
    else
        echo "⏳ Attempt $i/15..."
        sleep 10
    fi
done

echo ""
echo "📊 Status:"
docker compose ps

echo ""
echo "🎉 MEMOPYK DEPLOYED!"
echo "🌐 Access:"
echo "   • https://new.memopyk.com"
echo "   • https://new.memopyk.com/admin (password: memopyk2025admin)"
echo "   • Database: supabase.memopyk.org:5432"
echo "   • SSL: Managed by Traefik"
