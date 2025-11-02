# Preview Deployment Guide

This guide explains how to preview your changes before they go live using Firebase Hosting's preview channels and staging environment.

## 🎯 Deployment Strategy

### Three-Tier Deployment System:

1. **Preview Channels** - For Pull Requests (PRs)
2. **Staging Environment** - For develop branch
3. **Production** - For main branch

## 🚀 How to Preview Changes

### Method 1: Pull Request Previews (Recommended)

1. **Create a feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "Add your feature"
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** to `develop` branch on GitHub

4. **Automatic Preview**: GitHub Actions will automatically:
   - Build your changes
   - Deploy to a preview channel
   - Comment the preview URL on your PR

5. **Preview URL Format**: 
   ```
   https://canvas-griffin-475520-b7--pr{PR_NUMBER}-{COMMIT_SHA}.web.app
   ```

### Method 2: Staging Environment

1. **Push to develop branch**:
   ```bash
   git checkout develop
   git add .
   git commit -m "Your changes"
   git push origin develop
   ```

2. **Staging URL**: 
   ```
   https://canvas-griffin-475520-b7--staging.web.app
   ```

3. **Automatic deployment** happens on every push to `develop`

### Method 3: Local Preview

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Serve locally**:
   ```bash
   npx serve dist
   ```

3. **Preview URL**: `http://localhost:3000`

## 🔄 Workflow Process

### Development Flow:

```
Feature Branch → PR to develop → Staging → PR to main → Production
     ↓              ↓              ↓           ↓           ↓
  Local Dev    Preview URL    Staging URL   Review    Live Site
```

### Branch Strategy:

- **Feature branches** → Pull Request → **develop** (staging)
- **develop** → Pull Request → **main** (production)

## 📋 GitHub Actions Workflows

### 1. Preview Deployment (`.github/workflows/firebase-preview.yml`)
- **Triggers**: Pull requests to `develop`
- **Purpose**: Creates preview URLs for PRs
- **URL**: `https://canvas-griffin-475520-b7--pr{PR_NUMBER}-{COMMIT_SHA}.web.app`

### 2. Staging Deployment (`.github/workflows/firebase-staging.yml`)
- **Triggers**: Push to `develop` branch
- **Purpose**: Deploys to staging environment
- **URL**: `https://canvas-griffin-475520-b7--staging.web.app`

### 3. Production Deployment (`.github/workflows/firebase-deploy-cli.yml`)
- **Triggers**: Push to `main` branch
- **Purpose**: Deploys to production
- **URL**: `https://canvas-griffin-475520-b7.web.app`

## 🛠️ Manual Commands

### Deploy to Preview Channel:
```bash
firebase hosting:channel:deploy preview-channel-name
```

### Deploy to Staging:
```bash
firebase hosting:channel:deploy staging
```

### Deploy to Production:
```bash
firebase deploy --only hosting
```

## 🔍 How to Check Deployments

### 1. GitHub Actions Tab
- Go to your repository → Actions tab
- See all deployment statuses and logs

### 2. Firebase Console
- Visit: https://console.firebase.google.com/project/canvas-griffin-475520-b7/hosting
- See all channels and deployments

### 3. PR Comments
- Preview URLs are automatically posted as comments on PRs

## 🚨 Troubleshooting

### Preview Not Working?
1. Check GitHub Actions logs
2. Verify `FIREBASE_TOKEN` secret is set
3. Ensure PR is targeting `develop` branch

### Staging Not Updating?
1. Check if you're on `develop` branch
2. Verify push was successful
3. Check GitHub Actions for errors

### Production Issues?
1. Only deploys from `main` branch
2. Check if changes were merged properly
3. Verify all tests pass

## 📝 Best Practices

### Before Creating PR:
1. Test locally with `npm run build && npx serve dist`
2. Ensure all tests pass
3. Check for linting errors

### Before Merging to Main:
1. Test on staging environment
2. Get team review
3. Ensure all PRs are approved

### Production Deployment:
1. Only merge to `main` when ready
2. Monitor deployment logs
3. Test live site after deployment

## 🔗 Quick Links

- **Production**: https://canvas-griffin-475520-b7.web.app
- **Staging**: https://canvas-griffin-475520-b7--staging.web.app
- **Firebase Console**: https://console.firebase.google.com/project/canvas-griffin-475520-b7/hosting
- **GitHub Actions**: https://github.com/parthadcdev/tracesecure-landing/actions
