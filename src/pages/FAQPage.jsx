import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroLogo from '../assets/AboutUs_img/Asset 4 (1) 1.png';
import { ChevronDown } from 'lucide-react';
import { AboutUsCTA } from '../components/AboutUsComponents/AboutUsCTA';
import './FAQPage.scss';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How quickly can you implement Helxon for our organization?',
      answer: 'Implementation typically takes 24-48 hours for most organizations. Our team handles the setup process and provides comprehensive onboarding.',
    },
    {
      question: 'Do you provide 24/7 monitoring and support?',
      answer: 'Yes, our Security Operations Center operates 24/7/365 with certified security professionals monitoring your environment around the clock.',
    },
    {
      question: 'Can Helxon integrate with our existing security tools?',
      answer: 'Absolutely. Helxon integrates with 200+ security tools and platforms through APIs and standard protocols like SIEM, SOAR, and threat intelligence feeds.',
    },
    {
      question: 'What compliance standards do you support?',
      answer: 'We support major compliance frameworks including SOC 2, HIPAA, PCI DSS, GDPR, and others. Our platform helps maintain compliance through automated reporting and controls.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-page__hero">
        <div className="faq-page__hero-container">
          <motion.div
            className="faq-page__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="faq-page__hero-logo"
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, type: 'spring' }}
            >
              <img src={HeroLogo} alt="Helxon logo" />
            </motion.div>
            <motion.h1
              className="faq-page__hero-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              FAQ
            </motion.h1>
            <motion.p
              className="faq-page__hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Quick answers to common questions about Helxon's security solutions and services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-page__main">
        <div className="faq-page__main-container">
          <motion.div
            className="faq-page__faq-list"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-page__faq-item ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <motion.button
                  className="faq-page__faq-question"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-page__faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="faq-page__faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AboutUsCTA />
    </div>
  );
}

