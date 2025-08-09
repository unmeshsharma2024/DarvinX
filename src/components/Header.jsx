import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Darvin</div>
              <div className="text-xs text-cyan-400 font-medium tracking-widest">CYBER DEFENSE</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/platform" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Platform
            </Link>
            <Link to="/solutions" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link to="/resources" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Resources
            </Link>
            <Link to="/company" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Company
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-blue-600/25">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
}
