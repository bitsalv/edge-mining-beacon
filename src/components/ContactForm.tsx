
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">      
      <h3 className="text-2xl font-display font-semibold mb-6 text-center text-light-text">🚀 Ready to Shape the Future?</h3>
      
      <p className="text-light-text/90 mb-6 text-center">
        Edge Mining is in alpha, and your feedback shapes our innovation. Take our quick survey and join the movement!
      </p>
      
      <Button 
        asChild
        className="w-full bg-accent hover:bg-accent/80 text-white font-medium transition-all gap-2"
      >
        <a href="https://app.formbricks.com/s/cma4k1hfj0jn7vw019sizlnio" target="_blank" rel="noopener noreferrer">
          Complete the survey
          <FileText size={16} className="ml-1" />
        </a>
      </Button>
    </div>
  );
};

export default ContactForm;
