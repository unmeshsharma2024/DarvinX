import React from 'react';
import { Workflow, Zap, DollarSign } from 'lucide-react';
import './IntegrationBenefits.scss';

export function IntegrationBenefits() {
  const benefits = [
    {
      icon: Workflow,
      title: 'Seamless Integration',
      description: 'Quick deployment with minimal disruption to existing workflows',
      color: '#33CC00',
    },
    {
      icon: Zap,
      title: 'Enhanced Capabilities',
      description: 'Amplify your security tools with expert analysts and AI response',
      color: '#007BFF',
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Maximize ROI on existing security investments',
      color: '#E94B8B',
    },
  ];

  return (
    <section className="integration-benefits">
      <div className="integration-benefits__container">
        <div className="integration-benefits__header">
          <h2 className="integration-benefits__title">Integration Benefits</h2>
          <p className="integration-benefits__subtitle">
            Leverage your existing security investments while enhancing capabilities with our SOC expertise
          </p>
        </div>

        <div className="integration-benefits__grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="integration-benefits__card">
                <div
                  className="integration-benefits__icon-wrapper"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon
                    className="integration-benefits__icon"
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="integration-benefits__card-title">{benefit.title}</h3>
                <p className="integration-benefits__card-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

