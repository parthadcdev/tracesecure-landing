# Google Tag Manager + Consent Mode Design

**Date:** 2026-07-14  
**Status:** Approved for planning  
**Container:** `GTM-KVFKJLHG`

## Goal

Replace direct Google Analytics (`gtag.js` + `G-VFP1JLQVW6`) with Google Tag Manager. Load GTM on every visit and use Consent Mode v2 so tags respect cookie-banner choices.

## Decisions

| Topic | Choice |
|---|---|
| Loader | Always load GTM (`GTM-KVFKJLHG`) |
| Privacy | Consent Mode v2 via `dataLayer` / `gtag('consent', …)` |
| Direct GA | Remove from the codebase; GA runs only inside GTM |
| Container ID | Hardcoded (same pattern as previous measurement ID) |
| Ads consent | Remain denied (no ad tags today) |

## Architecture

`src/lib/cookieConsent.js` owns:

1. Default Consent Mode (denied)
2. One-time GTM script + noscript iframe inject
3. Consent Mode updates from banner preferences

`Layout` always calls `initGtm()` on mount and maps consent changes to `updateConsentMode(consent)`.

Cookie banner UX stays the same; only the analytics preference label is clarified.

## Consent mapping

| Banner preference | Consent Mode keys |
|---|---|
| Analytics on/off | `analytics_storage` → `granted` / `denied` |
| Functional on/off | `functionality_storage`, `personalization_storage` → `granted` / `denied` |
| Defaults (always) | `ad_storage`, `ad_user_data`, `ad_personalization` → `denied` |

Boot sequence:

1. Init `dataLayer` and stub `gtag`
2. `gtag('consent', 'default', { …denied… })`
3. Inject GTM script (`gtm.js?id=GTM-KVFKJLHG`) and noscript iframe once
4. If stored consent exists → `gtag('consent', 'update', …)` to match
5. On banner save → persist localStorage → `consent update` → push `cookie_consent_update` to `dataLayer` for optional GTM triggers

## Code changes

| File | Change |
|---|---|
| `src/lib/cookieConsent.js` | Replace `GA_MEASUREMENT_ID` / `loadGoogleAnalytics` / `removeGoogleAnalytics` with `GTM_ID`, `initGtm`, `updateConsentMode` |
| `src/pages/Layout.jsx` | `initGtm()` on mount; consent callback → `updateConsentMode` only |
| `src/components/CookieConsent.jsx` | Label: analytics via Google Tag Manager |

Policy pages may keep “Google Analytics” as a processor name (accurate if GA4 fires from GTM). Light copy tweaks only if wording becomes misleading.

## Out of scope

- Deleting leftover `_ga` cookies on revoke
- Vite env var for the container ID
- Changing cookie-banner UI structure or categories
- Configuring/publishing tags inside the GTM UI (ops checklist below)

## GTM UI checklist (outside repo)

1. GA4 Configuration tag for measurement ID `G-VFP1JLQVW6`
2. Enable Consent Mode; require `analytics_storage` for that tag
3. Preview, confirm denied vs granted behavior, then publish

## Verification

- Analytics denied: GTM script loads; GA4 does not set analytics cookies / send hits
- Analytics granted: GA4 receives page views
- Toggle off after grant: consent updates; new hits stop
- Reloading with stored consent restores the matching Consent Mode state before/with GTM

## Non-goals / cleanup notes

Script teardown (`removeGoogleAnalytics`) is not required for deny paths once Consent Mode is the control plane. Idempotent `initGtm` must not inject duplicate GTM scripts.
