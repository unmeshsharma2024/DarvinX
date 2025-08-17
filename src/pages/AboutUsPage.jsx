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
      title: 'Real-Time Monitoring',
      description: 'Our watchtower never sleeps, detecting threats in real time and responding before damage is done.'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'With relentless focus on rapid detection and immediate response, we act as your digital bodyguard.'
    },
    {
      icon: Heart,
      title: 'Building Trust',
      description: 'We deliver end-to-end protection that doesn\'t just mitigate risks, it builds long-term trust and confidence.'
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
              We don't just stop attacks — we stop fear. Cybersecurity isn't just about playing defense, 
              it's about giving organizations control over their data, their future, and the chaos of today's digital world.
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

      {/* About Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                About Darvin
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We are a next-generation cybersecurity company specializing in Security Operations Center (SOC) solutions. 
                Our mission is to empower businesses with proactive, scalable, and intelligent defense systems that keep 
                them resilient against the most sophisticated threats.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Headquartered in Vancouver, Canada, Darvin operates with a global perspective, building resilient strategies 
                that protect businesses, governments, and critical industries across multiple regions. By combining advanced 
                technology with deep security expertise, we deliver end-to-end protection that doesn't just mitigate risks, 
                it builds long-term trust and confidence.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With a relentless focus on real-time monitoring, rapid detection, and immediate response, we act as your 
                digital bodyguard, early warning system, and always-on shield. Our tailored solutions allow organizations 
                to focus on growth, while we safeguard what matters most — their people, their data, and their reputation.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-300 text-lg font-medium">Your Digital Bodyguard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl border border-green-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-24 h-24 text-green-400 mx-auto mb-4" />
                  <p className="text-green-300 text-lg font-medium">Removing Fear from the Digital World</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                At Darvin, our mission is to remove fear from the digital world by delivering a relentless Security 
                Operations Center (SOC) that protects people, data, and reputation.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our SOC is more than technology; it is a watchtower that never sleeps, detecting threats in real time, 
                responding before damage is done, and adapting as risks evolve.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We give organizations not just defense, but clarity, control, and the confidence to grow without hesitation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our Vision
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our vision is to redefine cybersecurity as freedom.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We see a world where organizations operate boldly, without fear of disruption, where businesses innovate, 
                governments serve with confidence, and communities trust the systems they rely on.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Darvin is building that future by turning SOC into an engine of trust — adaptive, predictive, 
                and invisible in its reliability.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-300 text-lg font-medium">Redefining Cybersecurity as Freedom</p>
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
            <h2 className="text-4xl font-bold mb-4 text-white">What We Deliver</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The core capabilities that make Darvin your trusted security partner
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
            Ready to Remove Fear from Your Digital World?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join organizations that trust Darvin to protect their people, data, and reputation.
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
