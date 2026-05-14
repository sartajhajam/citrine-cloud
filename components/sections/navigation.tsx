'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-cetrine' },
    { name: 'Vision', id: 'vision' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
              <Cpu className="h-6 w-6 text-indigo-400" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              Cetrine
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-slate-300 hover:text-white font-medium transition-colors rounded-lg hover:bg-slate-800/50"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all rounded-xl"
            >
              Start Transformation
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 shadow-xl absolute w-full">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl"
              >
                Start Transformation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
