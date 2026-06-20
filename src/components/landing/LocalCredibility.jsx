import React from 'react';
import { motion } from 'framer-motion';
import { useLandingContent } from '@/context/LandingVariantContext';

export default function LocalCredibility() {
  const { localCredibility } = useLandingContent();
  const viewport = { once: true, amount: 0.2 };
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ts-text">{localCredibility.title}</h2>
          <p className="text-lg text-ts-text-muted">
            {localCredibility.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
