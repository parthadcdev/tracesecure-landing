

import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { getLandingContent, LANDING_VARIANTS } from "@/config/landingContent";
import { isWineHostname } from "@/utils/host";

const DEFAULT_META = {
  title: "TraceSecure — Turn Every Product Into a Customer You Can Reach",
  description:
    "TraceSecure turns every product you sell into a verified customer lead. Prove it's authentic, capture the buyer's email, and bring them back — for craft beverage, supplement, and specialty food brands. No app or crypto wallet required.",
  ogTitle: "TraceSecure — Turn Every Product Into a Customer You Can Reach",
  ogDescription:
    "Prove authenticity, capture buyer emails, and build your owned audience — for craft beverage, supplement, and specialty food brands. No app or crypto wallet required.",
  twitterDescription:
    "Turn every product into a customer you can reach. Authenticity, lead capture, and instant rewards — no crypto wallet required.",
};

function resolveLandingMetaVariant(pathname) {
  const path = pathname.toLowerCase();
  if (isWineHostname() || path.startsWith("/industries/wine")) {
    return LANDING_VARIANTS.wine;
  }
  if (path.startsWith("/industries/supplements")) {
    return LANDING_VARIANTS.supplements;
  }
  if (path.startsWith("/industries/specialty-food")) {
    return LANDING_VARIANTS.specialtyFood;
  }
  if (path === "/" || path === "/landing") {
    return LANDING_VARIANTS.generic;
  }
  return null;
}

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const landingMetaVariant = useMemo(
    () => resolveLandingMetaVariant(location.pathname),
    [location.pathname]
  );

  useEffect(() => {
    // Update favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "/images/logo-symbol.png";
    link.type = "image/png";

    const layoutMeta = landingMetaVariant
      ? getLandingContent(landingMetaVariant).layout
      : DEFAULT_META;

    document.documentElement.lang = 'en';
    document.title = layoutMeta.title;

    const existingMetas = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="yandex-verification"], meta[property^="og:"], meta[name^="twitter:"]');
    existingMetas.forEach(meta => meta.remove());

    const yandexVerification = document.createElement('meta');
    yandexVerification.name = 'yandex-verification';
    yandexVerification.content = '6b0c459b00a08ddd';
    document.head.appendChild(yandexVerification);

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = layoutMeta.description;
    document.head.appendChild(metaDescription);

    // Meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Web3, blockchain, Ethereum, Polygon, dApp, smart contracts, crypto wallets, transparency, traceability, NFT, tokens, digital product passport, DPP, authentication, anti-counterfeit, artisan, handmade, luxury goods, supply chain, provenance, $TRSR token';
    document.head.appendChild(metaKeywords);

    // Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = layoutMeta.ogTitle;
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = layoutMeta.ogDescription;
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = '/images/og-image.png';
    document.head.appendChild(ogImage);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = window.location.href;
    document.head.appendChild(ogUrl);

    // Twitter Card tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    document.head.appendChild(twitterCard);

    const twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = layoutMeta.ogTitle;
    document.head.appendChild(twitterTitle);

    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = layoutMeta.ogDescription ?? layoutMeta.twitterDescription ?? DEFAULT_META.twitterDescription;
    document.head.appendChild(twitterDescription);

    const twitterImage = document.createElement('meta');
    twitterImage.name = 'twitter:image';
    twitterImage.content = '/images/og-image.png';
    document.head.appendChild(twitterImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Google Analytics
    if (!document.querySelector('script[src="https://www.googletagmanager.com/gtag/js?id=G-VFP1JLQVW6"]')) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-VFP1JLQVW6';
      document.head.appendChild(gaScript);

      const gaInlineScript = document.createElement('script');
      gaInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VFP1JLQVW6');
      `;
      document.head.appendChild(gaInlineScript);
    }
  }, [landingMetaVariant, location.pathname]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&family=Montserrat:wght@400;700&display=swap');
        
        :root {
          --font-serif: 'Inter', sans-serif;
          --font-sans: 'Inter', sans-serif;
          --font-brand: 'Inter', sans-serif;
          
        /* Light Mode Color Theme - Blue, Gold & Burgundy */
        --color-background: #FAFAFA;
        --color-surface: #ffffff;
        --color-card: #E0E6ED;
        --color-text: #222222;
        --color-text-muted: #2874A6;
        --color-primary: #223A5E;
        --color-secondary: #E0E6ED;
        --color-accent: #FFD700;
        --color-accent-burgundy: #8C243B;
        --color-success: #2874A6;
        --color-warning: #FFD700;
        --color-error: #8C243B;
        
        /* Theme Color Variants */
        --color-russian-violet: #223A5E;
        --color-persian-indigo: #2874A6;
        --color-tekhelet: #223A5E;
        --color-french-violet: #223A5E;
        --color-amethyst: #2874A6;
        --color-heliotrope: #FFD700;
        --color-mauve: #FFD700;
        
        /* Solid Colors for Flat Design */
        --color-primary-solid: #223A5E;
        --color-secondary-solid: #E0E6ED;
        --color-accent-solid: #FFD700;
        --color-accent-burgundy-solid: #8C243B;
        --color-success-solid: #2874A6;
        --color-warning-solid: #FFD700;
        --color-error-solid: #8C243B;
        
        /* Border and Outline Colors */
        --color-border: #2874A6;
        --color-border-dark: #223A5E;
        --color-outline: #FFD700;
        }

        .dark {
          /* Dark Mode Color Theme */
          --color-background: #0f172a;
          --color-surface: #1e293b;
          --color-card: #334155;
          --color-text: #f1f5f9;
          --color-text-muted: #94a3b8;
          --color-primary: #3b82f6;
          --color-secondary: #475569;
          --color-accent: #fbbf24;
          --color-accent-burgundy: #b91c1c;
          --color-success: #60a5fa;
          --color-warning: #fbbf24;
          --color-error: #ef4444;
          
          /* Theme Color Variants - Dark Mode */
          --color-russian-violet: #3b82f6;
          --color-persian-indigo: #60a5fa;
          --color-tekhelet: #3b82f6;
          --color-french-violet: #3b82f6;
          --color-amethyst: #60a5fa;
          --color-heliotrope: #fbbf24;
          --color-mauve: #fbbf24;
          
          /* Solid Colors for Flat Design - Dark Mode */
          --color-primary-solid: #3b82f6;
          --color-secondary-solid: #475569;
          --color-accent-solid: #fbbf24;
          --color-accent-burgundy-solid: #b91c1c;
          --color-success-solid: #60a5fa;
          --color-warning-solid: #fbbf24;
          --color-error-solid: #ef4444;
          
          /* Border and Outline Colors - Dark Mode */
          --color-border: #60a5fa;
          --color-border-dark: #3b82f6;
          --color-outline: #fbbf24;
        }

        body {
          background-color: var(--color-background);
          color: var(--color-text);
          font-family: var(--font-sans);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        h1, h2, h3 {
          font-family: var(--font-serif);
          color: var(--color-text);
        }

        /* Image visibility in dark mode */
        .dark img:not([class*="brightness"]) {
          opacity: 0.9;
        }

        .dark img[src*="hero"] {
          filter: brightness(0.75) contrast(1.1);
        }

        /* Ensure darker images are visible in dark mode */
        .dark section img,
        .dark .bg-ts-card img {
          filter: brightness(1.1) contrast(1.05);
        }
      `}</style>
      
      <div className="relative antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
}

