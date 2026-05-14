'use client';

import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Contact() {
  const risks = [
    'Rising operational costs',
    'Slower execution and time-to-market',
    'Fragmented systems and data',
    'Inefficient, overburdened teams',
    'Sustained competitive disadvantage',
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>CALL TO ACTION</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
            The Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Will Not Wait.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-400 w-6 h-6" />
              Companies that fail to automate will face:
            </h3>
            <ul className="space-y-4">
              {risks.map((risk, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0"></div>
                  <span className="text-slate-300 text-lg leading-relaxed">{risk}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 h-full flex flex-col justify-center"
          >
            <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(79,70,229,0.1)]">
              <p className="text-2xl text-white font-medium leading-relaxed">
                Meanwhile, AI-powered organizations will <span className="text-indigo-400">scale faster</span>, <span className="text-cyan-400">learn faster</span>, and operate at a cost structure their competitors cannot match.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-8 mt-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Build the future with Cetrine.
          </h3>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span>Automate Infrastructure.</span>
            <span className="hidden sm:inline text-indigo-500">•</span>
            <span>Automate Operations.</span>
            <span className="hidden sm:inline text-indigo-500">•</span>
            <span>Automate Intelligence.</span>
          </p>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Build smarter. Scale faster. Lead the future.
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-10 py-8 rounded-2xl group shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all"
              onClick={() => window.location.href = 'mailto:info@cetrinecs.com'}
            >
              Schedule a Strategy Call
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
