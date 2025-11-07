import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AboutUsCTA.scss';

export function AboutUsCTA() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFAQPage = location.pathname === '/faq';

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleContactSales = () => {
    navigate('/contact-us');
  };

  return (
    <section className="about-us-cta">
      <div className="about-us-cta__container">
        <div className="about-us-cta__content">

          <motion.h2
            className={`about-us-cta__title ${isFAQPage ? 'about-us-cta__title--faq' : ''}`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isFAQPage ? 'For further information please contact the Helxon team ' : 'Ready to Secure Your Business?'}
          </motion.h2>

          {!isFAQPage && <motion.p
            className="about-us-cta__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of companies that trust VorXOC to protect their digital assets.
          </motion.p>}

          <motion.div
            className="about-us-cta__buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {!isFAQPage && <motion.button
              className="about-us-cta__button about-us-cta__button--primary"
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span>Get Started Today</span>
              <ArrowRight className="about-us-cta__button-icon" />
            </motion.button>}

            <motion.button
              className="about-us-cta__button about-us-cta__button--secondary"
              onClick={handleContactSales}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span>Contact {isFAQPage ? 'Support' : 'Sales'}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

