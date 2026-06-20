import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LAST_UPDATED = 'June 19, 2026';

function LegalDisclaimer() {
  return (
    <div className="mb-10 rounded-lg border border-ts-border bg-ts-surface px-4 py-3 text-sm text-ts-text-muted">
      Starter draft — not legal advice. Have counsel review before publishing, especially token/rewards and GDPR sections.
    </div>
  );
}

export default function PrivacyPolicy() {
  const viewport = { once: true, amount: 0.2 };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
                TraceSecure Privacy Policy
              </h1>
              <p className="text-ts-text-muted">Last updated: {LAST_UPDATED}</p>
            </motion.div>

            <LegalDisclaimer />

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-8 text-ts-text-muted leading-relaxed">
                <p>
                  TraceSecure (&quot;we,&quot; &quot;us&quot;) operates tracesecure.co and the TraceSecure platform (the &quot;Service&quot;). This policy explains what we collect, why, and your rights.
                </p>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">1. Information we collect</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account data:</strong> name, email, company, billing details when you create an account or subscribe.</li>
                    <li><strong>Consumer scan data:</strong> when an end consumer scans a product QR/NFC code and opts in, we collect the email address and any information they choose to submit, with their consent, in exchange for a reward.</li>
                    <li><strong>Usage data:</strong> device, browser, IP, pages viewed, and scan events, collected via cookies and similar technologies.</li>
                    <li><strong>Blockchain data:</strong> product authentication records and reward transactions are written to a public blockchain (Polygon). Do not treat on-chain data as private; we store no consumer personal data in plaintext on-chain (emails are hashed).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">2. How we use information</h2>
                  <p>
                    To provide and improve the Service, process subscriptions, deliver token rewards, prevent fraud and duplicate claims, communicate with you, and meet legal obligations.
                  </p>
                </section>

                <section id="gdpr">
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">3. Legal bases (GDPR)</h2>
                  <p>
                    We process personal data on the bases of contract (to provide the Service), consent (consumer lead capture and marketing), legitimate interests (security, analytics), and legal obligation.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">4. Sharing</h2>
                  <p>
                    We share data with service providers (hosting, payments, email, authentication, blockchain infrastructure) under contract, and as required by law. We do not sell personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">5. Consumer leads and brands</h2>
                  <p>
                    When a consumer opts in via a scan, their consented contact details are shared with the brand whose product was scanned, for that brand&apos;s marketing. Consumers can withdraw consent at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">6. International transfers</h2>
                  <p>
                    Data may be processed outside your country, including the United States, under appropriate safeguards.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">7. Retention</h2>
                  <p>
                    We retain personal data for as long as your account is active or as needed to provide the Service and meet legal obligations. Activity-log retention follows your plan tier.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">8. Your rights</h2>
                  <p>
                    Depending on your location (including GDPR and US state laws), you may access, correct, delete, port, or object to processing of your data, and withdraw consent. Contact{' '}
                    <a href="mailto:privacy@tracesecure.co" className="text-ts-accent-blue hover:underline">privacy@tracesecure.co</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">9. Cookies</h2>
                  <p>
                    We use necessary, analytics, and functional cookies. You can manage preferences via our cookie banner.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">10. Security</h2>
                  <p>
                    We use encryption in transit and at rest, hashing of consumer emails (HMAC-SHA-256), and access controls. No method is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">11. Children</h2>
                  <p>
                    The Service is not directed to children under 16. We do not knowingly collect their data.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">12. Changes &amp; contact</h2>
                  <p>
                    We may update this policy and will post the new date. Questions:{' '}
                    <a href="mailto:privacy@tracesecure.co" className="text-ts-accent-blue hover:underline">privacy@tracesecure.co</a>.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
