import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Route, Users, CheckCircle, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Tamper-Proof Security',
    description: 'Advanced encryption and blockchain-backed verification ensure your product authenticity cannot be forged or compromised.',
    features: ['256-bit encryption', 'Blockchain verification', 'Tamper detection'],
    iconColor: 'from-red-500 to-pink-500',
    iconBg: 'from-red-50 to-pink-50'
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Customers verify authenticity in seconds with a simple QR code scan using any smartphone camera.',
    features: ['One-touch scanning', 'Real-time results', 'Cross-platform support'],
    iconColor: 'from-yellow-500 to-orange-500',
    iconBg: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Route,
    title: 'Complete Product Journey',
    description: 'Document every step of your product\'s creation, from raw materials to finished goods and beyond.',
    features: ['Material sourcing', 'Production tracking', 'Ownership history'],
    iconColor: 'from-blue-500 to-cyan-500',
    iconBg: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Transform verification into engagement with rich product stories, care instructions, and brand connection.',
    features: ['Product stories', 'Care guides', 'Brand messaging'],
    iconColor: 'from-green-500 to-emerald-500',
    iconBg: 'from-green-50 to-emerald-50'
  },
  {
    icon: CheckCircle,
    title: 'EU DPP Compliance',
    description: 'Built-in compliance with EU Digital Product Passport requirements for sustainable and circular economy.',
    features: ['DPP standards', 'Sustainability data', 'Regulatory compliance'],
    iconColor: 'from-purple-500 to-violet-500',
    iconBg: 'from-purple-50 to-violet-50'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Track verification rates, customer engagement, and product performance with comprehensive analytics.',
    features: ['Verification metrics', 'Customer insights', 'Performance tracking'],
    iconColor: 'from-indigo-500 to-blue-500',
    iconBg: 'from-indigo-50 to-blue-50'
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
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.iconColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.iconBg} opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                <feature.icon className="w-10 h-10 text-white relative z-10" />
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
