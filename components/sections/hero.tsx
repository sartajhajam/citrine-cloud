'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const highlights = [
    'Process Optimization',
    'Document Management',
    'Business Consulting',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAgNGgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMiAyaDJ2MmgtMnYtMnptMC0yaDJ2MmgtMnYtMnptLTIgMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bS0yIDJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMiAyaDJ2MmgtMnYtMnptMC0yaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="bg-[#FFB800]/20 text-[#FFB800] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Business Process Excellence
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Streamline Your Business{' '}
              <span className="text-[#FFB800]">Operations</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Expert consulting and support to help organizations structure,
              optimize, and automate their internal processes for measurable
              growth and efficiency.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-slate-200"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#FFB800]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-[#FFB800] hover:bg-[#e6a600] text-slate-900 font-semibold text-lg px-8 py-6 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-6"
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFB800]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFB800] p-3 rounded-xl">
                        <CheckCircle2 className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          Process Development
                        </h3>
                        <p className="text-slate-300 text-sm">
                          SOPs & BPM solutions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFB800] p-3 rounded-xl">
                        <CheckCircle2 className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          Document Management
                        </h3>
                        <p className="text-slate-300 text-sm">
                          Digital DMS & policies
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFB800] p-3 rounded-xl">
                        <CheckCircle2 className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          Technology Integration
                        </h3>
                        <p className="text-slate-300 text-sm">
                          Cloud & automation tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
