import React, { Suspense, lazy } from 'react';
import { LandingVariantProvider, useLandingVariant } from '@/context/LandingVariantContext';
import { LANDING_VARIANTS } from '@/config/landingContent';
import HeroSection from '../components/landing/HeroSection';
import VerticalSelector from '../components/landing/VerticalSelector';
import VerticalProofSection from '../components/landing/VerticalProofSection';

const HowItWorks = lazy(() => import('../components/landing/HowItWorks'));
const FeaturesSection = lazy(() => import('../components/landing/FeaturesSection'));
const WhyMattersSection = lazy(() => import('../components/landing/WhyMattersSection'));
const ValuePropsSection = lazy(() => import('../components/landing/ValuePropsSection'));
const WhyTraceSecureIsDifferent = lazy(() => import('../components/landing/WhyTraceSecureIsDifferent'));
const TheWinWinWin = lazy(() => import('../components/landing/TheWinWinWin'));
const LocalCredibility = lazy(() => import('../components/landing/LocalCredibility'));
const CTASection = lazy(() => import('../components/landing/CTASection'));
const DPPComplianceSection = lazy(() => import('../components/landing/DPPComplianceSection'));
const FAQSection = lazy(() => import('../components/landing/FAQSection'));
const FinalCTASection = lazy(() => import('../components/landing/FinalCTASection'));

function SectionFallback() {
  return <div className="h-4 w-full" aria-hidden="true" />;
}

function LandingSections() {
  const variant = useLandingVariant();
  const showVerticalSelector = variant === LANDING_VARIANTS.generic;

  return (
    <>
      {showVerticalSelector && <VerticalSelector />}
      <HowItWorks />
      <VerticalProofSection />
      <ValuePropsSection />
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
      <div>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <LandingSections />
        </Suspense>
      </div>
    </LandingVariantProvider>
  );
}
