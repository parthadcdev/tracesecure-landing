import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
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
                Cookie Policy
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
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">2. How We Use Cookies</h2>
                  <p>TraceSecure uses cookies and similar tracking technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Authenticate your account and maintain your session</li>
                    <li>Analyze how you use our Service to improve functionality</li>
                    <li>Provide personalized content and features</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">3. Types of Cookies We Use</h2>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-ts-text">3.1 Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the Service to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">3.2 Performance Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with our Service by collecting and reporting information anonymously. This helps us improve the way our Service works.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">3.3 Functionality Cookies</h3>
                  <p>
                    These cookies allow the Service to remember choices you make (such as language preferences) and provide enhanced, personalized features.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">3.4 Targeting/Advertising Cookies</h3>
                  <p>
                    These cookies may be used to deliver relevant advertisements and track campaign effectiveness. We may use these to show you relevant content based on your interests.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">4. Third-Party Cookies</h2>
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide other functionality. These third parties may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Analytics providers (e.g., Google Analytics)</li>
                    <li>Authentication providers</li>
                    <li>Payment processors</li>
                    <li>Content delivery networks</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">5. Managing Cookies</h2>
                  <h3 className="text-2xl font-semibold mb-3 text-ts-text">5.1 Browser Settings</h3>
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies. However, if you choose to disable cookies, some features of our Service may not function properly.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">5.2 Cookie Preferences</h3>
                  <p>
                    You can manage your cookie preferences through our cookie consent banner or settings panel when you first visit our Service. You can change these preferences at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">6. Local Storage and Similar Technologies</h2>
                  <p>
                    In addition to cookies, we may use other storage technologies such as Local Storage, Session Storage, and IndexedDB to store information on your device. These technologies serve similar purposes to cookies and are subject to the same privacy protections.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">7. Do Not Track Signals</h2>
                  <p>
                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT signals.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">8. Cookie Retention</h2>
                  <p>
                    Cookies are stored on your device for varying periods depending on their type:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">9. Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">10. Contact Us</h2>
                  <p>
                    If you have questions about our use of cookies or this Cookie Policy, please contact us at:
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

