import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import PlatformSection from '../components/PlatformSection';
import WhyChooseSection from '../components/WhyChooseSection';
import FooterCTA from '../components/FooterCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PlatformSection />
      <WhyChooseSection />
      <FooterCTA />
    </>
  );
}
