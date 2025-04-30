
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/15 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-accent">Edge Mining</span>: <span className="text-white">maximizing energy value</span>
            </h1>
            
            <p className="text-xl text-light-text max-w-2xl mx-auto lg:mx-0 mb-8">
              Convert surplus renewable energy into Bitcoin with our intelligent, automated mining solution designed specifically for green energy producers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-md transition-standard w-full sm:w-auto text-center"
              >
                <a href="https://github.com/edge-mining" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-gray-700 bg-dark-accent/50 hover:bg-dark-accent text-light-text font-medium rounded-md transition-standard w-full sm:w-auto text-center"
              >
                <a href="https://github.com/edge-mining/docs" target="_blank" rel="noopener noreferrer">Documentation</a>
              </Button>
            </div>
          </div>
          
          <div id="contact-form" className="w-full max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
