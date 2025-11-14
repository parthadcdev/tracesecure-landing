import React from 'react';
import { motion } from 'framer-motion';
import { Package, Mail, Wallet } from 'lucide-react';

const comparisons = [
  {
    icon: Package,
    vs: 'vs. Legacy Platforms',
    competitor: 'They Are Logistics Tools',
    competitorDesc: 'Competitors like Wholechain stop at the point of sale. Their job is done once the bottle is authenticated.',
    traceSecure: 'We Are a Marketing Tool',
    traceSecureDesc: 'Our platform starts at the sale. We turn that authentication scan into a direct, high-value lead for your wine club.'
  },
  {
    icon: Mail,
    vs: 'vs. DTC Marketing Tools',
    competitor: 'They Are Blind to Retail',
    competitorDesc: 'Tools like Mailchimp are powerful, but they can\'t see your anonymous customers in a retail store.',
    traceSecure: 'We Are the Missing Link',
    traceSecureDesc: 'We are the only tool that bridges the physical-to-digital "Customer Gap", capturing those unknown buyers and delivering them directly to your email list.'
  },
  {
    icon: Wallet,
    vs: 'vs. Other Web3 Platforms',
    competitor: 'They Are Too Complex',
    competitorDesc: 'Other platforms require your customers to download a complex crypto wallet, killing conversion rates.',
    traceSecure: 'We Win with Simplicity',
    traceSecureDesc: 'We use a simple, secure, email-based rewards wallet. Your customers get all the power of a real $TRSR reward with zero friction.'
  }
];

export default function WhyTraceSecureIsDifferent() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="why-different" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            Why TraceSecure is Different
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-ts-primary">
            More Than a QR Code. A Lead-Generation Engine.
          </h3>
        </motion.div>

        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-ts-text-muted">
            Anyone can generate a QR code. TraceSecure is the only platform that turns it into a measurable, high-ROI sales funnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => {
            const IconComponent = comparison.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
              >
                <div className="bg-ts-card rounded-2xl p-8 shadow-xl border border-ts-primary/20 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ts-primary to-ts-secondary p-1 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-ts-card flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-ts-primary" />
                      </div>
                    </div>
                  </div>

                  {/* VS Label */}
                  <div className="text-sm uppercase tracking-wider font-semibold text-ts-primary mb-6 text-center">
                    {comparison.vs}
                  </div>

                  {/* Competitor Section */}
                  <div className="mb-6 pb-6 border-b border-ts-border">
                    <h4 className="text-xl font-bold mb-3 text-ts-text">
                      {comparison.competitor}
                    </h4>
                    <p className="text-ts-text-muted text-sm">
                      {comparison.competitorDesc}
                    </p>
                  </div>

                  {/* TraceSecure Section */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-3 text-ts-primary">
                      {comparison.traceSecure}
                    </h4>
                    <p className="text-ts-text-muted text-sm">
                      {comparison.traceSecureDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

