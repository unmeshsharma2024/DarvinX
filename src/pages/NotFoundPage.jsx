import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="404 - Page Not Found | Helxon"
        description="The page you're looking for doesn't exist. Return to Helxon's homepage to explore our SOC-as-a-Service solutions."
        canonicalUrl="/404"
      />
      <div className="not-found-page">
        <div className="not-found-page__container">
          <motion.div
            className="not-found-page__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="not-found-page__404"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.div>
            <motion.h1
              className="not-found-page__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Page Not Found
            </motion.h1>
            <motion.p
              className="not-found-page__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>
            <motion.div
              className="not-found-page__buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={() => navigate('/')}
                className="not-found-page__button not-found-page__button--primary"
              >
                Go to Homepage
              </button>
              <button
                onClick={() => navigate(-1)}
                className="not-found-page__button not-found-page__button--secondary"
              >
                Go Back
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

