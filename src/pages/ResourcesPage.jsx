import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Play, Download, ExternalLink, Calendar, User, Clock, Shield, Brain, Lock, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ResourcesPage() {
  const { isDark } = useTheme();

  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Whitepapers',
      description: 'In-depth research and analysis on cybersecurity trends',
      count: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world examples of how organizations improved their security',
      count: 8,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Play,
      title: 'Webinars',
      description: 'Live and recorded sessions with security experts',
      count: 24,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Download,
      title: 'Tools & Templates',
      description: 'Free security assessment tools and policy templates',
      count: 15,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const featuredResources = [
    {
      type: 'Whitepaper',
      title: 'The State of AI-Powered Security in 2024',
      description: 'Comprehensive analysis of how artificial intelligence is transforming cybersecurity and what organizations need to know.',
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2024',
      readTime: '15 min read',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Case Study',
      title: 'How TechCorp Reduced Security Incidents by 87%',
      description: 'A detailed look at how a Fortune 500 company implemented Darvin and achieved remarkable security improvements.',
      author: 'Security Team',
      date: 'February 28, 2024',
      readTime: '8 min read',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'Webinar',
      title: 'Zero Trust Architecture: Implementation Guide',
      description: 'Step-by-step guide to implementing zero trust security principles in your organization.',
      author: 'Michael Rodriguez',
      date: 'February 20, 2024',
      readTime: '45 min',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const latestResources = [
    {
      title: 'Threat Intelligence Report Q1 2024',
      type: 'Report',
      date: 'March 1, 2024',
      icon: Eye,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'GDPR Compliance Checklist for Security Teams',
      type: 'Template',
      date: 'February 25, 2024',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Cloud Security Best Practices',
      type: 'Guide',
      date: 'February 18, 2024',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Incident Response Playbook',
      type: 'Template',
      date: 'February 10, 2024',
      icon: Clock,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <div className={`min-h-screen theme-transition ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className={`pt-32 pb-20 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-white via-blue-50/50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Security Resources
            </h1>
            <p className={`text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Access our comprehensive library of cybersecurity knowledge, tools, and insights 
              to strengthen your organization's security posture.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Resource Categories</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Explore different types of content to find what you need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className={`w-full h-48 bg-gradient-to-br ${category.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105`}>
                    <Icon className="w-16 h-16 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{category.description}</p>
                    <div className="text-white/80 font-medium">{category.count} resources</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Featured Resources</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Our most popular and impactful content
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 group ${
                  isDark 
                    ? 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg'
                }`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-blue-400 font-medium mb-3">{resource.type}</div>
                  <h3 className={`text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {resource.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>{resource.description}</p>
                  <div className={`flex items-center justify-between text-sm mb-4 transition-colors duration-300 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {resource.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {resource.readTime}
                    </span>
                  </div>
                  <div className={`text-xs mb-4 transition-colors duration-300 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}>{resource.date}</div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Latest Resources */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Latest Resources</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Stay updated with our newest content
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latestResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 group cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-400 font-medium mb-2">{resource.type}</div>
                      <h3 className={`text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {resource.title}
                      </h3>
                      <div className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-slate-500' : 'text-slate-500'
                      }`}>{resource.date}</div>
                    </div>
                    <ExternalLink className={`w-5 h-5 transition-colors duration-300 ${
                      isDark ? 'text-slate-500 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-500'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Stay Updated
          </h2>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Get notified when we publish new resources, whitepapers, and security insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 border rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-700/50 border-slate-600 text-white' 
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className={`text-sm mt-4 transition-colors duration-300 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className={`py-8 border-t transition-colors duration-300 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/company" className={`hover:text-blue-400 transition-colors ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              ← Back to Company
            </Link>
            <Link to="/about" className={`hover:text-blue-400 transition-colors ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              About Us →
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
