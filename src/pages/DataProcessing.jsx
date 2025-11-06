import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DataProcessing() {
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
                Data Processing Agreement
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
                    This Data Processing Agreement ("DPA") describes how TraceSecure processes personal data on behalf of our customers in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other relevant privacy regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">2. Definitions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Controller:</strong> The customer who determines the purposes and means of processing personal data</li>
                    <li><strong>Processor:</strong> TraceSecure, who processes personal data on behalf of the Controller</li>
                    <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person</li>
                    <li><strong>Processing:</strong> Any operation performed on personal data, including collection, storage, and deletion</li>
                    <li><strong>Data Subject:</strong> The individual whose personal data is being processed</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">3. Scope and Purpose</h2>
                  <p>
                    TraceSecure processes personal data on behalf of our customers to provide digital product passport services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Creating and managing digital product passports</li>
                    <li>Processing customer scan data and engagement information</li>
                    <li>Managing user accounts and authentication</li>
                    <li>Providing analytics and reporting services</li>
                    <li>Facilitating customer communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">4. Our Obligations as Processor</h2>
                  <h3 className="text-2xl font-semibold mb-3 text-ts-text">4.1 Processing in Accordance with Instructions</h3>
                  <p>
                    We process personal data only in accordance with your documented instructions and this DPA, unless required by law.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">4.2 Confidentiality</h3>
                  <p>
                    All personnel who have access to personal data are bound by confidentiality obligations and receive appropriate training on data protection.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">4.3 Security Measures</h3>
                  <p>We implement appropriate technical and organizational measures to ensure security, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security assessments and audits</li>
                    <li>Incident response procedures</li>
                    <li>Data backup and recovery systems</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">4.4 Sub-processors</h3>
                  <p>
                    We may engage sub-processors to assist in providing our services. We ensure that all sub-processors are bound by similar data protection obligations. A list of current sub-processors is available upon request.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">4.5 Data Subject Rights</h3>
                  <p>
                    We assist you in responding to requests from data subjects to exercise their rights under applicable data protection laws, including access, rectification, erasure, and data portability.
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 mt-6 text-ts-text">4.6 Data Breach Notification</h3>
                  <p>
                    In the event of a personal data breach, we will notify you without undue delay and provide information necessary to assist you in meeting your breach notification obligations.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">5. Data Retention and Deletion</h2>
                  <p>
                    We retain personal data only for as long as necessary to provide our services or as required by law. Upon termination of services or upon your request, we will delete or return all personal data in accordance with your instructions, unless retention is required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">6. International Data Transfers</h2>
                  <p>
                    Personal data may be transferred to and processed in countries outside the European Economic Area (EEA). When such transfers occur, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">7. Audit Rights</h2>
                  <p>
                    You have the right to audit our compliance with this DPA. We will provide reasonable assistance and information necessary to conduct such audits, subject to appropriate confidentiality obligations.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">8. Your Obligations as Controller</h2>
                  <p>As the Controller, you are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ensuring you have a lawful basis for processing personal data</li>
                    <li>Obtaining necessary consents from data subjects</li>
                    <li>Providing accurate instructions for data processing</li>
                    <li>Complying with applicable data protection laws</li>
                    <li>Responding to data subject requests</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">9. Liability and Indemnification</h2>
                  <p>
                    Each party shall be liable for any damages caused by its breach of this DPA. Our liability is limited as set forth in our Terms of Service, except where such limitation is prohibited by applicable law.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">10. Changes to This Agreement</h2>
                  <p>
                    We may update this DPA from time to time to reflect changes in our services or applicable laws. Material changes will be communicated to you in advance.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-ts-text">11. Contact Information</h2>
                  <p>
                    For questions about data processing or this DPA, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Data Protection Officer:</strong><br />
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

