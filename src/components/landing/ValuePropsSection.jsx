
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserPlus, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: UserPlus,
    category: 'MAKE MORE MONEY',
    title: 'Build Your Wine Club',
    description:
      'Turn anonymous retail buyers into high-quality, opt-in leads. Our platform is a powerful lead-generation tool that uses micro-rewards to drive signups for your most profitable program.',
    example: 'Grow memberships directly from retail scans.'
  },
  {
    icon: BookOpen,
    category: 'CONNECT WITH CUSTOMERS',
    title: 'Tell Your Unique Story',
    description:
      'Share winemaker videos, tasting notes, and food pairings. Build a direct relationship with your end customer and turn a one-time purchase into a loyal fan.',
    example: 'Drive repeat purchases with engaging content.'
  },
  {
    icon: ShieldCheck,
    category: 'BUILD TRUST',
    title: 'Prove Authenticity (Instantly)',
    description:
      'As a built-in benefit, every scan also proves your bottle is authentic, protecting your hard-won reputation and giving customers peace of mind.',
    example: 'Instant authenticity checks on every bottle.'
  }
];

export default function ValuePropsSection() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            How This Grows Your Business
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            A direct, two-way channel to your retail buyers — built right into every bottle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
            <motion.div
              key={index}
              className="bg-ts-card rounded-2xl shadow-2xl hover:shadow-3xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-ts-primary/20 w-full max-w-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ts-primary to-ts-secondary p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-ts-card flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-ts-primary" />
                  </div>
                </div>
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-ts-primary mb-2">
                {benefit.category}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-ts-text">
                {benefit.title}
              </h3>
              <p className="text-base mb-4 flex-grow text-ts-text-muted">
                {benefit.description}
              </p>
              <p className="text-sm italic text-ts-primary">
                "{benefit.example}"
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
