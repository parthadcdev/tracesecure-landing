export const COOKIE_CONSENT_KEY = 'ts-cookie-consent';

export const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  functional: false,
};

export function readCookieConsent() {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent('ts-open-cookie-preferences'));
}

export const GTM_ID = 'GTM-KVFKJLHG';

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

function consentStateFromPrefs(consent) {
  const analytics = consent?.analytics ? 'granted' : 'denied';
  const functional = consent?.functional ? 'granted' : 'denied';
  return {
    analytics_storage: analytics,
    functionality_storage: functional,
    personalization_storage: functional,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  };
}

export function updateConsentMode(consent) {
  ensureGtag();
  window.gtag('consent', 'update', consentStateFromPrefs(consent));
  window.dataLayer.push({
    event: 'cookie_consent_update',
    consent_analytics: !!consent?.analytics,
    consent_functional: !!consent?.functional,
  });
}

export function initGtm() {
  ensureGtag();

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  if (!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_ID}"]`)) {
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);
  }

  const stored = readCookieConsent();
  if (stored) {
    updateConsentMode(stored);
  }
}
