import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AgeGate from './components/AgeGate';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FloatingGummies from './components/FloatingGummies';
import Features from './components/Features';
import ComparisonSection from './components/ComparisonSection';
import ProductSection from './components/ProductSection';
import UnboxingSection from './components/UnboxingSection';
import Varieties from './components/Varieties';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import StickyCTA from './components/StickyCTA';

export default function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="bg-yeli-black min-h-screen text-white font-body selection:bg-neon-magenta selection:text-white bg-grain overflow-x-hidden">
      <CustomCursor />
      <AnimatePresence>
        {!isVerified && (
          <AgeGate onConfirm={() => setIsVerified(true)} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isVerified ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <Marquee variant="top" />
        <Header />
        <main className="relative">
          <Hero />
          <Marquee />
          <FloatingGummies />
          <Varieties />
          <ProductSection />
          <UnboxingSection />
          <ComparisonSection />
          <Testimonials />
          <FAQ />
          <Newsletter />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </div>
  );
}
