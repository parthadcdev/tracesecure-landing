import React from 'react';
import { motion } from 'framer-motion';

const challenges = [
  {
    value: '$100B+',
    title: 'Lost opportunity in wine',
    description:
      "It's not just counterfeits. It's the Customer Gap — retail buyers you never meet."
  },
  {
    value: '0% visibility',
    title: 'Anonymous retail buyers',
    description:
      'You can’t thank them, tell your story, or invite them to buy direct next time.'
  },
  {
    value: 'High margin',
    title: 'Missed DTC sales',
    description:
      'Thousands of potential, lifelong customers slip away every year.'
  }
];

const transformations = [
  {
    title: 'Digital Passport QR',
    subtitle: 'A direct channel',
    description:
      'Every bottle becomes a two-way marketing channel that invites buyers to connect, join your list, and become loyal fans.'
  },
  {
    title: 'Story + Offer',
    subtitle: 'From scan to signup',
    description:
      'Show your story, tasting notes, and a clear offer like “Join Our Wine Club for 10% Off.”'
  },
  {
    title: 'Proven Authenticity',
    subtitle: 'Trust built-in',
    description:
      'Every scan proves authenticity, protecting your brand reputation and building consumer trust.'
  },
  {
    title: 'Actionable Insights',
    subtitle: 'Know your buyers',
    description:
      'See engagement and leads from retail scans to inform marketing and allocations.'
  }
];

const industries = [
  {
    name: 'Luxury Fashion',
    growth: '+45%',
    description: 'Sales growth with authentication'
  },
  {
    name: 'Fine Jewelry',
    growth: '+38%',
    description: 'Sales growth with authentication'
  },
  {
    name: 'Craft Spirits',
    growth: '+52%',
    description: 'Sales growth with authentication'
  },
  {
    name: 'Artisan Goods',
    growth: '+41%',
    description: 'Sales growth with authentication'
  }
];

export default function WhyMattersSection() {
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
            The "Customer Gap": Your Biggest Untapped Opportunity
          </h2>
        </motion.div>

        {/* Problem Copy */}
        <div className="mb-16 max-w-4xl mx-auto text-center text-ts-text-muted">
          <p className="mb-4 text-lg">
            You spend years perfecting your wine. A customer buys it from a retail store 100 miles away. The relationship ends right there.
          </p>
          <p className="mb-4 text-lg">
            You have no idea who they are. You can't thank them. You can't tell them the story of that vintage. And you can't invite them to buy directly from you next time.
          </p>
          <p className="text-lg font-semibold text-ts-text">
            You are losing thousands of potential, high-margin, lifelong customers every single year.
          </p>
        </div>

        {/* The Challenge Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            The Challenge Facing Wineries
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
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

        {/* Solution Section */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-ts-text">
              A Direct Marketing Channel in Every Bottle
            </h3>
            <p className="text-lg max-w-4xl mx-auto text-ts-text-muted">
              TraceSecure closes the "Customer Gap." Our Digital Passport doesn't just verify your bottle—it makes a compelling, irresistible offer. We give your customer a small, instant $TRSR reward for sharing their email, turning a simple scan into a confirmed lead for your wine club or email list.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformations.map((transformation, index) => (
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
        {/* CTA */}
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
