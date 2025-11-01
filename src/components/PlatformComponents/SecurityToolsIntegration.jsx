import React, { useState } from 'react';
import { motion } from 'motion/react';
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
        <motion.h2
          className="security-tools-integration__title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Security Tools Integration
        </motion.h2>
        <motion.p
          className="security-tools-integration__subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          VorXOC seamlessly integrates with your existing security infrastructure. We support all major security platforms and tools.
        </motion.p>

        <div className="security-tools-integration__surface">
          <motion.div
            className="security-tools-integration__surface-background"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="security-tools-integration__surface-inner">
            {/* Categories Tabs */}
            <div className="security-tools-integration__tabs">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  type="button"
                  className={`security-tools-integration__tab ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: selectedCategory === category ? 1 : 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{category}</span>
                </motion.button>
              ))}
            </div>

            {/* Logos Panel */}
            <motion.div
              key={selectedCategory}
              className="security-tools-integration__panel"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="security-tools-integration__logos">
                {logosData[selectedCategory].map((item, index) => (
                  <motion.div
                    key={index}
                    className="security-tools-integration__logo-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="security-tools-integration__logo"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="security-tools-integration__note"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                +Many more integrations available
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

