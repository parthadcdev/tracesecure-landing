import React from 'react';
import IndustryLandingPage from '../IndustryLandingPage';
import { LANDING_VARIANTS } from '@/config/landingContent';

export default function Wine() {
  return <IndustryLandingPage variant={LANDING_VARIANTS.wine} />;
}
