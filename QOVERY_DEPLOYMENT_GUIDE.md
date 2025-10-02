# Qovery Deployment Guide for FIC Croatia

This guide will walk you through deploying your French Innovation Club Croatia website (Next.js frontend + Go API backend) to AWS using Qovery.

## 📋 Prerequisites

Before you begin, make sure you have:

1. **AWS Account** with appropriate permissions
2. **Qovery Account** (sign up at https://www.qovery.com)
3. **GitHub Repository** with your code pushed
4. **Domain Name** (optional but recommended)

## 🏗️ Architecture Overview

Your application consists of:
- **Frontend**: Next.js app (Port 3000)
- **Backend**: Go API (Port 8080)
- **Database**: PostgreSQL

## 🚀 Step-by-Step Deployment

### Phase 1: Qovery Initial Setup (15 minutes)

#### 1.1 Create Qovery Account
1. Go to https://www.qovery.com
2. Sign up with your GitHub account
3. Authorize Qovery to access your repositories

#### 1.2 Connect AWS Account
1. In Qovery Console, navigate to **Organization Settings**
2. Click on **Cloud Accounts** → **Add Cloud Account**
3. Select **AWS**
4. Follow the instructions to:
   - Create an IAM user in your AWS account
   - Attach the Qovery-provided policy
   - Copy the Access Key ID and Secret Access Key
   - Paste them into Qovery
5. Wait ~15 minutes for Qovery to provision your Kubernetes cluster

#### 1.3 Create a Project
1. Click **Create Project**
2. Name it: `FIC Croatia`
3. Click **Create**

### Phase 2: Deploy PostgreSQL Database

#### 2.1 Create Environment
1. Inside your project, click **Create Environment**
2. Name it: `Production`
3. Select your AWS cluster
4. Click **Create**

#### 2.2 Add PostgreSQL Database
1. In the Production environment, click **Add Service** → **Database**
2. Select **PostgreSQL**
3. Configure:
   - **Name**: `fic-postgres`
   - **Version**: `16`
   - **Mode**: Container (for testing) or Managed (for production)
   - **Instance Type**: db.t3.micro (free tier eligible)
   - **Storage**: 20 GB
4. Click **Create**
5. **Important**: Copy the database credentials that Qovery generates:
   - Host
   - Port
   - Database Name
   - Username
   - Password

### Phase 3: Deploy Backend (Go API)

#### 3.1 Push Backend to GitHub
Make sure your `fic-api` folder is in your GitHub repository with:
- `Dockerfile` (already created)
- `main.go`
- `go.mod` and `go.sum`
- `init.sql`

#### 3.2 Create Backend Application in Qovery
1. In your Production environment, click **Add Service** → **Application**
2. Configure:
   - **Name**: `fic-api`
   - **Source**: Select your GitHub repository
   - **Branch**: `main`
   - **Root Application Path**: `/fic-api`
   - **Build Mode**: `Docker`
   - **Dockerfile Path**: `Dockerfile` (relative to root path)
3. Click **Next**

#### 3.3 Configure Backend Port
1. In **Port** section:
   - **Port**: `8080`
   - **Protocol**: `HTTP`
   - **Public**: ✅ Enable
2. Click **Next**

#### 3.4 Set Backend Environment Variables
1. Add the following environment variables:

   | Variable | Value | Type |
   |----------|-------|------|
   | `DATABASE_URL` | `postgresql://{{fic-postgres.username}}:{{fic-postgres.password}}@{{fic-postgres.host}}:{{fic-postgres.port}}/{{fic-postgres.database}}` | Secret |
   | `PORT` | `8080` | Value |
   | `FRONTEND_URL` | (will add after frontend deployment) | Value |

   *Note: Qovery will automatically replace `{{service.variable}}` with actual values*

2. Click **Create**

#### 3.5 Deploy Backend
1. Click **Deploy**
2. Wait for the deployment to complete (~5 minutes)
3. Once deployed, copy the **External URL** (e.g., `https://fic-api-xxx.qovery.io`)

#### 3.6 Initialize Database
1. In Qovery Console, go to your `fic-postgres` database
2. Click **Actions** → **Open Terminal**
3. Run:
```bash
psql -U postgres -d fic_db
```
4. Paste the content of `init.sql` to create tables
5. Type `\q` to exit

Or use a SQL client like DBeaver to connect and run `init.sql`.

### Phase 4: Deploy Frontend (Next.js)

#### 4.1 Push Frontend to GitHub
Make sure your frontend code is pushed with:
- `Dockerfile` (already created)
- `next.config.ts` (updated with `output: 'standalone'`)
- `.dockerignore`
- All source files

#### 4.2 Create Frontend Application in Qovery
1. In your Production environment, click **Add Service** → **Application**
2. Configure:
   - **Name**: `fic-website`
   - **Source**: Select your GitHub repository
   - **Branch**: `main`
   - **Root Application Path**: `/` (root of repo)
   - **Build Mode**: `Docker`
   - **Dockerfile Path**: `Dockerfile`
3. Click **Next**

#### 4.3 Configure Frontend Port
1. In **Port** section:
   - **Port**: `3000`
   - **Protocol**: `HTTP`
   - **Public**: ✅ Enable
2. Click **Next**

#### 4.4 Set Frontend Environment Variables
1. Add the following environment variables:

   | Variable | Value | Type |
   |----------|-------|------|
   | `NEXT_PUBLIC_API_URL` | (paste the backend External URL from step 3.5) | Value |

2. Click **Create**

#### 4.5 Update Backend FRONTEND_URL
1. Go back to your `fic-api` application
2. Click **Settings** → **Environment Variables**
3. Update `FRONTEND_URL` to your frontend's External URL
4. Click **Save** and **Redeploy**

#### 4.6 Deploy Frontend
1. Click **Deploy**
2. Wait for deployment (~5-10 minutes)
3. Once deployed, you'll see the **External URL** (e.g., `https://fic-website-xxx.qovery.io`)

### Phase 5: Configure Custom Domain (Optional)

#### 5.1 Add Domain to Frontend
1. In your `fic-website` application, go to **Settings** → **Domains**
2. Click **Add Custom Domain**
3. Enter your domain: `www.ficcroatia.com`
4. Qovery will provide DNS records (CNAME or A record)

#### 5.2 Update DNS
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add the DNS records provided by Qovery:
   - Type: `CNAME`
   - Host: `www`
   - Value: (provided by Qovery)
   - TTL: `3600`
3. Wait for DNS propagation (~5-60 minutes)

#### 5.3 Enable HTTPS
1. In Qovery, your custom domain will automatically get an SSL certificate
2. Wait for the certificate to be issued (~5 minutes)
3. Your site will be accessible via `https://www.ficcroatia.com`

### Phase 6: Enable CORS (Backend)

Your Go API already has CORS configured in `main.go`, but make sure the `FRONTEND_URL` environment variable is set correctly.

Update the CORS configuration if needed:
```go
AllowedOrigins: []string{os.Getenv("FRONTEND_URL"), "http://localhost:3008"},
```

## 🔍 Testing Your Deployment

### Test Backend API
```bash
curl https://your-backend-url.qovery.io/health
```

Expected response:
```json
{"status":"ok"}
```

### Test Frontend
1. Open your frontend URL in a browser
2. Navigate to the Community page
3. Try joining the community - this will test the full stack

## 📊 Monitoring & Logs

### View Application Logs
1. In Qovery Console, click on your application (`fic-api` or `fic-website`)
2. Click **Logs** tab
3. You'll see real-time logs

### Monitor Resources
1. Click **Metrics** tab to see:
   - CPU usage
   - Memory usage
   - Request count
   - Response time

## 🔄 Continuous Deployment

Qovery automatically deploys when you push to GitHub:

1. Make changes to your code
2. Commit and push to `main` branch:
```bash
git add .
git commit -m "Update feature"
git push origin main
```
3. Qovery will automatically detect the push and redeploy

### Enable Auto-Deploy
1. Go to **Application Settings** → **Deployment**
2. Enable **Auto-Deploy**
3. Select branch: `main`

## 🌿 Preview Environments (Optional)

Create temporary environments for pull requests:

1. Go to **Environment Settings**
2. Click **Preview Environments**
3. Enable **Create Preview Environment on Pull Request**
4. Now, every PR will get its own temporary environment!

## 💰 Cost Estimation

**Free Tier (AWS)**:
- EC2 t3.micro: Free for 12 months
- RDS db.t3.micro: Free for 12 months
- 20 GB storage: Free

**After Free Tier (~$30-50/month)**:
- EC2 instances: ~$15/month
- RDS PostgreSQL: ~$15/month
- Load Balancer: ~$16/month
- Data transfer: ~$5/month

**Cost Optimization Tips**:
- Use Container mode for database (cheaper)
- Use smaller instance types
- Enable auto-scaling
- Use spot instances for non-production environments

## 🐛 Troubleshooting

### Frontend can't connect to Backend
1. Check `NEXT_PUBLIC_API_URL` is set correctly
2. Check backend CORS allows frontend URL
3. Check both apps are in the same environment

### Database connection failed
1. Verify `DATABASE_URL` environment variable
2. Check database is running (green status in Qovery)
3. Verify database credentials

### Build fails
1. Check Dockerfile syntax
2. Verify `output: 'standalone'` is in `next.config.ts`
3. Check logs for specific error messages

### Application crashes after deployment
1. Check application logs in Qovery
2. Verify all environment variables are set
3. Check port configuration matches your app

## 📚 Additional Resources

- [Qovery Documentation](https://hub.qovery.com/docs/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Qovery Support](https://discord.qovery.com/)

## ✅ Deployment Checklist

Before going live:

- [ ] Database is deployed and initialized
- [ ] Backend is deployed and `/health` endpoint works
- [ ] Frontend is deployed and loads
- [ ] Environment variables are configured
- [ ] Custom domain is configured (optional)
- [ ] SSL certificate is active
- [ ] Forms work (join community, contact, newsletter)
- [ ] Monitoring is set up
- [ ] Backups are configured for database
- [ ] Auto-deploy is enabled for `main` branch

---

**Need Help?** Contact Qovery support or check the [documentation](https://hub.qovery.com).

**Good luck with your deployment! 🚀**
