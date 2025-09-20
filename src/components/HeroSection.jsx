import React from 'react';
import { Play, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import homeHeader from './../Images/homeHeader.png';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -40 },
  show:  { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 40 },
  show:  { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function HeroSection() {
  // Gentle gradient that complements the artwork (sky → soft blue-grey → lilac)
  const G_FROM = '#EAF6FF';
  const G_VIA  = '#EFF3FA';
  const G_TO   = '#F1E9FF';

  return (
    <section
      className="relative overflow-hidden isolate"
      style={{
        backgroundImage: `
          linear-gradient(135deg, ${G_FROM} 0%, ${G_VIA} 46%, ${G_TO} 100%),
          radial-gradient(1100px 520px at 20% 12%, rgba(56,189,248,0.18), transparent 60%),
          radial-gradient(1000px 620px at 84% 64%, rgba(146,160,190,0.18), transparent 62%),
          radial-gradient(820px 520px at 92% 96%, rgba(196,181,253,0.16), transparent 70%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* LEFT: Image */}
          <motion.div className="relative flex justify-center lg:justify-start" variants={fadeFromLeft}>
            <img
              src={homeHeader}
              alt="Helxon Cyber Defense Platform"
              className="w-full max-w-xl h-auto rounded-3xl"
              style={{
                display: 'block',
                background: 'transparent',
                border: 'none',
                boxShadow: 'none'
              }}
            />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div className="space-y-8" variants={fadeFromRight}>
            {/* Badge */}
            <motion.span variants={fadeUp}
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-gradient-to-r from-sky-100 to-cyan-100 border-sky-200/60 text-sky-900 shadow-sm">
              <span className="w-2 h-2 rounded-full mr-2 animate-pulse bg-sky-600" />
              Enterprise Cyber Defense
            </motion.span>

            {/* Heading & Copy */}
            <div className="space-y-6">
              <motion.h1 variants={fadeUp}
                className="text-5xl lg:text-6xl leading-tight text-slate-900 tracking-tight">
                AI-Powered Security
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500">
                  Your Team Can Trust
                </span>
              </motion.h1>

              <motion.p variants={fadeUp}
                className="text-lg lg:text-xl leading-relaxed max-w-2xl text-slate-600">
                Scale your SecOps with autonomous investigation, triage, and response.
                Helxon analyzes every alert, correlates signals across your stack, and
                acts in seconds—so your team can focus on what matters.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="group h-12 px-8 rounded-xl inline-flex items-center justify-center font-medium text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:scale-[1.03] bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 hover:from-sky-700 hover:via-indigo-700 hover:to-cyan-600">
                <Shield className="w-5 h-5 mr-2 opacity-90" />
                Book a Demo
              </button>

              <button className="h-12 px-8 rounded-xl inline-flex items-center justify-center font-medium transition-all duration-300 hover:scale-[1.03] bg-white/70 backdrop-blur border border-slate-200 text-slate-800 hover:bg-white">
                <Play className="w-4 h-4 mr-2" />
                How Helxon Works
              </button>
            </motion.div>

            {/* Trust bullets */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              {[
                { label: 'Easy to Setup', Icon: CheckCircle },
                { label: '99.9% Uptime', Icon: CheckCircle },
                { label: '24/7 Support', Icon: CheckCircle }
              ].map(({ label, Icon }) => (
                <div key={label} className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-slate-600">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
