
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLandingContent } from "@/context/LandingVariantContext";

export default function HeroSection() {
  const { hero } = useLandingContent();

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
      <div
        className="absolute inset-0 dark:opacity-80"
        style={{
          backgroundImage: "url('/images/hero1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-ts-background/50 dark:bg-ts-background/30 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start pt-24 md:pt-20 mb-24 md:mb-32">
        <motion.div
          className="max-w-4xl text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8 text-ts-primary">
            <span className="text-[3.375rem] sm:text-[4.125rem] lg:text-[5.25rem] text-ts-primary">{hero.headlineTop}</span>
            <br />
            <span className="text-ts-text-muted">
              {hero.headlineBottom}
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl text-ts-text-muted">
            {hero.description}
          </p>

          <div className="flex flex-wrap justify-start gap-3 mb-12">
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-ts-surface border-2 border-ts-accent-blue text-ts-accent-blue text-sm font-medium rounded-lg shadow-md"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://app.tracesecure.co/auth?tab=signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg font-semibold bg-ts-accent text-ts-primary hover:bg-ts-accent hover:opacity-90 transition-all"
                aria-label="Join"
              >
                Join
              </a>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-start gap-3 mt-12">
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-border text-ts-text-muted text-sm font-medium rounded-lg">
              Enterprise Security
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-border text-ts-text-muted text-sm font-medium rounded-lg">
              No Crypto Wallet Required
            </span>
            <span className="px-4 py-2 bg-ts-surface border-2 border-ts-border text-ts-text-muted text-sm font-medium rounded-lg">
              Blockchain Verification
            </span>
          </div>
        </motion.div>
      </div>

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
