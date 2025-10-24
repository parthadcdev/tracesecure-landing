import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Shield, DollarSign, Target, Award } from 'lucide-react';

const dppFeatures = [
  {
    icon: CheckCircle,
    title: 'Product Information',
    status: 'Fully Supported',
    description: 'Comprehensive product details including materials, manufacturing processes, and composition data.'
  },
  {
    icon: CheckCircle,
    title: 'Sustainability Data',
    status: 'Automated Tracking',
    description: 'Carbon footprint, recyclability, repair information, and environmental impact metrics.'
  },
  {
    icon: CheckCircle,
    title: 'Lifecycle Tracking',
    status: 'Real-time Updates',
    description: 'Complete product journey from raw materials to end-of-life disposal or recycling.'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Verification',
    status: 'Always Current',
    description: 'Automatic compliance checks and reporting for all EU DPP requirements and updates.'
  }
];

const timeline = [
  {
    year: '2024',
    title: 'Textiles & Apparel',
    description: 'DPP requirements for textile products',
    status: 'Active'
  },
  {
    year: '2025',
    title: 'Electronics',
    description: 'Consumer electronics and appliances',
    status: 'Upcoming'
  },
  {
    year: '2026',
    title: 'Batteries',
    description: 'Battery products and components',
    status: 'Upcoming'
  },
  {
    year: '2027',
    title: 'Construction',
    description: 'Building materials and products',
    status: 'Planned'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Regulatory Readiness',
    description: 'Stay ahead of EU regulations with built-in compliance for current and upcoming DPP requirements.'
  },
  {
    icon: DollarSign,
    title: 'Cost Efficient',
    description: 'Avoid expensive compliance retrofitting by implementing DPP-ready systems from day one.'
  },
  {
    icon: Target,
    title: 'Market Access',
    description: 'Ensure continued access to EU markets with compliant digital product passports.'
  },
  {
    icon: Award,
    title: 'Competitive Advantage',
    description: 'Lead your industry with transparent, sustainable, and digitally verified products.'
  }
];

export default function DPPComplianceSection() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="dpp-compliance" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            EU Digital Product Passport
            <br />
            <span className="text-ts-primary">
              Ready & Compliant
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            TraceSecure is built from the ground up to meet and exceed EU Digital Product Passport requirements, ensuring your products are ready for current and future regulations.
          </p>
        </motion.div>

        {/* Complete DPP Requirements Coverage */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            Complete DPP Requirements Coverage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dppFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ts-primary to-ts-secondary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-ts-text">
                  {feature.title}
                </h4>
                <div className="text-sm font-semibold text-ts-primary mb-2">
                  {feature.status}
                </div>
                <p className="text-sm text-ts-text-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EU DPP Implementation Timeline - Horizontal */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            EU DPP Implementation Timeline
          </h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-ts-primary/20 transform -translate-y-1/2 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex-1 max-w-xs"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <div className={`w-6 h-6 rounded-full border-4 border-ts-card shadow-lg ${
                      item.status === 'Active' 
                        ? 'bg-ts-success' 
                        : item.status === 'Upcoming'
                        ? 'bg-ts-warning'
                        : 'bg-ts-text-muted'
                    }`}></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20 text-center relative">
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-ts-primary text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-4">
                      <h4 className="text-lg font-bold mb-2 text-ts-text">
                        {item.title}
                      </h4>
                      <p className="text-sm text-ts-text-muted mb-4">
                        {item.description}
                      </p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Active' 
                          ? 'bg-ts-success/20 text-ts-success' 
                          : item.status === 'Upcoming'
                          ? 'bg-ts-warning/20 text-ts-warning'
                          : 'bg-ts-text-muted/20 text-ts-text-muted'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose TraceSecure for DPP Compliance */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            Why Choose TraceSecure for DPP Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <div className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-ts-primary to-ts-secondary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-ts-text">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-ts-text-muted">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future-Proof Your Business Today */}
        <motion.div 
          className="text-center bg-ts-card rounded-2xl p-12 shadow-2xl border border-ts-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-ts-text">
            Future-Proof Your Business Today
          </h3>
          <p className="text-lg text-ts-text-muted mb-8 max-w-3xl mx-auto">
            Don't wait for regulations to catch up. Join TraceSecure's beta program and ensure your products are compliant, sustainable, and ready for the future of digital commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Get DPP Compliant Now
            </button>
            <button className="px-8 py-4 border-2 border-ts-primary text-ts-primary font-semibold rounded-xl hover:bg-ts-primary/10 transition-colors">
              Download Compliance Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
