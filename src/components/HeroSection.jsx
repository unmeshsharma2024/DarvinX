import React from 'react';
import { Play, CheckCircle } from 'lucide-react';
import Globe3D from './Globe3D';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-blue-100 border-blue-200 text-blue-700">
              <div className="w-2 h-2 rounded-full mr-2 animate-pulse bg-blue-600"></div>
              Enterprise Cyber Defense
            </span>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl leading-tight text-slate-900">
                AI-Powered Security
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Your Team Can Trust
                </span>
              </h1>

              <p className="text-xl leading-relaxed max-w-2xl text-slate-600">
                Extend your security team's capacity with AI-driven threat detection 
                and response that investigates and triages every alert with exceptional 
                accuracy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-11 px-8 rounded-md inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105">
                Book a Demo
              </button>
              <button className="h-11 px-8 rounded-md inline-flex items-center justify-center border font-medium transition-all duration-300 hover:scale-105 border-slate-300 text-slate-700 hover:bg-slate-100">
                <Play className="w-4 h-4 mr-2" />
                How Darvin Works
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-600">Easy to Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-600">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-600">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Globe */}
          <div className="flex justify-center lg:justify-end">
            <Globe3D />
          </div>
        </div>
      </div>
    </section>
  );
}
