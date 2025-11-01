import React from 'react';
import { motion } from 'motion/react';
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
          <motion.div
            className="vorxoc-hero__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="vorxoc-hero__logo-wrapper"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src={vorxocLogo} alt="VORXOC Logo" className="vorxoc-hero__logo-img" />
            </motion.div>
            
            <motion.h1
              className="vorxoc-hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="vorxoc-hero__title--black">Enterprise-Grade</span>
              <br />
              <span className="vorxoc-hero__title--green">Security Operations</span>
              <br />
              <span className="vorxoc-hero__title--blackSmall">Without the Enterprise Cost</span>
            </motion.h1>

            <motion.p
              className="vorxoc-hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              VorXOC delivers comprehensive cybersecurity monitoring, threat detection through our virtual Security Operations Center. Get 24/7 protection with expert analysts, AI-powered threat intelligence, and rapid response capabilities.
            </motion.p>

            <motion.button
              className="vorxoc-hero__cta"
              onClick={handleStartTrial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="vorxoc-hero__cta-icon" />
            </motion.button>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="vorxoc-hero__illustration"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="vorxoc-hero__illustration-wrapper">
              <img 
                src={userImage} 
                alt="Security Analyst" 
                className="vorxoc-hero__illustration-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

