
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GetInvolvedSection from '@/components/GetInvolvedSection';
import ComingSoonSection from '@/components/ComingSoonSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-light-text">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GetInvolvedSection />
        <ComingSoonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
