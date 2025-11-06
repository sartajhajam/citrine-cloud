'use client';

import { Target, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Vision',
      description:
        'To be a trusted partner in organizational excellence — empowering businesses to operate with clarity, efficiency, and confidence.',
      color: 'bg-[#FFB800]',
    },
    {
      icon: Target,
      title: 'Mission',
      description:
        'To design, document, and implement business processes that create value, reduce waste, and drive sustainable performance.',
      color: 'bg-slate-900',
    },
    {
      icon: Award,
      title: 'Values',
      description:
        'Excellence, integrity, and innovation guide every solution we deliver. We are committed to measurable results and long-term partnerships.',
      color: 'bg-blue-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FFB800] font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Who We Are
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cetrine Suporte e Services is a professional consulting and support
            company dedicated to helping organizations structure, optimize, and
            automate their internal processes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-16 border border-slate-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Our Story
          </h3>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Our mission is to simplify business operations through smart
              documentation, efficient management systems, and tailored process
              solutions — ensuring consistency, compliance, and growth for every
              client.
            </p>
            <p>
              With expertise across corporate administration, operations, and
              technology, we support businesses of all sizes in aligning their
              teams, systems, and strategies toward measurable results.
            </p>
            <p>
              We believe that well-structured processes are the foundation of
              sustainable success. Our team combines technical knowledge with
              practical business insight to deliver solutions that work in the
              real world.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-[#FFB800] transition-all duration-300 hover:shadow-xl group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div
                    className={`${value.color} p-8 flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
