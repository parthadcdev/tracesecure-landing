
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "TraceSecure gives us a direct line to our retail customers for the first time. We're finally turning anonymous buyers into new wine club members. It's a game-changer for our direct-to-consumer sales.",
    name: "John S.",
    title: "Owner, Valley Vineyard",
    image: "/images/logo-symbol.png"
  }
];

export default function SocialProof() {
  // Section hidden per request
  return null;
  
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Built for Virginia's Most Innovative Wineries
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-ts-surface rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4"/>
                <div>
                  <p className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: 'var(--color-primary)' }}>{testimonial.title}</p>
                </div>
              </div>
              <p className="italic text-base" style={{ color: 'var(--color-text)' }}>"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
