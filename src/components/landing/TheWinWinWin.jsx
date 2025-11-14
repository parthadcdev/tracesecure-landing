import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, Network } from 'lucide-react';

const wins = [
  {
    icon: Users,
    title: 'The Winery Wins',
    description: 'You get what you want most: A high-quality, verified customer lead for your highest-margin channel (your wine club). You solve the "Customer Gap" and build a real, measurable marketing list.'
  },
  {
    icon: Gift,
    title: 'The Customer Wins',
    description: 'They get real, tangible value: The customer receives a real $TRSR reward for their 10 seconds of time, plus the authentic story of their wine and peace of mind. It\'s a fair value exchange, not a one-way data capture.'
  },
  {
    icon: Network,
    title: 'The Ecosystem Wins',
    description: 'We build a stronger community: We (TraceSecure) fund the rewards from our treasury. This distributes our token to real, engaged fans of craft brands, creating a powerful network effect that makes every subsequent $TRSR reward more valuable.'
  }
];

export default function TheWinWinWin() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="win-win-win" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            The Win-Win-Win
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-ts-primary">
            An Ecosystem Where Everyone Wins
          </h3>
        </motion.div>

        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-ts-text-muted">
            Our model is built to create a sustainable loop that benefits everyone, from the producer to the consumer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {wins.map((win, index) => {
            const IconComponent = win.icon;
            return (
              <motion.div
                key={index}
                className="bg-ts-card rounded-2xl shadow-2xl hover:shadow-3xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-ts-primary/20 w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ts-primary to-ts-secondary p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-ts-card flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-ts-primary" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ts-text">
                  {win.title}
                </h3>
                <p className="text-base text-ts-text-muted flex-grow">
                  {win.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

