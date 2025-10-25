import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Leaf } from 'lucide-react';

const challenges = [
  {
    value: '$500B',
    title: 'Annual counterfeit market',
    description: 'The global counterfeit market is worth over $500 billion annually, with luxury goods being the primary target.'
  },
  {
    value: '73%',
    title: 'Consumers lack trust',
    description: '73% of consumers report being concerned about product authenticity when making premium purchases.'
  },
  {
    value: '40%',
    title: 'Revenue loss potential',
    description: 'Counterfeit products cause irreparable harm to brand reputation and customer relationships.'
  }
];

const transformations = [
  {
    icon: TrendingUp,
    title: 'Instant Verification',
    subtitle: 'Increased Sales',
    description: 'Customers gain immediate confidence in their purchases with tamper-proof digital certificates.',
    iconColor: 'from-green-500 to-emerald-500',
    iconBg: 'from-green-50 to-emerald-50'
  },
  {
    icon: Users,
    title: 'Direct Connection',
    subtitle: 'Customer Loyalty',
    description: 'Build lasting relationships with customers through authentic product storytelling and engagement.',
    iconColor: 'from-blue-500 to-cyan-500',
    iconBg: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    subtitle: 'Brand Value',
    description: 'Protect your intellectual property and reputation with unbreakable digital authenticity.',
    iconColor: 'from-red-500 to-pink-500',
    iconBg: 'from-red-50 to-pink-50'
  },
  {
    icon: Leaf,
    title: 'Sustainability Proof',
    subtitle: 'Market Differentiation',
    description: 'Demonstrate your commitment to ethical sourcing and environmental responsibility.',
    iconColor: 'from-green-600 to-teal-500',
    iconBg: 'from-green-50 to-teal-50'
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
            Why Authenticity
            <br />
            <span className="text-ts-primary">
              Matters More Than Ever
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            In a world where counterfeits flood the market, protecting your brand and customers requires more than traditional methods.
          </p>
        </motion.div>

        {/* The Challenge Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            The Challenge Facing Luxury & Craft Producers
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

        {/* How TraceSecure Transforms Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            How TraceSecure Transforms Your Business
          </h3>
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${transformation.iconColor} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${transformation.iconBg} opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                    <transformation.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
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

        {/* Industries Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            Industries Embracing Digital Authenticity
          </h3>
          <p className="text-lg text-center text-ts-text-muted mb-12">
            Leading brands across luxury sectors are experiencing significant growth by implementing digital authentication solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <div className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20">
                  <div className="text-3xl font-bold text-ts-primary mb-2">
                    {industry.growth}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-ts-text">
                    {industry.name}
                  </h4>
                  <p className="text-sm text-ts-text-muted">
                    {industry.description}
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
          <h3 className="text-3xl font-bold mb-4 text-ts-text">
            Ready to protect your brand and delight your customers?
          </h3>
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Join TraceSecure Beta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
