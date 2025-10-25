import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Shield, DollarSign, Target, Award } from 'lucide-react';

const dppFeatures = [
  {
    icon: CheckCircle,
    title: 'Product Information',
    status: 'Fully Supported',
    description: 'Comprehensive product details including materials, manufacturing processes, and composition data.',
    iconColor: 'from-green-500 to-emerald-500',
    iconBg: 'from-green-50 to-emerald-50'
  },
  {
    icon: CheckCircle,
    title: 'Sustainability Data',
    status: 'Automated Tracking',
    description: 'Carbon footprint, recyclability, repair information, and environmental impact metrics.',
    iconColor: 'from-blue-500 to-cyan-500',
    iconBg: 'from-blue-50 to-cyan-50'
  },
  {
    icon: CheckCircle,
    title: 'Lifecycle Tracking',
    status: 'Real-time Updates',
    description: 'Complete product journey from raw materials to end-of-life disposal or recycling.',
    iconColor: 'from-purple-500 to-violet-500',
    iconBg: 'from-purple-50 to-violet-50'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Verification',
    status: 'Always Current',
    description: 'Automatic compliance checks and reporting for all EU DPP requirements and updates.',
    iconColor: 'from-orange-500 to-red-500',
    iconBg: 'from-orange-50 to-red-50'
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
    description: 'Stay ahead of EU regulations with built-in compliance for current and upcoming DPP requirements.',
    iconColor: 'from-blue-500 to-indigo-500',
    iconBg: 'from-blue-50 to-indigo-50'
  },
  {
    icon: DollarSign,
    title: 'Cost Efficient',
    description: 'Avoid expensive compliance retrofitting by implementing DPP-ready systems from day one.',
    iconColor: 'from-green-500 to-emerald-500',
    iconBg: 'from-green-50 to-emerald-50'
  },
  {
    icon: Target,
    title: 'Market Access',
    description: 'Ensure continued access to EU markets with compliant digital product passports.',
    iconColor: 'from-purple-500 to-pink-500',
    iconBg: 'from-purple-50 to-pink-50'
  },
  {
    icon: Award,
    title: 'Competitive Advantage',
    description: 'Lead your industry with transparent, sustainable, and digitally verified products.',
    iconColor: 'from-yellow-500 to-orange-500',
    iconBg: 'from-yellow-50 to-orange-50'
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
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconColor} rounded-2xl flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.iconBg} opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
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

        {/* EU DPP Implementation Timeline - Horizontal with Flow Animation */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-ts-text">
            EU DPP Implementation Timeline
          </h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Timeline Line - Desktop */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-ts-primary via-ts-secondary to-ts-primary transform -translate-y-1/2 hidden md:block opacity-30"
              initial={{ scaleX: 0 }}
              whileInView={{ 
                scaleX: 1,
                transition: { duration: 1.5, ease: "easeInOut" }
              }}
              viewport={viewport}
            />
            
            {/* Animated Timeline Line - Mobile */}
            <motion.div 
              className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ts-primary via-ts-secondary to-ts-primary transform -translate-x-1/2 opacity-30"
              initial={{ scaleY: 0 }}
              whileInView={{ 
                scaleY: 1,
                transition: { duration: 1.5, ease: "easeInOut" }
              }}
              viewport={viewport}
            />
            
            {/* Timeline Items */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex-1 max-w-xs"
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
                  {/* Animated Timeline Dot */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
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
                    viewport={viewport}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full border-4 border-ts-card shadow-lg relative ${
                      item.status === 'Active' 
                        ? 'bg-ts-success' 
                        : item.status === 'Upcoming'
                        ? 'bg-ts-warning'
                        : 'bg-ts-text-muted'
                    }`}>
                      {/* Pulse Effect for Active Items */}
                      {item.status === 'Active' && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-ts-success/50"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 0, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="bg-ts-card rounded-2xl p-6 shadow-xl border border-ts-primary/20 text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.6 + index * 0.3,
                        duration: 0.5
                      }
                    }}
                    viewport={viewport}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Animated Year Badge */}
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 0,
                        transition: { 
                          delay: 0.8 + index * 0.3,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200
                        }
                      }}
                      viewport={viewport}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="bg-ts-primary text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {item.year}
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="pt-4">
                      <motion.h4 
                        className="text-lg font-bold mb-2 text-ts-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: 1 + index * 0.3,
                            duration: 0.5
                          }
                        }}
                        viewport={viewport}
                      >
                        {item.title}
                      </motion.h4>
                      
                      <motion.p 
                        className="text-sm text-ts-text-muted mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: 1.2 + index * 0.3,
                            duration: 0.5
                          }
                        }}
                        viewport={viewport}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div 
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'Active' 
                            ? 'bg-ts-success/20 text-ts-success' 
                            : item.status === 'Upcoming'
                            ? 'bg-ts-warning/20 text-ts-warning'
                            : 'bg-ts-text-muted/20 text-ts-text-muted'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            delay: 1.4 + index * 0.3,
                            duration: 0.5
                          }
                        }}
                        viewport={viewport}
                      >
                        {item.status}
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Flow Arrow - Desktop */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 1.6 + index * 0.3,
                          duration: 0.5
                        }
                      }}
                      viewport={viewport}
                    >
                      <div className="w-8 h-8 bg-ts-primary rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Flow Arrow - Mobile */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 1.6 + index * 0.3,
                          duration: 0.5
                        }
                      }}
                      viewport={viewport}
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.iconColor} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.iconBg} opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                    <benefit.icon className="w-8 h-8 text-white relative z-10" />
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
