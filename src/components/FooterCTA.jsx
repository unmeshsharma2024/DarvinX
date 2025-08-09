import React from 'react';
import { Shield } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Strengthen Your Cyber Defense?
          </h2>
          <p className="text-xl text-slate-400">
            Join hundreds of enterprises who trust Darvin to protect their most critical assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-11 px-8 rounded-md inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-600/25">
              Schedule a Demo
            </button>
            <button className="h-11 px-8 rounded-md inline-flex items-center justify-center border border-slate-600 text-slate-300 hover:bg-slate-800 font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Darvin</div>
                <div className="text-xs text-cyan-400 font-medium">CYBER DEFENSE</div>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              © 2024 Darvin Cyber Defense. All rights reserved.
              <br className="md:hidden" />
              <span className="hidden md:inline ml-4">Protecting enterprises worldwide since 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
