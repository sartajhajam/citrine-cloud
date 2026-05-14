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
    <section id="contact" className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>GET IN TOUCH</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Work Smarter?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="text-orange-500 w-6 h-6" />
              Companies that fail to automate will face:
            </h3>
            <ul className="space-y-4">
              {risks.map((risk, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0"></div>
                  <span className="text-slate-700 text-lg leading-relaxed">{risk}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 h-full flex flex-col justify-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(29,78,216,0.05)]">
              <p className="text-2xl text-slate-900 font-medium leading-relaxed">
                Organizations that use smart automation <span className="text-blue-700">scale faster</span>, <span className="text-teal-600">learn faster</span>, and operate at a cost their competitors cannot match.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-8 mt-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Build the future with Cetrine.
          </h3>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span>Automate Infrastructure.</span>
            <span className="hidden sm:inline text-teal-500">•</span>
            <span>Automate Operations.</span>
            <span className="hidden sm:inline text-teal-500">•</span>
            <span>Automate Intelligence.</span>
          </p>
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500">
            Build smarter. Scale faster. Lead the future.
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg px-10 py-8 rounded-2xl group shadow-[0_0_40px_rgba(29,78,216,0.3)] hover:shadow-[0_0_60px_rgba(29,78,216,0.5)] transition-all"
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
