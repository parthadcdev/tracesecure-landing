
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import TraceabilityVisualization from "./TraceabilityVisualization";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist-form");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 16;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNextSection = () => {
    const element = document.querySelector("#how-it-works");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 16;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Solid Light Background - No geometric elements */}
      
      
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start mt-16 md:pt-20 mb-24 md:mb-32">
        <motion.div
          className="max-w-4xl text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>

          {/* Flat Design Badge */}
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-ts-accent-blue text-white text-sm font-semibold rounded-lg shadow-md">
              Join the Beta - Early Access Available
            </span>
          </div>
          
          {/* Typography - Dark text on light background */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8" style={{ color: '#223A5E' }}>
            Turn Every Bottle
            <br />
            <span style={{ color: '#2874A6' }}>
              Into a Customer
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl" style={{ color: '#2874A6' }}>
            Your retail customers are anonymous. TraceSecure gives every bottle a unique digital passport.
            When a customer scans the QR code, they don’t just see “authentic” — they get your brand story and a direct invitation to join your wine club.
          </p>

          {/* Flat Design Feature Badges - Consistent outlined style */}
          <div className="flex flex-wrap justify-start gap-3 mb-12">
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-accent-blue text-ts-accent-blue text-sm font-medium rounded-lg shadow-md">
              Build Loyalty
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-accent-blue text-ts-accent-blue text-sm font-medium rounded-lg shadow-md">
              Prove Authenticity
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-accent-blue text-ts-accent-blue text-sm font-medium rounded-lg shadow-md">
              Stop Counterfeits
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-accent-blue text-ts-accent-blue text-sm font-medium rounded-lg shadow-md">
              EU DPP Compliant
            </span>
          </div>

          {/* Flat Design Buttons - Primary/Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToWaitlist}
                  className="text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg font-semibold bg-ts-accent text-ts-primary hover:bg-ts-accent hover:opacity-90 transition-all"
                aria-label="Join Beta Access"
              >
                Start Free
              </Button>
            </motion.div>
          </div>

          {/* Additional Info Badges - Blue tones */}
          <div className="flex flex-wrap justify-start gap-3 mt-12">
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-border text-ts-text-muted text-sm font-medium rounded-lg">
              Enterprise Security
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-border text-ts-text-muted text-sm font-medium rounded-lg">
              GDPR Compliant
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-border text-ts-text-muted text-sm font-medium rounded-lg">
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
          className="flex flex-col items-center gap-3 p-4 bg-ts-surface border-2 border-ts-accent-blue text-ts-accent-blue rounded-lg shadow-md hover:shadow-lg hover:bg-ts-accent-blue hover:text-white transition-all"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Discover How</span>
              <ChevronDown className="w-5 h-5 [stroke-width:2] [stroke-linecap:round] [stroke-linejoin:round]" />
        </motion.button>
      </motion.div>
    </section>
  );
}
