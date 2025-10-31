
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Apply Your Tag',
    description:
      'You (or your label designer) add our unique, secure QR code to your bottles.'
  },
  {
    number: '02',
    title: 'Customer Scans',
    description:
      "Your customer scans the code at home to see the wine's authentic story, tasting notes, and your custom offer."
  },
  {
    number: '03',
    title: 'Capture the Lead',
    description:
      'They see your offer — like “Join Our Wine Club for 10% Off” — and sign up. You just gained a high-value customer lead.'
  }
];

export default function HowItWorks() {
  const viewport = { once: true, amount: 0.2 };
  return (
    <section id="how-it-works" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Bottle to Brand Fan in 3 Simple Steps
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            A 60-second explainer video shows the flow — scan to story to signup.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-ts-card rounded-2xl p-8 shadow-xl border border-ts-primary/20 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-5xl font-extrabold text-ts-primary mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-ts-text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
