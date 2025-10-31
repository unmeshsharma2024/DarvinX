import React from 'react';
import { ArrowRight } from 'lucide-react';
import vorxocLogo from '../../assets/VorxocLogo.svg';
import userImage from '../../assets/user.png';
import './VorxocHero.scss';

export function VorxocHero() {
  const handleStartTrial = () => {
    // Navigate to contact or trial signup page
    window.location.href = '/contact-us';
  };

  return (
    <section className="vorxoc-hero">
      <div className="vorxoc-hero__container">
        <div className="vorxoc-hero__content">
          {/* Left Side - Text Content */}
          <div className="vorxoc-hero__text">
            <div className="vorxoc-hero__logo-wrapper">
              <img src={vorxocLogo} alt="VORXOC Logo" className="vorxoc-hero__logo-img" />
            </div>
            
            <h1 className="vorxoc-hero__title">
              <span className="vorxoc-hero__title--black">Enterprise-Grade</span>
              <br />
              <span className="vorxoc-hero__title--green">Security Operations</span>
              <br />
              <span className="vorxoc-hero__title--blackSmall">Without the Enterprise Cost</span>
            </h1>

            <p className="vorxoc-hero__description">
              VorXOC delivers comprehensive cybersecurity monitoring, threat detection through our virtual Security Operations Center. Get 24/7 protection with expert analysts, AI-powered threat intelligence, and rapid response capabilities.
            </p>

            <button 
              className="vorxoc-hero__cta"
              onClick={handleStartTrial}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="vorxoc-hero__cta-icon" />
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="vorxoc-hero__illustration">
            <div className="vorxoc-hero__illustration-wrapper">
              <img 
                src={userImage} 
                alt="Security Analyst" 
                className="vorxoc-hero__illustration-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

