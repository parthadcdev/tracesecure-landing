
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import TraceabilityVisualization from "./TraceabilityVisualization";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToNextSection = () => {
    document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Modern futuristic background */}
      <div className="absolute inset-0" style={{ background: 'var(--color-background)' }} />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 opacity-10"
          style={{ 
            background: 'linear-gradient(45deg, #415A77, #778DA9)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-32 right-16 w-32 h-32 opacity-8"
          style={{ 
            background: 'linear-gradient(45deg, #1B263B, #415A77)',
            borderRadius: '50%'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-1/3 w-24 h-24 opacity-12"
          style={{ 
            background: 'linear-gradient(45deg, #778DA9, #E0E1DD)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{ 
              background: '#415A77',
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
        
        {/* Circuit-like lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <motion.path
              d="M100,200 Q300,100 500,200 T900,200"
              stroke="#415A77"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M200,400 Q400,300 600,400 T1000,400"
              stroke="#778DA9"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.path
              d="M50,600 Q250,500 450,600 T850,600"
              stroke="#1B263B"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
          </svg>
        </div>
        
        {/* Gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(65, 90, 119, 0.1) 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Traceability visualization - hidden on mobile */}
      <div className="hidden md:block">
        <TraceabilityVisualization />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ts-background/20" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center mt-16 md:mt-0 mb-24 md:mb-32">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-ts-primary/20 text-ts-primary text-sm font-semibold rounded-full border border-ts-primary/30 mb-6">
              Join the Beta - Early Access Available
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-ts-text leading-tight mb-8" style={{ fontFamily: "var(--font-serif)" }}>
            Digital Authenticity
            <br />
            <span className="text-ts-primary">
              for Every Product
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-ts-text-muted mb-12 leading-relaxed max-w-5xl mx-auto text-center" style={{ fontFamily: "var(--font-sans)" }}>
            Secure QR code-based digital history for luxury and craft producers.
            <br />
            Prove authenticity, stop counterfeits, and connect directly with customers.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-ts-primary/10 text-ts-primary text-sm font-medium rounded-full border border-ts-primary/20">
              Prove Authenticity
            </span>
            <span className="px-4 py-2 bg-ts-primary/10 text-ts-primary text-sm font-medium rounded-full border border-ts-primary/20">
              Stop Counterfeits
            </span>
            <span className="px-4 py-2 bg-ts-primary/10 text-ts-primary text-sm font-medium rounded-full border border-ts-primary/20">
              EU DPP Compliant
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToWaitlist}
                className="text-lg sm:text-xl px-8 py-6 sm:px-10 sm:py-8 rounded-xl shadow-2xl transition-all hover:shadow-2xl hover:scale-105 font-semibold"
                style={{ background: 'var(--gradient-primary)', color: 'white' }}
                aria-label="Join Beta Access"
              >
                Join Beta Access
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToNextSection}
                variant="outline"
                className="text-lg sm:text-xl px-8 py-6 sm:px-10 sm:py-8 rounded-xl border-2 border-ts-primary/50 text-ts-primary hover:bg-ts-primary/10 transition-all font-semibold"
                aria-label="See How It Works"
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Additional feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <span className="px-4 py-2 bg-ts-accent/10 text-ts-accent text-sm font-medium rounded-full border border-ts-accent/20">
              Enterprise Security
            </span>
            <span className="px-4 py-2 bg-ts-accent/10 text-ts-accent text-sm font-medium rounded-full border border-ts-accent/20">
              GDPR Compliant
            </span>
            <span className="px-4 py-2 bg-ts-accent/10 text-ts-accent text-sm font-medium rounded-full border border-ts-accent/20">
              EU DPP Ready
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - properly centered */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-2 text-ts-text-muted hover:text-ts-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-wider font-sans">Discover How</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
