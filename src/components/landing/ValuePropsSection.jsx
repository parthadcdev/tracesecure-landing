
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock } from 'lucide-react';

const benefits = [
  {
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/e0dd83a4a_Gemini_Generated_Image_7ehyoz7ehyoz7ehy.png',
    title: 'Enhance Brand Value Through Provenance',
    description: 'Charge 15-20% more with unbreakable proof of authenticity. Buyers trust and pay premiums for verified goods.',
    example: 'A Vietnamese handbag maker boosted sales by 25% after adopting TraceSecure.',
  },
  {
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/0d6bf3bc5_Gemini_Generated_Image_vzdb6kvzdb6kvzdb.png',
    title: 'Streamline Operations with Cost-Effective Traceability',
    description: 'Eliminate 20-30% of revenue loss from fakes and fraudulent returns. Protect your brand without expensive lawyers.',
    example: 'A jeweler cut losses from fake component swaps significantly.',
  },
  {
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68dc91d01bc5a24ad7723bfb/e20515e9a_Gemini_Generated_Image_b9eud1b9eud1b9eu.png',
    title: 'Save Time and Focus on Creation',
    description: 'Automate your product\'s journey with a quick scan. Ditch the paperwork and focus on what you do best: creating.',
    example: 'Creators save up to 10 hours a week on record-keeping.',
  }
];

export default function ValuePropsSection() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Why Luxury Artisans Need TraceSecure
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
            As a creator of high-end crafts, fakes steal your reputation and up to 30% of your sales. Manual records get forged, costing you time and money.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="mx-auto mb-6">
                <img src={benefit.image} alt={benefit.title} className="w-24 h-24 rounded-full object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                {benefit.title}
              </h3>
              <p className="text-base mb-4 flex-grow" style={{ color: 'var(--color-text)' }}>
                {benefit.description}
              </p>
              <p className="text-sm italic" style={{ color: 'var(--color-primary)' }}>
                "{benefit.example}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
