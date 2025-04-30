
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-accent/5 to-transparent opacity-50"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-accent inline-block animate-pulse-slow">Edge Mining</span>: <span className="text-light-text">maximizing energy value</span>
            </h1>
            
            <p className="text-xl text-light-text/80 max-w-xl mx-auto lg:mx-0 mb-10">
              Convert surplus renewable energy into Bitcoin with our intelligent, automated mining solution designed specifically for green energy producers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-md transition-all shadow-lg hover:shadow-accent/20 w-full sm:w-auto text-center"
              >
                <a href="https://github.com/edge-mining" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-accent/20 bg-white hover:bg-accent/5 text-light-text font-medium rounded-md transition-all w-full sm:w-auto text-center border"
              >
                <a href="https://github.com/edge-mining/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
              </Button>
            </div>
          </div>
          
          <div id="contact-form" className="w-full max-w-md mx-auto backdrop-blur-sm">
            <div className="bg-white/80 border border-accent/10 rounded-xl p-6 shadow-md hover:shadow-accent/5 transition-all">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
