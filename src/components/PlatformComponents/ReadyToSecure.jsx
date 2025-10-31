import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ReadyToSecure.scss';

export function ReadyToSecure() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleContactSales = () => {
    navigate('/contact-us');
  };

  return (
    <section className="ready-to-secure">
      <div className="ready-to-secure__container">
        <h2 className="ready-to-secure__title">
          Ready to <span className="ready-to-secure__title--green">Secure</span> Your Business?
        </h2>
        <p className="ready-to-secure__description">
          Join hundreds of companies that trust VorXOC to protect their digital assets.
        </p>

        <div className="ready-to-secure__buttons">
          <button
            className="ready-to-secure__button ready-to-secure__button--primary"
            onClick={handleGetStarted}
          >
            <span>Get Started Today</span>
            <ArrowRight className="ready-to-secure__button-icon" />
          </button>
          <button
            className="ready-to-secure__button ready-to-secure__button--secondary"
            onClick={handleContactSales}
          >
            <span>Contact Sales</span>
          </button>
        </div>
      </div>
    </section>
  );
}

