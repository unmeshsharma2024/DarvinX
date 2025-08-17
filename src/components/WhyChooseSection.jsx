import React from 'react';
import { Users, TrendingUp, Shield } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Users,
      title: 'Expert AI Security Operations Team',
      description: '24/7 monitoring by azure Sentinel and triage by advanced AI custom models'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 12 months through reduced false positives and faster response times'
    },
    {
      icon: Shield,
      title: 'Enterprise Grade',
      description: 'SOC 2 Type II certified with enterprise-grade security, compliance, and data protection'
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-green-600/20 border-green-500/30 text-green-300 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Industry Leading
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Security Leaders Choose Darvin
              </h2>
              <p className="text-xl text-slate-400">
                Built for enterprise security teams who need reliable, scalable, and intelligent 
                cyber defense solutions that integrate seamlessly with existing infrastructure.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Dashboard */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Security Operations Dashboard
              </h3>
              <p className="text-slate-400 text-center mb-6">
                Real-time threat monitoring and response
              </p>

              <div className="space-y-4">
                {/* <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-green-300 font-medium">Threats Blocked Today</span>
                    <span className="text-2xl font-bold text-green-400">1,253</span>
                  </div>
                </div> */}

                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300 font-medium">Active Monitoring</span>
                    <span className="text-xl font-bold text-blue-400">24/7</span>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">Response Time</span>
                    <span className="text-xl font-bold text-white">{'< 1 min'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
