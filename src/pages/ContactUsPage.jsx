import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, Users } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
      details: ['hello@darvin.com', 'support@darvin.com'],
      description: 'Get in touch via email for general inquiries and support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Cyber Street', 'Security City, SC 12345'],
      description: 'Our headquarters in the heart of the tech district'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM EST', 'Weekend: Emergency only'],
      description: 'When you can reach us for immediate assistance'
    }
  ];

  const departments = [
    {
      icon: Shield,
      title: 'Security Operations',
      description: 'Technical support, incident response, and platform issues',
      contact: 'soc@darvin.com'
    },
    {
      icon: Users,
      title: 'Sales & Partnerships',
      description: 'New business, partnerships, and enterprise solutions',
      contact: 'sales@darvin.com'
    },
    {
      icon: MessageCircle,
      title: 'Customer Success',
      description: 'Account management, training, and optimization support',
      contact: 'success@darvin.com'
    },
    {
      icon: Send,
      title: 'General Support',
      description: 'Billing, account questions, and general inquiries',
      contact: 'support@darvin.com'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you implement Darvin for our organization?',
      answer: 'Implementation typically takes 24-48 hours for most organizations. Our team handles the setup process and provides comprehensive onboarding.'
    },
    {
      question: 'Do you provide 24/7 monitoring and support?',
      answer: 'Yes, our Security Operations Center operates 24/7/365 with certified security professionals monitoring your environment around the clock.'
    },
    {
      question: 'Can Darvin integrate with our existing security tools?',
      answer: 'Absolutely. Darvin integrates with 200+ security tools and platforms through APIs and standard protocols like SIEM, SOAR, and threat intelligence feeds.'
    },
    {
      question: 'What compliance standards do you support?',
      answer: 'We support major compliance frameworks including SOC 2, HIPAA, PCI DSS, GDPR, and others. Our platform helps maintain compliance through automated reporting and controls.'
    }
  ];

  return (
    <div className="min-h-screen theme-transition bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-slate-600">
              Ready to transform your security posture? Let's discuss how Darvin can help 
              protect your organization from cyber threats.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-slate-900">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="mb-1 text-slate-700">{detail}</p>
                        ))}
                        <p className="text-sm text-slate-500">{info.description}</p>
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
      <div className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Get the Right Help</h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-600">
              Connect with the team that can best assist you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-blue-100">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{dept.title}</h3>
                  <p className="mb-4 leading-relaxed text-slate-600">{dept.description}</p>
                  <a 
                    href={`mailto:${dept.contact}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    {dept.contact}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{faq.question}</h3>
                <p className="leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/company" className="hover:text-blue-400 transition-colors text-slate-600">
              ← Back to Company
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors text-slate-600">
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}