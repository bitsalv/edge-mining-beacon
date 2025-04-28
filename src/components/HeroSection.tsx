
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,65,81,0.2)_0,rgba(17,24,39,0)_65%)]"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto text-center z-10 animate-fade-in">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/693aa3a5-b345-4a9f-a41d-8313d07bdf3a.png" 
            alt="Edge Mining Logo" 
            className="h-28 md:h-36 mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Optimizing Renewable Energy Through Bitcoin Mining
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-text max-w-2xl mx-auto">
          Turn excess renewable energy into economic value with intelligent, automated Bitcoin mining.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#get-involved"
            className="px-8 py-3 bg-white text-dark font-medium rounded-md hover:bg-opacity-90 transition-standard w-full sm:w-auto text-center"
          >
            Get Involved
          </a>
          <a 
            href="#about"
            className="px-8 py-3 bg-transparent border border-gray-700 text-light-text font-medium rounded-md hover:bg-dark-accent transition-standard w-full sm:w-auto text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
