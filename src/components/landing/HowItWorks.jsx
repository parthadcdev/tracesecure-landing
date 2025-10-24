
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Create Product Profile',
    description: 'Register your luxury or craft product with detailed authenticity information, materials, and craftsmanship details.',
    alt: "Product profile creation interface"
  },
  {
    number: '02',
    title: 'Generate Unique QR Code',
    description: 'Receive a tamper-proof QR code that contains encrypted product history and verification data.',
    alt: "QR code generation process"
  },
  {
    number: '03',
    title: 'Attach to Product',
    description: 'Apply the QR code to your product using secure materials or integrate into packaging and documentation.',
    alt: "QR code attachment to product"
  },
  {
    number: '04',
    title: 'Customer Verification',
    description: 'Customers scan the QR code to instantly verify authenticity and access the complete product journey.',
    alt: "Customer verification process"
  },
];

const modernCommerceFeatures = [
  {
    title: 'Instant Setup',
    description: 'Ready in minutes'
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable materials'
  },
  {
    title: 'Analytics',
    description: 'Track engagement'
  }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            How TraceSecure Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-ts-text-muted">
            Our simple four-step process transforms your products into digitally verified, tamper-proof assets that customers can trust.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center bg-ts-card rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-ts-primary/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ts-primary to-ts-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-ts-text">
                {step.title}
              </h3>
              <p className="text-sm text-ts-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Built for Modern Commerce */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-ts-text">Built for Modern Commerce</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {modernCommerceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <h4 className="text-xl font-bold mb-2 text-ts-text">{feature.title}</h4>
                <p className="text-ts-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rewards Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-ts-text">And Get Rewarded</h3>
          <p className="text-lg mb-8 text-ts-text-muted">
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
