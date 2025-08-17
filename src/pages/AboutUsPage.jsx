import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Target, Award, TrendingUp, Globe, Eye, Zap, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function AboutUsPage() {
  const { isDark } = useTheme();

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
              About Darvin
            </h1>
            <p className={`text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We don't just stop attacks — we stop fear. Cybersecurity isn't just about playing defense, 
              it's about giving organizations control over their data, their future, and the chaos of today's digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-all duration-300 ${
                    isDark 
                      ? 'bg-blue-600/20 group-hover:bg-blue-600/30' 
                      : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className={`text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>{stat.number}</div>
                  <div className={`transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>{stat.label}</div>
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
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                About Darvin
              </h2>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                We are a next-generation cybersecurity company specializing in Security Operations Center (SOC) solutions. 
                Our mission is to empower businesses with proactive, scalable, and intelligent defense systems that keep 
                them resilient against the most sophisticated threats.
              </p>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Headquartered in Vancouver, Canada, Darvin operates with a global perspective, building resilient strategies 
                that protect businesses, governments, and critical industries across multiple regions. By combining advanced 
                technology with deep security expertise, we deliver end-to-end protection that doesn't just mitigate risks, 
                it builds long-term trust and confidence.
              </p>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                With a relentless focus on real-time monitoring, rapid detection, and immediate response, we act as your 
                digital bodyguard, early warning system, and always-on shield. Our tailored solutions allow organizations 
                to focus on growth, while we safeguard what matters most — their people, their data, and their reputation.
              </p>
            </div>
            <div className="relative">
              <div className={`w-full h-80 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
              }`}>
                <div className="text-center">
                  <Shield className={`w-24 h-24 mx-auto mb-4 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <p className={`text-lg font-medium ${
                    isDark ? 'text-blue-300' : 'text-blue-700'
                  }`}>Your Digital Bodyguard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className={`w-full h-80 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-green-600/20 to-blue-600/20 border-green-500/30' 
                  : 'bg-gradient-to-br from-green-50 to-blue-50 border-green-200'
              }`}>
                <div className="text-center">
                  <Target className={`w-24 h-24 mx-auto mb-4 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`} />
                  <p className={`text-lg font-medium ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}>Removing Fear from the Digital World</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Our Mission
              </h2>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                At Darvin, our mission is to remove fear from the digital world by delivering a relentless Security 
                Operations Center (SOC) that protects people, data, and reputation.
              </p>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Our SOC is more than technology; it is a watchtower that never sleeps, detecting threats in real time, 
                responding before damage is done, and adapting as risks evolve.
              </p>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
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
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Our Vision
              </h2>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Our vision is to redefine cybersecurity as freedom.
              </p>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                We see a world where organizations operate boldly, without fear of disruption, where businesses innovate, 
                governments serve with confidence, and communities trust the systems they rely on.
              </p>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Darvin is building that future by turning SOC into an engine of trust — adaptive, predictive, 
                and invisible in its reliability.
              </p>
            </div>
            <div className="relative">
              <div className={`w-full h-80 rounded-2xl border flex items-center justify-center transition-colors duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30' 
                  : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'
              }`}>
                <div className="text-center">
                  <TrendingUp className={`w-24 h-24 mx-auto mb-4 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <p className={`text-lg font-medium ${
                    isDark ? 'text-purple-300' : 'text-purple-700'
                  }`}>Redefining Cybersecurity as Freedom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-800/50' : 'bg-slate-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>What We Deliver</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              The core capabilities that make Darvin your trusted security partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-all duration-300 ${
                    isDark 
                      ? 'bg-blue-600/20 group-hover:bg-blue-600/30' 
                      : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>{value.title}</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Ready to Remove Fear from Your Digital World?
          </h2>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Join organizations that trust Darvin to protect their people, data, and reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/" 
              className={`inline-flex items-center px-8 py-4 border rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-slate-600 hover:border-slate-500 text-white hover:bg-slate-800' 
                  : 'border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Learn More
            </Link>
          </div>
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
            <Link to="/contact" className={`hover:text-blue-400 transition-colors ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
