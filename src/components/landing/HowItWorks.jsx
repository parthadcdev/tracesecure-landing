
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

        {/* Detailed Steps with Flow Animation */}
        <div className="relative mb-20">
          {/* Flow Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-ts-primary via-ts-secondary to-ts-primary transform -translate-y-1/2 opacity-30"></div>
          
          {/* Flow Line - Mobile */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ts-primary via-ts-secondary to-ts-primary transform -translate-x-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center bg-ts-card rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-ts-primary/20 relative"
                initial={{ 
                  opacity: 0, 
                  x: window.innerWidth > 768 ? -100 : 0,
                  y: window.innerWidth > 768 ? 0 : -50,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  scale: 1
                }}
                viewport={viewport}
                transition={{ 
                  delay: 0.2 + index * 0.3, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Animated Number Circle */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-ts-primary to-ts-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto relative"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ 
                    scale: 1, 
                    rotate: 0,
                    transition: { 
                      delay: 0.4 + index * 0.3,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {step.number}
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-ts-primary/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
                
                {/* Animated Title */}
                <motion.h3 
                  className="text-xl font-bold mb-3 text-ts-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.6 + index * 0.3,
                      duration: 0.5
                    }
                  }}
                >
                  {step.title}
                </motion.h3>
                
                {/* Animated Description */}
                <motion.p 
                  className="text-sm text-ts-text-muted"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.8 + index * 0.3,
                      duration: 0.5
                    }
                  }}
                >
                  {step.description}
                </motion.p>
                
                {/* Flow Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 1 + index * 0.3,
                        duration: 0.5
                      }
                    }}
                  >
                    <div className="w-8 h-8 bg-ts-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                )}
                
                {/* Flow Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 1 + index * 0.3,
                        duration: 0.5
                      }
                    }}
                  >
                    <div className="w-8 h-8 bg-ts-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
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
