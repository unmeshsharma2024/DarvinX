import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, BookOpen, Building, Shield, Target, Award, Globe } from 'lucide-react';

export default function CompanyPage() {

  const companyStats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Coverage', icon: Target },
    { number: '50+', label: 'Countries Served', icon: Globe },
  ];

  const childPages = [
    {
      title: 'About Us',
      description: 'Learn about our mission, values, and the team behind Darvin Cyber Defense.',
      icon: Building,
      link: '/about',
      color: 'from-blue-500 to-cyan-500',
      features: ['Company History', 'Our Mission', 'Core Values', 'Team Leadership']
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team for support, sales inquiries, or partnerships.',
      icon: Mail,
      link: '/contact',
      color: 'from-green-500 to-emerald-500',
      features: ['24/7 Support', 'Sales Team', 'Technical Support', 'Partnerships']
    },
    {
      title: 'Resources',
      description: 'Access our library of security insights, whitepapers, and tools.',
      icon: BookOpen,
      link: '/resources',
      color: 'from-purple-500 to-pink-500',
      features: ['Whitepapers', 'Case Studies', 'Webinars', 'Tools & Templates']
    }
  ];

  return (
    <div className="min-h-screen theme-transition bg-white text-slate-900">
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Company
            </h1>
            <p className={`text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              Discover Darvin Cyber Defense - where AI meets human expertise to create 
              the future of enterprise cybersecurity.
            </p>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className={`py-20 transition-colors duration-300 ${
        false ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className={`text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${
                    'text-slate-900'
                  }`}>{stat.number}</div>
                  <div className={`transition-colors duration-300 ${
                    false ? 'text-slate-400' : 'text-slate-600'
                  }`}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Child Pages Navigation */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              'text-slate-900'
            }`}>Explore Darvin</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              false ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Learn more about our company, get in touch, or access our resources
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {childPages.map((page, index) => {
              const Icon = page.icon;
              return (
                <Link key={index} to={page.link} className="group">
                  <div className={`rounded-2xl p-8 border transition-all h-full hover:transform hover:scale-105 ${
                    false 
                      ? 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50' 
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg'
                  }`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${page.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>
                      {page.title}
                    </h3>
                    <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                      false ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {page.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {page.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                          false ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                      Learn More →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className={`py-20 transition-colors duration-300 ${
        false ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                'text-slate-900'
              }`}>
                About Darvin Cyber Defense
              </h2>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                'text-slate-600'
              }`}>
                Founded in 2020, Darvin Cyber Defense emerged from a simple belief: 
                that enterprise-grade cybersecurity should be accessible to organizations 
                of all sizes, not just Fortune 500 companies.
              </p>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                'text-slate-600'
              }`}>
                Our team of cybersecurity experts, AI researchers, and software engineers 
                work together to create intelligent security solutions that adapt to 
                evolving threats while remaining human-centric and easy to use.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className={`transition-colors duration-300 ${
                    'text-slate-600'
                  }`}>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className={`transition-colors duration-300 ${
                    'text-slate-600'
                  }`}>SOC 2 Type II</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-80 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${
                false 
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
              }`}>
                <div className="text-center">
                  <Building className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-600 text-lg font-medium">Building the Future of Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            'text-slate-900'
          }`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            'text-slate-600'
          }`}>
            Join hundreds of organizations that trust Darvin to protect their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              to="/resources" 
              className={`inline-flex items-center px-8 py-4 border font-semibold rounded-lg transition-colors ${
                false 
                  ? 'border-slate-600 hover:border-slate-500 text-white' 
                  : 'border-slate-300 hover:border-slate-400 text-slate-700'
              }`}
            >
              View Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={`py-8 border-t transition-colors duration-300 ${
        false ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className={`hover:text-blue-400 transition-colors ${
              false ? 'text-slate-400' : 'text-slate-600'
            }`}>
              ← Back to Home
            </Link>
            <Link to="/about" className={`hover:text-blue-400 transition-colors ${
              false ? 'text-slate-400' : 'text-slate-600'
            }`}>
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
