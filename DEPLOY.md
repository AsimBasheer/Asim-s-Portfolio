# How to Deploy Your Portfolio for Free

## Option 1: Vercel (Recommended - Best for Next.js) 🚀

### Step 1: Push to GitHub
1. Create a GitHub account if you don't have one: https://github.com
2. Create a new repository on GitHub
3. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub (free)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in ~2 minutes! 🎉

**Your site URL will be:** `https://your-project-name.vercel.app`

### Vercel Free Tier Includes:
- ✅ Unlimited deployments
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments for every push
- ✅ 100GB bandwidth/month

---

## Option 2: Netlify (Alternative)

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

## Option 3: GitHub Pages (Static Export Only)

If you want to use GitHub Pages, you need to export as static:

1. Add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

2. Build and deploy:
```bash
npm run build
# This creates an 'out' folder
# Push the 'out' folder to GitHub Pages
```

---

## Quick Deploy Commands

### For Vercel (via CLI):
```bash
npm i -g vercel
vercel login
vercel
```

### For Netlify (via CLI):
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Recommended: Vercel
Vercel is made by the creators of Next.js, so it's the best option. It's completely free and handles everything automatically!

