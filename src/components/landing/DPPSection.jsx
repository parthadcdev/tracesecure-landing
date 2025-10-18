
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function DPPSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const viewport = { once: true, amount: 0.2 };

  return (
    <section id="dpp-section" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)', lineHeight: '1.2', fontSize: '32pt' }}>
              Empower Your Craft with EU DPP Compliance
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-text)' }}>
              Fakes cost artisans $100B+ yearly. The EU's Digital Product Passport (DPP), launching 2026, fights counterfeits by tracking your craft's journey - materials, origins, authenticity. TraceSecure makes it easy: Create digital passports in 5 minutes, no tech skills needed. Slash 40% of fake losses, charge 15-20% more, and sell freely in Europe. Smart Trace, Trusted Trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToWaitlist}
                className="text-lg px-8 py-6 rounded-lg shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
              >
                Sign Up Free
              </Button>
              <Button
                onClick={scrollToWaitlist}
                variant="outline"
                className="text-lg px-8 py-6 rounded-lg shadow-lg transition-transform hover:scale-105"
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
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/85846833d_64badb72-d11f-417b-9321-82f03500f530.png"
              alt="A brown leather handbag with a green Digital Product Passport shield tag."
              className="rounded-xl shadow-2xl w-full max-w-[320px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
