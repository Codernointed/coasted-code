# Coasted Code - Deployment Guide

## Deploy to Heroku

### Prerequisites
1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Login to Heroku: `heroku login`

### Deployment Steps

1. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Heroku deployment"
   ```

2. **Create Heroku App**
   ```bash
   heroku create coasted-code
   ```
   Or use your custom name:
   ```bash
   heroku create your-app-name
   ```

3. **Set Node.js Version (Optional)**
   ```bash
   heroku config:set NODE_VERSION=20
   ```

4. **Deploy to Heroku**
   ```bash
   git push heroku main
   ```

5. **Open Your App**
   ```bash
   heroku open
   ```

### Useful Commands

- **View logs**: `heroku logs --tail`
- **Check app status**: `heroku ps`
- **Restart app**: `heroku restart`
- **Set environment variables**: `heroku config:set KEY=value`

### Troubleshooting

If build fails:
```bash
heroku buildpacks:clear
heroku buildpacks:add heroku/nodejs
git push heroku main --force
```

### Environment Variables (if needed)
```bash
heroku config:set NODE_ENV=production
```
