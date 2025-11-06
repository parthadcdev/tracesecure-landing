import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Route, Users, CheckCircle, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Tamper-Proof Security',
    description: 'Advanced encryption and blockchain-backed verification ensure your product authenticity cannot be forged or compromised.',
    features: ['256-bit encryption', 'Blockchain verification', 'Tamper detection'],
    iconColor: 'bg-ts-error',
    iconBg: 'bg-ts-accent'
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Customers verify authenticity in seconds with a simple QR code scan using any smartphone camera.',
    features: ['One-touch scanning', 'Real-time results', 'Cross-platform support'],
    iconColor: 'bg-ts-warning',
    iconBg: 'bg-ts-accent'
  },
  {
    icon: Route,
    title: 'Complete Product Journey',
    description: 'Document every step of your product\'s creation, from raw materials to finished goods and beyond.',
    features: ['Material sourcing', 'Production tracking', 'Ownership history'],
    iconColor: 'bg-ts-accent-blue',
    iconBg: 'bg-ts-accent'
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Transform verification into engagement with rich product stories, care instructions, and brand connection.',
    features: ['Product stories', 'Care guides', 'Brand messaging'],
    iconColor: 'bg-ts-success',
    iconBg: 'bg-ts-accent'
  },
  {
    icon: CheckCircle,
    title: 'EU DPP Ready',
    description: 'Built-in compliance with EU Digital Product Passport requirements for sustainable and circular economy.',
    features: ['DPP standards', 'Sustainability data', 'Regulatory compliance'],
    iconColor: 'bg-ts-accent-purple',
    iconBg: 'bg-ts-accent'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Track verification rates, customer engagement, and product performance with comprehensive analytics.',
    features: ['Verification metrics', 'Customer insights', 'Performance tracking'],
    iconColor: 'bg-ts-accent-orange',
    iconBg: 'bg-ts-accent'
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
            <span className="text-ts-accent-blue">
              Modern Producers
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            Everything you need to protect, verify, and enhance your luxury and craft products with cutting-edge digital authenticity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-ts-card border-2 border-ts-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              {/* Flat Design Icon */}
              <div className={`w-16 h-16 ${feature.iconColor} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                <feature.icon className="w-8 h-8 text-white [stroke-width:2] [stroke-linecap:round] [stroke-linejoin:round]" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-ts-text">
                {feature.title}
              </h3>
              
              <p className="text-ts-text-muted mb-6 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-ts-text-muted">
                    <div className="w-2 h-2 bg-ts-accent-blue rounded-full mr-3 flex-shrink-0"></div>
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
