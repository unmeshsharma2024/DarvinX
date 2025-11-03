import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import { Modal } from './ui/Modal';
import { Toast } from './ui/Toast';
import SendIcon from '../assets/contactUsPageIcons/Send.svg';
import './GetStartedModal.scss';

export function GetStartedModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    userCount: '',
    siemStatus: '',
    siemStatusOther: ''
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
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        title: formData.company,
        message: `
Get Started Request:

Contact Information:
- First Name: ${formData.firstName}
- Last Name: ${formData.lastName}
- Email: ${formData.email}
- Company: ${formData.company}
- Country: ${formData.country}
- Phone: ${formData.phone}

Additional Information:
- User/Asset Count: ${formData.userCount || 'Not provided'}
- Current Security Infrastructure: ${formData.siemStatus === 'other' ? formData.siemStatusOther : formData.siemStatus || 'Not provided'}
        `,
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
        message: 'Thank you! Your request has been submitted successfully. We\'ll get back to you soon.'
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        userCount: '',
        siemStatus: '',
        siemStatusOther: ''
      });

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
        onClose();
      }, 3000);

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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCloseToast = () => {
    setFormStatus({ loading: false, success: false, error: false, message: '' });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="get-started-modal">
          <motion.div
            className="get-started-modal__header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="get-started-modal__title">Get Started with Helxon</h2>
            <p className="get-started-modal__subtitle">
              Fill out the form below and our team will reach out to you shortly
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="get-started-modal__form">
          {/* Name Fields */}
          <div className="get-started-modal__form-row">
            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label className="get-started-modal__form-label">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="get-started-modal__form-input"
                placeholder="John"
              />
            </motion.div>

            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label className="get-started-modal__form-label">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="get-started-modal__form-input"
                placeholder="Doe"
              />
            </motion.div>
          </div>

          {/* Email and Company */}
          <div className="get-started-modal__form-row">
            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label className="get-started-modal__form-label">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="get-started-modal__form-input"
                placeholder="john@company.com"
              />
            </motion.div>

            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label className="get-started-modal__form-label">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="get-started-modal__form-input"
                placeholder="Acme Inc"
              />
            </motion.div>
          </div>

          {/* Country and Phone */}
          <div className="get-started-modal__form-row">
            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="get-started-modal__form-label">
                Country *
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="get-started-modal__form-input"
                placeholder="United States"
              />
            </motion.div>

            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="get-started-modal__form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="get-started-modal__form-input"
                placeholder="+1 (123) 456-7890"
              />
            </motion.div>
          </div>

          {/* Optional Fields Divider */}
          <motion.div
            className="get-started-modal__divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span>Optional Information</span>
          </motion.div>

          {/* User Count */}
          <motion.div
            className="get-started-modal__form-field"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label className="get-started-modal__form-label">
              How many users or assets do you have?
            </label>
            <div className="get-started-modal__radio-group">
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="userCount"
                  value="Less than 50 users/assets"
                  checked={formData.userCount === 'Less than 50 users/assets'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Less than 50 Users/Assets</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="userCount"
                  value="50+ Users/Assets"
                  checked={formData.userCount === '50+ Users/Assets'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">50+ Users/Assets</span>
              </label>
            </div>
          </motion.div>

          {/* SIEM Status */}
          <motion.div
            className="get-started-modal__form-field"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label className="get-started-modal__form-label">
              What is your current security infrastructure?
            </label>
            <div className="get-started-modal__radio-group get-started-modal__radio-group--vertical">
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="Starting Fresh – No existing security tools"
                  checked={formData.siemStatus === 'Starting Fresh – No existing security tools'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Starting Fresh – No existing security tools</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="Have SIEM – Need expert monitoring team"
                  checked={formData.siemStatus === 'Have SIEM – Need expert monitoring team'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Have SIEM – Need expert monitoring team</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="Have EDR – Need centralized management"
                  checked={formData.siemStatus === 'Have EDR – Need centralized management'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Have EDR – Need centralized management</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="Have both SIEM & EDR – Need 24/7 support"
                  checked={formData.siemStatus === 'Have both SIEM & EDR – Need 24/7 support'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Have both SIEM & EDR – Need 24/7 support</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="Have internal team – Need additional support"
                  checked={formData.siemStatus === 'Have internal team – Need additional support'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Have internal team – Need additional support</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="Switching providers – Looking for better service"
                  checked={formData.siemStatus === 'Switching providers – Looking for better service'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Switching providers – Looking for better service</span>
              </label>
              <label className="get-started-modal__radio-label">
                <input
                  type="radio"
                  name="siemStatus"
                  value="other"
                  checked={formData.siemStatus === 'other'}
                  onChange={handleChange}
                  className="get-started-modal__radio-input"
                />
                <span className="get-started-modal__radio-text">Other</span>
              </label>
            </div>
            {formData.siemStatus === 'other' && (
              <motion.input
                type="text"
                name="siemStatusOther"
                value={formData.siemStatusOther}
                onChange={handleChange}
                className="get-started-modal__form-input get-started-modal__form-input--other"
                placeholder="Please specify..."
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="get-started-modal__form-submit"
            disabled={formStatus.loading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formStatus.loading ? (
              <>
                <div className="get-started-modal__spinner" />
                Submitting...
              </>
            ) : (
              <>
                <img src={SendIcon} alt="" className="get-started-modal__send-icon" />
                <span>Submit Request</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </Modal>

    {/* Toast Notifications */}
    <Toast
      message={formStatus.message}
      type={formStatus.success ? 'success' : 'error'}
      isVisible={formStatus.success || formStatus.error}
      onClose={handleCloseToast}
      duration={formStatus.success ? 3000 : 5000}
    />
  </>
  );
}