'use client';

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Partners } from '@/components/sections/partners';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Navigation } from '@/components/sections/navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <Services />
      <Partners />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
