'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@cetrine.com',
      link: 'mailto:contact@cetrine.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Business District, Corporate Plaza',
      link: '#',
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Let's Talk
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Ready to transform your business processes? Our team is here to
                help you achieve operational excellence. Reach out today to
                discuss your unique needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="bg-[#FFB800] p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-slate-600">{info.content}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Cetrine?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1 mt-1">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1 mt-1">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span>Customized solutions for your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1 mt-1">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span>Ongoing support and optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#FFB800] rounded-full p-1 mt-1">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span>Measurable results and ROI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business needs..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFB800] hover:bg-[#e6a600] text-slate-900 font-semibold h-12 text-lg group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
