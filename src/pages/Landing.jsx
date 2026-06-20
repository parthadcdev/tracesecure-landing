import React from 'react';
import IndustryLandingPage from './IndustryLandingPage';
import { LANDING_VARIANTS } from '@/config/landingContent';

export default function Landing() {
  return <IndustryLandingPage variant={LANDING_VARIANTS.generic} />;
}
