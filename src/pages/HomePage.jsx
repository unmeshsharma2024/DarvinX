import React, { Suspense } from 'react';
import { SEO } from '../components/SEO';

const LandingHero = React.lazy(() =>
  import('../components/HomeComponents/LandingHero').then((module) => ({
    default: module.LandingHero,
  }))
);
const UnifiedSolution = React.lazy(() =>
  import('../components/HomeComponents/UnifiedSolution').then((module) => ({
    default: module.UnifiedSolution,
  }))
);
const IndustriesSection = React.lazy(() =>
  import('../components/HomeComponents/IndustriesSection').then((module) => ({
    default: module.IndustriesSection,
  }))
);

function SectionFallback({ label, minHeight = '16rem', className = '' }) {
  return (
    <div
      className={`flex items-center justify-center text-slate-500 ${className}`}
      style={{ minHeight }}
    >
      Loading {label}...
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Helxon - SOC-as-a-Service | 24/7 Cybersecurity Monitoring"
        description="Helxon delivers enterprise-grade SOC-as-a-Service powered by Microsoft security stack. Get 24/7 threat monitoring, detection, and incident response with VorXOC platform. Protect your business from cyber threats."
        keywords="SOC-as-a-Service, cybersecurity monitoring, Microsoft Sentinel, Azure security, managed SOC, threat detection, incident response, VorXOC platform, security operations center, cyber threat protection"
        canonicalUrl="/"
      />
      <Suspense
        fallback={
          <SectionFallback
            label="hero section"
            minHeight="80vh"
            className="landing-hero landing-hero--fallback"
          />
        }
      >
        <LandingHero />
      </Suspense>
      <Suspense
        fallback={
          <SectionFallback
            label="unified solution"
            minHeight="50rem"
            className="unified-solution unified-solution--fallback"
          />
        }
      >
        <UnifiedSolution />
      </Suspense>
      <Suspense
        fallback={
          <SectionFallback
            label="industries"
            minHeight="40rem"
            className="industries-section industries-section--fallback"
          />
        }
      >
        <IndustriesSection />
      </Suspense>
    </>
  );
}
