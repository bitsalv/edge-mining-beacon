
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">      
      <h3 className="text-2xl font-display font-semibold mb-6 text-center text-light-text">Visit our GitHub</h3>
      
      <Button 
        asChild
        className="w-full bg-accent hover:bg-accent/80 text-white font-medium transition-all gap-2"
      >
        <a href="https://github.com/edge-mining" target="_blank" rel="noopener noreferrer">
          Go to GitHub
          <Github size={16} className="ml-1" />
        </a>
      </Button>
    </div>
  );
};

export default ContactForm;
