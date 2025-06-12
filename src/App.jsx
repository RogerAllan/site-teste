import React from 'react';
import { useTimer } from './hooks/useTimer';
import AnimatedBackground from './components/AnimatedBackground';
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
      <AnimatedBackground />
      <Header />
      <HeroSection timeLeft={timeLeft} />
      <StatsSection />
      <TestimonialsSection />
      <ModulesSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default CasinoCourse;