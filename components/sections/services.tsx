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
      description: 'Automate servers, cloud operations, deployments, monitoring, and the day-to-day management that drains engineering time.',
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
      outcome: 'a resilient, scalable, self-managed infrastructure engineered for growth.',
      color: 'bg-blue-500',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Eliminate repetitive operational work across every department and replace it with intelligent workflows that execute reliably, every time.',
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
      outcome: 'faster operations, fewer errors, lower costs, greater scale.',
      color: 'bg-emerald-500',
    },
    {
      icon: Bot,
      title: 'AI-Powered Internal Systems',
      description: 'Deploy AI inside your company to accelerate productivity, support employees, and unlock institutional knowledge that today lives in silos.',
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
      outcome: 'your business knowledge becomes instantly accessible, searchable, and actionable.',
      color: 'bg-indigo-500',
    },
    {
      icon: BarChartBig,
      title: 'Automated Reporting & Business Intelligence',
      description: 'Stop waiting for reports. We build real-time reporting systems that automatically collect, process, and visualize operational data across your organization.',
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
      color: 'bg-cyan-500',
    },
    {
      icon: Network,
      title: 'Enterprise Integration Systems',
      description: 'Your tools, teams, and operations should work together seamlessly — automatically. We build connected operational ecosystems that eliminate fragmented workflows and unify the flow of information across your organization.',
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
      outcome: 'One intelligent ecosystem. Zero operational fragmentation.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span>OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            AI & Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Infrastructure</span>
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed font-light mt-6">
            Build a business that runs smarter. We engineer automation ecosystems that connect your infrastructure, teams, applications, and operations into one intelligent environment. Our solutions reduce operational costs, accelerate execution, and scale without adding complexity.
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <Card
                  className={`bg-slate-900/40 border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-300 group overflow-hidden h-full`}
                >
                  <div className={`h-1 w-full ${service.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                  <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`p-4 rounded-2xl bg-slate-800 border border-slate-700 group-hover:border-${service.color.split('-')[1]}-500/50 transition-colors`}>
                        <Icon className={`w-8 h-8 text-${service.color.split('-')[1]}-400`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex-grow">
                      <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                        {service.listTitle}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {service.list.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${service.color}`}></div>
                            <span className="text-slate-400 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/80">
                      <p className="text-indigo-300/90 text-sm font-medium">
                        <span className="text-white">Outcome:</span> {service.outcome}
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
