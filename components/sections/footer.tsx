'use client';

import { Building2, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', id: 'about' },
      { name: 'Our Team', id: 'about' },
      { name: 'Contact', id: 'contact' },
    ],
    Services: [
      'Process Development',
      'Document Management',
      'Accounting Consulting',
      'Business Support',
      'Technology Integration',
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#FFB800] p-2 rounded-lg">
                <Building2 className="h-8 w-8 text-slate-900" />
              </div>
              <span className="text-2xl font-bold">Cetrine SC</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-4">
              Professional consulting and support company dedicated to helping
              organizations structure, optimize, and automate their internal
              processes.
            </p>
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-[#FFB800] mt-1 flex-shrink-0" />
              <div className="text-slate-400 text-sm leading-relaxed">
                <p>CORIMBA, ZONA 03</p>
                <p>(PRÓXIMO AO BFA)</p>
                <p>Município SAMBA</p>
                <p>Província: LUANDA</p>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 text-[#FFB800]">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const linkName = typeof link === 'string' ? link : link.name;
                  const linkId = typeof link === 'object' ? link.id : null;
                  return (
                    <li key={linkName}>
                      {linkId ? (
                        <button
                          onClick={() => scrollToSection(linkId)}
                          className="text-slate-400 hover:text-white transition-colors text-left"
                        >
                          {linkName}
                        </button>
                      ) : (
                        <a
                          href="#"
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          {linkName}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              {currentYear} Cetrine Suporte e Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
