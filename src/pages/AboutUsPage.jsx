import React from 'react';
import { AboutUsHero } from '../components/AboutUsComponents/AboutUsHero';
import { AboutUsVision } from '../components/AboutUsComponents/AboutUsVision';
import { AboutUsCapabilities } from '../components/AboutUsComponents/AboutUsCapabilities';
import { AboutUsPartners } from '../components/AboutUsComponents/AboutUsPartners';
import { AboutUsCTA } from '../components/AboutUsComponents/AboutUsCTA';
import { SEO } from '../components/SEO';
import './AboutUsPage.scss';

export default function AboutUsPage() {
  return (
    <>
      <SEO 
        title="About Helxon - Leading SOC-as-a-Service Provider"
        description="Learn about Helxon's mission to deliver enterprise-grade security operations powered by Microsoft technology. Discover our vision, capabilities, and partnerships in cybersecurity."
        keywords="about Helxon, SOC-as-a-Service provider, cybersecurity company, Microsoft security partner, security operations, threat intelligence, cyber defense"
        canonicalUrl="/about-us"
      />
      <div className="about-us-page">
        <AboutUsHero />
        <AboutUsVision />
        <div className="about-us-page__divider" />
        <AboutUsCapabilities />
        <AboutUsPartners />
        <AboutUsCTA />
      </div>
    </>
  );
}

