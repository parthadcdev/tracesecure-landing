import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
            {/* Page Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
                Privacy Policy
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
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">1. Introduction</h2>
                  <p>
                    TraceSecure ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. By using TraceSecure, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">2. Information We Collect</h2>
                  <h3 className="text-2xl font-semibold mb-3 text-ts-text">2.1 Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information (name, email address, company name)</li>
                    <li>Payment and billing information</li>
                    <li>Product information and digital passport data</li>
                    <li>Customer communications and support requests</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Usage data and analytics</li>
                    <li>Device information and IP addresses</li>
                    <li>Cookies and tracking technologies</li>
                    <li>Log files and system information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">3. How We Use Your Information</h2>
                  <p>We use the collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and managing accounts</li>
                    <li>Improving our platform and user experience</li>
                    <li>Communicating with you about services and updates</li>
                    <li>Complying with legal obligations</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">4. Data Sharing and Disclosure</h2>
                  <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With service providers who assist in operating our platform</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, privacy, safety, or property</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">5. Data Security</h2>
                  <p>
                    We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">6. Your Rights</h2>
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access to your personal data</li>
                    <li>Correction of inaccurate data</li>
                    <li>Deletion of your data</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">7. GDPR Compliance</h2>
                  <p>
                    TraceSecure complies with the General Data Protection Regulation (GDPR). If you are located in the European Economic Area (EEA), you have specific rights regarding your personal data. We act as a data controller and processor in accordance with GDPR requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">8. Data Retention</h2>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">9. Children's Privacy</h2>
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">10. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">11. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> privacy@tracesecure.co<br />
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

