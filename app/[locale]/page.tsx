'use client';

import { Navigation } from '@/components/sections/navigation';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { DigitalTransformation } from '@/components/sections/digital-transformation';
import { WhyCetrine } from '@/components/sections/why-cetrine';
import { Vision } from '@/components/sections/vision';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <DigitalTransformation />
      <WhyCetrine />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
