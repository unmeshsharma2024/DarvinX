import React from 'react';
import { VorxocHero } from '../components/PlatformComponents/VorxocHero';
import { VorxocPartners } from '../components/PlatformComponents/VorxocPartners';
import { VorxocOverview } from '../components/PlatformComponents/VorxocOverview';
import { SecurityToolsIntegration } from '../components/PlatformComponents/SecurityToolsIntegration';
import { IntegrationBenefits } from '../components/PlatformComponents/IntegrationBenefits';
import { WhyChooseVorxoc } from '../components/PlatformComponents/WhyChooseVorxoc';
import { ReadyToSecure } from '../components/PlatformComponents/ReadyToSecure';
import './PlatformPage.scss';

export default function PlatformPage() {
  return (
    <div className="platform-page">
      <VorxocHero />
      <VorxocPartners />
      <VorxocOverview />
      <SecurityToolsIntegration />
      <IntegrationBenefits />
      <WhyChooseVorxoc />
      <ReadyToSecure />
    </div>
  );
}

