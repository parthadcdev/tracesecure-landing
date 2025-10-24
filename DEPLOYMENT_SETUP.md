# Firebase GitHub Actions Deployment Setup

This guide will help you set up automated deployment to Firebase Hosting using GitHub Actions.

## Prerequisites

1. A GitHub repository with your code
2. A Firebase project (already set up: `canvas-griffin-475520-b7`)
3. Firebase CLI installed locally

## Setup Steps

### 1. Generate Firebase Token

Run this command locally to generate a Firebase token:

```bash
firebase login:ci
```

This will open a browser window for authentication and provide you with a token. Copy this token.

### 2. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

#### Option A: Using Firebase Token (Recommended)
- **Name**: `FIREBASE_TOKEN`
- **Value**: The token you got from `firebase login:ci`

#### Option B: Using Service Account (Alternative)
- **Name**: `FIREBASE_SERVICE_ACCOUNT`
- **Value**: JSON content of your service account key

### 3. Workflow Files

Two workflow files have been created:

1. **`.github/workflows/firebase-deploy-cli.yml`** - Uses Firebase CLI (Recommended)
2. **`.github/workflows/firebase-deploy.yml`** - Uses Firebase GitHub Action

### 4. Enable GitHub Actions

1. Push your code to GitHub
2. Go to the **Actions** tab in your repository
3. The workflow will run automatically on pushes to the `develop` branch

## Workflow Details

### Firebase CLI Workflow (Recommended)
- Uses `w9jds/firebase-action` which wraps Firebase CLI
- Requires `FIREBASE_TOKEN` secret
- Simpler setup and more reliable

### Firebase GitHub Action Workflow
- Uses official `FirebaseExtended/action-hosting-deploy`
- Requires `FIREBASE_SERVICE_ACCOUNT` secret
- More features but requires service account setup

## Deployment Process

The workflow will:
1. Checkout your code
2. Setup Node.js 18
3. Install dependencies with `npm ci`
4. Build the project with `npm run build`
5. Deploy to Firebase Hosting

**Note**: The workflow is configured to trigger on pushes to the `develop` branch, not `main`.

## Manual Deployment

You can still deploy manually using:

```bash
npm run build
firebase deploy
```

## Troubleshooting

### Common Issues

1. **Token Expired**: Re-run `firebase login:ci` to get a new token
2. **Build Fails**: Check that all dependencies are in `package.json`
3. **Deploy Fails**: Verify Firebase project ID in `firebase.json`

### Checking Logs

1. Go to **Actions** tab in GitHub
2. Click on the failed workflow run
3. Check the logs for specific error messages

## Project Configuration

- **Firebase Project**: `canvas-griffin-475520-b7`
- **Hosting URL**: https://canvas-griffin-475520-b7.web.app
- **Build Directory**: `dist` (Vite output)
- **Node Version**: 18
- **Triggers**: Push to `develop`, Pull requests to `develop`

## Next Steps

1. Generate your Firebase token: `firebase login:ci`
2. Add the token as `FIREBASE_TOKEN` secret in GitHub
3. Push your code to the `develop` branch to trigger the first deployment
4. Monitor the Actions tab for deployment status
