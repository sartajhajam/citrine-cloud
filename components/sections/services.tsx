'use client';

import {
  Network,
  FileText,
  Calculator,
  Users,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Process Development & Optimization',
      description: 'Transform your business processes for maximum efficiency, scalability, and automation.',
      bullets: [
        'Redesign workflows to improve performance and reduce manual effort',
        'Apply Agile principles by breaking large projects into manageable, iterative improvements',
        'Incorporate Kanban boards and Scrum sprints to visualize work, track progress, and deliver continuous improvements',
        'Develop Standard Operating Procedures (SOPs), business process models (BPM), and compliance-driven documentation',
      ],
      color: 'bg-blue-500',
    },
    {
      icon: FileText,
      title: 'Document & Policy Management',
      description: 'Bring structure and transparency to your organization through effective document control.',
      bullets: [
        'Create comprehensive company manuals and policy frameworks',
        'Design organizational charts and communication flow diagrams',
        'Implement Digital Document Management Systems (DMS) for secure, cloud-based storage',
        'Maintain audit-ready documentation to support regulatory compliance and business continuity',
      ],
      color: 'bg-emerald-500',
    },
    {
      icon: Calculator,
      title: 'Accounting & Administrative Consulting',
      description: 'Build efficient and compliant financial and administrative processes.',
      bullets: [
        'Establish accounting workflows, invoicing, and billing systems',
        'Streamline financial documentation management and reporting cycles',
        'Support compliance with local and international financial standards',
      ],
      color: 'bg-amber-500',
    },
    {
      icon: Users,
      title: 'Business Support & Outsourcing',
      description: 'Focus on what matters most while we handle your back-office operations.',
      bullets: [
        'Administrative coordination and support services',
        'Data entry, reporting, and process documentation',
        'Scalable outsourcing solutions designed to reduce overhead and increase productivity',
      ],
      color: 'bg-purple-500',
    },
    {
      icon: ShieldCheck,
      title: 'Business Compliance & Inventory Management System',
      description: 'Ensure your operations meet regulatory standards while optimizing inventory control.',
      bullets: [
        'Develop and implement compliance frameworks and risk management systems',
        'Conduct internal audits and monitor ongoing regulatory requirements',
        'Design inventory tracking and stock control systems for real-time accuracy',
        'Integrate compliance and inventory management with your accounting and operational workflows',
      ],
      color: 'bg-cyan-500',
    },
    {
      icon: Network,
      title: 'Custom Solutions',
      description: 'Every business is unique and so are our solutions.',
      bullets: [
        'Tailored consulting services built around your specific goals and challenges',
        'Scalable strategies to ensure sustainable growth and long-term success',
      ],
      color: 'bg-rose-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We help businesses streamline operations, ensure compliance, and optimize performance through tailored consulting and integrated management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-[#FFB800] transition-all duration-300 hover:shadow-xl group h-full flex flex-col"
              >
                <CardContent className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-3">
                        <span className="text-[#FFB800] font-bold mt-1">•</span>
                        <span className="text-slate-600 leading-relaxed text-sm">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
