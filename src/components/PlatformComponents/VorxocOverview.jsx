import React from 'react';
import { Check, ArrowRight, PlayCircle } from 'lucide-react';
import dashboardImage from '../../assets/VorxocPage.jpg';
import './VorxocOverview.scss';

export function VorxocOverview() {
  const handleWatchDemo = () => {
    // Navigate to demo video or open modal
    console.log('Watch Demo clicked');
  };

  const features = [
    {
      id: 1,
      title: 'Unified Security Monitoring',
      position: 'top-left',
    },
    {
      id: 2,
      title: 'Security Reports & Analytics',
      position: 'bottom-left',
    },
    {
      id: 3,
      title: 'Rapid Incident Response',
      position: 'bottom-center',
    },
    {
      id: 4,
      title: 'Real-time Alert Management',
      position: 'top-right',
    },
    {
      id: 5,
      title: 'Expert SOC Team',
      position: 'middle-right',
    },
  ];

  return (
    <section className="vorxoc-overview">
      <div className="vorxoc-overview__container">
        {/* Section Header */}
        <div className="vorxoc-overview__header">
          <h2 className="vorxoc-overview__title">What Is VorXOC?</h2>
          <p className="vorxoc-overview__description">
            VorXOC (Vortex Operations Center) is Helxon's proprietary Security Operations and Automation Platform that centralizes monitoring, detection, and response. It integrates seamlessly with your existing security tools to deliver complete visibility, automated workflows, and continuous protection across endpoints, networks, and cloud systems.
          </p>
        </div>

        {/* Dashboard and Features */}
        <div className="vorxoc-overview__main">
          <div className="vorxoc-overview__dashboard-wrapper">
            {/* Dashboard Image */}
            <div className="vorxoc-overview__dashboard">
              <img 
                src={dashboardImage} 
                alt="VORXOC Dashboard" 
                className="vorxoc-overview__dashboard-image"
              />
            </div>

            {/* Feature Connectors (Desktop only) */}
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`vorxoc-overview__feature vorxoc-overview__feature--${feature.position}`}
              >
                <div className="vorxoc-overview__feature-line" />
                <div className="vorxoc-overview__feature-content">
                  <Check className="vorxoc-overview__feature-icon" />
                  <span className="vorxoc-overview__feature-text">{feature.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features List (Mobile only) */}
          <div className="vorxoc-overview__features-list">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="vorxoc-overview__feature-mobile"
              >
                <Check className="vorxoc-overview__feature-icon" />
                <span className="vorxoc-overview__feature-text">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Demo CTA */}
        <div className="vorxoc-overview__cta-wrapper">
          <button 
            className="vorxoc-overview__cta"
            onClick={handleWatchDemo}
          >
            <PlayCircle className="vorxoc-overview__cta-icon" />
            <span>Watch Demo</span>
            <ArrowRight className="vorxoc-overview__cta-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

