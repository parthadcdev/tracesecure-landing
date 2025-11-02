#!/bin/bash

echo "🚀 Setting up GitHub Actions deployment for Firebase"
echo "=================================================="

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "❌ You're not logged in to Firebase. Please run:"
    echo "   firebase login"
    exit 1
fi

echo "✅ Firebase CLI is installed and you're logged in"
echo ""

# Generate Firebase token
echo "🔑 Generating Firebase token for GitHub Actions..."
echo "This will open a browser window for authentication."
echo ""

firebase login:ci

echo ""
echo "✅ Token generated successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Copy the token from above"
echo "2. Go to your GitHub repository"
echo "3. Navigate to Settings → Secrets and variables → Actions"
echo "4. Click 'New repository secret'"
echo "5. Name: FIREBASE_TOKEN"
echo "6. Value: [paste the token here]"
echo "7. Click 'Add secret'"
echo ""
echo "🎉 After adding the secret, push your code to trigger the first deployment!"
echo ""
echo "📖 For more details, see DEPLOYMENT_SETUP.md"
