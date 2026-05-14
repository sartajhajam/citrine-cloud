'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function DigitalTransformation() {
  const benefits = [
    'Reduce operational inefficiencies',
    'Improve scalability and resilience',
    'Increase execution speed',
    'Gain real-time visibility across operations',
    'Build automation-first operating models',
    'Prepare for AI-driven growth',
  ];

  return (
    <section id="digital-transformation" className="py-24 bg-white relative border-t border-slate-200">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              <span>DIGITAL TRANSFORMATION</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Modernize Your Operations for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500">Future</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Modernizing your business is essential. Companies relying on old systems and manual tasks will find it hard to compete.
              </p>
              <p>
                Cetrine helps you update your entire operation using smart infrastructure and automation designed for your long-term success.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-2xl font-medium text-slate-900">We build businesses ready for the future.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-300 to-teal-300 opacity-0 group-hover:opacity-100 transition duration-1000 blur-xl"></div>
            <div className="relative">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">We Help Businesses</h3>
              <ul className="space-y-5">
                {benefits.map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-teal-100 p-2 rounded-lg shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-900 transition-colors text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
