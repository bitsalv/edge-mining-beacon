
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,134,255,0.15)_0,rgba(17,24,39,0)_70%)]"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto text-center z-10 animate-fade-in">
        <div className="mb-8 animate-float">
          <img 
            src="/lovable-uploads/693aa3a5-b345-4a9f-a41d-8313d07bdf3a.png" 
            alt="Edge Mining Logo" 
            className="h-28 md:h-36 mx-auto"
          />
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 gradient-text">
          Optimizing Renewable Energy Through Bitcoin Mining
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-text max-w-2xl mx-auto">
          Turn excess renewable energy into economic value with intelligent, automated Bitcoin mining.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white font-medium rounded-md transition-standard w-full sm:w-auto text-center"
          >
            <a href="#get-involved">Get Involved</a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-gray-700 bg-dark-accent/50 hover:bg-dark-accent text-light-text font-medium rounded-md transition-standard w-full sm:w-auto text-center"
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
