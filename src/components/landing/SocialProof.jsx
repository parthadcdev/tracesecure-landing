
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "TraceSecure built buyer trust instantly. Our sales are up and returns are down. It's a game-changer for independent creators.",
    name: "Elena Rojas",
    title: "Textile Weaver, Peru",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/efddbb442_Gemini_Generated_Image_y1h3idy1h3idy1h3.png"
  },
  {
    quote: "I can finally focus on my craft instead of worrying about fakes. The time I've saved is invaluable.",
    name: "Kenji Tanaka",
    title: "Bespoke Potter, Japan",
    image: "https://images.unsplash.com/photo-1565551981084-2f3e7a35c292?q=80&w=2920&auto=format&fit=crop"
  }
];

export default function SocialProof() {
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
            Join Protected Creators Like You
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
            We secure entire networks. One introduction to a guild can protect dozens of artisans. Who can you connect us with?
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8"
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
