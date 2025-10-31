import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import { CheckCircle, QrCode, Users, BarChart3, Shield, Code } from 'lucide-react';

export default function Platform() {
  const scrollToWaitlist = () => {
    window.location.href = createPageUrl('Landing') + '#waitlist-form';
  };

  const viewport = { once: true, amount: 0.2 };

  const features = [
    {
      icon: Shield,
      title: 'Digital Passport Creation',
      description: 'Generate a unique, secure, and unchangeable digital history for every item.'
    },
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description: 'Create and manage secure QR codes for your labels.'
    },
    {
      icon: Users,
      title: 'Lead-Gen Toolkit',
      description: 'Customize your verification page with calls-to-action to capture customer emails and build your wine club.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track every scan to see where your products are being engaged.'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: '(Scale Tier) Add multiple users and manage permissions.'
    },
    {
      icon: Code,
      title: 'API Access',
      description: '(Scale Tier) Integrate TraceSecure data with your existing systems.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
                The TraceSecure Platform
              </h1>
            </motion.div>

            {/* Our Business Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text">
                Our Business
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-6"></div>
              <p className="text-lg leading-relaxed text-ts-text-muted">
                TraceSecure is a B2B SaaS platform that provides an end-to-end solution for product authenticity and direct-to-consumer engagement.
              </p>
            </motion.section>

            {/* What We're Building Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text">
                What We're Building
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-6"></div>
              <p className="text-lg leading-relaxed text-ts-text-muted">
                We give every physical product a unique "digital passport," viewable with a simple QR scan. This allows our customers (e.g., wineries, craft distilleries) to protect their brand from counterfeits, prove their product's origin, and most importantly turn every anonymous retail buyer into a known customer by creating a direct marketing and lead-generation channel.
              </p>
            </motion.section>

            {/* Current Stage Section */}
            <motion.section
              className="mb-16 bg-ts-card border-2 border-ts-border rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text">
                Current Stage
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-ts-success rounded-full"></div>
                  <p className="text-lg text-ts-text-muted">
                    <strong className="text-ts-text">Status:</strong> Live in Beta (Launched November 2025)
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Divider */}
            <div className="h-px w-full bg-ts-border my-16"></div>

            {/* How It Works Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text text-center">
                How It Works
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-8 mx-auto"></div>
              
              {/* Video Placeholder */}
              <motion.div
                className="w-full max-w-4xl mx-auto bg-ts-card border-2 border-ts-border rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="aspect-video bg-ts-secondary flex flex-col items-center justify-center p-8">
                  <div className="w-20 h-20 mb-4 bg-ts-accent-blue rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-ts-text-muted text-center italic">
                    (Embed Your New 60-Second Explainer Video Here)
                  </p>
                </div>
              </motion.div>
            </motion.section>

            {/* Divider */}
            <div className="h-px w-full bg-ts-border my-16"></div>

            {/* Product Screenshots Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text text-center">
                Product Screenshots
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-8 mx-auto"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Screenshot 1 */}
                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="aspect-video bg-ts-secondary flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-ts-text-muted" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-ts-text mb-2">Screenshot 1: The main analytics dashboard.</p>
                  </div>
                </motion.div>

                {/* Screenshot 2 */}
                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="aspect-video bg-ts-secondary flex items-center justify-center">
                    <Shield className="w-16 h-16 text-ts-text-muted" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-ts-text mb-2">Screenshot 2: The "Create New Product" workflow.</p>
                  </div>
                </motion.div>

                {/* Screenshot 3 */}
                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="aspect-video bg-ts-secondary flex items-center justify-center">
                    <Users className="w-16 h-16 text-ts-text-muted" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-ts-text mb-2">Screenshot 3: The consumer-facing "Verification Page" with the "Join Wine Club" CTA.</p>
                  </div>
                </motion.div>
              </div>

              <p className="text-sm text-ts-text-muted text-center italic">
                (Insert 3-4 High-Quality Screenshots of Your Actual Dashboard UI Here)
              </p>
            </motion.section>

            {/* Divider */}
            <div className="h-px w-full bg-ts-border my-16"></div>

            {/* Core Platform Features Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text text-center">
                Core Platform Features
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-12 mx-auto"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="bg-ts-card border-2 border-ts-border rounded-xl p-6 hover:shadow-lg transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-ts-accent-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-ts-accent-blue" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-ts-text">{feature.title}</h3>
                      <p className="text-ts-text-muted leading-relaxed">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Divider */}
            <div className="h-px w-full bg-ts-border my-16"></div>

            {/* Our Technology Stack Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-text text-center">
                Our Technology Stack
              </h2>
              <div className="h-1 w-20 bg-ts-accent mb-12 mx-auto"></div>
              
              <p className="text-lg leading-relaxed text-ts-text-muted mb-8 text-center max-w-3xl mx-auto">
                To deliver a verifiable, scalable, and low-cost solution, TraceSecure is built on a modern, digital-native architecture:
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-ts-text">Cloud Infrastructure</h3>
                  <p className="text-ts-text-muted leading-relaxed">
                    We are building our platform to be a scalable, cloud-native application.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-ts-text">Blockchain Layer</h3>
                  <p className="text-ts-text-muted leading-relaxed">
                    We use the <strong className="text-ts-text">Polygon (PoS) Network</strong> for its high speed, ultra-low transaction costs, and scalability, making it ideal for high-volume consumer product tracing.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-ts-text">Smart Contracts</h3>
                  <p className="text-ts-text-muted leading-relaxed">
                    Our core digital passports are built as <strong className="text-ts-text">Solidity-based ERC-721 smart contracts (NFTs)</strong>, ensuring each product has a unique, unforgeable, and transferable digital identity.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-ts-card border-2 border-ts-border rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-ts-text">Application Stack</h3>
                  <p className="text-ts-text-muted leading-relaxed">
                    The platform is built with a <strong className="text-ts-text">Node.js</strong> backend and a <strong className="text-ts-text">React</strong> frontend, designed for a fast, modern user experience.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="bg-ts-card border-2 border-ts-border rounded-xl p-6 mt-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <h3 className="text-xl font-bold mb-3 text-ts-text">API Layer</h3>
                <p className="text-ts-text-muted leading-relaxed">
                  An API-first design allows for future integration with client inventory systems and partner platforms (like our Scale tier offering).
                </p>
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-ts-text">
                Ready to Get Started?
              </h3>
              <p className="text-ts-text-muted mb-6 max-w-2xl mx-auto">
                Join TraceSecure today and start protecting your brand while building direct relationships with your customers.
              </p>
              <Button
                onClick={scrollToWaitlist}
                className="px-8 py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all bg-ts-accent-blue hover:bg-ts-primary text-white"
              >
                Start Free
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

