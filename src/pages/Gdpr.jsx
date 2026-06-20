import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const LAST_UPDATED = 'June 19, 2026';

export default function Gdpr() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">GDPR Overview</h1>
              <p className="text-ts-text-muted">Last updated: {LAST_UPDATED}</p>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-8 text-ts-text-muted leading-relaxed">
                <p>
                  TraceSecure is committed to GDPR-aligned practices for EU and EEA visitors and customers. This page summarizes your rights and our roles.
                </p>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Our roles</h2>
                  <p>
                    For account and platform data, TraceSecure acts as a data controller. When you use TraceSecure to collect consumer leads via product scans, you are the controller of that lead data and TraceSecure acts as a processor on your behalf.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Legal bases</h2>
                  <p>
                    We process personal data on the bases of contract, consent, legitimate interests, and legal obligation. Full details are in section 3 of our{' '}
                    <Link to={`${createPageUrl('PrivacyPolicy')}#gdpr`} className="text-ts-accent-blue hover:underline">Privacy Policy</Link>.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Your rights</h2>
                  <p>If you are in the EU/EEA, you may have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion</li>
                    <li>Data portability</li>
                    <li>Object to or restrict processing</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Data subject requests</h2>
                  <p>
                    To exercise your rights, email{' '}
                    <a href="mailto:privacy@tracesecure.co" className="text-ts-accent-blue hover:underline">privacy@tracesecure.co</a>.
                    We will respond within the timeframe required by applicable law.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Data Processing Agreement</h2>
                  <p>
                    Business customers who need a formal DPA can review our{' '}
                    <Link to={createPageUrl('DataProcessing')} className="text-ts-accent-blue hover:underline">Data Processing Agreement</Link>.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">International transfers</h2>
                  <p>
                    Data may be processed in the United States and other countries. We use appropriate safeguards for cross-border transfers as described in our Privacy Policy.
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
