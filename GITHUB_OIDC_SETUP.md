# GitHub Actions OIDC Authentication Setup Guide

This guide will help you set up Workload Identity Federation (OIDC) authentication between GitHub Actions and Google Cloud.

## Prerequisites

- Google Cloud Project: `canvas-griffin-475520-b7`
- Admin access to Google Cloud Console
- Admin access to your GitHub repository

## Step 1: Enable Required APIs

Enable the following APIs in Google Cloud Console:

```bash
gcloud services enable iamcredentials.googleapis.com
gcloud services enable sts.googleapis.com
```

## Step 2: Create Workload Identity Pool

1. Go to [Google Cloud Console → IAM & Admin → Workload Identity Pools](https://console.cloud.google.com/iam-admin/workload-identity-pools)
2. Click **"Create Pool"**
3. Fill in the details:
   - **Pool ID**: `github-actions-pool` (or your preferred name)
   - **Display name**: `GitHub Actions Pool`
   - **Description**: `Workload Identity Pool for GitHub Actions`
4. Click **"Continue"**
5. Click **"Create Pool"**

## Step 3: Create Workload Identity Provider

1. In the pool you just created, click **"Add Provider"**
2. Select **"OpenID Connect (OIDC)"**
3. Fill in the details:
   - **Provider name**: `github-provider`
   - **Issuer (URL)**: `https://token.actions.githubusercontent.com`
   - **Allowed audiences**: Leave default or add `https://github.com/YOUR_USERNAME` (optional)
4. Under **"Attribute mapping"**, add:
   - **Google subject**: `assertion.sub`
   - **Google subject_assertion**: `assertion.repository`
5. Click **"Save"**

## Step 4: Create Service Account

1. Go to [Google Cloud Console → IAM & Admin → Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click **"Create Service Account"**
3. Fill in:
   - **Name**: `github-actions-sa`
   - **Description**: `Service account for GitHub Actions deployments`
4. Click **"Create and Continue"**
5. Grant roles:
   - **Firebase Admin** or **Firebase Hosting Admin**
   - **Service Account User** (if needed)
6. Click **"Done"**

## Step 5: Grant Permission to Service Account

Grant the Workload Identity User role to allow GitHub Actions to impersonate the service account:

```bash
gcloud iam service-accounts add-iam-policy-binding \
  --project=canvas-griffin-475520-b7 \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.repository/YOUR_USERNAME/YOUR_REPO_NAME" \
  SERVICE_ACCOUNT_EMAIL
```

**Or via Console:**
1. Go to your service account → **"Permissions"** tab
2. Click **"Grant Access"**
3. Add principal: `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.repository/YOUR_USERNAME/YOUR_REPO_NAME`
4. Role: `Workload Identity User`
5. Save

**Replace placeholders:**
- `PROJECT_NUMBER`: Your GCP project number (not ID)
- `POOL_ID`: The pool ID you created (e.g., `github-actions-pool`)
- `YOUR_USERNAME`: Your GitHub username or organization
- `YOUR_REPO_NAME`: Your repository name (e.g., `tracesecure-landing`)
- `SERVICE_ACCOUNT_EMAIL`: Your service account email (e.g., `github-actions-sa@canvas-griffin-475520-b7.iam.gserviceaccount.com`)

## Step 6: Get Your Project Number

Find your project number:

```bash
gcloud projects describe canvas-griffin-475520-b7 --format="value(projectNumber)"
```

Or in the Console, it's displayed on the project dashboard.

## Step 7: Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these two secrets:

### Secret 1: `WIF_PROVIDER`
**Value format:**
```
projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_NAME
```

**Example:**
```
projects/123456789/locations/global/workloadIdentityPools/github-actions-pool/providers/github-provider
```

### Secret 2: `WIF_SERVICE_ACCOUNT`
**Value format:**
```
SERVICE_ACCOUNT_EMAIL
```

**Example:**
```
github-actions-sa@canvas-griffin-475520-b7.iam.gserviceaccount.com
```

## Step 8: Optional - Restrict Access by Repository

You can restrict access to specific repositories by updating the attribute condition:

1. Go to your Workload Identity Provider
2. Edit the provider
3. Add an **Attribute condition**:
   ```
   assertion.repository == "YOUR_USERNAME/YOUR_REPO_NAME"
   ```

## Step 9: Test the Workflow

1. Push a commit to trigger the workflow
2. Check the workflow logs to ensure authentication succeeds
3. Verify deployment completes successfully

## Troubleshooting

### Error: "Permission denied"
- Verify the service account has the correct roles
- Check that the Workload Identity User role is granted
- Ensure the principal format is correct

### Error: "Workload Identity Provider not found"
- Verify the `WIF_PROVIDER` secret format is correct
- Ensure the pool and provider IDs match exactly

### Error: "Service account not found"
- Verify the `WIF_SERVICE_ACCOUNT` secret contains the full email address
- Check that the service account exists in the correct project

## Resources

- [GitHub: Configuring OpenID Connect in Google Cloud](https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- [Google Cloud: Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation)
- [google-github-actions/auth Documentation](https://github.com/google-github-actions/auth)

