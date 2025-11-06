import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
            {/* Page Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
                Terms of Service
              </h1>
              <p className="text-ts-text-muted">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-8 text-ts-text-muted leading-relaxed">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using TraceSecure ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">2. Description of Service</h2>
                  <p>
                    TraceSecure provides a digital product passport platform that enables craft producers to create, manage, and track digital identities for their products using QR codes and blockchain technology. The Service includes features for authentication, traceability, and customer engagement.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">3. User Accounts</h2>
                  <h3 className="text-2xl font-semibold mb-3 text-ts-text">3.1 Registration</h3>
                  <p>To use certain features of the Service, you must register for an account and provide accurate, current, and complete information.</p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">3.2 Account Security</h3>
                  <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">3.3 Account Termination</h3>
                  <p>We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason we deem necessary.</p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">4. Acceptable Use</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the Service for any illegal or unauthorized purpose</li>
                    <li>Violate any laws or regulations in your use of the Service</li>
                    <li>Infringe upon the intellectual property rights of others</li>
                    <li>Transmit any malicious code, viruses, or harmful content</li>
                    <li>Attempt to gain unauthorized access to the Service</li>
                    <li>Interfere with or disrupt the Service or servers</li>
                    <li>Use the Service to create counterfeit or fraudulent products</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">5. Intellectual Property</h2>
                  <p>
                    The Service, including its original content, features, and functionality, is owned by TraceSecure and AxonSphere Consulting, LLC and is protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">6. User Content</h2>
                  <p>
                    You retain ownership of any content you submit to the Service. By submitting content, you grant us a license to use, store, and process that content as necessary to provide the Service. You are responsible for ensuring you have the right to submit any content you provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">7. Payment Terms</h2>
                  <h3 className="text-2xl font-semibold mb-3 text-ts-text">7.1 Subscription Plans</h3>
                  <p>Subscription fees are billed in advance on a monthly or annual basis, as selected by you.</p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">7.2 Refunds</h3>
                  <p>Refund policies are outlined in our pricing plans. Generally, refunds are provided for unused portions of prepaid subscriptions within 30 days of purchase.</p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">7.3 Price Changes</h3>
                  <p>We reserve the right to modify pricing with 30 days' notice to existing customers.</p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">8. Beta Program</h2>
                  <p>
                    TraceSecure is currently in beta. Features, functionality, and pricing may change before public release. Beta users acknowledge that the Service may contain bugs, errors, or incomplete features.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">9. Service Availability</h2>
                  <p>
                    We strive to maintain high availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">10. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, TraceSecure shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">11. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless TraceSecure and its affiliates from any claims, damages, losses, or expenses arising from your use of the Service or violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">12. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, United States, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">13. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">14. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> legal@tracesecure.co<br />
                    <strong>Address:</strong> AxonSphere Consulting, LLC, Ashburn, VA, United States
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

