import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './SecurityToolsIntegration.scss';

// Import Firewall Logos
import CheckPointLogo from '../../assets/FirewallLogos/Check point.svg';
import CiscoLogo from '../../assets/FirewallLogos/Cisco.svg';
import FortinetLogo from '../../assets/FirewallLogos/Fortinet.svg';
import PaloAltoLogo from '../../assets/FirewallLogos/PaloAltonet.svg';
// Import problematic SVGs as URLs
// import JuniperLogo from '../../assets/FirewallLogos/Juniper.svg';
// import SonicWallLogoUrl from '../../assets/FirewallLogos/SonicWall.svg?url';

// Import Endpoint Logos
import CrowdStrikeLogo from '../../assets/EndpointLogos/CrowdStrike_logo.svg';
import ESETLogo from '../../assets/EndpointLogos/ESET_logo.svg';
import KasperskyLogo from '../../assets/EndpointLogos/Kaspersky_logo.svg';
import McAfeeLogo from '../../assets/EndpointLogos/McAfee_logo.svg';
import SentinelOneLogo from '../../assets/EndpointLogos/SentinelOne_logo.svg';
import SymantecLogo from '../../assets/EndpointLogos/symantec-by-broadcom_horizontal_yellow-black_rgb.svg';

// Import WAF Logos
import AkamaiLogo from '../../assets/WafLogos/Akamai.svg';
import BarracudaLogo from '../../assets/WafLogos/Barracuda_Networks_logo.svg';
import CitrixLogo from '../../assets/WafLogos/Citrix_Systems_logo.svg';
import CloudflareLogo from '../../assets/WafLogos/Cloudflare_Logo.svg';
import F5Logo from '../../assets/WafLogos/F5_Networks-Logo.wine.svg';
import RadwareLogo from '../../assets/WafLogos/Radware_logo.svg';

// Import EDR Logos
import CrowdStrikeEdrLogo from '../../assets/EdrLogos/Crowdstrike.svg';
import MicrosoftDefenderLogo from '../../assets/EdrLogos/Microsoft_windows_defender.svg';
import SentinelOneEdrLogo from '../../assets/EdrLogos/Sentinelone.svg';

// Import Other Logos
import AWSLogo from '../../assets/OtherLogos/Amazon_Web_Services.svg';
import GoogleCloudLogo from '../../assets/OtherLogos/Google_Cloud.svg';
import MicrosoftSentinelLogo from '../../assets/OtherLogos/Microsoft_Sentinel.svg';

// Logos data organized by category
const logosData = {
  'Firewall Solutions': [
    { name: 'Palo Alto Networks', logo: PaloAltoLogo },
    { name: 'Fortinet', logo: FortinetLogo },
    { name: 'Check Point', logo: CheckPointLogo },
    { name: 'Cisco', logo: CiscoLogo },
    // { name: 'Juniper Networks', logo: JuniperLogo },
    // { name: 'SonicWall', logo: SonicWallLogoUrl },
  ],
  'Endpoint Solutions': [
    { name: 'CrowdStrike', logo: CrowdStrikeLogo },
    { name: 'SentinelOne', logo: SentinelOneLogo },
    { name: 'McAfee', logo: McAfeeLogo },
    { name: 'Symantec', logo: SymantecLogo },
    { name: 'Kaspersky', logo: KasperskyLogo },
    { name: 'ESET', logo: ESETLogo },
  ],
  'WAF Solutions': [
    { name: 'Cloudflare', logo: CloudflareLogo },
    { name: 'F5 Networks', logo: F5Logo },
    { name: 'Akamai', logo: AkamaiLogo },
    { name: 'Barracuda', logo: BarracudaLogo },
    { name: 'Citrix', logo: CitrixLogo },
    { name: 'Radware', logo: RadwareLogo },
  ],
  'EDR/XDR Solutions': [
    { name: 'CrowdStrike', logo: CrowdStrikeEdrLogo },
    { name: 'SentinelOne', logo: SentinelOneEdrLogo },
    { name: 'Microsoft Windows Defender', logo: MicrosoftDefenderLogo },
  ],
  'Other Solutions': [
    { name: 'Amazon Web Services', logo: AWSLogo },
    { name: 'Google Cloud', logo: GoogleCloudLogo },
    { name: 'Microsoft Sentinel', logo: MicrosoftSentinelLogo },
  ],
};

export function SecurityToolsIntegration() {
  const [selectedFilter, setSelectedFilter] = useState('Azure Security Center');
  const [selectedCategory, setSelectedCategory] = useState('Firewall Solutions');

  const categories = [
    'Firewall Solutions',
    'Endpoint Solutions',
    'WAF Solutions',
    'EDR/XDR Solutions',
    'Other Solutions',
  ];

//   const filters = [
//     'Azure Security Center',
//     'Office 365 Security',
//     'Microsoft 365 Defender',
//   ];

  return (
    <section className="security-tools-integration">
      <div className="security-tools-integration__container">
        {/* Header */}
        <div className="security-tools-integration__header">
          <h2 className="security-tools-integration__title">Security Tools Integration</h2>
          <p className="security-tools-integration__description">
            VorXOC seamlessly integrates with your existing security infrastructure. We support all major security platforms and tools.
          </p>
        </div>

        {/* Filters */}
        {/* <div className="security-tools-integration__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`security-tools-integration__filter ${
                selectedFilter === filter ? 'active' : ''
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              <Check className="security-tools-integration__filter-icon" />
              <span>{filter}</span>
            </button>
          ))}
        </div> */}

        {/* Content Grid */}
        <div className="security-tools-integration__content">
          {/* Categories */}
          <div className="security-tools-integration__categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`security-tools-integration__category ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Logos Card */}
          <div className="security-tools-integration__logos-card">
            <div className="security-tools-integration__logos">
              {logosData[selectedCategory].map((item, index) => (
                <img key={index} src={item.logo} alt={item.name} />
              ))}
            </div>
            <p className="security-tools-integration__note">
              +Many more integrations available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

