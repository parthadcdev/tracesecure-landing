import React, { createContext, useContext } from 'react';
import { LANDING_VARIANTS, getLandingContent } from '@/config/landingContent';

const LandingVariantContext = createContext(LANDING_VARIANTS.generic);

export function LandingVariantProvider({ variant = LANDING_VARIANTS.generic, children }) {
  return (
    <LandingVariantContext.Provider value={variant}>
      {children}
    </LandingVariantContext.Provider>
  );
}

export function useLandingVariant() {
  return useContext(LandingVariantContext);
}

export function useLandingContent() {
  const variant = useLandingVariant();
  return getLandingContent(variant);
}
