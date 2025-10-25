import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const traceabilitySteps = [
  {
    id: 1,
    title: "Raw Materials",
    description: "Grapes are harvested and registered with unique identifiers",
    image: "🍇",
    color: "from-green-400 to-green-600",
    bgColor: "from-green-50 to-green-100",
    position: { x: 10, y: 20 }
  },
  {
    id: 2,
    title: "Production",
    description: "Wine is created with detailed process documentation",
    image: "🍷",
    color: "from-purple-400 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    position: { x: 30, y: 40 }
  },
  {
    id: 3,
    title: "Packaging",
    description: "Each bottle receives a unique QR code for tracking",
    image: "🏷️",
    color: "from-amber-400 to-amber-600",
    bgColor: "from-amber-50 to-amber-100",
    position: { x: 50, y: 60 }
  },
  {
    id: 4,
    title: "Distribution",
    description: "Products are tracked through the supply chain",
    image: "🚚",
    color: "from-blue-400 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    position: { x: 70, y: 30 }
  },
  {
    id: 5,
    title: "Retail",
    description: "Products reach store shelves with full traceability",
    image: "🏪",
    color: "from-indigo-400 to-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100",
    position: { x: 90, y: 50 }
  },
  {
    id: 6,
    title: "Customer",
    description: "Consumers scan QR codes to verify authenticity",
    image: "📱",
    color: "from-red-400 to-red-600",
    bgColor: "from-red-50 to-red-100",
    position: { x: 80, y: 80 }
  }
];

export default function FullPageVisualization() {
  const [activeStep, setActiveStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const stepIndex = Math.min(Math.floor(scrollPercent * traceabilitySteps.length), traceabilitySteps.length - 1);
      setActiveStep(stepIndex);
      
      setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[300vh] w-full overflow-hidden">
      {/* Fixed Background */}
      <motion.div 
        className="fixed inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ts-background via-ts-surface to-ts-background" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-ts-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-ts-text">
              How TraceSecure
              <br />
              <span className="text-ts-primary">Works</span>
            </h2>
            <p className="text-xl md:text-2xl text-ts-text-muted mb-12">
              Scroll to explore the complete journey of product authenticity
            </p>
            
            {/* Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-ts-text-muted mb-2">Scroll Down</span>
              <svg className="w-6 h-6 text-ts-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Steps */}
        {traceabilitySteps.map((step, index) => (
          <div key={step.id} className="h-screen flex items-center justify-center relative">
            {/* Step Content */}
            <motion.div
              className="text-center max-w-4xl mx-auto px-6 relative z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.8 }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Step Number */}
              <motion.div
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-ts-primary to-ts-secondary flex items-center justify-center text-white text-3xl font-bold shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {step.id}
              </motion.div>

              {/* Step Image */}
              <motion.div
                className={`w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center shadow-2xl`}
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-6xl">{step.image}</span>
              </motion.div>

              {/* Step Title */}
              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-ts-text">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xl md:text-2xl text-ts-text-muted max-w-2xl mx-auto">
                {step.description}
              </p>

              {/* QR Code Animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="w-32 h-32 border-4 border-ts-primary rounded-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0.4, 0.8],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute w-6 h-6 bg-ts-primary rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                  style={{
                    left: `${step.position.x + (i - 2) * 10}%`,
                    top: `${step.position.y + (i - 2) * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Final CTA Section */}
        <div className="h-screen flex items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-ts-text">
              Complete
              <br />
              <span className="text-ts-primary">Traceability</span>
            </h2>
            <p className="text-xl md:text-2xl text-ts-text-muted mb-12 max-w-3xl mx-auto">
              From raw materials to customer hands, every step is verified and documented with TraceSecure's blockchain technology.
            </p>
            
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-ts-primary to-ts-secondary text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
