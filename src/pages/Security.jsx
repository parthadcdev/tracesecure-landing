import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const LAST_UPDATED = 'June 19, 2026';

export default function Security() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">Security</h1>
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
                  TraceSecure is built to protect brand data, consumer leads, and product authentication records. This page summarizes our security practices.
                </p>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Encryption</h2>
                  <p>
                    Data is encrypted in transit (TLS) and at rest on our cloud infrastructure. Sensitive credentials and API keys are stored using industry-standard secret management.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Consumer data protection</h2>
                  <p>
                    Consumer email addresses collected via product scans are hashed (HMAC-SHA-256) before any on-chain write. We do not store consumer personal data in plaintext on the public blockchain.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Access controls</h2>
                  <p>
                    Platform access is role-based. Production systems require authenticated access with least-privilege permissions. Activity logs are retained per your subscription tier.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Blockchain caveat</h2>
                  <p>
                    Product authentication and reward records may be written to Polygon, a public blockchain. On-chain data is immutable and publicly visible. See our{' '}
                    <Link to={createPageUrl('PrivacyPolicy')} className="text-ts-accent-blue hover:underline">Privacy Policy</Link>{' '}
                    for details on what is and is not stored on-chain.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Infrastructure</h2>
                  <p>
                    TraceSecure runs on managed cloud infrastructure with automated patching, monitoring, and backup procedures. We use gasless transactions on Polygon to reduce friction for end consumers.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">Report a concern</h2>
                  <p>
                    If you discover a security vulnerability or have a security-related question, contact{' '}
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
