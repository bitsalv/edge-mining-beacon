
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, FileText, Info, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-accent/95 backdrop-blur-lg border-b border-accent/10 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/52b0ec8b-cc4c-45fc-b170-16111d3df6e0.png" 
            alt="Edge Mining Logo" 
            className="h-10 w-auto object-contain hover:opacity-90 transition-all" 
          />
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#about" 
            className="text-white hover:text-white/80 transition-all font-medium flex items-center gap-1"
          >
            <Info size={18} className="text-white" />
            <span>About</span>
          </a>
          <a 
            href="https://github.com/edge-mining/docs" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all font-medium flex items-center gap-1"
          >
            <FileText size={18} className="text-white" />
            <span>Docs</span>
          </a>
          <a 
            href="https://github.com/edge-mining" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all font-medium flex items-center gap-1"
          >
            <Github size={18} className="text-white" />
            <span>Github</span>
          </a>
          <a 
            href="https://discord.gg/edgemining" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all font-medium flex items-center gap-1"
          >
            <MessageCircle size={18} className="text-white" />
            <span>Discord</span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-accent/95 backdrop-blur-lg p-4 border-b border-accent/10 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="flex items-center gap-2 text-white py-2 px-4 rounded-md hover:bg-white/10 transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Info size={18} className="text-white" />
              <span>About</span>
            </a>
            <a 
              href="https://github.com/edge-mining/docs" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white py-2 px-4 rounded-md hover:bg-white/10 transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText size={18} className="text-white" />
              <span>Docs</span>
            </a>
            <a 
              href="https://github.com/edge-mining" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white py-2 px-4 rounded-md hover:bg-white/10 transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Github size={18} className="text-white" />
              <span>Github</span>
            </a>
            <a 
              href="https://discord.gg/edgemining" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white py-2 px-4 rounded-md hover:bg-white/10 transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle size={18} className="text-white" />
              <span>Discord</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
