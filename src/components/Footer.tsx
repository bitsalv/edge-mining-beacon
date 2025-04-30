
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, MessageSquare, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden bg-accent/5">
      {/* Background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-accent"></div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/52b0ec8b-cc4c-45fc-b170-16111d3df6e0.png" 
              alt="Edge Mining Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-light-text hover:text-accent transition-all font-medium">
              About
            </a>
            <a 
              href="https://discord.gg/qpVU7wu9" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text hover:text-accent transition-all flex items-center gap-2 font-medium"
            >
              <MessageSquare size={18} className="text-accent" />
              <span>Discord</span>
            </a>
            <a 
              href="https://github.com/edge-mining/docs" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text hover:text-accent transition-all flex items-center gap-2 font-medium"
            >
              <FileText size={18} className="text-accent" />
              <span>Docs</span>  
            </a>
            <a 
              href="https://github.com/edge-mining" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-text hover:text-accent transition-all flex items-center gap-2 font-medium"
            >
              <Github size={18} className="text-accent" />
              <span>Github</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-accent/10 text-center">
          <p className="text-sm text-muted-text">
            Edge Mining is a FOSS project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
