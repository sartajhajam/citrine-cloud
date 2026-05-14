'use client';

import { 
  Zap, 
  Layers, 
  Maximize, 
  TrendingDown, 
  Cpu, 
  Eye, 
  BrainCircuit, 
  Handshake 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function WhyCetrine() {
  const features = [
    {
      icon: Zap,
      title: 'AI + Automation First',
      description: 'Everything we build is designed to reduce human friction and increase operational speed.',
    },
    {
      icon: Layers,
      title: 'Infrastructure to Intelligence',
      description: 'We automate from servers and workflows to reporting and internal AI systems.',
    },
    {
      icon: Maximize,
      title: 'Enterprise Scalability',
      description: 'Built to support growth, complexity, and long-term transformation.',
    },
    {
      icon: TrendingDown,
      title: 'Measurable Impact',
      description: 'Less manual work. Faster execution. Better decisions. Lower operational costs.',
    },
    {
      icon: Cpu,
      title: 'Future-Ready Architecture',
      description: 'Your company becomes prepared for the AI-driven economy.',
    },
    {
      icon: Eye,
      title: 'Operational Visibility',
      description: 'Complete visibility into infrastructure, operations, workflows, and performance.',
    },
    {
      icon: BrainCircuit,
      title: 'Intelligent Decisions',
      description: 'Use AI and automation to support faster, smarter operational decisions.',
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnership',
      description: 'We design, deploy, and evolve your operating layer alongside your team.',
    },
  ];

  return (
    <section id="why-cetrine" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>WHY CETRINE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            We Don't Sell Tools. We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Operational Advantage.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300 group h-full"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="bg-slate-800 p-3 rounded-xl inline-block group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
