import React from 'react';
import { motion } from 'framer-motion';
import { useLandingContent } from '@/context/LandingVariantContext';

export default function WhyMattersSection() {
  const { whyMatters } = useLandingContent();
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="why-matters" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            {whyMatters.title}
          </h2>
        </motion.div>

        <div className="mb-16 max-w-4xl mx-auto text-center text-ts-text-muted">
          {whyMatters.problem.map((paragraph, i) => (
            <p key={i} className="mb-4 text-lg">
              {paragraph}
            </p>
          ))}
          <p className="text-lg font-semibold text-ts-text">
            {whyMatters.problemClosing}
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            {whyMatters.challengeTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyMatters.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <div className="bg-ts-card rounded-2xl p-8 shadow-xl border border-ts-primary/20">
                  <div className="text-4xl font-bold text-ts-primary mb-4">
                    {challenge.value}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-ts-text">
                    {challenge.title}
                  </h4>
                  <p className="text-ts-text-muted">
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-ts-text">
              {whyMatters.solutionTitle}
            </h3>
            <p className="text-lg max-w-4xl mx-auto text-ts-text-muted">
              {whyMatters.solutionDescription}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMatters.transformations.map((transformation, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <div className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20">
                  <h4 className="text-lg font-bold mb-2 text-ts-text">
                    {transformation.title}
                  </h4>
                  <div className="text-sm font-semibold text-ts-primary mb-2">
                    {transformation.subtitle}
                  </div>
                  <p className="text-sm text-ts-text-muted">
                    {transformation.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-ts-text">Want to see it in action?</h3>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Watch the 60-sec Video
          </button>
        </motion.div>
      </div>
    </section>
  );
}
