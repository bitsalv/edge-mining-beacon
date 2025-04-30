
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, FileText } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-dark/80 backdrop-blur-md border-b border-gray-800">
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
          <Button 
            variant="ghost" 
            className="text-muted-text hover:text-light-text transition-standard"
            onClick={scrollToForm}
          >
            Contact
          </Button>
          <div className="pl-2 border-l border-gray-700">
            <a 
              href="https://github.com/edgemining" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-text hover:text-light-text transition-standard"
            >
              <Github size={18} />
              <span>Github</span>
            </a>
          </div>
          <div>
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-text hover:text-light-text transition-standard"
            >
              <FileText size={18} />
              <span>Docs</span>
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-light-text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-accent p-4 border-b border-gray-800 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="text-light-text py-2 px-4 rounded-md hover:bg-dark transition-standard"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button
              className="justify-start text-light-text py-2 px-4 rounded-md hover:bg-dark transition-standard"
              variant="ghost"
              onClick={() => {
                scrollToForm();
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </Button>
            <a 
              href="https://github.com/edgemining" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between text-light-text py-2 px-4 rounded-md hover:bg-dark transition-standard"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Github</span>
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="flex items-center justify-between text-light-text py-2 px-4 rounded-md hover:bg-dark transition-standard"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Docs</span>
              <FileText size={18} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
