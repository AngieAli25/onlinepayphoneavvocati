'use client';

import { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import ValueCalculator from '@/components/sections/ValueCalculator';
import WhyChoose from '@/components/sections/WhyChoose';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    if (typeof window !== 'undefined') {
      const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
      smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector((link as HTMLAnchorElement).getAttribute('href') || '');
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Benefits />
        <ValueCalculator />
        <WhyChoose />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}