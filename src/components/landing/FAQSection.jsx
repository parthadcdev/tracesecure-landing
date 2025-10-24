import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
  'Getting Started',
  'Technical',
  'Compliance',
  'Business',
  'Support'
];

const faqs = [
  {
    category: 'Getting Started',
    question: 'How does TraceSecure work for my products?',
    answer: 'TraceSecure creates a unique digital identity for each of your products using secure QR codes. You register your product details, generate a tamper-proof QR code, attach it to your product, and customers can scan it to verify authenticity and access the complete product journey.'
  },
  {
    category: 'Getting Started',
    question: 'What types of products can use TraceSecure?',
    answer: 'TraceSecure works with any luxury or craft product including handbags, jewelry, watches, art, furniture, textiles, electronics, and more. Our platform is designed to handle everything from individual artisan pieces to large-scale manufacturing operations.'
  },
  {
    category: 'Getting Started',
    question: 'How long does it take to set up TraceSecure for my business?',
    answer: 'Setup takes less than 5 minutes. Simply create your account, add your product details, generate QR codes, and start tracking. Our intuitive dashboard guides you through each step with no technical expertise required.'
  },
  {
    category: 'Technical',
    question: 'How secure are the QR codes?',
    answer: 'Our QR codes use 256-bit encryption and blockchain verification to ensure maximum security. Each code contains encrypted product history and verification data that cannot be forged or compromised.'
  },
  {
    category: 'Technical',
    question: 'What happens if a QR code is damaged or removed?',
    answer: 'If a QR code is damaged, you can generate a replacement code that maintains the same product identity. If removed, the product can still be verified through alternative methods including manual verification and backup tracking systems.'
  },
  {
    category: 'Technical',
    question: 'Do customers need a special app to verify products?',
    answer: 'No special app required. Customers can verify products using any smartphone camera through our web-based verification system. The process is instant and works across all platforms and devices.'
  },
  {
    category: 'Technical',
    question: 'Can TraceSecure integrate with my existing systems?',
    answer: 'Yes, TraceSecure offers comprehensive API access and custom integrations. Our platform can connect with your existing inventory management, e-commerce, and business systems for seamless operation.'
  },
  {
    category: 'Compliance',
    question: 'Is TraceSecure compliant with EU Digital Product Passport (DPP) regulations?',
    answer: 'Yes, TraceSecure is built from the ground up to meet and exceed EU DPP requirements. Our platform automatically handles compliance for current and upcoming regulations, ensuring your products are always compliant.'
  },
  {
    category: 'Compliance',
    question: 'How does TraceSecure handle GDPR and data privacy?',
    answer: 'TraceSecure is fully GDPR compliant with enterprise-grade data protection. We use secure encryption, follow data minimization principles, and provide full data portability. Your data is always under your control.'
  },
  {
    category: 'Compliance',
    question: 'What sustainability data can TraceSecure track?',
    answer: 'TraceSecure tracks comprehensive sustainability metrics including carbon footprint, recyclability, repair information, environmental impact, material sourcing, and end-of-life disposal options for complete lifecycle transparency.'
  },
  {
    category: 'Business',
    question: 'How much does TraceSecure cost after the beta?',
    answer: 'Beta members get locked-in pricing for life. After the public launch, new customers will pay standard rates: Starter (Free), Professional ($99/month), and Enterprise (Custom pricing). Beta members keep their discounted rates permanently.'
  },
  {
    category: 'Business',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no penalties. We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
  },
  {
    category: 'Business',
    question: 'Do you offer white-label solutions?',
    answer: 'Yes, our Enterprise plan includes white-label solutions allowing you to brand TraceSecure as your own platform. This includes custom domains, branding, and complete customization options.'
  },
  {
    category: 'Support',
    question: 'What kind of support do you provide?',
    answer: 'We provide comprehensive support including email support for all plans, priority support for Professional and Enterprise customers, dedicated account managers for Enterprise clients, and 24/7 technical support for critical issues.'
  },
  {
    category: 'Support',
    question: 'What happens to my data if I stop using TraceSecure?',
    answer: 'You retain full ownership of your data. If you decide to stop using TraceSecure, you can export all your data in standard formats. We also provide data migration assistance to help you transition to other platforms if needed.'
  }
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('Getting Started');
  const [openItems, setOpenItems] = useState(new Set());
  const viewport = { once: true, amount: 0.2 };

  const filteredFaqs = faqs.filter(faq => faq.category === selectedCategory);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ts-text">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-ts-primary to-ts-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-ts-text-muted">
            Everything you need to know about TraceSecure and our beta program. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-ts-primary text-white shadow-lg'
                  : 'bg-ts-card text-ts-text-muted hover:bg-ts-primary/10 border border-ts-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-ts-card rounded-2xl mb-4 shadow-xl border border-ts-primary/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.6 }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-ts-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-ts-text pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-ts-primary transition-transform ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItems.has(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-ts-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-ts-text">
            Still have questions?
          </h3>
          <p className="text-ts-text-muted mb-8">
            Our team is here to help you get started with TraceSecure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-ts-primary text-white font-semibold rounded-xl hover:bg-ts-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border-2 border-ts-primary text-ts-primary font-semibold rounded-xl hover:bg-ts-primary/10 transition-colors">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
