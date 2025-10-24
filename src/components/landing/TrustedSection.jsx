import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: '99.9%',
    label: 'Verification Accuracy'
  },
  {
    value: '<2s',
    label: 'Verification Time'
  },
  {
    value: '24/7',
    label: 'Global Availability'
  },
  {
    value: '100%',
    label: 'Mobile Compatible'
  }
];

export default function TrustedSection() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="trusted" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            Trusted by Producers Worldwide
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            Performance metrics that matter for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="bg-ts-card rounded-2xl p-8 shadow-xl border border-ts-primary/20">
                <div className="text-4xl md:text-5xl font-bold text-ts-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-ts-text-muted">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
