import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Building2,
  Briefcase,
  GraduationCap,
  Heart,
  Landmark,
  Factory,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  Brain,
  Network,
  Lock,
  Globe,
  Settings,
  Cloud,
  Zap,
} from 'lucide-react';

export default function SolutionsPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: Building2,
      name: "Enterprise & Fortune 500",
      description: "Comprehensive security operations for large-scale enterprises with complex infrastructure",
      challenges: [
        "Managing security across multiple locations and subsidiaries",
        "Compliance with various regulatory frameworks",
        "Protecting intellectual property and trade secrets",
        "Coordinating incident response across global teams",
      ],
      solutions: [
        "24/7 global SOC coverage with regional expertise",
        "Multi-tenant security monitoring and reporting",
        "Executive-level security dashboards and briefings",
        "Compliance automation and audit support",
      ],
      caseStudy: {
        company: "Global Manufacturing Corp",
        challenge: "Needed 24/7 security monitoring across 50+ locations worldwide with compliance requirements",
        solution: "Deployed VorXOC with regional SOC coverage and automated compliance reporting",
        results: [
          "99.9% threat detection accuracy",
          "60% reduction in security incidents",
          "100% compliance audit success rate",
          "40% cost savings vs in-house SOC",
        ],
      },
    },
    {
      icon: Briefcase,
      name: "Financial Services",
      description: "Specialized security operations for banks, credit unions, and financial institutions",
      challenges: [
        "Meeting strict regulatory compliance (PCI DSS, SOX, etc.)",
        "Protecting customer financial data and transactions",
        "Preventing fraud and financial crimes",
        "Maintaining business continuity during incidents",
      ],
      solutions: [
        "Financial services compliance expertise",
        "Real-time fraud detection and prevention",
        "Secure transaction monitoring",
        "Regulatory reporting automation",
      ],
      caseStudy: {
        company: "Regional Credit Union",
        challenge: "Required PCI DSS compliance and advanced fraud detection for online banking platform",
        solution: "Implemented VorXOC with specialized financial services monitoring and compliance tools",
        results: [
          "100% PCI DSS compliance maintained",
          "85% reduction in fraudulent transactions",
          "2-minute average incident response time",
          "Zero data breaches in 24 months",
        ],
      },
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "HIPAA-compliant security operations protecting patient data and medical systems",
      challenges: [
        "HIPAA compliance and patient data protection",
        "Securing medical devices and IoT equipment",
        "Protecting against ransomware targeting healthcare",
        "Ensuring system availability for patient care",
      ],
      solutions: [
        "HIPAA-compliant monitoring and incident response",
        "Medical device security monitoring",
        "Ransomware protection and recovery planning",
        "Healthcare-specific threat intelligence",
      ],
      caseStudy: {
        company: "Regional Hospital Network",
        challenge: "Needed HIPAA-compliant security monitoring for 5 hospitals and 20 clinics",
        solution: "Deployed VorXOC with healthcare-specific monitoring and HIPAA compliance automation",
        results: [
          "100% HIPAA compliance maintained",
          "Zero patient data breaches",
          "50% faster incident response",
          "99.99% system uptime maintained",
        ],
      },
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Protecting educational institutions, student data, and research assets",
      challenges: [
        "Protecting student and faculty personal information",
        "Securing research data and intellectual property",
        "Managing diverse IT environments and BYOD",
        "Budget constraints for security investments",
      ],
      solutions: [
        "FERPA-compliant monitoring and reporting",
        "Research data protection and monitoring",
        "Student device and network security",
        "Cost-effective security operations",
      ],
      caseStudy: {
        company: "State University System",
        challenge: "Required comprehensive security for 12 campuses with 100,000+ students and faculty",
        solution: "Implemented VorXOC with education-focused monitoring and centralized management",
        results: [
          "90% reduction in security incidents",
          "FERPA compliance maintained",
          "70% cost savings vs individual campus SOCs",
          "Unified security across all campuses",
        ],
      },
    },
    {
      icon: Landmark,
      name: "Government",
      description: "Security operations meeting government standards and protecting citizen data",
      challenges: [
        "Meeting government security standards (FedRAMP, FISMA)",
        "Protecting citizen data and government systems",
        "Coordinating with law enforcement and agencies",
        "Managing classified and sensitive information",
      ],
      solutions: [
        "Government-grade security clearances and processes",
        "FedRAMP and FISMA compliance support",
        "Classified information handling capabilities",
        "Inter-agency coordination and reporting",
      ],
      caseStudy: {
        company: "State Government Agency",
        challenge: "Required FedRAMP-compliant security monitoring for citizen services platform",
        solution: "Deployed VorXOC with government-grade security and compliance automation",
        results: [
          "FedRAMP authorization achieved",
          "Zero security incidents in 18 months",
          "50% improvement in compliance reporting",
          "24/7 government-grade monitoring",
        ],
      },
    },
    {
      icon: Factory,
      name: "Manufacturing & Industrial",
      description: "Protecting operational technology (OT) and industrial control systems",
      challenges: [
        "Securing industrial control systems (ICS/SCADA)",
        "Protecting intellectual property and trade secrets",
        "Maintaining operational continuity",
        "Bridging IT/OT security gaps",
      ],
      solutions: [
        "OT/ICS security monitoring and protection",
        "Industrial threat intelligence",
        "IT/OT convergence security",
        "Supply chain security monitoring",
      ],
      caseStudy: {
        company: "Automotive Manufacturer",
        challenge: "Needed integrated IT/OT security monitoring across global manufacturing facilities",
        solution: "Implemented VorXOC with specialized OT monitoring and industrial threat intelligence",
        results: [
          "Zero production downtime from security incidents",
          "95% improvement in OT visibility",
          "Integrated IT/OT security operations",
          "Supply chain threat detection enabled",
        ],
      },
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Protecting customer data, payment systems, and online platforms",
      challenges: [
        "PCI DSS compliance for payment processing",
        "Protecting customer personal and payment data",
        "Securing e-commerce platforms and APIs",
        "Managing seasonal traffic and security scaling",
      ],
      solutions: [
        "PCI DSS compliance monitoring and reporting",
        "E-commerce platform security monitoring",
        "Customer data protection and privacy",
        "Scalable security operations for peak seasons",
      ],
      caseStudy: {
        company: "National Retail Chain",
        challenge: "Required PCI DSS compliance and security monitoring for 500+ stores and online platform",
        solution: "Deployed VorXOC with retail-specific monitoring and automated compliance reporting",
        results: [
          "PCI DSS compliance maintained across all locations",
          "75% reduction in payment fraud incidents",
          "Seamless security scaling during peak seasons",
          "Unified security across physical and digital channels",
        ],
      },
    },
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Managed SOC Services",
      description:
        "Complete security operations center as a service with 24/7 monitoring, Microsoft Cloud integration, and comprehensive security tools integration",
      features: [
        "24/7/365 security monitoring and analysis",
        "Certified security analysts and experts",
        "Microsoft Cloud Monitoring and Remediation (Azure, Office 365, Microsoft 365)",
        "Advanced threat detection and response",
        "Custom security playbooks and procedures",
        "Executive reporting and dashboards",
        "Integration with any existing security tools",
        "Multi-vendor security platform support",
      ],
      benefits: [
        "90% cost reduction vs building in-house SOC",
        "Access to top-tier security talent",
        "Faster threat detection and response",
        "Scalable security operations",
        "Seamless Microsoft Cloud protection",
        "Unified security across all platforms",
      ],
    },
    {
      icon: Brain,
      title: "Threat Intelligence",
      description: "Comprehensive threat intelligence services with AI-powered analysis and insights",
      features: [
        "Global threat intelligence feeds",
        "Industry-specific threat analysis",
        "Predictive threat modeling",
        "Threat hunting and investigation",
        "Intelligence-driven security operations",
      ],
      benefits: [
        "Proactive threat prevention",
        "Industry-specific threat insights",
        "Improved security decision making",
        "Enhanced threat hunting capabilities",
      ],
    },
    {
      icon: Network,
      title: "Network Security Monitoring",
      description: "Comprehensive network security monitoring and analysis services",
      features: [
        "Real-time network traffic analysis",
        "Intrusion detection and prevention",
        "Network anomaly detection",
        "Bandwidth and performance monitoring",
        "Network forensics and investigation",
      ],
      benefits: [
        "Complete network visibility",
        "Rapid threat detection",
        "Network performance optimization",
        "Compliance support",
      ],
    },
    {
      icon: Lock,
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for various regulatory frameworks",
      features: [
        "Multi-framework compliance support",
        "Automated compliance monitoring",
        "Real-time compliance dashboards",
        "Audit preparation and support",
        "Compliance gap analysis",
      ],
      benefits: [
        "Simplified compliance management",
        "Reduced audit preparation time",
        "Continuous compliance monitoring",
        "Risk reduction",
      ],
    },
  ];

  const securityTools = [
    // Firewalls
    {
      name: "Palo Alto Networks",
      category: "Firewall",
      logo: "/images/logos/palo-alto.svg",
      description: "Next-generation firewall with advanced threat prevention",
    },
    {
      name: "Fortinet FortiGate",
      category: "Firewall",
      logo: "/images/logos/fortinet.svg",
      description: "High-performance network security platform",
    },
    {
      name: "Cisco ASA",
      category: "Firewall",
      logo: "/images/logos/cisco.svg",
      description: "Adaptive security appliance for network protection",
    },
    {
      name: "SonicWall",
      category: "Firewall",
      logo: "/images/logos/sonicwall.svg",
      description: "Network security and data protection solutions",
    },

    // Endpoint Protection
    {
      name: "CrowdStrike Falcon",
      category: "Endpoint",
      logo: "/images/logos/crowdstrike.svg",
      description: "Cloud-native endpoint protection platform",
    },
    {
      name: "Microsoft Defender",
      category: "Endpoint",
      logo: "/images/logos/microsoft.svg",
      description: "Enterprise endpoint detection and response",
    },
    {
      name: "SentinelOne",
      category: "Endpoint",
      logo: "/images/logos/sentinelone.svg",
      description: "AI-powered endpoint security platform",
    },
    {
      name: "Carbon Black",
      category: "Endpoint",
      logo: "/images/logos/carbon-black.svg",
      description: "Next-generation antivirus and EDR solution",
    },

    // WAF (Web Application Firewall)
    {
      name: "Cloudflare WAF",
      category: "WAF",
      logo: "/images/logos/cloudflare.svg",
      description: "Cloud-based web application firewall",
    },
    {
      name: "AWS WAF",
      category: "WAF",
      logo: "/images/logos/aws.svg",
      description: "Web application firewall for AWS resources",
    },
    {
      name: "F5 BIG-IP ASM",
      category: "WAF",
      logo: "/images/logos/f5.svg",
      description: "Application security manager and WAF",
    },
    {
      name: "Imperva WAF",
      category: "WAF",
      logo: "/images/logos/imperva.svg",
      description: "Web application and API protection",
    },

    // IPS/IDS
    {
      name: "Snort",
      category: "IPS/IDS",
      logo: "/images/logos/snort.svg",
      description: "Open-source intrusion detection system",
    },
    {
      name: "Suricata",
      category: "IPS/IDS",
      logo: "/images/logos/suricata.svg",
      description: "High-performance network IDS/IPS",
    },
    {
      name: "Trend Micro TippingPoint",
      category: "IPS/IDS",
      logo: "/images/logos/trend-micro.svg",
      description: "Network intrusion prevention system",
    },
    {
      name: "McAfee Network Security Platform",
      category: "IPS/IDS",
      logo: "/images/logos/mcafee.svg",
      description: "Network intrusion prevention and detection",
    },
  ];

  const toolCategories = ["Firewall", "Endpoint", "WAF", "IPS/IDS"];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className={`relative overflow-hidden py-20 transition-colors duration-300 ${
        false 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-5xl font-bold mb-6 leading-tight transition-colors duration-300 ${
              'text-slate-900'
            }`}>
              Security Solutions
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Tailored for Your Industry
              </span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              VorXOC provides specialized security operations center services designed for the unique challenges and
              compliance requirements of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              'text-slate-900'
            }`}>Industry-Specific Solutions</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              Each industry faces unique security challenges. Our solutions are tailored to meet specific regulatory
              requirements and threat landscapes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Industry Selector */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer transition-all duration-300 rounded-lg border p-4 ${
                        activeIndustry === index
                          ? false 
                            ? "bg-blue-600/20 border-blue-500/50 ring-2 ring-blue-400" 
                            : "bg-blue-100 border-blue-300 ring-2 ring-blue-400"
                          : false
                            ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70" 
                            : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                      onClick={() => setActiveIndustry(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg transition-colors duration-300 ${
                          activeIndustry === index 
                            ? "bg-blue-500/20" 
                            : false ? "bg-slate-700/50" : "bg-slate-100"
                        }`}>
                          <IconComponent
                            className={`w-5 h-5 transition-colors duration-300 ${
                              activeIndustry === index ? "text-blue-400" : false ? "text-slate-400" : "text-slate-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className={`font-semibold transition-colors duration-300 ${
                            activeIndustry === index ? "text-white" : false ? "text-slate-300" : "text-slate-700"
                          }`}>
                            {industry.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industry Details */}
            <div className="lg:col-span-2">
              <div className={`rounded-lg border p-6 transition-colors duration-300 ${
                false 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    false ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    {React.createElement(industries[activeIndustry].icon, {
                      className: "w-6 h-6 text-blue-400",
                    })}
                  </div>
                  <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                    'text-slate-900'
                  }`}>{industries[activeIndustry].name}</h2>
                </div>
                <p className={`text-lg mb-6 transition-colors duration-300 ${
                  'text-slate-600'
                }`}>{industries[activeIndustry].description}</p>
                
                <div className="space-y-8">
                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                        'text-slate-900'
                      }`}>Key Challenges</h4>
                      <ul className="space-y-3">
                        {industries[activeIndustry].challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            <span className={`transition-colors duration-300 ${
                              'text-slate-600'
                            }`}>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                        'text-slate-900'
                      }`}>Our Solutions</h4>
                      <ul className="space-y-3">
                        {industries[activeIndustry].solutions.map((solution, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className={`transition-colors duration-300 ${
                              'text-slate-600'
                            }`}>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className={`rounded-lg p-6 transition-colors duration-300 ${
                    'bg-slate-50'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>
                      Case Study: {industries[activeIndustry].caseStudy.company}
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-blue-400 mb-2">Challenge</h5>
                        <p className={`transition-colors duration-300 ${
                          'text-slate-600'
                        }`}>{industries[activeIndustry].caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-400 mb-2">Solution</h5>
                        <p className={`transition-colors duration-300 ${
                          'text-slate-600'
                        }`}>{industries[activeIndustry].caseStudy.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-400 mb-2">Results</h5>
                        <div className="grid md:grid-cols-2 gap-3">
                          {industries[activeIndustry].caseStudy.results.map((result, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4 text-green-400" />
                              <span className={`text-sm transition-colors duration-300 ${
                                'text-slate-600'
                              }`}>{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Solutions */}
      <section className={`py-20 transition-colors duration-300 ${
        false ? 'bg-slate-800/30' : 'bg-slate-100/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              'text-slate-900'
            }`}>Complete Security Solutions</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              Comprehensive security services designed to protect your organization from evolving cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className={`rounded-lg border transition-all group hover:scale-105 ${
                    false 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${
                        false ? 'bg-slate-700/50 group-hover:bg-slate-700/70' : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}>
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        'text-slate-900'
                      }`}>{solution.title}</h3>
                    </div>
                    <p className={`transition-colors duration-300 ${
                      'text-slate-600'
                    }`}>{solution.description}</p>
                  </div>
                  <div className="px-6 pb-6 space-y-6">
                    <div>
                      <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                        'text-slate-900'
                      }`}>Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className={`text-sm transition-colors duration-300 ${
                              'text-slate-600'
                            }`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                        'text-slate-900'
                      }`}>Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className={`text-sm transition-colors duration-300 ${
                              'text-slate-600'
                            }`}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Tools Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              'text-slate-900'
            }`}>Security Tools Integration</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              VorXOC seamlessly integrates with your existing security infrastructure. We support all major security
              platforms and tools.
            </p>
          </div>

          {/* Microsoft Cloud Integration Highlight */}
          <div className="mb-16">
            <div className={`rounded-lg border transition-colors duration-300 ${
              false 
                ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30' 
                : 'bg-gradient-to-r from-blue-100/50 to-cyan-100/50 border-blue-300'
            }`}>
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-lg transition-colors duration-300 ${
                    false ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    <Cloud className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    'text-slate-900'
                  }`}>Microsoft Cloud Monitoring & Remediation</h3>
                  <p className={`text-lg mb-6 transition-colors duration-300 ${
                    'text-slate-600'
                  }`}>
                    Specialized monitoring and automated remediation for Microsoft Azure, Office 365, and Microsoft 365
                    environments
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                          'text-slate-900'
                        }`}>Azure Security Center</h4>
                        <p className={`text-sm transition-colors duration-300 ${
                          'text-slate-600'
                        }`}>Complete Azure infrastructure monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                          'text-slate-900'
                        }`}>Office 365 Security</h4>
                        <p className={`text-sm transition-colors duration-300 ${
                          'text-slate-600'
                        }`}>Email security and compliance monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                          'text-slate-900'
                        }`}>Microsoft 365 Defender</h4>
                        <p className={`text-sm transition-colors duration-300 ${
                          'text-slate-600'
                        }`}>
                          Integrated threat protection across Microsoft ecosystem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Tools by Category */}
          {toolCategories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
                'text-slate-900'
              }`}>{category} Solutions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityTools
                  .filter((tool) => tool.category === category)
                  .map((tool, index) => (
                    <div
                      key={index}
                      className={`rounded-lg border transition-all group hover:scale-105 ${
                        false 
                          ? 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70' 
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="p-6 text-center">
                        <div className="mb-4">
                          <img
                            src={tool.logo || "/placeholder.svg"}
                            alt={`${tool.name} logo`}
                            className="h-12 mx-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            onError={(e) => {
                              e.target.src = "/placeholder.svg";
                              e.target.className = "h-12 mx-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity";
                            }}
                          />
                        </div>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                          'text-slate-900'
                        }`}>{tool.name}</h4>
                        <p className={`text-sm transition-colors duration-300 ${
                          'text-slate-600'
                        }`}>{tool.description}</p>
                        <div className="mt-4">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                            false 
                              ? 'bg-slate-700/50 text-slate-300 border border-slate-600' 
                              : 'bg-slate-200 text-slate-700 border border-slate-300'
                          }`}>{tool.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Integration Benefits */}
          <div className="mt-16">
            <div className={`rounded-lg border transition-colors duration-300 ${
              false ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    'text-slate-900'
                  }`}>Integration Benefits</h3>
                  <p className={`transition-colors duration-300 ${
                    'text-slate-600'
                  }`}>
                    Leverage your existing security investments while enhancing capabilities with our SOC expertise
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>Seamless Integration</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      'text-slate-600'
                    }`}>
                      Quick deployment with minimal disruption to existing workflows
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>Enhanced Capabilities</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      'text-slate-600'
                    }`}>
                      Amplify your security tools with expert analysis and response
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      'text-slate-900'
                    }`}>Cost Optimization</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      'text-slate-600'
                    }`}>Maximize ROI on existing security investments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VorXOC */}
      <section className={`py-20 transition-colors duration-300 ${
        false ? 'bg-slate-800/30' : 'bg-slate-100/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              'text-slate-900'
            }`}>Why Choose VorXOC Solutions?</h2>
            <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
              'text-slate-600'
            }`}>
              Our solutions are built on years of experience and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`rounded-lg border text-center transition-colors duration-300 ${
              false ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  'text-slate-900'
                }`}>Expert Team</h3>
                <p className={`transition-colors duration-300 ${
                  'text-slate-600'
                }`}>
                  Certified security professionals with deep industry expertise and years of experience in security
                  operations.
                </p>
              </div>
            </div>

            <div className={`rounded-lg border text-center transition-colors duration-300 ${
              false ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  'text-slate-900'
                }`}>24/7 Coverage</h3>
                <p className={`transition-colors duration-300 ${
                  'text-slate-600'
                }`}>
                  Round-the-clock monitoring and response capabilities ensuring your organization is always protected.
                </p>
              </div>
            </div>

            <div className={`rounded-lg border text-center transition-colors duration-300 ${
              false ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200'
            }`}>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  'text-slate-900'
                }`}>Proven Results</h3>
                <p className={`transition-colors duration-300 ${
                  'text-slate-600'
                }`}>
                  Track record of success with measurable improvements in security posture and incident response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        false 
          ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20' 
          : 'bg-gradient-to-r from-blue-100/50 to-cyan-100/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            'text-slate-900'
          }`}>Ready to Secure Your Organization?</h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto transition-colors duration-300 ${
            'text-slate-600'
          }`}>
            Contact us today to discuss your specific security requirements and learn how VorXOC can protect your
            organization with our Managed SOC Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className={`border text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
              false
                ? 'border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent'
            }`}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="text-center py-8">
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
  );
}
