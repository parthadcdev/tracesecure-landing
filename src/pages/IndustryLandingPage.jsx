import React, { Suspense, lazy } from 'react';
import { LandingVariantProvider, useLandingVariant } from '@/context/LandingVariantContext';
import { LANDING_VARIANTS } from '@/config/landingContent';
import HeroSection from '../components/landing/HeroSection';
import VerticalSelector from '../components/landing/VerticalSelector';

const HowItWorks = lazy(() => import('../components/landing/HowItWorks'));
const FeaturesSection = lazy(() => import('../components/landing/FeaturesSection'));
const SocialProof = lazy(() => import('../components/landing/SocialProof'));
const WhyMattersSection = lazy(() => import('../components/landing/WhyMattersSection'));
const ValuePropsSection = lazy(() => import('../components/landing/ValuePropsSection'));
const WhyTraceSecureIsDifferent = lazy(() => import('../components/landing/WhyTraceSecureIsDifferent'));
const TheWinWinWin = lazy(() => import('../components/landing/TheWinWinWin'));
const LocalCredibility = lazy(() => import('../components/landing/LocalCredibility'));
const CTASection = lazy(() => import('../components/landing/CTASection'));
const DPPComplianceSection = lazy(() => import('../components/landing/DPPComplianceSection'));
const FAQSection = lazy(() => import('../components/landing/FAQSection'));
const FinalCTASection = lazy(() => import('../components/landing/FinalCTASection'));

function LandingSections() {
  const variant = useLandingVariant();
  const showVerticalSelector = variant === LANDING_VARIANTS.generic;

  return (
    <>
      {showVerticalSelector && <VerticalSelector />}
      <HowItWorks />
      <ValuePropsSection />
      <SocialProof />
      <WhyMattersSection />
      <WhyTraceSecureIsDifferent />
      <TheWinWinWin />
      <FeaturesSection />
      <LocalCredibility />
      <CTASection />
      <DPPComplianceSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

export default function IndustryLandingPage({ variant = LANDING_VARIANTS.generic }) {
  return (
    <LandingVariantProvider variant={variant}>
      <div className="overflow-hidden">
        <HeroSection />
        <Suspense
          fallback={
            <div
              className="h-screen w-full"
              style={{ backgroundColor: 'var(--color-background)' }}
            />
          }
        >
          <LandingSections />
        </Suspense>
      </div>
    </LandingVariantProvider>
  );
}
