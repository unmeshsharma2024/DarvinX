import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import vorxocLogo from '../../assets/vorxocWhite.svg';
import './VorxocHero.scss';

export function VorxocHero() {
  const handleStartTrial = () => {
    // Navigate to contact or trial signup page
    window.location.href = '/contact-us';
  };

  return (
    <section className="vorxoc-hero">
      {/* Hero Section with Green Background */}
      <div className="vorxoc-hero__hero">
        <div className="vorxoc-hero__hero-container">
          <motion.div
            className="vorxoc-hero__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="vorxoc-hero__hero-logo"
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, type: 'spring' }}
            >
              <img src={vorxocLogo} alt="VORXOC Logo" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="vorxoc-hero__content">
        <div className="vorxoc-hero__container">
          <div className="vorxoc-hero__content-grid">
            <motion.div
              className="vorxoc-hero__text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.h1
                className="vorxoc-hero__title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <span className="vorxoc-hero__title--green">VORXOC</span>
                <br />
                <span className="vorxoc-hero__title--black">Enterprise-Grade</span>
                <br />
                <span className="vorxoc-hero__title--green">Security Operations</span>
                <br />
                <span className="vorxoc-hero__title--black">Without the Enterprise Cost</span>
              </motion.h1>

              <motion.p
                className="vorxoc-hero__description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                VorXOC delivers comprehensive cybersecurity monitoring, threat detection through our virtual Security Operations Center. Get 24/7 protection with expert analysts, AI-powered threat intelligence, and rapid response capabilities.
              </motion.p>

              <motion.button
                className="vorxoc-hero__cta"
                onClick={handleStartTrial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="vorxoc-hero__cta-icon" />
              </motion.button>
            </motion.div>

            <motion.div
              className="vorxoc-hero__illustration"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <DotLottieReact
                src="https://lottie.host/22e07541-6ebb-4b24-964a-c0d26c33d66a/p9f7ttqsyd.lottie"
                loop
                autoplay
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

