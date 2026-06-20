import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LAST_UPDATED = 'June 19, 2026';

function LegalDisclaimer() {
  return (
    <div className="mb-10 rounded-lg border border-ts-border bg-ts-surface px-4 py-3 text-sm text-ts-text-muted">
      Starter draft — not legal advice. Have counsel review before publishing, especially the token/rewards section.
    </div>
  );
}

export default function TermsOfService() {
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
                TraceSecure Terms of Service
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
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">1. Agreement</h2>
                  <p>
                    By using tracesecure.co or the Service, you agree to these Terms. If using on behalf of an organization, you represent you have authority to bind it.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">2. The Service</h2>
                  <p>
                    TraceSecure provides product authentication, supply-chain traceability, QR/NFC consumer engagement, and a token-reward program, per your subscription tier.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">3. Accounts</h2>
                  <p>
                    You&apos;re responsible for your account, credentials, and the accuracy of information you provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">4. Subscriptions &amp; billing</h2>
                  <p>
                    Paid plans (Growth, Scale) bill in advance on a recurring basis. Fees are non-refundable except as required by law. We may change pricing with notice; changes apply to the next billing cycle. You can cancel anytime, effective at the end of the current period.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">5. Acceptable use</h2>
                  <p>
                    You will not misuse the Service, infringe IP, upload unlawful content, attempt to game rewards, reverse-engineer the platform, or use it to deceive consumers.
                  </p>
                </section>

                {/* Section 6: $TRSR token rewards — requires legal review for securities/MiCA exposure */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">6. $TRSR token rewards</h2>
                  <p>
                    The Service includes a rewards program using $TRSR tokens. Tokens are utility credits redeemable per the platform rules; they are not an investment, security, or guarantee of value, and may change or be discontinued. Reward eligibility, caps, and redemption are subject to program terms and anti-abuse controls.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">7. Customer data &amp; consumer leads</h2>
                  <p>
                    You&apos;re responsible for handling consumer data you receive lawfully, including obtaining and honoring consent and complying with GDPR/applicable law. You are the controller of leads you collect; we are a processor.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">8. Intellectual property</h2>
                  <p>
                    We retain all rights to the Service. You retain rights to your content and grant us a license to operate the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">9. Blockchain</h2>
                  <p>
                    Authentication and reward records may be written to a public blockchain and are immutable and publicly visible. We are not responsible for blockchain network behavior, forks, or outages.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">10. Disclaimers &amp; liability</h2>
                  <p>
                    The Service is provided &quot;as is.&quot; To the maximum extent permitted by law, we disclaim warranties and limit liability to the amounts you paid in the prior 12 months.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">11. Termination</h2>
                  <p>
                    We may suspend or terminate for breach. You may stop using the Service anytime. On termination, your right to use the Service ends; data handling follows the Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">12. Governing law &amp; changes</h2>
                  <p>
                    These Terms are governed by the laws of Virginia, USA. We may update these Terms and will post the new date. Contact:{' '}
                    <a href="mailto:legal@tracesecure.co" className="text-ts-accent-blue hover:underline">legal@tracesecure.co</a>.
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
