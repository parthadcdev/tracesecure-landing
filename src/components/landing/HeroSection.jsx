
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLandingContent, useLandingVariant } from "@/context/LandingVariantContext";
import { useHeroSlide } from "@/context/HeroSlideContext";
import { getHeroSlides } from "@/config/landingContent";

export default function HeroSection() {
  const variant = useLandingVariant();
  const { hero } = useLandingContent();
  const heroSlide = useHeroSlide();

  const fallbackSlides = getHeroSlides(variant);
  const slides = heroSlide?.slides ?? fallbackSlides;
  const activeIndex = heroSlide?.activeIndex ?? 0;
  const activeSlide = heroSlide?.activeSlide ?? fallbackSlides[0];
  const canRotate = heroSlide?.canRotate ?? false;
  const fadeMs = heroSlide?.fadeMs ?? 500;
  const setIsPaused = heroSlide?.setIsPaused;
  const goToSlide = heroSlide?.goToSlide;
  const goNext = heroSlide?.goNext;

  const headlineTop = hero.headlineTop ?? activeSlide.headlineTop;
  const headlineBottom = hero.headlineBottom ?? activeSlide.headlineBottom;

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

  const pauseHandlers = setIsPaused
    ? {
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
        onFocusCapture: () => setIsPaused(true),
        onBlurCapture: () => setIsPaused(false),
      }
    : {};

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      {...pauseHandlers}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.label}
            className="absolute inset-0 dark:opacity-80"
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: fadeMs / 1000, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: slide.backgroundPosition ?? 'center right',
              backgroundRepeat: 'no-repeat',
              zIndex: index === activeIndex ? 1 : 0,
            }}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none hero-text-fade" />
      <div className="absolute inset-0 bg-ts-background/10 dark:bg-ts-background/25 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start pt-24 md:pt-20 mb-24 md:mb-32">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-2xl text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8 text-ts-primary">
            <span className="text-[3.375rem] sm:text-[4.125rem] lg:text-[5.25rem] text-ts-primary">
              {headlineTop}
            </span>
            <br />
            <span className="text-ts-text-muted">{headlineBottom}</span>
          </h1>

          <div className="relative mb-12 min-h-[5.5rem] sm:min-h-[5rem]">
            {slides.map((slide, index) => (
              <motion.p
                key={slide.label}
                className="text-lg md:text-xl leading-relaxed max-w-xl text-ts-text-muted"
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: fadeMs / 1000, ease: 'easeInOut' }}
                style={{
                  position: index === activeIndex ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  pointerEvents: index === activeIndex ? 'auto' : 'none',
                }}
                aria-hidden={index !== activeIndex}
              >
                {slide.description}
              </motion.p>
            ))}
          </div>

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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://app.tracesecure.co/auth?tab=signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-lg shadow-lg font-semibold bg-ts-accent text-ts-primary hover:bg-ts-accent hover:opacity-90 transition-all"
                aria-label="Start free"
              >
                Start free
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
        </div>

        {slides.length > 1 && goToSlide && (
          <div
            className="mt-8 flex flex-wrap items-center gap-3"
            role="tablist"
            aria-label="Hero slideshow"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${slide.label} slide`}
                  onClick={() => goToSlide(index)}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border-2 transition-colors ${
                    isActive
                      ? 'bg-ts-accent-blue border-ts-accent-blue text-white shadow-md'
                      : 'bg-ts-surface/90 border-ts-border text-ts-text-muted hover:border-ts-accent-blue hover:text-ts-primary'
                  }`}
                >
                  {slide.label}
                </button>
              );
            })}
            {canRotate && goNext && (
              <button
                type="button"
                onClick={goNext}
                className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border-2 border-ts-border bg-ts-surface/90 text-ts-text-muted hover:border-ts-accent-blue hover:text-ts-primary transition-colors"
                aria-label="Next slide"
              >
                Next →
              </button>
            )}
          </div>
        )}
      </div>

      <motion.div
        className="absolute bottom-12 left-0 right-0 flex justify-center z-10"
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
