import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './SecurityToolsIntegration.scss';

// Import logos from public folder
const toolsData = {
  'Azure Security Center': ['paloalto', 'fortinet', 'checkpoint', 'cisco'],
  'Office 365 Security': ['juniper', 'sonicwall', 'fortinet', 'cisco'],
  'Microsoft 365 Defender': ['paloalto', 'checkpoint', 'cisco', 'juniper'],
};

export function SecurityToolsIntegration() {
  const [selectedFilter, setSelectedFilter] = useState('Azure Security Center');

  const categories = [
    'Firewall Solutions',
    'Endpoint Solutions',
    'WAF Solutions',
    'EDR/XDR Solutions',
    'Other Solutions',
  ];

  const filters = [
    'Azure Security Center',
    'Office 365 Security',
    'Microsoft 365 Defender',
  ];

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
        <div className="security-tools-integration__filters">
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
        </div>

        {/* Content Grid */}
        <div className="security-tools-integration__content">
          {/* Categories */}
          <div className="security-tools-integration__categories">
            {categories.map((category) => (
              <div key={category} className="security-tools-integration__category">
                {category}
              </div>
            ))}
          </div>

          {/* Logos Card */}
          <div className="security-tools-integration__logos-card">
            <div className="security-tools-integration__logos">
              <img src="/images/logos/palo-alto.svg" alt="Palo Alto" />
              <img src="/images/logos/fortinet.svg" alt="Fortinet" />
              <img src="/images/logos/checkpoint.svg" alt="Check Point" />
              <img src="/images/logos/cisco.svg" alt="Cisco" />
              <img src="/images/logos/juniper.svg" alt="Juniper" />
              <img src="/images/logos/sonicwall.svg" alt="SonicWall" />
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

