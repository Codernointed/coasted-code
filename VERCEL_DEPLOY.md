# Deploying Coasted Code to Vercel

## Prerequisites
- Vercel CLI installed globally: `npm install -g vercel`
- Vercel account (free at vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to existing project or create new
   - Confirm settings

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository (`Codernointed/coasted-code`)
3. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click "Deploy"

## Configuration Files

- `vercel.json` - Vercel deployment configuration
- Build output: `dist/` folder

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `coastedcode.com`)
3. Follow DNS configuration instructions

## Environment Variables

If needed, add environment variables in:
- Vercel Dashboard → Project → Settings → Environment Variables

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment

## Useful Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# View deployment logs
vercel logs [deployment-url]
```

## Project URL Structure

- **Production**: `https://coasted-code.vercel.app`
- **Preview**: `https://coasted-code-[hash].vercel.app`
