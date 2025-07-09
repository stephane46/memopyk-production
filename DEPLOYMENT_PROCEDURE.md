# MEMOPYK VPS Deployment Procedure

## ⚠️ CRITICAL CHECKLIST - READ BEFORE EVERY DEPLOYMENT

### Pre-Deployment Requirements (NEVER SKIP)
- [ ] package-lock.json exists and will be copied to VPS
- [ ] DATABASE_PASSWORD is available in environment
- [ ] docker-compose.yaml exists locally
- [ ] Dockerfile exists locally
- [ ] Code is pushed to GitHub (stephane46/memopykCOM)

### Step 1: Prepare Files for VPS
```bash
# Check all required files exist
ls -la package-lock.json docker-compose.yaml Dockerfile

# Copy files to VPS
scp package-lock.json root@82.29.168.136:/opt/memopykCOM/
scp docker-compose.yaml root@82.29.168.136:/opt/memopykCOM/
scp Dockerfile root@82.29.168.136:/opt/memopykCOM/
```

### Step 2: SSH to VPS and Setup Environment
```bash
ssh root@82.29.168.136
cd /opt/memopykCOM

# CRITICAL: Set up .env with DATABASE_PASSWORD
echo "DATABASE_PASSWORD=8rcP03lp6vxrzCeeW1tkJCKa5yHSm04Y" > .env
echo "DATABASE_URL=postgresql://postgres:\${DATABASE_PASSWORD}@supabase.memopyk.org:5432/postgres" >> .env
echo "SUPABASE_URL=https://supabase.memopyk.org" >> .env
echo "SUPABASE_SERVICE_KEY=dummy" >> .env
echo "SUPABASE_ANON_KEY=dummy" >> .env
echo "NODE_ENV=production" >> .env
echo "PORT=3000" >> .env

# Verify .env file
cat .env
```

### Step 3: Deploy Application
```bash
# Pull latest code from GitHub
git fetch origin main
git reset --hard origin/main

# Stop existing containers
docker compose down

# Build and start new containers
docker compose up -d --build

# Wait for startup
sleep 20

# Check deployment status
docker compose ps
curl -f http://localhost:3000/health

# Check logs if needed
docker compose logs web
```

### Step 4: Verify Deployment
```bash
# Test website accessibility
curl -I https://new.memopyk.com

# Check admin panel
curl -I https://new.memopyk.com/admin
```

## Common Issues and Solutions

### "npm ci fails" - Missing package-lock.json
**Solution**: Copy package-lock.json to VPS before deployment
```bash
scp package-lock.json root@82.29.168.136:/opt/memopykCOM/
```

### "Database connection fails" - Missing DATABASE_PASSWORD
**Solution**: Set DATABASE_PASSWORD in .env
```bash
echo "DATABASE_PASSWORD=8rcP03lp6vxrzCeeW1tkJCKa5yHSm04Y" > .env
```

### "Container won't start" - Missing docker-compose.yaml
**Solution**: Copy docker-compose.yaml to VPS
```bash
scp docker-compose.yaml root@82.29.168.136:/opt/memopykCOM/
```

### "Build fails" - Missing dependencies
**Solution**: Ensure package-lock.json is present and run clean build
```bash
docker compose down
docker system prune -f
docker compose up -d --build
```

## Success Indicators
- [ ] `docker compose ps` shows container running
- [ ] `curl http://localhost:3000/health` returns 200 OK
- [ ] https://new.memopyk.com is accessible
- [ ] Admin panel at https://new.memopyk.com/admin works
- [ ] No error logs in `docker compose logs web`

## Emergency Rollback
If deployment fails:
```bash
cd /opt/memopykCOM
git log --oneline -5  # Find previous working commit
git reset --hard <previous-commit-hash>
docker compose down
docker compose up -d --build
```