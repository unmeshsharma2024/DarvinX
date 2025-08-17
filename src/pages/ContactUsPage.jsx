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
      title: 'Email',
      details: ['hello@darvin.com', 'support@darvin.com'],
      description: 'We typically respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Available 24/7 for urgent security issues'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Security Blvd', 'San Francisco, CA 94105'],
      description: 'Visit us for in-person meetings'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM-6PM PST', 'Weekend: On-call support'],
      description: 'Emergency support available 24/7'
    }
  ];

  const departments = [
    {
      icon: Shield,
      title: 'Security Team',
      description: 'For security incidents and threat intelligence',
      contact: 'security@darvin.com'
    },
    {
      icon: Users,
      title: 'Sales Team',
      description: 'For pricing, demos, and partnership inquiries',
      contact: 'sales@darvin.com'
    },
    {
      icon: MessageCircle,
      title: 'Support Team',
      description: 'For technical support and product questions',
      contact: 'support@darvin.com'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your security posture? Let's discuss how Darvin can help 
              protect your organization.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-slate-300 mb-1">{detail}</p>
                          ))}
                          <p className="text-sm text-slate-400">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Get the Right Help</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Connect with the team that can best assist you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{dept.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{dept.description}</p>
                  <a 
                    href={`mailto:${dept.contact}`}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
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
            <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400">
              Quick answers to common questions
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to security incidents?",
                answer: "We provide immediate response for critical security incidents within 15 minutes, and standard inquiries are addressed within 2 hours during business hours."
              },
              {
                question: "Do you offer 24/7 support?",
                answer: "Yes, our security operations center operates 24/7/365 to ensure continuous protection and immediate response to any security threats."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We serve organizations across all industries, with particular expertise in healthcare, finance, technology, and government sectors."
              },
              {
                question: "Can you integrate with our existing security tools?",
                answer: "Absolutely! Darvin is designed to integrate seamlessly with your existing security infrastructure, including SIEMs, firewalls, and endpoint protection tools."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/company" className="text-slate-400 hover:text-white transition-colors">
              ← Back to Company
            </Link>
            <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
