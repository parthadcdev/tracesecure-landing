import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { getHeroSlides } from '@/config/landingContent';
import { useLandingVariant } from '@/context/LandingVariantContext';
import { LANDING_VARIANTS } from '@/config/landingContent';

const HeroSlideContext = createContext(null);

const DEFAULT_INTERVAL_MS = 6000;
const FADE_MS = 500;

export function HeroSlideProvider({ children }) {
  const variant = useLandingVariant();
  const slides = useMemo(() => getHeroSlides(variant), [variant]);
  const prefersReducedMotion = useReducedMotion();
  const canRotate = variant === LANDING_VARIANTS.generic && slides.length > 1 && !prefersReducedMotion;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex] ?? slides[0];

  const goToSlide = useCallback(
    (index) => {
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const goToSlideByLabel = useCallback(
    (label) => {
      const index = slides.findIndex((slide) => slide.label === label);
      if (index >= 0) {
        setActiveIndex(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [slides]
  );

  const goNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    setActiveIndex(0);
  }, [variant]);

  useEffect(() => {
    if (!canRotate || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, DEFAULT_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [canRotate, isPaused, slides.length]);

  const value = useMemo(
    () => ({
      slides,
      activeIndex,
      activeSlide,
      activeLabel: activeSlide?.label ?? null,
      canRotate,
      fadeMs: FADE_MS,
      isPaused,
      setIsPaused,
      goToSlide,
      goToSlideByLabel,
      goNext,
      prefersReducedMotion,
    }),
    [
      slides,
      activeIndex,
      activeSlide,
      canRotate,
      isPaused,
      goToSlide,
      goToSlideByLabel,
      goNext,
      prefersReducedMotion,
    ]
  );

  return <HeroSlideContext.Provider value={value}>{children}</HeroSlideContext.Provider>;
}

export function useHeroSlide() {
  return useContext(HeroSlideContext);
}
