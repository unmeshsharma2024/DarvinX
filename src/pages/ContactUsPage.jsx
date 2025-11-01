import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import LogoIcon from '../assets/contactUsPageIcons/LOGO.svg';
import HeroLogo from '../assets/AboutUs_img/Asset 4 (1) 1.png';
import MailIcon from '../assets/contactUsPageIcons/Mail.svg';
import PhoneIcon from '../assets/contactUsPageIcons/Phone call.svg';
import ClockIcon from '../assets/contactUsPageIcons/Clock.svg';
import SendIcon from '../assets/contactUsPageIcons/Send.svg';
import ShieldIcon from '../assets/contactUsPageIcons/Shield.svg';
import UsersIcon from '../assets/contactUsPageIcons/Users.svg';
import ThumbsUpIcon from '../assets/contactUsPageIcons/Thumbs up.svg';
import MessageCircleIcon from '../assets/contactUsPageIcons/Message circle.svg';
import './ContactUsPage.scss';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      emailjs.init(emailConfig.publicKey);

      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.company || 'Not provided',
        message: formData.message,
        to_email: 'support@helxon.com',
      };

      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, something went wrong. Please try again or contact us directly at support@helxon.com'
      });

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const departments = [
    {
      icon: ShieldIcon,
      title: 'Security Operations',
      contact: 'Security@helxon.com'
    },
    {
      icon: UsersIcon,
      title: 'Sales & Partnerships',
      contact: 'Sales@helxon.com'
    },
    {
      icon: ThumbsUpIcon,
      title: 'Customer Success',
      contact: 'Contact@helxon.com'
    },
    {
      icon: MessageCircleIcon,
      title: 'General Support',
      contact: 'Support@helxon.com'
    }
  ];

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-us-page__hero">
        <div className="contact-us-page__hero-container">
          <motion.div
            className="contact-us-page__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="contact-us-page__hero-logo"
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, type: 'spring' }}
            >
              <img src={HeroLogo} alt="Helxon logo" />
            </motion.div>
            <motion.h1
              className="contact-us-page__hero-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="contact-us-page__hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Ready to transform your security posture? Let's discuss how Helxon can help protect your organization from cyber threats.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-us-page__main">
        <div className="contact-us-page__main-container">
          <div className="contact-us-page__grid">
            {/* Contact Form */}
            <motion.div
              className="contact-us-page__form-wrapper"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <h2 className="contact-us-page__section-title">Contact Us</h2>
              
              {formStatus.success && (
                <div className="contact-us-page__alert contact-us-page__alert--success">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              {formStatus.error && (
                <div className="contact-us-page__alert contact-us-page__alert--error">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-us-page__form">
                <motion.div
                  className="contact-us-page__form-field"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <label className="contact-us-page__form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-us-page__form-input"
                    placeholder=""
                  />
                </motion.div>

                <motion.div
                  className="contact-us-page__form-field"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <label className="contact-us-page__form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-us-page__form-input"
                    placeholder=""
                  />
                </motion.div>

                <motion.div
                  className="contact-us-page__form-field"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <label className="contact-us-page__form-label">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="contact-us-page__form-input"
                    placeholder=""
                  />
                </motion.div>

                <motion.div
                  className="contact-us-page__form-field"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <label className="contact-us-page__form-label">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="contact-us-page__form-textarea"
                    placeholder=""
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="contact-us-page__form-submit"
                  disabled={formStatus.loading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="contact-us-page__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <img src={SendIcon} alt="" className="contact-us-page__send-icon" />
                      <span>Send</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Illustration */}
            <motion.div
              className="contact-us-page__info-wrapper"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                className="contact-us-page__illustration"
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <DotLottieReact
                  src="https://lottie.host/ee01f240-c125-4a09-95cd-3ae2de372d7e/usds4LHpI7.lottie"
                  loop
                  autoplay
                />
              </motion.div>

              <div className="contact-us-page__info">
                <motion.div
                  className="contact-us-page__info-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <motion.div
                    className="contact-us-page__info-icon-wrapper"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.9 }}
                  >
                    <img src={MailIcon} alt="Email" />
                  </motion.div>
                  <div className="contact-us-page__info-content">
                    <h3 className="contact-us-page__info-title">Email Us</h3>
                    <p className="contact-us-page__info-detail">contact@Helxon.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-us-page__info-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                >
                  <motion.div
                    className="contact-us-page__info-icon-wrapper"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2.0 }}
                  >
                    <img src={PhoneIcon} alt="Phone" />
                  </motion.div>
                  <div className="contact-us-page__info-content">
                    <h3 className="contact-us-page__info-title">Call Us</h3>
                    <p className="contact-us-page__info-detail">+1(604) 499 5973</p>
                  </div>
                </motion.div>

                <motion.div
                  className="contact-us-page__info-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  <motion.div
                    className="contact-us-page__info-icon-wrapper"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2.1 }}
                  >
                    <img src={ClockIcon} alt="Clock" />
                  </motion.div>
                  <div className="contact-us-page__info-content">
                    <h3 className="contact-us-page__info-title">Business Hours</h3>
                    <p className="contact-us-page__info-detail">Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="contact-us-page__departments">
        <div className="contact-us-page__departments-container">
          <motion.div
            className="contact-us-page__departments-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
          >
            <h2 className="contact-us-page__departments-title">Get the Right Help</h2>
            <p className="contact-us-page__departments-subtitle">
              Connect with the team that can best assist you
            </p>
          </motion.div>

          <div className="contact-us-page__departments-grid">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                className="contact-us-page__department-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="contact-us-page__department-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 2.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img src={dept.icon} alt={dept.title} />
                </motion.div>
                <h3 className="contact-us-page__department-title">{dept.title}</h3>
                <a 
                  href={`mailto:${dept.contact}`}
                  className="contact-us-page__department-email"
                >
                  <img src={MailIcon} alt="" className="contact-us-page__department-email-icon" />
                  <span>{dept.contact}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
