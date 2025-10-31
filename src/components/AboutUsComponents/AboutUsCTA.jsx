import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AboutUsCTA.scss';

export function AboutUsCTA() {
  const navigate = useNavigate();

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
          <motion.p
            className="about-us-cta__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of companies that trust VorXOC to protect their digital assets.
          </motion.p>

          <motion.h2
            className="about-us-cta__title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to <span className="about-us-cta__title--secure">Secure</span> Your Business?
          </motion.h2>

          <motion.div
            className="about-us-cta__buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="about-us-cta__button about-us-cta__button--primary"
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span>Get Started Today</span>
              <ArrowRight className="about-us-cta__button-icon" />
            </motion.button>

            <motion.button
              className="about-us-cta__button about-us-cta__button--secondary"
              onClick={handleContactSales}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span>Contact Sales</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

