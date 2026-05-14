'use client';

import { ArrowRight, Cpu, Layers, BarChart, Workflow, Database, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const automations = [
    { name: 'Infrastructure and cloud operations', icon: CloudIcon },
    { name: 'Internal business processes', icon: Workflow },
    { name: 'Reports, analytics, and decision systems', icon: BarChart },
    { name: 'AI-powered internal assistants', icon: Cpu },
    { name: 'Cross-platform workflows', icon: Layers },
    { name: 'Customer operations', icon: UsersIcon },
    { name: 'Compliance and approvals', icon: ShieldCheck },
    { name: 'Data synchronization and integrity', icon: Database },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAgNGgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMiAyaDJ2MmgtMnYtMnptMC0yaDJ2MmgtMnYtMnptLTIgMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bS0yIDJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMiAyaDJ2MmgtMnYtMnptMC0yaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Intelligent Operations</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              The Future of Business Is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Fully Automated
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Cetrine builds AI-powered operational ecosystems that automate infrastructure, workflows, reporting, and internal business intelligence — transforming manual operations into intelligent, scalable, self-operating systems.
            </p>

            <div className="space-y-4 pt-2">
              <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                We don't just improve operations. We reinvent how companies operate.
              </p>
              <p className="text-slate-300">
                The organizations adopting AI and automation today will define the competitive landscape of tomorrow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-7 group shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] transition-all rounded-xl"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/20 rounded-full blur-[100px]"></div>
              
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" />
                    What We Automate
                  </h3>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="grid gap-3">
                  {automations.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        className="group flex items-center space-x-4 bg-slate-800/50 hover:bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
                      >
                        <div className="bg-indigo-500/10 p-2.5 rounded-lg group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-5 w-5 text-indigo-400" />
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                  
                  <div className="mt-2 text-center">
                    <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">
                      + Operational monitoring & Enterprise decision support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
