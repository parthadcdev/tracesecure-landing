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

export const GA_MEASUREMENT_ID = 'G-VFP1JLQVW6';

export function loadGoogleAnalytics() {
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  const gaInlineScript = document.createElement('script');
  gaInlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(gaInlineScript);
}

export function removeGoogleAnalytics() {
  document
    .querySelectorAll(`script[src*="googletagmanager.com"], script[src*="google-analytics.com"]`)
    .forEach((el) => el.remove());
}
