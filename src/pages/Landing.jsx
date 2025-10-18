import React, { Suspense, lazy } from "react";

// Import all new or updated sections
import HeroSection from "../components/landing/HeroSection";
const ValuePropsSection = lazy(() => import("../components/landing/ValuePropsSection"));
const HowItWorks = lazy(() => import("../components/landing/HowItWorks"));
const DPPSection = lazy(() => import("../components/landing/DPPSection"));
// const SocialProof = lazy(() => import("../components/landing/SocialProof"));
const CTASection = lazy(() => import("../components/landing/CTASection"));

// This component will be deleted as it's no longer used
// const BenefitsSection = lazy(() => import("../components/landing/BenefitsSection"));

export default function Landing() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Suspense fallback={<div className="h-screen w-full" style={{backgroundColor: "var(--color-background)"}} />}>
        <ValuePropsSection />
        <HowItWorks />
        <DPPSection />
        {/* <SocialProof /> */}
        <CTASection />
      </Suspense>
    </div>
  );
}