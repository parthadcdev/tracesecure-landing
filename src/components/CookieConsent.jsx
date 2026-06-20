import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  COOKIE_CONSENT_KEY,
  DEFAULT_CONSENT,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent({ onConsentChange }) {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState(DEFAULT_CONSENT);

  useEffect(() => {
    const stored = readCookieConsent();
    if (stored) {
      setConsent(stored);
      onConsentChange?.(stored);
    } else {
      setVisible(true);
    }
  }, [onConsentChange]);

  useEffect(() => {
    const handleOpenPreferences = () => {
      const stored = readCookieConsent() || DEFAULT_CONSENT;
      setConsent(stored);
      setShowPreferences(true);
      setVisible(true);
    };

    window.addEventListener("ts-open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("ts-open-cookie-preferences", handleOpenPreferences);
  }, []);

  const saveConsent = (nextConsent) => {
    writeCookieConsent(nextConsent);
    setConsent(nextConsent);
    onConsentChange?.(nextConsent);
    setVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, functional: true });
  };

  const acceptNecessary = () => {
    saveConsent({ ...DEFAULT_CONSENT });
  };

  const savePreferences = () => {
    saveConsent({ ...consent, necessary: true });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-0 inset-x-0 z-[200] p-4 md:p-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-ts-border bg-white shadow-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-ts-text">Cookie preferences</h2>
                <p className="text-sm text-ts-text-muted mt-1">
                  We use necessary cookies to run the site. Analytics cookies help us improve TraceSecure.
                  You can change your choices anytime via Cookie Preferences in the footer.
                </p>
              </div>
              {readCookieConsent() && (
                <button
                  type="button"
                  onClick={() => setVisible(false)}
                  className="text-ts-text-muted hover:text-ts-text"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {showPreferences && (
              <div className="space-y-4 mb-4 border-t border-ts-border pt-4">
                <label className="flex items-center justify-between gap-4">
                  <span>
                    <span className="block text-sm font-semibold text-ts-text">Necessary</span>
                    <span className="block text-xs text-ts-text-muted">Required for the site to function</span>
                  </span>
                  <input type="checkbox" checked disabled className="rounded" />
                </label>
                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <span>
                    <span className="block text-sm font-semibold text-ts-text">Analytics</span>
                    <span className="block text-xs text-ts-text-muted">Google Analytics — usage statistics</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                    className="rounded"
                  />
                </label>
                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <span>
                    <span className="block text-sm font-semibold text-ts-text">Functional</span>
                    <span className="block text-xs text-ts-text-muted">Remember preferences and settings</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={consent.functional}
                    onChange={(e) => setConsent((c) => ({ ...c, functional: e.target.checked }))}
                    className="rounded"
                  />
                </label>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {!showPreferences ? (
                <>
                  <button
                    type="button"
                    onClick={acceptNecessary}
                    className="px-4 py-2 text-sm font-semibold rounded-lg border-2 border-ts-border text-ts-text hover:bg-ts-surface transition-colors"
                  >
                    Necessary only
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 text-sm font-semibold rounded-lg border-2 border-ts-border text-ts-text hover:bg-ts-surface transition-colors"
                  >
                    Manage preferences
                  </button>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-ts-accent-blue text-white hover:bg-ts-primary transition-colors"
                  >
                    Accept all
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={acceptNecessary}
                    className="px-4 py-2 text-sm font-semibold rounded-lg border-2 border-ts-border text-ts-text hover:bg-ts-surface transition-colors"
                  >
                    Necessary only
                  </button>
                  <button
                    type="button"
                    onClick={savePreferences}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-ts-accent-blue text-white hover:bg-ts-primary transition-colors"
                  >
                    Save preferences
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { COOKIE_CONSENT_KEY };
