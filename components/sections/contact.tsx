'use client';

import { Mail, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Contact',
      content: 'info@cetrinecs.com',
      link: 'mailto:info@cetrinecs.com',
    },
    {
      icon: Phone,
      title: 'Number',
      content: '+244 921 606 260',
      link: 'tel:+244921606260',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FFB800] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Contact Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch to streamline your business operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Let's Talk
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Ready to transform your business processes? Our team is here to
                help you achieve operational excellence. Reach out today to
                discuss your unique needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 hover:border-[#FFB800] hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="bg-[#FFB800] p-4 rounded-xl group-hover:scale-110 transition-transform mb-4">
                      <Icon className="h-8 w-8 text-slate-900" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 text-base font-medium">
                      {info.content}
                    </p>
                  </a>
                );
              })}
            </div>

            <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Why Choose Cetrine?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1.5 mt-1">
                    <div className="h-2 w-2 bg-slate-900 rounded-full"></div>
                  </div>
                  <span>Expert team with proven track record</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1.5 mt-1">
                    <div className="h-2 w-2 bg-slate-900 rounded-full"></div>
                  </div>
                  <span>Customized solutions for your business</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1.5 mt-1">
                    <div className="h-2 w-2 bg-slate-900 rounded-full"></div>
                  </div>
                  <span>Ongoing support and optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1.5 mt-1">
                    <div className="h-2 w-2 bg-slate-900 rounded-full"></div>
                  </div>
                  <span>Measurable results and ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
