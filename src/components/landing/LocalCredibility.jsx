import React from 'react';
import { motion } from 'framer-motion';

export default function LocalCredibility() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ts-text">Born in Wine Country. Built for Craft Producers.</h2>
          <p className="text-lg text-ts-text-muted">
            As a founder based in Virginia's burgeoning wine country (Ashburn, VA), I'm passionate about helping the entire craft community thrive. We're building TraceSecure right here, in partnership with local experts, to solve the real challenges all craft producers face.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


