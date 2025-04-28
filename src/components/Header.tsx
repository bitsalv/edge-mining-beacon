
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-dark/80 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/lovable-uploads/693aa3a5-b345-4a9f-a41d-8313d07bdf3a.png" 
               alt="Edge Mining Logo" 
               className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-muted-text hover:text-light-text transition-standard">
            About
          </a>
          <a href="#get-involved" className="text-muted-text hover:text-light-text transition-standard">
            Get Involved
          </a>
          <Button asChild variant="outline" className="border-gray-700 hover:bg-dark-accent hover:text-light-text">
            <a href="https://github.com/edgemining" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="outline" size="icon" className="border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
