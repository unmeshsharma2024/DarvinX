import React from 'react';
import { LandingHero } from '../components/HomeComponents/LandingHero';
import { UnifiedSolution } from '../components/HomeComponents/UnifiedSolution';
import { IndustriesSection } from '../components/HomeComponents/IndustriesSection';

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <UnifiedSolution />
      <IndustriesSection />
    </>
  );
}
