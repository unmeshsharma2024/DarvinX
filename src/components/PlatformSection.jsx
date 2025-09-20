import React from 'react';
import { Shield, Server, Network, Lock, Brain, Cloud } from 'lucide-react';

export default function PlatformSection() {

  const services = [
    {
      icon: Shield,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and analysis',
      link: 'Learn more'
    },
    {
      icon: Server,
      title: 'Endpoint Security',
      description: 'Comprehensive device protection',
      link: 'Learn more'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Perimeter and internal network defense',
      link: 'Learn more'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Enterprise data security and compliance',
      link: 'Learn more'
    },
    {
      icon: Brain,
      title: 'AI Security Operations',
      description: 'Automated security operations center',
      link: 'Learn more'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Multi-cloud security management',
      link: 'Learn more'
    },
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-6 bg-blue-100 border-blue-200 text-blue-700">
              AI-Powered Platform
            </span>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Complete Cyber Defense Platform
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-slate-600">
              Our integrated platform combines advanced AI, threat intelligence, and automated response to 
              provide comprehensive protection for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 group bg-white border-slate-200 hover:bg-slate-50 shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{service.title}</h3>
                  <p className="mb-4 text-slate-600">{service.description}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                    {service.link}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
