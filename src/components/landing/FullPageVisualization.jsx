import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const traceabilitySteps = [
  {
    id: 1,
    title: "Raw Materials",
    description: "Grapes are harvested and registered with unique identifiers",
    image: "/images/phase1.svg",
    isImage: true,
    color: "bg-ts-success",
    bgColor: "bg-ts-accent",
    position: { x: 10, y: 20 }
  },
  {
    id: 2,
    title: "Production",
    description: "Wine is created with detailed process documentation",
    image: "/images/p2.svg",
    isImage: true,
    color: "bg-ts-accent-purple",
    bgColor: "bg-ts-accent",
    position: { x: 30, y: 40 }
  },
  {
    id: 3,
    title: "Packaging",
    description: "Each bottle receives a unique QR code for tracking",
    image: "/images/p3.svg",
    isImage: true,
    color: "bg-ts-warning",
    bgColor: "bg-ts-accent",
    position: { x: 50, y: 60 }
  },
  {
    id: 4,
    title: "Distribution",
    description: "Products are tracked through the supply chain",
    image: "/images/p4.svg",
    isImage: true,
    color: "bg-ts-accent-blue",
    bgColor: "bg-ts-accent",
    position: { x: 70, y: 30 }
  },
  {
    id: 5,
    title: "Retail",
    description: "Products reach store shelves with full traceability",
    image: "/images/p5.svg",
    isImage: true,
    color: "bg-ts-accent-orange",
    bgColor: "bg-ts-accent",
    position: { x: 90, y: 50 }
  },
  {
    id: 6,
    title: "Customer",
    description: "Consumers scan QR codes to verify authenticity",
    image: "/images/p6.svg",
    isImage: true,
    color: "bg-ts-error",
    bgColor: "bg-ts-accent",
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
      {/* Flat Design Background */}
      <motion.div 
        className="fixed inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-ts-background" />
        
        {/* Abstract Background Pattern */}
        <div className="abstract-bg absolute inset-0" />
        
        {/* Simplified Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-ts-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Flat Design Hero Section */}
        <div className="h-screen flex items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-ts-text">
              How TraceSecure
              <br />
              <span className="text-ts-accent-blue">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-ts-text-muted mb-12">
              Scroll to explore the complete journey of product authenticity
            </p>
            
            {/* Flat Design Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center p-4 bg-ts-surface rounded-lg flat-shadow"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-ts-text-muted mb-2 text-sm font-medium">Scroll Down</span>
              <svg className="w-5 h-5 text-ts-accent-blue vector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Cinematic Phase Transitions with Advanced Effects */}
        {traceabilitySteps.map((step, index) => (
          <div key={step.id} className="h-screen relative overflow-hidden">
            {/* Cinematic Background with Advanced Parallax */}
            {step.isImage ? (
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ 
                  opacity: 0
                }}
                whileInView={{ 
                  opacity: 1,
                  transition: { 
                    duration: 1, 
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed'
                }}
              >
                {/* Static Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 2, 
                      delay: 0.8 + index * 0.2,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                />
                
              </motion.div>
            ) : (
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ 
                  opacity: 0
                }}
                whileInView={{ 
                  opacity: 1,
                  transition: { 
                    duration: 1, 
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className={`w-full h-full ${step.bgColor} flex items-center justify-center relative`}>
                  <motion.span 
                    className="text-9xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                      filter: [
                        "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                        "drop-shadow(0 0 40px rgba(255,255,255,0.6))",
                        "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {step.image}
                  </motion.span>
                </div>
              </motion.div>
            )}

            {/* Content Container - Always Visible */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              {/* Dark Background for Text Readability */}
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
                {/* Step Title */}
                <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>



          </div>
        ))}

        {/* Seamless Final CTA Section */}
        <div className="h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background with same style as phases */}
          <div className="absolute inset-0 bg-ts-background">
            <div className="abstract-bg absolute inset-0" />
          </div>
          
          {/* Content with smooth transition */}
          <motion.div 
            className="text-center max-w-5xl mx-auto px-6 relative z-10"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.2
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Dark background for text readability */}
            <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 1, 
                    delay: 0.5
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Complete
                <br />
                <span className="text-ts-accent-blue">Traceability</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 1, 
                    delay: 0.8
                  }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                From raw materials to customer hands, every step is verified and documented with TraceSecure's blockchain technology.
              </motion.p>
              
              <motion.button
                className="px-8 py-4 bg-ts-accent-blue text-white text-lg font-semibold rounded-lg flat-shadow-lg hover:flat-shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 1.1
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
