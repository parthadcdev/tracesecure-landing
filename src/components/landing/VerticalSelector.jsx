import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getWineIndustryUrl, isExternalUrl } from '@/utils/host';

const verticals = [
  { label: 'Beverage', getHref: getWineIndustryUrl },
  { label: 'Supplements', href: '/industries/supplements' },
  { label: 'Specialty Food', href: '/industries/specialty-food' },
  { label: 'Other', anchor: 'final-cta' },
];

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const headerHeight = 80;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: elementPosition - headerHeight - 16, behavior: 'smooth' });
}

export default function VerticalSelector() {
  const navigate = useNavigate();

  const handleSelect = (vertical) => {
    if (vertical.anchor) {
      scrollToElement(vertical.anchor);
      return;
    }

    if (vertical.getHref) {
      const href = vertical.getHref();
      if (isExternalUrl(href)) {
        window.location.href = href;
      } else {
        navigate(href);
        window.scrollTo(0, 0);
      }
      return;
    }

    if (vertical.href) {
      navigate(vertical.href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-8 md:py-10" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-ts-text-muted">
            I make
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {verticals.map((vertical) => (
              <button
                key={vertical.label}
                type="button"
                onClick={() => handleSelect(vertical)}
                className="px-4 py-2 bg-ts-card border-2 border-ts-border text-ts-text text-sm font-medium rounded-lg shadow-sm hover:border-ts-accent-blue hover:text-ts-primary transition-all"
              >
                {vertical.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
