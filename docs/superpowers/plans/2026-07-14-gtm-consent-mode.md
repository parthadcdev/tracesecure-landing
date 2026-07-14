# GTM Consent Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace direct Google Analytics loading with Google Tag Manager (`GTM-KVFKJLHG`) plus Consent Mode v2, so GTM always loads and tags wait for cookie-banner consent.

**Architecture:** `src/lib/cookieConsent.js` owns Consent Mode defaults, one-time GTM injection, and consent updates. `Layout` boots GTM on mount and forwards banner changes to `updateConsentMode`. GA4 is configured only inside the GTM UI (not in app code).

**Tech Stack:** React 18, Vite, existing cookie banner (`CookieConsent.jsx`), Google Tag Manager + Consent Mode v2.

**Spec:** `docs/superpowers/specs/2026-07-14-gtm-consent-mode-design.md`

## Global Constraints

- Container ID: `GTM-KVFKJLHG` (hardcoded)
- Always load GTM; never gate the container script on analytics consent
- Consent Mode defaults: deny analytics/ads/functionality/personalization until banner says otherwise
- Ads keys stay denied: `ad_storage`, `ad_user_data`, `ad_personalization`
- Remove all direct `G-VFP1JLQVW6` / `gtag.js` / `loadGoogleAnalytics` / `removeGoogleAnalytics` usage
- No new test framework; verify in the browser (repo has no unit-test runner)
- Do not change cookie-banner layout or preference categories
- Do not add a Vite env var for GTM

## File map

| File | Responsibility |
|---|---|
| `src/lib/cookieConsent.js` | Consent storage helpers + `initGtm` + `updateConsentMode` |
| `src/pages/Layout.jsx` | Mount GTM; wire consent → Consent Mode |
| `src/components/CookieConsent.jsx` | Analytics preference label copy only |

---

### Task 1: Replace GA helpers with GTM + Consent Mode

**Files:**
- Modify: `src/lib/cookieConsent.js`
- Keep unchanged: `COOKIE_CONSENT_KEY`, `DEFAULT_CONSENT`, `readCookieConsent`, `writeCookieConsent`, `openCookiePreferences`

**Interfaces:**
- Consumes: `document`, `window`, existing consent shape `{ necessary, analytics, functional }`
- Produces:
  - `export const GTM_ID = 'GTM-KVFKJLHG'`
  - `export function initGtm(): void` — defaults + inject GTM once; then apply stored consent if present
  - `export function updateConsentMode(consent: { analytics: boolean, functional: boolean, ... }): void` — consent update + `cookie_consent_update` dataLayer event
  - Removes: `GA_MEASUREMENT_ID`, `loadGoogleAnalytics`, `removeGoogleAnalytics`

- [ ] **Step 1: Replace the GA section in `src/lib/cookieConsent.js`**

Keep the consent storage functions at the top of the file unchanged. Replace everything from `export const GA_MEASUREMENT_ID` through `removeGoogleAnalytics` with:

```js
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

  if (!document.getElementById('gtm-noscript')) {
    const noscript = document.createElement('noscript');
    noscript.id = 'gtm-noscript';
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`;
    document.body.prepend(noscript);
  }

  const stored = readCookieConsent();
  if (stored) {
    updateConsentMode(stored);
  }
}
```

- [ ] **Step 2: Confirm no remaining GA symbols in this file**

Run: `rg "GA_MEASUREMENT|loadGoogleAnalytics|removeGoogleAnalytics|gtag/js" src/lib/cookieConsent.js`

Expected: no matches

- [ ] **Step 3: Commit**

```bash
git add src/lib/cookieConsent.js
git commit -m "$(cat <<'EOF'
Replace direct GA bootstrap with GTM and Consent Mode.

EOF
)"
```

---

### Task 2: Wire Layout to always init GTM

**Files:**
- Modify: `src/pages/Layout.jsx`

**Interfaces:**
- Consumes: `initGtm`, `updateConsentMode`, `readCookieConsent` from `@/lib/cookieConsent`
- Produces: Layout always calls `initGtm()` once on mount; consent changes only call `updateConsentMode`

- [ ] **Step 1: Update the import in `src/pages/Layout.jsx`**

Replace:

```js
import { loadGoogleAnalytics, readCookieConsent, removeGoogleAnalytics } from "@/lib/cookieConsent";
```

with:

```js
import { initGtm, readCookieConsent, updateConsentMode } from "@/lib/cookieConsent";
```

- [ ] **Step 2: Replace the consent handler and mount effect**

Replace:

```js
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
```

with:

```js
  const handleConsentChange = useCallback((consent) => {
    updateConsentMode(consent);
  }, []);

  useEffect(() => {
    initGtm();
  }, []);
```

Note: `initGtm` already applies stored consent via `updateConsentMode` when present. `handleConsentChange` still runs when `CookieConsent` hydrates stored consent — that second `updateConsentMode` is harmless and keeps banner-driven updates working.

- [ ] **Step 3: Confirm Layout no longer references GA helpers**

Run: `rg "loadGoogleAnalytics|removeGoogleAnalytics|GA_MEASUREMENT" src/pages/Layout.jsx`

Expected: no matches

- [ ] **Step 4: Commit**

```bash
git add src/pages/Layout.jsx
git commit -m "$(cat <<'EOF'
Boot GTM from Layout and update Consent Mode on banner changes.

EOF
)"
```

---

### Task 3: Clarify cookie banner analytics label

**Files:**
- Modify: `src/components/CookieConsent.jsx`

**Interfaces:**
- Consumes: unchanged consent API
- Produces: copy that names Tag Manager as the analytics vehicle

- [ ] **Step 1: Update the analytics preference description**

In `src/components/CookieConsent.jsx`, replace:

```jsx
<span className="block text-xs text-ts-text-muted">Google Analytics — usage statistics</span>
```

with:

```jsx
<span className="block text-xs text-ts-text-muted">Google Tag Manager — usage statistics</span>
```

- [ ] **Step 2: Repo-wide sweep for removed GA loader symbols**

Run: `rg "loadGoogleAnalytics|removeGoogleAnalytics|GA_MEASUREMENT_ID|G-VFP1JLQVW6" src`

Expected: no matches under `src/` (measurement ID may still appear in the design/plan docs; that is fine)

- [ ] **Step 3: Commit**

```bash
git add src/components/CookieConsent.jsx
git commit -m "$(cat <<'EOF'
Clarify cookie analytics preference mentions Tag Manager.

EOF
)"
```

---

### Task 4: Manual verification

**Files:** none (browser only)

**Interfaces:**
- Consumes: running app with Tasks 1–3 applied; GTM Preview optional but recommended

- [ ] **Step 1: Start the app**

Run: `npm run dev`

Open the local URL in a browser with DevTools → Network + Application → Cookies.

- [ ] **Step 2: Fresh visit, necessary only**

1. Clear site data for localhost (or use a private window).
2. Load the site; choose **Necessary only**.
3. Confirm Network shows a request to `googletagmanager.com/gtm.js?id=GTM-KVFKJLHG`.
4. Confirm no `gtag/js?id=G-VFP1JLQVW6` request from app code.
5. Confirm no new `_ga` / `_gid` cookies appear after denying analytics.

- [ ] **Step 3: Accept analytics**

1. Open Cookie Preferences → enable Analytics → Save (or Accept all).
2. In the Console, confirm `dataLayer` contains a `cookie_consent_update` with `consent_analytics: true`.
3. With GTM Preview connected (if available), confirm the GA4 tag fires only after grant.

- [ ] **Step 4: Revoke analytics**

1. Open preferences → turn Analytics off → Save.
2. Confirm a new `cookie_consent_update` with `consent_analytics: false`.
3. Confirm subsequent navigation does not produce new GA hits (GTM Preview / GA DebugView).

- [ ] **Step 5: Reload with stored grant**

1. Accept analytics, reload.
2. Confirm GTM still loads once (single `gtm.js` script).
3. Confirm Consent Mode is already updated for analytics without needing to click the banner again.

- [ ] **Step 6: Ops reminder (not a code commit)**

In GTM UI for `GTM-KVFKJLHG`:

1. Ensure GA4 Configuration tag uses `G-VFP1JLQVW6`
2. Require `analytics_storage` via Consent Mode
3. Preview, then publish

No commit for this step unless the user asks to note it elsewhere.

---

## Spec coverage self-check

| Spec requirement | Task |
|---|---|
| Always load GTM `GTM-KVFKJLHG` | Task 1 `initGtm`, Task 2 Layout mount |
| Consent Mode v2 defaults + updates | Task 1 |
| Remove direct GA | Tasks 1–3 sweep |
| Analytics / functional mapping | Task 1 `consentStateFromPrefs` |
| Ads stay denied | Task 1 defaults + update |
| `cookie_consent_update` event | Task 1 `updateConsentMode` |
| Noscript iframe | Task 1 |
| Idempotent inject | Task 1 script/noscript guards |
| Layout wiring | Task 2 |
| Banner label | Task 3 |
| Browser verification | Task 4 |
| GTM UI GA4 + Consent Mode | Task 4 Step 6 (ops) |
| Out of scope (cookie wipe, env var, banner redesign) | Not in tasks |

## Placeholder / consistency check

- No TBD/TODO placeholders
- Symbol names consistent: `GTM_ID`, `initGtm`, `updateConsentMode`
- Removed symbols never reintroduced in later tasks
