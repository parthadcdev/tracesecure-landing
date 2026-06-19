import React from 'react';
import { motion } from 'framer-motion';
import { useLandingContent } from '@/context/LandingVariantContext';

export default function VerticalProofSection() {
  const content = useLandingContent();
  const { verticalProof } = content;

  if (!verticalProof) return null;

  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="vertical-proof" className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ts-text">{verticalProof.title}</h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">{verticalProof.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {verticalProof.points.map((point, index) => (
            <motion.div
              key={index}
              className="bg-ts-card rounded-2xl p-8 shadow-xl border border-ts-primary/20 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-ts-primary mb-4">{point.stat}</div>
              <h3 className="text-xl font-bold mb-3 text-ts-text">{point.title}</h3>
              <p className="text-sm text-ts-text-muted">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
