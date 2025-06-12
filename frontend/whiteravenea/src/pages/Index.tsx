
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { PerformanceSection } from '../components/PerformanceSection';
import { PricingSection } from '../components/PricingSection';
import { ContactSection } from '../components/ContactSection';

const Index: React.FC = () => {
  return (
    <main className="bg-black overflow-hidden">
      <HeroSection
        backgroundImage=""
        logoImage=""
      />
      
      <FeaturesSection />
      
      <PerformanceSection />
      
      <PricingSection />
      
      <ContactSection />
    </main>
  );
};

export default Index;
