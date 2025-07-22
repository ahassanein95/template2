'use client';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero1SplitScreen from '@/components/Hero1-SplitScreen';
import Hero2Minimal from '@/components/Hero2-Minimal';
import Hero3Gradient from '@/components/Hero3-Gradient';
import Hero4Grid from '@/components/Hero4-Grid';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Also clear any hash from URL that might cause scrolling
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <main>
      <Navigation />
      <Hero2Minimal />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}