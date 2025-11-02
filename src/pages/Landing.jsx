import React, { Suspense, lazy } from "react";

// Import all new or updated sections
import HeroSection from "../components/landing/HeroSection";
const HowItWorks = lazy(() => import("../components/landing/HowItWorks"));
const FeaturesSection = lazy(() => import("../components/landing/FeaturesSection"));
const SocialProof = lazy(() => import("../components/landing/SocialProof"));
const WhyMattersSection = lazy(() => import("../components/landing/WhyMattersSection"));
const ValuePropsSection = lazy(() => import("../components/landing/ValuePropsSection"));
const LocalCredibility = lazy(() => import("../components/landing/LocalCredibility"));
const CTASection = lazy(() => import("../components/landing/CTASection"));
const DPPComplianceSection = lazy(() => import("../components/landing/DPPComplianceSection"));
const FAQSection = lazy(() => import("../components/landing/FAQSection"));
const FinalCTASection = lazy(() => import("../components/landing/FinalCTASection"));

// This component will be deleted as it's no longer used
// const BenefitsSection = lazy(() => import("../components/landing/BenefitsSection"));

export default function Landing() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Suspense fallback={<div className="h-screen w-full" style={{backgroundColor: "var(--color-background)"}} />}>
        <HowItWorks />
        <FeaturesSection />
        <ValuePropsSection />
        <SocialProof />
        <WhyMattersSection />
        <LocalCredibility />
        <CTASection />
        <DPPComplianceSection />
        <FAQSection />
        <FinalCTASection />
      </Suspense>
    </div>
  );
}