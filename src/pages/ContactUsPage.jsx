import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, Users, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
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
      // Initialize EmailJS with your public key
      emailjs.init(emailConfig.publicKey);

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.company || 'Not provided',
        message: formData.message,
        to_email: 'support@helxon.com', // Your support email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);

      // Show success message
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Show error message
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, something went wrong. Please try again or contact us directly at support@helxon.com'
      });

      // Hide error message after 5 seconds
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@Helxon.com'],
      description: 'Get in touch via email for general inquiries and support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567'],
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM PST', 'Weekend: Emergency only'],
      description: 'When you can reach us for immediate assistance'
    }
  ];

  const departments = [
    {
      icon: Shield,
      title: 'Security Operations',
      description: 'Technical support, incident response, and platform issues',
      contact: 'security@Helxon.com'
    },
    {
      icon: Users,
      title: 'Sales & Partnerships',
      description: 'New business, partnerships, and enterprise solutions',
      contact: 'sales@Helxon.com'
    },
    {
      icon: MessageCircle,
      title: 'Customer Success',
      description: 'Account management, training, and optimization support',
      contact: 'contact@Helxon.com'
    },
    {
      icon: Send,
      title: 'General Support',
      description: 'Billing, account questions, and general inquiries',
      contact: 'support@Helxon.com'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you implement Helxon for our organization?',
      answer: 'Implementation typically takes 24-48 hours for most organizations. Our team handles the setup process and provides comprehensive onboarding.'
    },
    {
      question: 'Do you provide 24/7 monitoring and support?',
      answer: 'Yes, our Security Operations Center operates 24/7/365 with certified security professionals monitoring your environment around the clock.'
    },
    {
      question: 'Can Helxon integrate with our existing security tools?',
      answer: 'Absolutely. Helxon integrates with 200+ security tools and platforms through APIs and standard protocols like SIEM, SOAR, and threat intelligence feeds.'
    },
    {
      question: 'What compliance standards do you support?',
      answer: 'We support major compliance frameworks including SOC 2, HIPAA, PCI DSS, GDPR, and others. Our platform helps maintain compliance through automated reporting and controls.'
    }
  ];

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <div className="contact-us-page__hero">
        <div className="contact-us-page__hero-container">
          <div className="contact-us-page__hero-content">
            <h1 className="contact-us-page__hero-title">
              Contact Us
            </h1>
            <p className="contact-us-page__hero-subtitle">
              Ready to transform your security posture? Let's discuss how Helxon can help 
              protect your organization from cyber threats.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="contact-us-page__main">
        <div className="contact-us-page__main-container">
          <div className="contact-us-page__grid">
            {/* Contact Form */}
            <div className="contact-us-page__form-wrapper">
              <h2 className="contact-us-page__section-title">Send us a Message</h2>
              
              {/* Status Messages */}
              {formStatus.success && (
                <div className="contact-us-page__alert contact-us-page__alert--success">
                  <CheckCircle className="contact-us-page__alert-icon" />
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              {formStatus.error && (
                <div className="contact-us-page__alert contact-us-page__alert--error">
                  <XCircle className="contact-us-page__alert-icon" />
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-us-page__form">
                <div className="contact-us-page__form-row">
                  <div className="contact-us-page__form-field">
                    <label className="contact-us-page__form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-us-page__form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="contact-us-page__form-field">
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
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="contact-us-page__form-field">
                  <label className="contact-us-page__form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-us-page__form-input"
                    placeholder="Your company name"
                  />
                </div>
                <div className="contact-us-page__form-field">
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
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="contact-us-page__form-submit"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="contact-us-page__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="contact-us-page__form-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-us-page__info">
              <h2 className="contact-us-page__section-title">Contact Information</h2>
              <div className="contact-us-page__info-list">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="contact-us-page__info-item">
                      <div className="contact-us-page__info-icon-wrapper">
                        <Icon className="contact-us-page__info-icon" />
                      </div>
                      <div className="contact-us-page__info-content">
                        <h3 className="contact-us-page__info-title">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="contact-us-page__info-detail">{detail}</p>
                        ))}
                        <p className="contact-us-page__info-description">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="contact-us-page__departments">
        <div className="contact-us-page__departments-container">
          <div className="contact-us-page__departments-header">
            <h2 className="contact-us-page__departments-title">Get the Right Help</h2>
            <p className="contact-us-page__departments-subtitle">
              Connect with the team that can best assist you
            </p>
          </div>

          <div className="contact-us-page__departments-grid">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="contact-us-page__department-card">
                  <div className="contact-us-page__department-icon-wrapper">
                    <Icon className="contact-us-page__department-icon" />
                  </div>
                  <h3 className="contact-us-page__department-title">{dept.title}</h3>
                  <p className="contact-us-page__department-description">{dept.description}</p>
                  <a 
                    href={`mailto:${dept.contact}`}
                    className="contact-us-page__department-email"
                  >
                    <Mail className="contact-us-page__department-email-icon" />
                    {dept.contact}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="contact-us-page__faq">
        <div className="contact-us-page__faq-container">
          <div className="contact-us-page__faq-header">
            <h2 className="contact-us-page__faq-title">Frequently Asked Questions</h2>
            <p className="contact-us-page__faq-subtitle">
              Quick answers to common questions
            </p>
          </div>

          <div className="contact-us-page__faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="contact-us-page__faq-item">
                <h3 className="contact-us-page__faq-question">{faq.question}</h3>
                <p className="contact-us-page__faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="contact-us-page__footer">
        <div className="contact-us-page__footer-container">
          <div className="contact-us-page__footer-nav">
            <Link to="/" className="contact-us-page__footer-link">
              ← Back to Home
            </Link>
            <Link to="/" className="contact-us-page__footer-link">
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

