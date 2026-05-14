'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled
        ? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-[0_4px_30px_rgba(0,0,0,0.05)]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.jpeg"
              alt="Cetrine Logo"
              width={180}
              height={50}
              className="object-contain h-10 sm:h-12 w-auto"
              priority
            />
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-100"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(29,78,216,0.2)] hover:shadow-[0_0_30px_rgba(29,78,216,0.4)] transition-all rounded-xl"
            >
              Start Transformation
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900"
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
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl absolute w-full">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl"
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
