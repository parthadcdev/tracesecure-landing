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
    answer: 'Most businesses are up and running within 24-48 hours. Our beta program includes personalized onboarding, and you can start creating verified products immediately after account approval.'
  },
  {
    category: 'Technical',
    question: 'How secure are the QR codes?',
    answer: 'Our QR codes use military-grade 256-bit encryption and blockchain verification. Each code is unique, tamper-proof, and cannot be replicated or forged. Any attempt to copy or alter a code is immediately detectable.'
  },
  {
    category: 'Technical',
    question: 'What happens if a QR code is damaged or removed?',
    answer: 'We offer multiple attachment methods including tamper-evident materials that show if removed. For high-value items, we can embed codes in multiple locations or integrate them into the product design itself for permanent verification.'
  },
  {
    category: 'Technical',
    question: 'Do customers need a special app to verify products?',
    answer: 'No special app required! Customers can verify products using any smartphone camera or QR code reader. The verification page works on all devices and provides instant results with rich product information.'
  },
  {
    category: 'Technical',
    question: 'Can TraceSecure integrate with my existing systems?',
    answer: 'Yes, we provide API access and integrations with popular inventory management, e-commerce, and ERP systems. Our team can help set up custom integrations during the beta program.'
  },
  {
    category: 'Compliance',
    question: 'Is TraceSecure compliant with EU Digital Product Passport (DPP) regulations?',
    answer: 'Absolutely. TraceSecure is built from the ground up to meet EU DPP requirements. We automatically capture and store all required sustainability data, material information, and product lifecycle details needed for compliance.'
  },
  {
    category: 'Compliance',
    question: 'How does TraceSecure handle GDPR and data privacy?',
    answer: 'We are fully GDPR compliant with data centers in the EU. Customer data is encrypted, anonymized where possible, and we provide complete data portability and deletion capabilities. Privacy is built into our core architecture.'
  },
  {
    category: 'Compliance',
    question: 'What sustainability data can TraceSecure track?',
    answer: 'We track carbon footprint, material sourcing, production methods, transportation, recyclability information, and end-of-life instructions. All data is structured to meet current and upcoming EU sustainability requirements.'
  },
  {
    category: 'Business',
    question: 'How much does TraceSecure cost after the beta?',
    answer: 'Beta participants lock in special pricing: Starter remains free for up to 100 products, Professional will be $49/month (50% off), and Enterprise pricing is customized. Current beta pricing is guaranteed for your first year.'
  },
  {
    category: 'Business',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel anytime with no penalties. Your existing QR codes continue working, but you won\'t be able to create new ones or access advanced features. We provide data export tools if needed.'
  },
  {
    category: 'Business',
    question: 'Do you offer white-label solutions?',
    answer: 'Yes, Enterprise plans include white-label options where verification pages show your branding only. We can also provide custom domains and fully branded customer experiences.'
  },
  {
    category: 'Support',
    question: 'What kind of support do you provide?',
    answer: 'Beta users get priority support via email, chat, and phone. Professional and Enterprise plans include dedicated account managers. We also provide comprehensive documentation, video tutorials, and training sessions.'
  },
  {
    category: 'Support',
    question: 'What happens to my data if I stop using TraceSecure?',
    answer: 'You own your data completely. We provide full data export in standard formats (JSON, CSV, XML) and can facilitate migration to other systems. Historical verification records remain accessible for compliance purposes.'
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
    <section id="faq" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-background)' }}>
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
            <span className="text-ts-primary">
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
