import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Play, Download, ExternalLink, Calendar, User, Clock, Shield, Brain, Lock, Eye } from 'lucide-react';

export default function ResourcesPage() {
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
      description: 'Practical resources to enhance your security posture',
      count: 15,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const featuredResources = [
    {
      icon: Shield,
      title: 'Zero Trust Architecture Implementation Guide',
      description: 'A comprehensive guide to implementing Zero Trust security principles in your organization.',
      type: 'Whitepaper',
      downloadCount: '2.3K',
      readTime: '15 min',
      date: 'March 2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection: Case Study',
      description: 'How Fortune 500 company reduced false positives by 85% using AI-driven security operations.',
      type: 'Case Study',
      downloadCount: '1.8K',
      readTime: '12 min',
      date: 'February 2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Advanced Persistent Threats: Detection & Response',
      description: 'Learn advanced techniques for identifying and responding to sophisticated cyber attacks.',
      type: 'Webinar',
      downloadCount: '3.1K',
      readTime: '45 min',
      date: 'January 2024',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const latestResources = [
    {
      icon: Eye,
      title: 'Security Operations Center Best Practices 2024',
      type: 'Whitepaper',
      date: 'April 15, 2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Incident Response Playbook Template',
      type: 'Template',
      date: 'April 10, 2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning in Cybersecurity',
      type: 'Webinar',
      date: 'April 5, 2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Cloud Security Assessment Framework',
      type: 'Tool',
      date: 'March 28, 2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'GDPR Compliance in Security Operations',
      type: 'Case Study',
      date: 'March 20, 2024',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Security Resources
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-600">
              Access our comprehensive library of cybersecurity insights, tools, and expertise to strengthen your organization's defense posture.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Resource Categories</h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-600">
              Explore our curated collection of security resources organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className={`w-full h-48 bg-gradient-to-br ${category.color} rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105`}>
                    <Icon className="w-16 h-16 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <div className="text-white/90 text-sm">{category.count} Resources</div>
                  </div>
                  <p className="text-center mt-4 text-slate-600">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Resources</h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-600">
              Our most popular and impactful cybersecurity resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className="rounded-2xl p-6 border transition-all duration-300 hover:scale-105 group bg-white border-slate-200 hover:border-slate-300 shadow-lg">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-blue-400 font-medium mb-3">{resource.type}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300 text-slate-900">
                    {resource.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-600">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4 text-slate-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloadCount}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs mb-4 text-slate-500">
                    {resource.date}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                    Download Resource
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
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Latest Resources</h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-600">
              Stay up-to-date with our newest security insights and tools
            </p>
          </div>

          <div className="space-y-6">
            {latestResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className="rounded-xl p-6 border transition-all duration-300 hover:scale-105 group cursor-pointer bg-white border-slate-200 hover:border-slate-300 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-400 font-medium mb-2">{resource.type}</div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300 text-slate-900">
                        {resource.title}
                      </h3>
                      <div className="text-sm text-slate-500">
                        {resource.date}
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 transition-colors duration-300 text-slate-400 group-hover:text-blue-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 text-slate-600">
            Subscribe to our newsletter for the latest cybersecurity insights and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white border-slate-300 text-slate-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-slate-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/company" className="hover:text-blue-400 transition-colors text-slate-600">
              About Our Company
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors text-slate-600">
              About Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}