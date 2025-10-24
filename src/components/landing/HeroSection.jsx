
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
      {/* Futuristic gradient background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-futuristic)' }} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ts-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ts-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-ts-secondary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Traceability visualization - hidden on mobile */}
      <div className="hidden md:block">
        <TraceabilityVisualization />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

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
            <span className="bg-gradient-to-r from-ts-primary to-ts-accent bg-clip-text text-transparent">
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
          className="flex flex-col items-center gap-2 text-ts-text-muted hover:text-ts-text transition-colors"
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
