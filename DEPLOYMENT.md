# Deployment Guide for Citrine Cloud

Your project is built and ready to deploy! Here are the deployment options:

## ✅ Build Status
- ✅ Build completed successfully
- ✅ Static export generated in `/out` directory
- ✅ Project configured for static hosting

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest for Next.js)

Vercel is the platform created by the Next.js team and works seamlessly with Next.js projects.

#### Method A: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub first** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

3. **Import your project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure settings** (usually auto-detected):
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `out` (since you're using static export)

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `your-project.vercel.app`

#### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

---

### Option 2: Netlify

1. **Push to GitHub** (if not already done):
   ```bash
   git push origin main
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub

3. **Add new site**:
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`

5. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `your-project.netlify.app`

---

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d out"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your GitHub repository settings
   - Navigate to "Pages"
   - Select source branch: `gh-pages`
   - Your site will be at `https://yourusername.github.io/citrine-cloud`

---

### Option 4: Any Static Hosting Service

Since your project exports static files, you can deploy the `/out` directory to:
- **Cloudflare Pages**: Connect GitHub repo, set build command to `npm run build`, output to `out`
- **AWS S3 + CloudFront**: Upload `/out` folder to S3 bucket
- **Firebase Hosting**: Upload `/out` folder
- **Any web server**: Simply upload the `/out` folder contents

---

## 📝 Quick Deploy Commands

### For Vercel (if CLI installed):
```bash
vercel --prod
```

### For Netlify (if CLI installed):
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

---

## 🔧 Environment Variables

If you need to add environment variables:
- **Vercel**: Dashboard → Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment Variables

---

## 📌 Recommended Next Steps

1. **Push to GitHub** (if not done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Choose a platform** (Vercel recommended)

3. **Deploy** following the steps above

4. **Custom domain** (optional): Add your domain in the platform settings

---

## 🎉 After Deployment

Your site will be live and accessible via the provided URL. You can:
- Set up custom domains
- Configure automatic deployments on git push
- Add environment variables
- Monitor performance and analytics

