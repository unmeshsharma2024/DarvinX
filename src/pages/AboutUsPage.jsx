import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Target, Award, TrendingUp, Globe } from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Coverage', icon: Target },
    { number: '50+', label: 'Countries Served', icon: Globe },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We believe security should be proactive, not reactive. Every decision we make prioritizes protecting our clients.'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Technology serves people, not the other way around. We build solutions that enhance human capabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'The threat landscape evolves constantly. So do we, staying ahead with cutting-edge AI and machine learning.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We don\'t settle for good enough. Every feature, every update, every interaction must exceed expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Darvin
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're a team of cybersecurity experts, AI researchers, and software engineers 
              dedicated to making enterprise security accessible, intelligent, and human.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                To democratize enterprise-grade cybersecurity by making it accessible to organizations 
                of all sizes. We believe that every business deserves the same level of protection 
                that Fortune 500 companies enjoy.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Through the power of artificial intelligence and human expertise, we're building 
                a future where security teams can focus on what matters most: protecting their 
                organizations and enabling growth.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-300 text-lg font-medium">Protecting What Matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of organizations that trust Darvin to protect their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 border border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
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
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
