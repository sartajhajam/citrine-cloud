'use client';

import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function About() {
  const oldModel = [
    'Manual coordination across teams and tools',
    'Disconnected systems and data silos',
    'Repetitive, low-leverage workflows',
    'Outdated operational models',
    'Delayed, intuition-based decision-making',
  ];

  const newModel = [
    'Intelligent, end-to-end automation',
    'AI-driven decision systems',
    'Autonomous, self-correcting workflows',
    'Connected, observable infrastructure',
    'Real-time operational visibility',
    'Scalable, modular digital ecosystems',
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>ABOUT CETRINE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Operational Intelligence</span>
          </h2>
          
          <div className="space-y-4 text-lg text-slate-400 leading-relaxed font-light text-left sm:text-center mt-8">
            <p>
              Cetrine Suporte e Services exists for one reason: to help companies evolve beyond manual operations.
            </p>
            <p>
              We combine AI, automation, infrastructure engineering, operational strategy, and intelligent systems to help organizations operate faster, smarter, and at scale.
            </p>
            <p>
              Our mission is to eliminate repetitive work, reduce operational friction, and create fully connected business ecosystems powered by automation and intelligence.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 flex justify-center z-20">
            <div className="bg-slate-900 border border-slate-700 rounded-full p-2 text-slate-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm overflow-hidden relative group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-orange-500/50"></div>
              <CardContent className="p-8 sm:p-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Old Operating Model</h3>
                  <p className="text-slate-400 text-sm">Tomorrow's leading companies will no longer rely on:</p>
                </div>
                
                <ul className="space-y-5">
                  {oldModel.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <XCircle className="w-5 h-5 text-red-400/80 mt-0.5 shrink-0" />
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-indigo-950/20 border-indigo-500/20 backdrop-blur-sm overflow-hidden relative group shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_50px_rgba(79,70,229,0.2)] transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
              <CardContent className="p-8 sm:p-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The New Operating Model</h3>
                  <p className="text-indigo-200/70 text-sm">They will operate through:</p>
                </div>
                
                <ul className="space-y-5">
                  {newModel.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                      <span className="text-slate-200 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-medium text-white">That future is already happening.</p>
          <p className="text-xl text-slate-400 mt-2 font-light">
            The only question is whether your company will lead it — or struggle to catch up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
