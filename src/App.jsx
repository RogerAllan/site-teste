import React from 'react';
import { useTimer } from './hooks/useTimer';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ModulesSection from './components/ModulesSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

const CasinoCourse = () => {
  const timeLeft = useTimer({ hours: 23, minutes: 45, seconds: 32 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white overflow-hidden">
      <Header />
      
      <section id="hero">
        <HeroSection timeLeft={timeLeft} />
      </section>
      
      <StatsSection />
      
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
   
      
      <section id="modules">
        <ModulesSection />
      </section>
    
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default CasinoCourse;