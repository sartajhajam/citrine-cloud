'use client';

import { Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-indigo-900/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="mb-8">
            <div className="bg-indigo-500/10 p-4 rounded-2xl border border-indigo-500/20 inline-block">
              <Cpu className="w-10 h-10 text-indigo-400" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building the Next Generation of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Intelligent Companies.</span>
          </h2>
          
          <p className="text-slate-400 text-lg font-light tracking-wide max-w-xl">
            AI  •  Automation  •  Operational Intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 border-t border-slate-800/80 pt-12 text-slate-400 text-sm">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <h4 className="text-white font-semibold mb-3 tracking-widest uppercase text-xs">Address</h4>
            <p>CORIMBA, ZONA 03</p>
            <p>(PRÓXIMO AO BFA)</p>
            <p>Município SAMBA</p>
            <p>Província: LUANDA</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
            <h4 className="text-white font-semibold mb-3 tracking-widest uppercase text-xs">Contact</h4>
            <p>Ph: +244 921 606 260</p>
            <a href="mailto:info@cetrinecs.com" className="hover:text-indigo-400 transition-colors">
              info@cetrinecs.com
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm font-medium tracking-widest">
            CETRINE © {currentYear}
          </div>
          
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
