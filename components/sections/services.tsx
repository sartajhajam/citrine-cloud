'use client';

import { 
  Server, 
  Workflow, 
  Bot, 
  BarChartBig, 
  Network 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Automation',
      description: 'Automate servers, cloud operations, deployments, and monitoring.',
      listTitle: 'Capabilities',
      list: [
        'Cloud infrastructure automation',
        'Server orchestration',
        'Monitoring and alert systems',
        'DevOps automation',
        'Backup and disaster recovery',
        'Elastic infrastructure scaling',
        'Operational security workflows',
        'Automated deployment pipelines',
        'Intelligent infrastructure observability',
      ],
      outcome: 'A resilient, scalable infrastructure.',
      color: 'bg-blue-600',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Eliminate repetitive work and replace it with smart workflows that execute reliably.',
      listTitle: 'Where We Apply It',
      list: [
        'Finance operations and reconciliation',
        'HR workflows and onboarding',
        'Internal approvals and routing',
        'Customer onboarding journeys',
        'Inventory and supply management',
        'Procurement and vendor flows',
        'Multi-department coordination',
        'Administrative and reporting tasks',
      ],
      outcome: 'Faster operations and fewer errors.',
      color: 'bg-teal-500',
    },
    {
      icon: Bot,
      title: 'AI-Powered Systems',
      description: 'Deploy AI inside your company to support employees and unlock institutional knowledge.',
      listTitle: 'Internal AI Solutions',
      list: [
        'AI assistants for employees',
        'AI operational copilots',
        'Intelligent knowledge bases',
        'AI document processing and extraction',
        'AI-powered reporting',
        'AI workflow routing and triage',
        'Enterprise search and intelligence',
        'Internal AI communication systems',
        'AI-driven operational analysis',
      ],
      outcome: 'Make your business knowledge instantly accessible and actionable.',
      color: 'bg-orange-500',
    },
    {
      icon: BarChartBig,
      title: 'Automated Reporting & Intelligence',
      description: 'Stop waiting for reports. We build systems that automatically collect, process, and visualize data.',
      listTitle: "What's Included",
      list: [
        'Executive dashboards',
        'Automated KPI tracking',
        'Operational analytics',
        'AI-generated insights and summaries',
        'Financial and performance reporting',
        'Real-time alerts and anomaly detection',
        'Operational forecasting',
        'End-to-end business visibility',
      ],
      outcome: 'Real-time data. Real-time decisions.',
      color: 'bg-blue-500',
    },
    {
      icon: Network,
      title: 'System Integration',
      description: 'Your tools and teams should work together smoothly. We connect your systems to stop fragmented workflows and keep information flowing across the company.',
      listTitle: 'The Outcome',
      list: [
        'Faster execution across teams',
        'Real-time operational visibility',
        'Reduced human error',
        'Smarter, data-informed decisions',
        'Fully connected business operations',
        'Improved cross-functional collaboration',
        'Centralized operational control',
      ],
      outcome: 'One connected ecosystem.',
      color: 'bg-teal-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            AI & Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500">Infrastructure</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed font-light mt-6">
            Build a business that runs smarter. We engineer automation that connects your infrastructure, teams, and applications into one environment. Our solutions reduce costs, accelerate execution, and scale easily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Make the 5th item span full width on desktop for better grid layout
            const isFullWidth = index === 4;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <Card
                  className={`bg-white border-slate-200 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group overflow-hidden h-full`}
                >
                  <div className={`h-1 w-full ${service.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                  <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-${service.color.split('-')[1]}-300 transition-colors`}>
                        <Icon className={`w-8 h-8 text-${service.color.split('-')[1]}-500`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex-grow">
                      <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">
                        {service.listTitle}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {service.list.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${service.color}`}></div>
                            <span className="text-slate-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <p className="text-blue-700 text-sm font-medium">
                        <span className="text-slate-900 font-bold">Outcome:</span> {service.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
