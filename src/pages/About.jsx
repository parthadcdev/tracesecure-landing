import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';

export default function About() {
  const scrollToWaitlist = () => {
    window.location.href = createPageUrl('Landing') + '#waitlist-form';
  };

  const viewport = { once: true, amount: 0.2 };

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
                About TraceSecure
              </h1>
            </motion.div>

            {/* Our Mission Section */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text">
                Our Mission
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-6"></div>
              <p className="text-lg leading-relaxed text-ts-text-muted">
                Our mission is to democratize trust for craft brands. We believe the independent winemaker, distiller, and artisan deserves the same level of brand protection and customer connection as the world's biggest corporations. We build simple, powerful tools to help them protect their legacy and share their unique story.
              </p>
            </motion.section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-ts-border to-transparent my-16"></div>

            {/* About the Founder Section */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-ts-text">
                About the Founder
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-8"></div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Headshot */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-ts-card border-2 border-ts-border shadow-lg overflow-hidden">
                    <img 
                      src="/images/headshot-11-6.webp" 
                      alt="Partha Chandramohan, Founder & CEO of TraceSecure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Founder Info */}
                <div className="flex-1">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-2 text-ts-text"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Partha Chandramohan
                  </motion.h3>
                  <motion.p
                    className="text-lg text-ts-text-muted mb-6 font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Founder & CEO
                  </motion.p>
                  <motion.div
                    className="space-y-4 text-base leading-relaxed text-ts-text-muted"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <p>
                      Partha is a seasoned technology consultant and the founder of AxonSphere Consulting, an Ashburn, VA based technology strategy firm. With over 15 years of experience in cloud architecture, supply chain logistics, and digital transformation, he has a deep expertise in building scalable, enterprise-grade systems.
                    </p>
                    <p>
                      He founded TraceSecure to solve the real-world challenges he saw facing independent, high-value producers. His goal is to leverage cutting-edge technology (like cloud infrastructure and blockchain) to build simple, affordable, and powerful tools that empower small businesses to thrive.
                    </p>
                    <div className="pt-4 mt-4 border-t border-ts-border">
                      <p className="text-sm italic text-ts-text-muted">
                        <strong className="text-ts-text">Entity:</strong> TraceSecure is a digital-native platform developed and operated by AxonSphere Consulting, LLC.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-ts-text">
                Ready to Protect Your Legacy?
              </h3>
              <p className="text-ts-text-muted mb-6 max-w-2xl mx-auto">
                Join TraceSecure today and discover how simple, powerful tools can help you connect with customers and protect your brand.
              </p>
              <a
                href="https://app.tracesecure.co/auth?tab=signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all bg-ts-accent-blue hover:bg-ts-primary text-white text-center inline-block"
              >
                Start Free
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

