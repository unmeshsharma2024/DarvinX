import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Target, Award, TrendingUp, Globe, Eye, Zap, Heart } from 'lucide-react';

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
      title: 'Proactive Defense',
      description: 'We don\'t just stop attacks — we stop fear. Our SOC solutions provide proactive, scalable, and intelligent defense systems.'
    },
    {
      icon: Eye,
      title: 'Visibility & Transparency',
      description: 'Complete visibility into your security posture with real-time dashboards, detailed reporting, and transparent communication.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Rapid response times with automated threat detection and response capabilities that scale with your business.'
    },
    {
      icon: Heart,
      title: 'Partnership & Trust',
      description: 'We deliver end-to-end protection that doesn\'t just mitigate risks, it builds long-term trust and confidence.'
    }
  ];

  return (
    <div className="min-h-screen theme-transition bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About Darvin
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-600">
              We are cybersecurity professionals dedicated to removing fear from the digital world through intelligent, proactive defense solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-5xl font-bold mb-2 text-slate-900">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Vision</h2>
                <p className="text-xl leading-relaxed text-slate-600 mb-6">
                  At Darvin, we envision a digital world where businesses operate without fear. Where cyber threats are neutralized before they impact operations, where security teams are empowered with intelligent tools, and where digital transformation accelerates confidently.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  We believe cybersecurity should be proactive, not reactive. It should enable growth, not hinder it. Our mission is to make enterprise-grade security accessible, intelligent, and human-centered.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="text-center">
                  <Shield className="w-24 h-24 mx-auto mb-4 text-blue-600" />
                  <p className="text-lg font-medium text-blue-700">Your Digital Bodyguard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="text-center">
                  <Target className="w-24 h-24 mx-auto mb-4 text-green-600" />
                  <p className="text-lg font-medium text-green-700">Removing Fear from the Digital World</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
                <p className="text-xl leading-relaxed text-slate-600 mb-6">
                  To democratize enterprise-grade cybersecurity by providing intelligent, automated Security Operations Center (SOC) solutions that scale with businesses of all sizes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-slate-600">
                      <strong>Proactive Protection:</strong> Detect and neutralize threats before they impact your business
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-slate-600">
                      <strong>Intelligent Automation:</strong> Leverage AI and machine learning to reduce false positives and accelerate response times
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-slate-600">
                      <strong>Human Expertise:</strong> Combine advanced technology with certified security professionals for comprehensive protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Story</h2>
                <p className="text-xl leading-relaxed text-slate-600 mb-6">
                  Founded by cybersecurity veterans who witnessed firsthand the challenges organizations face in building and maintaining effective security operations, Darvin was born from a simple yet powerful insight: cybersecurity should empower, not paralyze.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 mb-6">
                  After years of seeing businesses struggle with complex security tools, overwhelming alerts, and the constant fear of the next attack, our founders set out to create something different. They envisioned a security platform that would be intelligent enough to filter noise, fast enough to stop threats, and human enough to understand business needs.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  Today, Darvin serves hundreds of organizations worldwide, from growing startups to Fortune 500 enterprises, all united by a common goal: operating fearlessly in the digital age.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 mx-auto mb-4 text-purple-600" />
                  <p className="text-lg font-medium text-purple-700">Redefining Cybersecurity as Freedom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">What We Deliver</h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-600">
              The core capabilities that make Darvin your trusted security partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
                  <p className="leading-relaxed text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Leadership Team</h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-600">
              Meet the cybersecurity experts leading Darvin's mission to remove fear from the digital world
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
              <Users className="w-12 h-12 text-white" />
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience from leading cybersecurity companies, 
              government agencies, and Fortune 500 enterprises. United by a shared vision of making cybersecurity 
              accessible and effective for all organizations.
            </p>
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
            <Link to="/contact" className="hover:text-blue-400 transition-colors text-slate-600">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}