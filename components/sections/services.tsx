'use client';

import {
  Network,
  FileText,
  Calculator,
  Users,
  Cpu,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Process Development & Optimization',
      description:
        'SOP development, business process models (BPM), process mapping & documentation, process improvement & compliance.',
      color: 'bg-blue-500',
    },
    {
      icon: FileText,
      title: 'Document & Policy Management',
      description:
        'Company manuals & policy creation, organizational charts & communication flows, Digital Document Management Systems (DMS), audit-ready documentation.',
      color: 'bg-emerald-500',
    },
    {
      icon: Calculator,
      title: 'Accounting & Administrative Consulting',
      description:
        'Accounting process setup, invoicing & billing workflow design, financial documentation management, reporting & compliance support.',
      color: 'bg-amber-500',
    },
    {
      icon: Users,
      title: 'Business Support & Outsourcing',
      description:
        'Back-office operations, administrative coordination, data entry & reporting services.',
      color: 'bg-purple-500',
    },
    {
      icon: Cpu,
      title: 'Technology & Integration',
      description:
        'Microsoft 365 & cloud integration, workflow automation tools, cybersecurity & digital organization, collaboration & communication systems.',
      color: 'bg-cyan-500',
    },
    {
      icon: Network,
      title: 'Custom Solutions',
      description:
        'Tailored consulting services to meet your unique business needs and challenges, ensuring sustainable performance and growth.',
      color: 'bg-rose-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FFB800] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Core Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to streamline your operations and
            drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-[#FFB800] transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
