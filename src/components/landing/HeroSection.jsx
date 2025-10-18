
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
      {/* Lighter gradient base for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />
      
      {/* Traceability visualization - hidden on mobile */}
      <div className="hidden md:block">
        <TraceabilityVisualization />
      </div>
      
      {/* Much lighter overlay to show background better */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent 60%)' }} />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center mt-16 md:mt-0 mb-24 md:mb-32">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Fight Fakes. Build Loyalty. Start Free.
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto text-center" style={{ fontFamily: "var(--font-sans)" }}>
            Immutable blockchain certificates for independent creators: Prove authenticity with one scan, boost customer loyalty, start in 5 minutes - no tech expertise needed.
          </p>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToWaitlist}
                className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
                style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                aria-label="Start free authenticity certificate for your craft"
              >
                Secure Your First Craft Free
              </Button>
            </motion.div>
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
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
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
