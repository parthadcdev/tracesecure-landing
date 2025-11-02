# TraceSecure Context Document for Cursor AI

## Overview
This document provides context about the TraceSecure website for use with Cursor AI development and analysis. This is a blockchain-based product authentication platform for artisans and creators.

## Website Information

### URLs
- **Primary URL**: https://canvas-griffin-475520-b7.web.app (Firebase Hosting)
- **GitHub Repository**: trace-sure-d7723bfb

### Technical Details
- **Title**: "TraceSecure - Product Authentication Platform" 
- **Framework**: React 18 + Vite
- **JavaScript Requirement**: The website requires JavaScript to display its content
- **Content Accessibility**: Content is not accessible without JavaScript enabled
- **Deployment**: Firebase Hosting with GitHub Actions CI/CD

## Company Information

### TraceSecure Platform
This is a product authentication and traceability platform offering:

#### Core Services
- **Digital Product Passports (DPP)** for EU compliance
- **Blockchain certificates** for product authenticity
- **QR code generation** and scanning
- **Anti-counterfeiting solutions** for luxury artisans
- **Product journey tracking** from creation to buyer

#### Target Market
- **Luxury artisans** and independent creators
- **Handcrafted goods** manufacturers
- **Premium brands** fighting counterfeits
- **EU market compliance** (DPP requirements)

#### Value Proposition
- Fight fakes and build customer loyalty
- Charge 15-20% more with authenticity proof
- Eliminate 20-30% revenue loss from counterfeits
- EU DPP compliance for 2026 regulations

## Challenges with Content Extraction

### Technical Limitations
1. **JavaScript Dependency**: The main website requires JavaScript to render content
2. **Dynamic Content**: Content is likely dynamically loaded
3. **Authentication Issues**: Browser automation tools encountered authentication problems

### Recommended Solutions
1. **Manual Inspection**: Use browser developer tools to inspect the rendered content
2. **Alternative Tools**: Consider using tools like:
   - Puppeteer with JavaScript enabled
   - Selenium WebDriver
   - Manual browser inspection
3. **API Endpoints**: Check if the website has API endpoints that can be accessed directly

## Development Context for Cursor AI

### When Working with This Website
1. **React + Vite Application**: Modern React 18 with Vite build system
2. **Firebase Deployment**: Hosted on Firebase with GitHub Actions CI/CD
3. **HubSpot Integration**: Form handling and lead capture

### Technical Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **UI Components**: Radix UI components, Lucide React icons
- **Backend Integration**: HubSpot forms
- **Deployment**: Firebase Hosting, GitHub Actions
- **Styling**: Tailwind CSS with custom CSS variables

### Common Tasks
- Web scraping would require JavaScript execution
- UI automation needs to account for dynamic loading and animations
- Form handling through HubSpot integration

## Related Information

### Similar Companies/Platforms
- **Product Authentication Platforms**: Similar to VeChain, Everledger, or Provenance
- **Digital Product Passport Solutions**: EU compliance platforms

### Industry Context
- **Product Authentication Sector**: Companies in this space typically offer:
  - Blockchain-based product tracking
  - Anti-counterfeiting solutions
  - Supply chain transparency
  - EU DPP compliance tools

### Pricing Structure
- **Starter Plan**: $0/month (up to 100 items/month)
- **Growth Plan**: $79/month (unlimited tracing)
- **Scale Plan**: $299+/month (IoT integration, API access)
- **Rewards Program**: $TRACE tokens for engagement

## Key Features and Components

### Landing Page Sections
1. **Hero Section**: "Fight Fakes. Build Loyalty. Start Free." with traceability visualization
2. **Value Props Section**: Benefits for luxury artisans with case studies
3. **How It Works**: 3-step process (Tag, Track, Share) with visual examples
4. **DPP Section**: EU Digital Product Passport compliance information
5. **CTA Section**: Pricing plans and waitlist signup with HubSpot integration

### Core Functionality
- **Product Tagging**: Secure QR code generation and embedding
- **Journey Tracking**: Scan-based product lifecycle tracking
- **Authentication Verification**: Buyer verification through scanning
- **Rewards System**: $TRACE token earning and redemption
- **EU Compliance**: Digital Product Passport generation

## Development Notes for Cursor AI

When working with this codebase:
- **Dynamic Content**: Heavy use of Framer Motion animations
- **Form Integration**: HubSpot form handling for lead capture
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Structure**: Modular React components with lazy loading

### Key Files to Understand
- `src/components/landing/`: All landing page sections
- `package.json`: Dependencies and scripts
- `firebase.json`: Deployment configuration
- `vite.config.js`: Build configuration

---

*This document was created based on actual codebase analysis. The website is a React application for product authentication and traceability, not a cybersecurity company.*
