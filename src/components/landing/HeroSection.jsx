
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
      {/* Dark Purple Background - Override global background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#030008' }} />
      
      {/* Solid Dark Background - No geometric elements */}
      
      {/* Traceability visualization - hidden on mobile */}
      <div className="hidden md:block">
        <TraceabilityVisualization />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center mt-16 md:mt-0 mb-24 md:mb-32">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>

          {/* Flat Design Badge */}
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-ts-french-violet text-white text-sm font-semibold rounded-lg flat-shadow">
              Join the Beta - Early Access Available
            </span>
          </div>
          
          {/* Dark Purple Typography - Light text on dark background */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8" style={{ color: '#e0aaff' }}>
            Digital Authenticity
            <br />
            <span style={{ color: '#c77dff' }}>
              for Every Product
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl mx-auto text-center" style={{ color: '#c77dff' }}>
            Secure QR code-based digital history for luxury and craft producers.
            <br />
            Prove authenticity, stop counterfeits, and connect directly with customers.
          </p>

          {/* Flat Design Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-ts-heliotrope text-ts-primary text-sm font-medium rounded-lg flat-shadow">
              Prove Authenticity
            </span>
            <span className="px-4 py-2 bg-ts-amethyst text-white text-sm font-medium rounded-lg flat-shadow">
              Stop Counterfeits
            </span>
            <span className="px-4 py-2 bg-ts-tekhelet text-white text-sm font-medium rounded-lg flat-shadow">
              EU DPP Compliant
            </span>
          </div>

          {/* Flat Design Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToWaitlist}
                  className="text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-lg flat-shadow-lg font-semibold bg-ts-heliotrope text-ts-primary hover:bg-ts-amethyst hover:text-white transition-all"
                aria-label="Join Beta Access"
              >
                Join Beta Access
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToNextSection}
                variant="outline"
                  className="text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-lg border-2 border-ts-heliotrope text-ts-heliotrope hover:bg-ts-heliotrope hover:text-ts-primary transition-all font-semibold"
                aria-label="See How It Works"
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Additional Purple/Violet Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            <span className="px-4 py-2 bg-ts-heliotrope text-ts-primary text-sm font-medium rounded-lg border border-ts-heliotrope">
              Enterprise Security
            </span>
            <span className="px-4 py-2 bg-ts-amethyst text-white text-sm font-medium rounded-lg border border-ts-amethyst">
              GDPR Compliant
            </span>
            <span className="px-4 py-2 bg-ts-tekhelet text-white text-sm font-medium rounded-lg border border-ts-tekhelet">
              EU DPP Ready
            </span>
          </div>
        </motion.div>
      </div>

      {/* Flat Design Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-3 p-4 bg-ts-heliotrope rounded-lg flat-shadow hover:flat-shadow-lg transition-all hover:text-white"
          style={{ color: '#10002b' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Discover How</span>
              <ChevronDown className="w-5 h-5 vector-icon" style={{ color: '#10002b' }} />
        </motion.button>
      </motion.div>
    </section>
  );
}
