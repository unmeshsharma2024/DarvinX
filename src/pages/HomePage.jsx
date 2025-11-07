import React from 'react';
import { LandingHero } from '../components/HomeComponents/LandingHero';
import { UnifiedSolution } from '../components/HomeComponents/UnifiedSolution';
import { IndustriesSection } from '../components/HomeComponents/IndustriesSection';
import { SEO } from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Helxon - SOC-as-a-Service | 24/7 Cybersecurity Monitoring"
        description="Helxon delivers enterprise-grade SOC-as-a-Service powered by Microsoft security stack. Get 24/7 threat monitoring, detection, and incident response with VorXOC platform. Protect your business from cyber threats."
        keywords="SOC-as-a-Service, cybersecurity monitoring, Microsoft Sentinel, Azure security, managed SOC, threat detection, incident response, VorXOC platform, security operations center, cyber threat protection"
        canonicalUrl="/"
      />
      <LandingHero />
      <UnifiedSolution />
      <IndustriesSection />
    </>
  );
}
