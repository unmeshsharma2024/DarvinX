import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Shield, 
  Brain, 
  Users, 
  Zap, 
  BarChart3, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Clock,
  Target,
  Globe,
  Lock,
  Eye
} from 'lucide-react';

export default function PlatformPage() {
  const { isDark } = useTheme();

  const whyChooseFeatures = [
    {
      category: "Cost-Effective Solution",
      features: [
        "90% less expensive than building in-house SOC",
        "No infrastructure investment required",
        "Flexible pricing based on your needs"
      ]
    },
    {
      category: "Enterprise-Grade Security",
      features: [
        "24/7/365 monitoring and response",
        "Certified security professionals",
        "Advanced threat intelligence feeds"
      ]
    }
  ];

  const platformFeatures = [
    {
      icon: Shield,
      title: "Real-time Alert Management",
      description: "Receive, prioritize, and track security alerts with full context and recommended actions."
    },
    {
      icon: MessageCircle,
      title: "Direct SOC Communication",
      description: "Chat directly with security analysts for immediate support and incident collaboration."
    },
    {
      icon: TrendingUp,
      title: "Live Security Monitoring",
      description: "View real-time dashboards showing your security posture and threat landscape."
    },
    {
      icon: Users,
      title: "Expert Analyst Team",
      description: "24/7 access to certified security professionals with specialized expertise."
    },
    {
      icon: BarChart3,
      title: "Security Reports & Analytics",
      description: "Comprehensive reporting on security events, trends, and performance metrics."
    },
    {
      icon: Shield,
      title: "Incident Response Coordination",
      description: "Coordinated response to security incidents with clear action plans and tracking."
    }
  ];

  const comprehensiveFeatures = [
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of your digital infrastructure with real-time threat detection and response."
    },
    {
      icon: Brain,
      title: "AI-Powered Threat Intelligence",
      description: "Advanced machine learning algorithms analyze patterns and predict potential security threats before they occur."
    },
    {
      icon: Users,
      title: "Expert SOC Team",
      description: "Certified security analysts provide human expertise and strategic guidance for complex security incidents."
    },
    {
      icon: Zap,
      title: "Rapid Incident Response",
      description: "Average response time of under 3 minutes with automated containment and remediation capabilities."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Detailed security reports, compliance documentation, and executive dashboards for complete visibility."
    },
    {
      icon: MessageCircle,
      title: "Direct SOC Communication",
      description: "Real-time chat with security analysts, incident updates, and strategic security consultations."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      {/* Header */}
      {/* <div className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
              isDark 
                ? 'text-slate-300 hover:bg-slate-800' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}>
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center ${
                isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-lg shadow-blue-500/20'
              }`}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className={`text-sm font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>VorXOC</div>
                <div className="text-xs text-cyan-400 font-medium">Virtual SOC</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Hero Section - Image 1 */}
      <section className="pt-20 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-600/20 border-blue-500/30 text-blue-300' 
                : 'bg-blue-100 border-blue-200 text-blue-700'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                isDark ? 'bg-blue-400' : 'bg-blue-600'
              }`}></div>
              VorXOC Platform
            </span>
            
            <h1 className={`text-5xl lg:text-6xl leading-tight transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Enterprise-Grade Security Operations
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Without the Enterprise Cost
              </span>
            </h1>
            
            <p className={`text-xl leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              VorXOC delivers comprehensive cybersecurity monitoring, threat detection, and incident response 
              through our virtual Security Operations Center. Get 24/7 protection with expert analysts, 
              AI-powered threat intelligence, and rapid response capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`h-12 px-8 rounded-lg inline-flex items-center justify-center font-medium shadow-lg transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
              }`}>
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className={`h-12 px-8 rounded-lg inline-flex items-center justify-center border font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}>
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Image 1 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div>
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Why Choose VorXOC?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {whyChooseFeatures.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h3 className={`text-2xl font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section - Image 2 */}
      <section className={`py-20 relative transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div>
              <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
                isDark 
                  ? 'bg-blue-600/20 border-blue-500/30 text-blue-300' 
                  : 'bg-blue-100 border-blue-200 text-blue-700'
              }`}>
                VorXOC Platform Features
              </span>
              <h2 className={`text-4xl font-bold mt-6 mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Complete Virtual SOC Experience
              </h2>
              <p className={`text-xl transition-colors duration-300 max-w-4xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Access your security operations center from anywhere. Monitor alerts, interact with analysts, 
                and maintain complete visibility of your security infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      isDark 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {feature.description}
                    </p>
                    <a href="#" className={`inline-flex items-center font-medium transition-colors duration-300 ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-700'
                    }`}>
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="pt-8">
              <button className={`h-12 px-8 rounded-lg inline-flex items-center justify-center font-medium shadow-lg transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
              }`}>
                Enter VorXOC Platform
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Security Section - Image 3 */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            <div>
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Comprehensive Security Operations
              </h2>
              <p className={`text-xl transition-colors duration-300 max-w-4xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                VorXOC combines cutting-edge technology with human expertise to deliver unparalleled security operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 group hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      isDark 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Image 4 */}
      <section className={`py-20 relative transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className={`text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Secure Your Business?
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Join hundreds of companies that trust VorXOC to protect their digital assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`h-12 px-8 rounded-lg inline-flex items-center justify-center font-medium shadow-lg transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
              }`}>
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className={`h-12 px-8 rounded-lg inline-flex items-center justify-center border font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t transition-colors duration-300 ${
        isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className={`w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center ${
                isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-lg shadow-blue-500/20'
              }`}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className={`text-sm font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>VorXOC</div>
                <div className="text-xs text-cyan-400 font-medium">Virtual SOC</div>
              </div>
            </div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-slate-500' : 'text-slate-600'
            }`}>
              © 2024 VorXOC. All rights reserved.
              <br className="md:hidden" />
              <span className="hidden md:inline ml-4">Protecting businesses worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
