# Image Migration to Firebase Storage - Guide

## Overview
All external images have been successfully downloaded and stored locally in `/public/images/`. This guide will help you migrate these images to Firebase Storage.

## Current Status ✅

### Downloaded Images (16 total)
All images are now stored in `/public/images/`:

1. **Logo & Branding**
   - `logo-symbol.png` (267 KB) - TraceSecure logo symbol

2. **Marketing & Meta Images**
   - `og-image.png` (1.2 MB) - Open Graph / Twitter card image
   - `dpp-handbag.png` (1.2 MB) - Digital Product Passport handbag showcase

3. **Value Propositions Section**
   - `enhance-brand-value.png` (1.4 MB)
   - `streamline-operations.png` (1.1 MB)
   - `save-time.png` (1.3 MB)

4. **Social Proof**
   - `textile-weaver.png` (1.4 MB)

5. **How It Works Section**
   - `tag-your-item.png` (1.2 MB)
   - `track-journey.png` (722 KB)
   - `share-with-buyers.png` (1.3 MB)
   - `three-step-infographic.png` (355 KB) - Currently commented out in code
   - `trace-rewards-menu.png` (817 KB)

6. **Pricing Plans**
   - `free-plan-icon.png` (511 KB)
   - `growth-plan-icon.png` (201 KB)
   - `scale-plan-icon.png` (268 KB)

7. **Partner Logos**
   - `polygon-logo.png` (34 KB)

**Total Size:** ~13.6 MB

### Code Updates ✅
All component files have been updated to use local paths (`/images/*`):
- ✅ `src/pages/Layout.jsx`
- ✅ `src/components/landing/ValuePropsSection.jsx`
- ✅ `src/components/landing/SocialProof.jsx`
- ✅ `src/components/landing/HowItWorks.jsx`
- ✅ `src/components/landing/Header.jsx`
- ✅ `src/components/landing/Footer.jsx`
- ✅ `src/components/landing/DPPSection.jsx`
- ✅ `src/components/landing/CTASection.jsx`

## Firebase Storage Migration Steps

### Step 1: Set Up Firebase Storage

1. **Install Firebase SDK** (if not already installed):
```bash
npm install firebase
```

2. **Create Firebase Configuration File** (`src/config/firebase.js`):
```javascript
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
```

### Step 2: Upload Images to Firebase Storage

You have two options:

#### Option A: Upload via Firebase Console (Recommended for first-time setup)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Storage** → **Files**
4. Create a folder structure: `images/`
5. Upload all files from `/public/images/` to Firebase Storage
6. Set appropriate access rules (see Step 3)

#### Option B: Upload Programmatically

Create a Node.js script (`scripts/upload-to-firebase.js`):

```javascript
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'YOUR_BUCKET_NAME.appspot.com'
});

const bucket = admin.storage().bucket();
const imagesDir = path.join(__dirname, '../public/images');

async function uploadImages() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const destination = `images/${file}`;
    
    await bucket.upload(filePath, {
      destination,
      metadata: {
        cacheControl: 'public, max-age=31536000', // Cache for 1 year
        contentType: 'image/png'
      }
    });
    
    console.log(`✓ Uploaded: ${file}`);
  }
  
  console.log('All images uploaded successfully!');
}

uploadImages().catch(console.error);
```

Run with:
```bash
node scripts/upload-to-firebase.js
```

### Step 3: Configure Firebase Storage Rules

Set appropriate access rules in Firebase Console → Storage → Rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{imageFile} {
      // Allow public read access to all images
      allow read: if true;
      // Only authenticated admins can write
      allow write: if request.auth != null;
    }
  }
}
```

### Step 4: Update Image URLs in Code

After uploading to Firebase, you'll get public URLs for each image. You have two approaches:

#### Approach A: Direct URLs (Simpler)
Get the public URL for each image and update the code:

```javascript
// Example format:
const firebaseImageUrl = "https://firebasestorage.googleapis.com/v0/b/YOUR_BUCKET/o/images%2Flogo-symbol.png?alt=media";
```

#### Approach B: Dynamic Loading (More Flexible)
Create a helper function to generate Firebase URLs:

```javascript
// src/utils/imageHelpers.js
export const getFirebaseImageUrl = (imageName) => {
  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/YOUR_BUCKET/o';
  const imagePath = `images%2F${imageName}`;
  return `${baseUrl}/${imagePath}?alt=media`;
};

// Usage in components:
import { getFirebaseImageUrl } from '@/utils/imageHelpers';

<img src={getFirebaseImageUrl('logo-symbol.png')} alt="Logo" />
```

### Step 5: Update All Component Files

Once images are uploaded to Firebase, update the image paths in these files:

1. `src/pages/Layout.jsx`:
   - Line 16: favicon (`logo-symbol.png`)
   - Line 58: og:image (`og-image.png`)
   - Line 89: twitter:image (`og-image.png`)

2. `src/components/landing/ValuePropsSection.jsx`:
   - Lines 8, 14, 20: benefit images

3. `src/components/landing/SocialProof.jsx`:
   - Line 10: testimonial image

4. `src/components/landing/HowItWorks.jsx`:
   - Lines 7, 13, 19: step images
   - Lines 57, 101: infographic and rewards images

5. `src/components/landing/Header.jsx`:
   - Lines 96, 156: logo images

6. `src/components/landing/Footer.jsx`:
   - Lines 131, 149: logo and Polygon images

7. `src/components/landing/DPPSection.jsx`:
   - Line 55: handbag image

8. `src/components/landing/CTASection.jsx`:
   - Lines 14, 23, 33: pricing plan icons
   - Line 164: rewards UI image

### Step 6: Optimize Images (Optional but Recommended)

Before or after uploading to Firebase, consider optimizing images:

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize all PNG images
for file in public/images/*.png; do
  sharp -i "$file" -o "${file%.png}_optimized.png" -- resize 1200 -1 --withoutEnlargement
done
```

### Step 7: Test and Deploy

1. **Local Testing:**
```bash
npm run dev
```

2. **Production Build:**
```bash
npm run build
```

3. **Deploy to Firebase Hosting:**
```bash
firebase deploy
```

## Image Usage Mapping

| Image File | Used In | Purpose |
|------------|---------|---------|
| `logo-symbol.png` | Layout, Header, Footer | Primary branding |
| `og-image.png` | Layout (meta tags) | Social media sharing |
| `dpp-handbag.png` | DPPSection | Product showcase |
| `enhance-brand-value.png` | ValuePropsSection | Value proposition 1 |
| `streamline-operations.png` | ValuePropsSection | Value proposition 2 |
| `save-time.png` | ValuePropsSection | Value proposition 3 |
| `textile-weaver.png` | SocialProof | Testimonial avatar |
| `tag-your-item.png` | HowItWorks | Step 1 illustration |
| `track-journey.png` | HowItWorks | Step 2 illustration |
| `share-with-buyers.png` | HowItWorks | Step 3 illustration |
| `three-step-infographic.png` | HowItWorks (commented) | Process overview |
| `trace-rewards-menu.png` | HowItWorks, CTASection | Rewards UI mockup |
| `free-plan-icon.png` | CTASection | Starter plan badge |
| `growth-plan-icon.png` | CTASection | Growth plan badge |
| `scale-plan-icon.png` | CTASection | Scale plan badge |
| `polygon-logo.png` | Footer | Partner logo |

## Benefits of Firebase Storage

✅ **CDN**: Automatic global content delivery  
✅ **Security**: Fine-grained access control  
✅ **Scalability**: Handles traffic spikes automatically  
✅ **Cost-effective**: Pay only for what you use  
✅ **Integration**: Seamless with Firebase Hosting  
✅ **Versioning**: Easy to update images  
✅ **Analytics**: Track usage and performance  

## Cost Estimate

Firebase Storage pricing (as of 2024):
- Storage: $0.026/GB per month
- Download: $0.12/GB
- Upload: Free

For ~13.6 MB of images:
- Storage: ~$0.0004/month (negligible)
- Download cost depends on traffic (e.g., 10,000 page views = ~$0.16)

## Rollback Plan

If you need to rollback, the local images are preserved in `/public/images/`:
1. All code is already using the `/images/*` paths
2. Images will be served from the public directory
3. No changes needed to rollback - just don't migrate to Firebase

## Next Steps

1. ✅ Images downloaded locally
2. ✅ Code updated to use local paths
3. ✅ Build verified
4. ⏳ Set up Firebase project (if not done)
5. ⏳ Upload images to Firebase Storage
6. ⏳ Update code with Firebase URLs
7. ⏳ Test and deploy

## Additional Notes

- **Favicon**: Consider adding a `/public/favicon.svg` file in addition to the dynamic favicon loading
- **Image Optimization**: The current images are quite large (1-1.4 MB each). Consider:
  - Converting to WebP format (50-80% smaller)
  - Creating responsive image variants
  - Implementing lazy loading for below-fold images
- **External Dependencies**: One image in SocialProof still uses Unsplash URL (line 16):
  - URL: `https://images.unsplash.com/photo-1565551981084-2f3e7a35c292?q=80&w=2920&auto=format&fit=crop`
  - Used for: Kenji Tanaka testimonial (Bespoke Potter)
  - Note: Unsplash blocks automated downloads. To download manually:
    1. Visit the URL in a browser
    2. Right-click → Save Image As → `bespoke-potter.jpg`
    3. Place in `/public/images/`
    4. Update line 16 in `src/components/landing/SocialProof.jsx` to use `/images/bespoke-potter.jpg`

## Support

For Firebase Storage documentation:
- [Get Started Guide](https://firebase.google.com/docs/storage/web/start)
- [Upload Files](https://firebase.google.com/docs/storage/web/upload-files)
- [Download Files](https://firebase.google.com/docs/storage/web/download-files)

