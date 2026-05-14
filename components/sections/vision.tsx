'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Vision() {
  const visionItems = [
    'Automate operations end to end',
    'Deploy internal AI systems across functions',
    'Eliminate repetitive workflows',
    'Make faster, evidence-based decisions',
    'Operate through fully connected infrastructure',
    'Scale through intelligence rather than complexity',
  ];

  return (
    <section id="vision" className="py-24 bg-slate-950 relative border-t border-slate-800 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border-[1px] border-indigo-500/20 rounded-full flex items-center justify-center"
        >
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border-[1px] border-indigo-500/30 rounded-full flex items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
              className="w-[400px] h-[400px] border-[1px] border-cyan-500/40 rounded-full flex items-center justify-center"
            >
              <div className="w-[200px] h-[200px] bg-indigo-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>OUR VISION</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            The Future Belongs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Automated Companies</span>
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed font-light mt-6 max-w-2xl mx-auto">
            The next generation of successful businesses will operate fundamentally differently. They will:
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto text-left"
        >
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {visionItems.map((item, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className="bg-indigo-500/10 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-lg leading-snug">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 inline-block bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-2xl px-8 py-6 backdrop-blur-sm"
        >
          <p className="text-2xl font-medium text-white">
            Cetrine is building the operational foundation for that future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
