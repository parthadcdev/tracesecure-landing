

import React, { useEffect } from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

export default function Layout({ children, currentPageName }) {
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

    // Set document metadata
    document.documentElement.lang = 'en';
    document.title = "TraceSecure: Web3 Product Authentication | Blockchain Traceability for Artisans";

    // Remove existing meta tags to avoid duplicates
    const existingMetas = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="yandex-verification"], meta[property^="og:"], meta[name^="twitter:"]');
    existingMetas.forEach(meta => meta.remove());

    // Yandex verification
    const yandexVerification = document.createElement('meta');
    yandexVerification.name = 'yandex-verification';
    yandexVerification.content = '6b0c459b00a08ddd';
    document.head.appendChild(yandexVerification);

    // Meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'TraceSecure: Blockchain-powered digital product passports for artisans. Fight counterfeits with Web3 authentication, NFT certificates, and Polygon smart contracts. Secure traceability dApp for independent creators.';
    document.head.appendChild(metaDescription);

    // Meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Web3, blockchain, Ethereum, Polygon, dApp, smart contracts, crypto wallets, transparency, traceability, NFT, tokens, digital product passport, DPP, authentication, anti-counterfeit, artisan, handmade, luxury goods, supply chain, provenance, $TRACE token';
    document.head.appendChild(metaKeywords);

    // Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'TraceSecure: Web3 Blockchain Authentication for Artisans';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Secure your crafts with blockchain NFT certificates. Polygon-powered dApp for product traceability, smart contracts, and digital product passports. Fight fakes with Web3 transparency.';
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
    twitterTitle.content = 'TraceSecure: Web3 Blockchain Authentication for Artisans';
    document.head.appendChild(twitterTitle);

    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = 'Fight counterfeits with blockchain NFT certificates. Polygon dApp for product authentication, smart contracts & digital product passports.';
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
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&family=Montserrat:wght@400;700&display=swap');
        
        :root {
          --font-serif: 'Inter', sans-serif;
          --font-sans: 'Inter', sans-serif;
          --font-brand: 'Inter', sans-serif;
          
        /* New Color Theme - Ocean & Sunset Palette */
        --color-background: #e8f4fa;
        --color-surface: #FFFFFF;
        --color-card: #FFFFFF;
        --color-text: #023047;
        --color-text-muted: #1b5c7a;
        --color-primary: #023047;
        --color-secondary: #219ebc;
        --color-accent: #8ecae6;
        --color-success: #219ebc;
        --color-warning: #ffb703;
        --color-error: #fb8500;
        
        /* Theme Color Variants */
        --color-sky-blue: #8ecae6;
        --color-blue-green: #219ebc;
        --color-prussian-blue: #023047;
        --color-selective-yellow: #ffb703;
        --color-ut-orange: #fb8500;
        
        /* Solid Colors for Flat Design */
        --color-primary-solid: #023047;
        --color-secondary-solid: #219ebc;
        --color-accent-solid: #8ecae6;
        --color-success-solid: #219ebc;
        --color-warning-solid: #ffb703;
        --color-error-solid: #fb8500;
        
        /* Border and Outline Colors */
        --color-border: #bbdff0;
        --color-border-dark: #51aed9;
        --color-outline: #023047;
        }

        body {
          background-color: var(--color-background);
          color: var(--color-text);
          font-family: var(--font-sans);
        }

        h1, h2, h3 {
          font-family: var(--font-serif);
          color: var(--color-text);
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

