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

**⚠️ IMPORTANT**: If you get "Listed 0 items" when running the list command, you need to create the pool first!

### Option A: Create via gcloud CLI (Recommended - Faster)
```bash
gcloud iam workload-identity-pools create staticsite-github-actions-pool \
  --location="global" \
  --project="canvas-griffin-475520-b7" \
  --display-name="GitHub Actions Pool" \
  --description="Workload Identity Pool for GitHub Actions"
```

### Option B: Create via Google Cloud Console
1. Go to [Google Cloud Console → IAM & Admin → Workload Identity Pools](https://console.cloud.google.com/iam-admin/workload-identity-pools)
2. Click **"Create Pool"**
3. Fill in the details:
   - **Pool ID**: `staticsite-github-actions-pool` ⚠️ Must be exactly this
   - **Display name**: `GitHub Actions Pool`
   - **Description**: `Workload Identity Pool for GitHub Actions`
4. Click **"Continue"**
5. Click **"Create Pool"**

### Verify the pool was created:
```bash
gcloud iam workload-identity-pools list --location="global" --project="canvas-griffin-475520-b7"
```

You should see `staticsite-github-actions-pool` in the list.

## Step 3: Create Workload Identity Provider

**⚠️ IMPORTANT**: The pool must exist before creating the provider! Complete Step 2 first.

### Option A: Create via gcloud CLI (Recommended - Faster)
```bash
gcloud iam workload-identity-pools providers create-oidc github-provider \
  --location="global" \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --project="canvas-griffin-475520-b7" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --allowed-audiences="https://github.com/parthadcdev" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository"
```

### Option B: Create via Google Cloud Console
1. Go to [Google Cloud Console → IAM & Admin → Workload Identity Pools](https://console.cloud.google.com/iam-admin/workload-identity-pools)
2. Click on `staticsite-github-actions-pool`
3. Click **"Add Provider"**
4. Select **"OpenID Connect (OIDC)"**
5. Fill in the details:
   - **Provider name**: `github-provider` ⚠️ Must be exactly this
   - **Issuer (URL)**: `https://token.actions.githubusercontent.com` ⚠️ Must be exactly this (no trailing slash)
   - **Allowed audiences**: `https://github.com/parthadcdev` (your GitHub org/username) or leave blank
6. Under **"Attribute mapping"**, add:
   - **Google subject**: `assertion.sub`
   - **Google subject_assertion** (optional): `assertion.repository`
7. Click **"Save"**

### Verify the provider was created:
```bash
gcloud iam workload-identity-pools providers list \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7"
```

You should see `github-provider` in the list.

### Get the provider resource name:
```bash
gcloud iam workload-identity-pools providers describe github-provider \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7" \
  --format="value(name)"
```

This will output:
```
projects/1050494669271/locations/global/workloadIdentityPools/staticsite-github-actions-pool/providers/github-provider
```

**Copy this exact output** - you'll need it for your `WIF_PROVIDER` GitHub secret!

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
  --member="principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/staticsite-github-actions-pool/attribute.repository/YOUR_USERNAME/YOUR_REPO_NAME" \
  SERVICE_ACCOUNT_EMAIL
```

**Or via Console:**
1. Go to your service account → **"Permissions"** tab
2. Click **"Grant Access"**
3. Add principal: `principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/staticsite-github-actions-pool/attribute.repository/YOUR_USERNAME/YOUR_REPO_NAME`
4. Role: `Workload Identity User`
5. Save

**Replace placeholders:**
- `PROJECT_NUMBER`: `1050494669271` (your GCP project number)
- `POOL_ID`: `staticsite-github-actions-pool` (your actual pool ID)
- `YOUR_USERNAME`: Your GitHub username or organization
- `YOUR_REPO_NAME`: Your repository name (e.g., `tracesecure-landing`)
- `SERVICE_ACCOUNT_EMAIL`: Your service account email (e.g., `github-actions-sa@canvas-griffin-475520-b7.iam.gserviceaccount.com`)

## Step 6: Get Your Project Number

Find your project number:

```bash
gcloud projects describe canvas-griffin-475520-b7 --format="value(projectNumber)"
```

Or in the Console, it's displayed on the project dashboard.

## Step 7: Verify Your Setup and Get Required Values

Before adding GitHub secrets, verify your setup and get the exact values you need:

### Get Your Project Number:
```bash
gcloud projects describe canvas-griffin-475520-b7 --format="value(projectNumber)"
```

### List Your Workload Identity Pools:
```bash
gcloud iam workload-identity-pools list --location="global" --project="canvas-griffin-475520-b7"
```

### List Providers in a Pool:
```bash
gcloud iam workload-identity-pools providers list \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7"
```

### Get the Full Provider Resource Name (This is what you need for WIF_PROVIDER):
```bash
gcloud iam workload-identity-pools providers describe github-provider \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7" \
  --format="value(name)"
```

This command will output the **exact** path you need to use in the `WIF_PROVIDER` secret:
```
projects/1050494669271/locations/global/workloadIdentityPools/staticsite-github-actions-pool/providers/github-provider
```

**Run this command now to get your exact WIF_PROVIDER path:**
```bash
gcloud iam workload-identity-pools providers describe github-provider \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7" \
  --format="value(name)"
```
Copy the output and use it as your `WIF_PROVIDER` GitHub secret value.

### Get Your Service Account Email:
```bash
gcloud iam service-accounts list --project="canvas-griffin-475520-b7" --filter="displayName:github-actions-sa"
```

## Step 8: Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these two secrets:

### Secret 1: `WIF_PROVIDER`
**Your exact value:**
```
projects/1050494669271/locations/global/workloadIdentityPools/staticsite-github-actions-pool/providers/github-provider
```

**Your exact WIF_PROVIDER value should be:**
```
projects/1050494669271/locations/global/workloadIdentityPools/staticsite-github-actions-pool/providers/github-provider
```

**To verify, run this command:**
```bash
gcloud iam workload-identity-pools providers describe github-provider \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7" \
  --format="value(name)"
```

It should output the exact path above.

**To get the exact value:**
Run this command and copy the output:
```bash
gcloud iam workload-identity-pools providers describe github-provider \
  --workload-identity-pool="staticsite-github-actions-pool" \
  --location="global" \
  --project="canvas-griffin-475520-b7" \
  --format="value(name)"
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

## Step 9: Optional - Restrict Access by Repository

You can restrict access to specific repositories by updating the attribute condition:

1. Go to your Workload Identity Provider
2. Edit the provider
3. Add an **Attribute condition**:
   ```
   assertion.repository == "YOUR_USERNAME/YOUR_REPO_NAME"
   ```

## Step 10: Test the Workflow

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

### Error: "invalid_target" or "The target service indicated by the \"audience\" parameters is invalid"
This error typically means the Workload Identity Provider path is incorrect, the provider doesn't exist/is disabled, or the issuer/audience configuration is wrong.

**Step-by-step fix:**

0. **First, verify the pool exists and list all providers:**
   ```bash
   # Check if the pool exists
   gcloud iam workload-identity-pools list --location="global" --project="canvas-griffin-475520-b7"
   
   # List all providers in the pool (to see the actual provider names)
   gcloud iam workload-identity-pools providers list \
     --workload-identity-pool="staticsite-github-actions-pool" \
     --location="global" \
     --project="canvas-griffin-475520-b7"
   ```
   
   If the pool doesn't exist or the provider name is different, you'll need to:
   - Create the pool if it doesn't exist (see Step 2 in setup)
   - Create the provider if it doesn't exist (see Step 3 in setup)
   - Use the correct provider name from the list above

1. **Once you confirm the provider exists, verify and get its full details:**
   ```bash
   # Replace PROVIDER_NAME with the actual provider name from the list above
   gcloud iam workload-identity-pools providers describe PROVIDER_NAME \
     --location="global" \
     --workload-identity-pool="staticsite-github-actions-pool" \
     --project="canvas-griffin-475520-b7"
   ```
   
   **Check for:**
   - Status should show as active/enabled
   - Issuer URL should be exactly: `https://token.actions.githubusercontent.com`
   - No trailing slashes or spaces

2. **Verify the pool exists:**
   ```bash
   gcloud iam workload-identity-pools describe staticsite-github-actions-pool \
     --location="global" \
     --project="canvas-griffin-475520-b7"
   ```

3. **Get the EXACT provider resource name (this is critical):**
   ```bash
   # Replace PROVIDER_NAME with the actual provider name from step 0
   gcloud iam workload-identity-pools providers describe PROVIDER_NAME \
     --workload-identity-pool="staticsite-github-actions-pool" \
     --location="global" \
     --project="canvas-griffin-475520-b7" \
     --format="value(name)"
   ```
   
   **This will output something like:**
   ```
   projects/1050494669271/locations/global/workloadIdentityPools/staticsite-github-actions-pool/providers/PROVIDER_NAME
   ```
   
   ⚠️ **Important**: Copy this EXACT output (including all slashes, no extra spaces, no trailing newlines) and use it as your `WIF_PROVIDER` secret value.

4. **Check the provider issuer configuration:**
   ```bash
   # Replace PROVIDER_NAME with the actual provider name from step 0
   gcloud iam workload-identity-pools providers describe PROVIDER_NAME \
     --workload-identity-pool="staticsite-github-actions-pool" \
     --location="global" \
     --project="canvas-griffin-475520-b7" \
     --format="value(oidc.issuerUri)"
   ```
   
   Should output: `https://token.actions.githubusercontent.com`
   
5. **If issuer is wrong, update the provider:**
   If the issuer is not correct, you may need to recreate the provider with the correct issuer URL. Go to Google Cloud Console and verify the issuer is set to exactly: `https://token.actions.githubusercontent.com`

6. **Verify in Google Cloud Console:**
   - Go to [Google Cloud Console → IAM & Admin → Workload Identity Pools](https://console.cloud.google.com/iam-admin/workload-identity-pools)
   - Click on `staticsite-github-actions-pool` → Click on `github-provider`
   - At the top of the provider details page, you'll see the **Resource name**
   - Copy this **exact** path (including `projects/...`)
   - Compare it with your `WIF_PROVIDER` GitHub secret - they must match EXACTLY
   - Make sure there are no trailing spaces, newlines, or extra characters

7. **Common Issues:**
   - **Trailing spaces or newlines**: Make sure your GitHub secret has no extra spaces or newlines at the end
   - **Wrong project number**: Double-check that 1050494669271 is correct using: `gcloud projects describe canvas-griffin-475520-b7 --format="value(projectNumber)"`
   - **Provider disabled**: Check that the provider is enabled in Google Cloud Console
   - **Issuer mismatch**: The issuer must be exactly `https://token.actions.githubusercontent.com` (no trailing slash)

## Resources

- [GitHub: Configuring OpenID Connect in Google Cloud](https://docs.github.com/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- [Google Cloud: Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation)
- [google-github-actions/auth Documentation](https://github.com/google-github-actions/auth)

