
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    image: '/images/tag-your-item.png',
    title: '1. Tag Your Item',
    description: 'Embed a secure tag onto your item and scan it with your phone to create its unique digital identity in seconds.',
    alt: "A winemaker applying a secure QR code label to a bottle of wine."
  },
  {
    image: '/images/track-journey.png',
    title: '2. Track Its Journey',
    description: 'Scan the item at key stages of its lifecycle to build a rich, verifiable story of its origin and craftsmanship.',
    alt: "A phone screen showing a product's journey timeline: Crafted, Packed, and Shipped."
  },
  {
    image: '/images/share-with-buyers.png',
    title: '3. Share with Buyers',
    description: 'Buyers scan the final product with their phone to instantly see its authentic journey and confirm its legitimacy.',
    alt: "A customer verifying a bottle of wine in a store with their phone, which displays a 'Verified' checkmark."
  },
];

export default function HowItWorks() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="how-it-works" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Simple Steps to Secure Your Crafts
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text)' }}>
            From payment to first result in under 5 minutes.
          </p>
        </motion.div>

        {/* Timeline Infographic - Hidden */}
        {/*
        <motion.div 
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <img 
            src="/images/three-step-infographic.png" 
            alt="Infographic showing the 3-step process: Scan, Track, Share" 
            className="max-w-full h-auto mx-auto"
          />
        </motion.div>
        */}

        {/* Detailed Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-ts-primary/10 to-ts-secondary/10 p-4">
                <img src={step.image} alt={step.alt} className="w-full h-full object-cover rounded-lg"/>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                {step.title}
              </h3>
              <p className="text-base" style={{ color: 'var(--color-text)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Rewards Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>And Get Rewarded</h3>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text)' }}>
            Earn $TRACE for every trace - redeem for perks or stake.
          </p>
          <img 
            src="/images/trace-rewards-menu.png" 
            alt="Mockup of the TRACE rewards menu showing how to earn and redeem tokens."
            className="rounded-xl shadow-2xl mx-auto max-w-sm w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
