

import React, { useCallback, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import CookieConsent from "../components/CookieConsent";
import { getLandingContent, LANDING_VARIANTS } from "@/config/landingContent";
import { isWineHostname } from "@/utils/host";
import { loadGoogleAnalytics, readCookieConsent, removeGoogleAnalytics } from "@/lib/cookieConsent";

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

  const handleConsentChange = useCallback((consent) => {
    if (consent.analytics) {
      loadGoogleAnalytics();
    } else {
      removeGoogleAnalytics();
    }
  }, []);

  useEffect(() => {
    const stored = readCookieConsent();
    if (stored?.analytics) {
      loadGoogleAnalytics();
    }
  }, []);

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
  }, [landingMetaVariant, location.pathname]);

  return (
    <div className="relative antialiased min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <CookieConsent onConsentChange={handleConsentChange} />
    </div>
  );
}

