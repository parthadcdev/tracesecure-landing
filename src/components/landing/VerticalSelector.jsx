import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { LANDING_VARIANTS } from '@/config/landingContent';
import { useHeroSlide } from '@/context/HeroSlideContext';
import { useLandingVariant } from '@/context/LandingVariantContext';
import { getWineIndustryUrl, isExternalUrl, isWineHostname } from '@/utils/host';

const verticals = [
  { label: 'Wine & Beverage', slideLabel: 'Wine & Beverage', getHref: getWineIndustryUrl },
  { label: 'Supplements', slideLabel: 'Supplements', href: '/industries/supplements' },
  { label: 'Specialty Food', slideLabel: 'Specialty Food', href: '/industries/specialty-food' },
  { label: 'Other', anchor: 'final-cta' },
];

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const headerHeight = 80;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: elementPosition - headerHeight - 16, behavior: 'smooth' });
}

function getActiveLabel(variant, pathname) {
  const path = pathname.toLowerCase();

  if (
    variant === LANDING_VARIANTS.wine ||
    isWineHostname() ||
    path.startsWith('/industries/wine')
  ) {
    return 'Wine & Beverage';
  }

  if (variant === LANDING_VARIANTS.supplements || path.startsWith('/industries/supplements')) {
    return 'Supplements';
  }

  if (variant === LANDING_VARIANTS.specialtyFood || path.startsWith('/industries/specialty-food')) {
    return 'Specialty Food';
  }

  return null;
}

export default function VerticalSelector() {
  const navigate = useNavigate();
  const location = useLocation();
  const variant = useLandingVariant();
  const heroSlide = useHeroSlide();
  const isHomepage = variant === LANDING_VARIANTS.generic;

  const activeLabel = isHomepage && heroSlide?.activeLabel
    ? heroSlide.activeLabel
    : getActiveLabel(variant, location.pathname);

  const handleSelect = (vertical) => {
    if (vertical.anchor) {
      scrollToElement(vertical.anchor);
      return;
    }

    if (isHomepage && vertical.slideLabel && heroSlide?.goToSlideByLabel) {
      heroSlide.goToSlideByLabel(vertical.slideLabel);
      return;
    }

    if (vertical.label === activeLabel) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Industry selector">
            {verticals.map((vertical) => {
              const isActive = vertical.label === activeLabel;
              return (
                <button
                  key={vertical.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelect(vertical)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
                    isActive
                      ? 'bg-ts-accent-blue border-ts-accent-blue text-white shadow-md'
                      : 'bg-ts-card border-ts-border text-ts-text shadow-sm hover:border-ts-accent-blue hover:text-ts-primary'
                  }`}
                >
                  {vertical.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
