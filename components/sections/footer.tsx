'use client';

import { Building2, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:contact@cetrine.com', label: 'Email' },
  ];

  const footerLinks = {
    Services: [
      'Process Development',
      'Document Management',
      'Accounting Consulting',
      'Business Support',
      'Technology Integration',
    ],
    Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'],
    Resources: [
      'Case Studies',
      'White Papers',
      'Documentation',
      'Support',
      'FAQ',
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#FFB800] p-2 rounded-lg">
                <Building2 className="h-8 w-8 text-slate-900" />
              </div>
              <span className="text-2xl font-bold">Cetrine</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Professional consulting and support company dedicated to helping
              organizations structure, optimize, and automate their internal
              processes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-slate-800 p-3 rounded-lg hover:bg-[#FFB800] hover:text-slate-900 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 text-[#FFB800]">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
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
