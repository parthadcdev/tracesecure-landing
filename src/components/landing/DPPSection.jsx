
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function DPPSection() {
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

  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="dpp-section" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ts-text" style={{ lineHeight: '1.2', fontSize: '32pt' }}>
              Empower Your Craft with EU DPP Ready
            </h2>
            <p className="text-lg mb-8 text-ts-text-muted">
              Fakes cost artisans $100B+ yearly. The EU's Digital Product Passport (DPP), launching 2026, fights counterfeits by tracking your craft's journey - materials, origins, authenticity. TraceSecure makes it easy: Create digital passports in 5 minutes, no tech skills needed. Slash 40% of fake losses, charge 15-20% more, and sell freely in Europe. Smart Trace, Trusted Trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.tracesecure.co/auth?tab=signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-6 rounded-xl shadow-xl transition-all hover:shadow-2xl hover:scale-105 font-semibold text-center inline-block"
                style={{ background: 'var(--gradient-primary)', color: 'white' }}
              >
                Start Free
              </a>
              <Button
                onClick={scrollToWaitlist}
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105 font-semibold border-2"
                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
              >
                Get Free Guide
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="/images/dpp-handbag.png"
              alt="A brown leather handbag with a green Digital Product Passport shield tag."
              className="rounded-xl shadow-2xl w-full max-w-[320px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
