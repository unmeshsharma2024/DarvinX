import React from 'react';
import { VorxocHero } from '../components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '../components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '../components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '../components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '../components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '../components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '../components/PlatformComponents/ReadyToSecure';
import { SEO } from '../components/SEO';
import './PlatformPage.scss';

export default function PlatformPage() {
  return (
    <>
      <SEO 
        title="VorXOC Platform - Unified Security Operations | Helxon"
        description="Discover VorXOC, Helxon's proprietary security operations platform. Seamlessly integrate with Microsoft Sentinel, Defender, and leading security tools for unified threat visibility and automated response."
        keywords="VorXOC platform, security operations platform, Microsoft Sentinel integration, unified security dashboard, threat visibility, security automation, SIEM integration, EDR integration, security orchestration"
        canonicalUrl="/platform"
      />
      <div className="platform-page">
        <VorxocHero />
        <VorxocPartners />
        <VorxocOverview />
        <SecurityToolsIntegration />
        <IntegrationBenefits />
        <WhyChooseVorxoc />
        <ReadyToSecure />
      </div>
    </>
  );
}

