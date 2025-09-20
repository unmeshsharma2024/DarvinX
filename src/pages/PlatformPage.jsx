import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-white text-slate-900">
      {/* Enhanced Hero Section - Image 1 */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-transparent to-cyan-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-12">
            {/* Enhanced VorXOC Badge */}
            <div className="flex justify-center mb-8">
              <div className={`relative group cursor-pointer transition-all duration-500 hover:scale-110 ${
                false 
                  ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border border-slate-600/50' 
                  : 'bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-300'
              }`}>
                <div className={`absolute inset-0 rounded-full blur-xl opacity-30 transition-opacity duration-500 group-hover:opacity-50 ${
                  false ? 'bg-blue-500' : 'bg-blue-400'
                }`}></div>
                <div className={`relative px-8 py-4 rounded-full flex items-center space-x-3 ${
                  false ? 'shadow-2xl shadow-blue-500/20' : 'shadow-2xl shadow-blue-400/20'
                }`}>
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    false ? 'bg-blue-400' : 'bg-blue-600'
                  }`}></div>
                  <span className={`text-xl font-bold tracking-wide ${
                    false ? 'text-blue-300' : 'text-blue-700'
                  }`}>VorXOC</span>
                  <div className={`w-2 h-2 rounded-full ${
                    false ? 'bg-cyan-400' : 'bg-cyan-600'
                  }`}></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Main Headline */}
            <div className="space-y-8">
              <h1 className={`text-6xl lg:text-7xl leading-tight font-black transition-all duration-500 ${
                'text-slate-900'
              }`}>
                <span className="block mb-2">Enterprise-Grade</span>
                <span className="block mb-4">Security Operations</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-5xl lg:text-6xl block">
                  Without the Enterprise Cost
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <p className={`text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              VorXOC delivers <span className="font-semibold text-blue-400">comprehensive cybersecurity monitoring</span>, 
              <span className="font-semibold text-cyan-400"> threat detection</span>
              <span className="font-semibold text-blue-400"> </span> through our virtual Security Operations Center. 
              Get <span className="font-semibold text-cyan-400">24/7 protection</span> with expert analysts, 
              <span className="font-semibold text-blue-400"> AI-powered threat intelligence</span>, and rapid response capabilities.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
              <button className={`group h-14 px-10 rounded-xl inline-flex items-center justify-center font-bold text-lg shadow-2xl transition-all duration-500 hover:scale-110 ${
                false 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-blue-600/30' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-blue-600/25'
              }`}>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className={`group h-14 px-10 rounded-xl inline-flex items-center justify-center border-2 font-bold text-lg transition-all duration-500 hover:scale-110 ${
                false 
                  ? 'border-slate-500 text-slate-300 hover:border-blue-400 hover:text-blue-400 hover:bg-slate-800/50' 
                  : 'border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-slate-50'
              }`}>
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>

            {/* Enhanced Back to Home Link */}
            <div className="pt-12">
              <Link to="/" className={`inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                false 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}>
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Section - Image 1 */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-20">
            <div className="space-y-6">
              <h2 className={`text-5xl lg:text-6xl font-black transition-colors duration-300 ${
                'text-slate-900'
              }`}>
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">VorXOC</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {whyChooseFeatures.map((category, index) => (
                <div key={index} className="space-y-8 group">
                  <div className={`p-8 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
                    false 
                      ? 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50' 
                      : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl'
                  }`}>
                    <h3 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4 group-hover:translate-x-2 transition-transform duration-300">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            false ? 'bg-green-500/20' : 'bg-green-100'
                          }`}>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <span className={`text-lg transition-colors duration-300 ${
                            'text-slate-600'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Platform Features Section - Image 2 */}
      <section className={`py-24 relative transition-colors duration-300 ${
        false ? 'bg-slate-800/30' : 'bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-20">
            <div className="space-y-8">
              <span className={`inline-flex items-center rounded-full border-2 px-6 py-3 text-sm font-bold transition-colors duration-300 ${
                false 
                  ? 'bg-blue-600/20 border-blue-500/40 text-blue-300' 
                  : 'bg-blue-100 border-blue-300 text-blue-700'
              }`}>
                VorXOC Platform Features
              </span>
              <h2 className={`text-5xl lg:text-6xl font-black transition-colors duration-300 ${
                'text-slate-900'
              }`}>
                Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Virtual SOC</span> Experience
              </h2>
              <p className={`text-xl lg:text-2xl transition-colors duration-300 max-w-5xl mx-auto ${
                'text-slate-600'
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
                    className={`backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 ${
                      false 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70' 
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      false 
                        ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 text-blue-400' 
                        : 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`mb-6 text-lg transition-colors duration-300 ${
                      false ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {feature.description}
                    </p>
                    <a href="#" className={`inline-flex items-center font-bold text-lg transition-all duration-300 group-hover:translate-x-2 ${
                      false 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-700'
                    }`}>
                      Learn more
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="pt-12">
              <button className={`group h-16 px-12 rounded-xl inline-flex items-center justify-center font-bold text-xl shadow-2xl transition-all duration-500 hover:scale-110 ${
                false 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-blue-600/30' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-blue-600/25'
              }`}>
                Enter VorXOC Platform
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Comprehensive Security Section - Image 3 */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-20">
            <div className="space-y-8">
              <h2 className={`text-5xl lg:text-6xl font-black transition-colors duration-300 ${
                'text-slate-900'
              }`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Comprehensive</span> Security Operations
              </h2>
              <p className={`text-xl lg:text-2xl transition-colors duration-300 max-w-5xl mx-auto ${
                'text-slate-600'
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
                    className={`backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 ${
                      false 
                        ? 'bg-slate-800/50 border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/70' 
                        : 'bg-white border-slate-200 hover:border-green-300 hover:shadow-2xl'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      false 
                        ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20 text-green-400' 
                        : 'bg-gradient-to-br from-green-100 to-emerald-100 text-green-600'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-lg transition-colors duration-300 ${
                      false ? 'text-slate-400' : 'text-slate-600'
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

      {/* Enhanced CTA Section - Image 4 */}
      <section className={`py-24 relative transition-colors duration-300 ${
        false ? 'bg-slate-800/30' : 'bg-slate-50'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10">
            <h2 className={`text-5xl lg:text-6xl font-black transition-colors duration-300 ${
              'text-slate-900'
            }`}>
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Secure</span> Your Business?
            </h2>
            <p className={`text-xl lg:text-2xl transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              Join hundreds of companies that trust VorXOC to protect their digital assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className={`group h-16 px-12 rounded-xl inline-flex items-center justify-center font-bold text-xl shadow-2xl transition-all duration-500 hover:scale-110 ${
                false 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-blue-600/30' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-blue-600/25'
              }`}>
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className={`group h-16 px-12 rounded-xl inline-flex items-center justify-center border-2 font-bold text-xl transition-all duration-500 hover:scale-110 ${
                false 
                  ? 'border-slate-500 text-slate-300 hover:border-blue-400 hover:text-blue-400 hover:bg-slate-800/50' 
                  : 'border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-slate-50'
              }`}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className={`py-16 border-t-2 transition-colors duration-300 ${
        'border-slate-200 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
                false ? 'shadow-blue-500/25 hover:shadow-blue-500/40' : 'shadow-blue-500/20 hover:shadow-blue-500/35'
              }`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className={`text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 ${
                  false ? 'drop-shadow-lg' : 'drop-shadow-md'
                }`}>VorXOC</div>
                <div className="text-sm text-cyan-400 font-bold tracking-wider">VIRTUAL SOC</div>
              </div>
            </div>
            <div className={`text-base transition-colors duration-300 ${
              false ? 'text-slate-500' : 'text-slate-600'
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
