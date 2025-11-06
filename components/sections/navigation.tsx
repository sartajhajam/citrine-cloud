'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
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
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-[#FFB800] transition-colors">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Cetrine
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-slate-700 hover:text-[#FFB800] font-medium transition-colors rounded-lg hover:bg-slate-50"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-[#FFB800] hover:bg-[#e6a600] text-slate-900 font-semibold"
            >
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-[#FFB800] hover:bg-slate-50 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#FFB800] hover:bg-[#e6a600] text-slate-900 font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
