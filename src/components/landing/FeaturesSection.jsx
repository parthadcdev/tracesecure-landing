import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Route, Users, CheckCircle, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Tamper-Proof Security',
    description: 'Advanced encryption and blockchain-backed verification ensure your product authenticity cannot be forged or compromised.',
    features: ['256-bit encryption', 'Blockchain verification', 'Tamper detection']
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Customers verify authenticity in seconds with a simple QR code scan using any smartphone camera.',
    features: ['One-touch scanning', 'Real-time results', 'Cross-platform support']
  },
  {
    icon: Route,
    title: 'Complete Product Journey',
    description: 'Document every step of your product\'s creation, from raw materials to finished goods and beyond.',
    features: ['Material sourcing', 'Production tracking', 'Ownership history']
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Transform verification into engagement with rich product stories, care instructions, and brand connection.',
    features: ['Product stories', 'Care guides', 'Brand messaging']
  },
  {
    icon: CheckCircle,
    title: 'EU DPP Compliance',
    description: 'Built-in compliance with EU Digital Product Passport requirements for sustainable and circular economy.',
    features: ['DPP standards', 'Sustainability data', 'Regulatory compliance']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Track verification rates, customer engagement, and product performance with comprehensive analytics.',
    features: ['Verification metrics', 'Customer insights', 'Performance tracking']
  }
];

export default function FeaturesSection() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="features" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            Powerful Features for
            <br />
            <span className="text-ts-primary">
              Modern Producers
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            Everything you need to protect, verify, and enhance your luxury and craft products with cutting-edge digital authenticity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-ts-card rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-ts-primary/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ts-primary to-ts-secondary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-ts-text">
                {feature.title}
              </h3>
              
              <p className="text-ts-text-muted mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-ts-text-muted">
                    <div className="w-2 h-2 bg-ts-primary rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
