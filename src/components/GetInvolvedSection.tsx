
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const GetInvolvedSection: React.FC = () => {
  return (
    <section id="get-involved" className="py-24 px-4 bg-dark-accent">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Involved</h2>
        
        <p className="text-xl text-muted-text max-w-2xl mx-auto mb-12">
          Want to get in touch and contribute? Join our community and help us optimize renewable energy through Bitcoin mining.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark p-8 rounded-lg transition-standard hover:translate-y-[-5px]">
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Join Discord</h3>
            <p className="text-muted-text mb-6">Connect with our community to ask questions and share ideas.</p>
            <Button asChild className="bg-white text-dark hover:bg-white/90 w-full">
              <a href="https://discord.gg/edgemining" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>

          <div className="bg-dark p-8 rounded-lg transition-standard hover:translate-y-[-5px]">
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Test Edge Mining</h3>
            <p className="text-muted-text mb-6">Want to try Edge Mining for yourself? Fill out our early access form.</p>
            <Button asChild className="bg-white text-dark hover:bg-white/90 w-full">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Request Access
              </a>
            </Button>
          </div>

          <div className="bg-dark p-8 rounded-lg transition-standard hover:translate-y-[-5px]">
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-lg mx-auto mb-6">
              <Github size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">View on GitHub</h3>
            <p className="text-muted-text mb-6">Browse our source code, submit issues, and contribute to development.</p>
            <Button asChild className="bg-white text-dark hover:bg-white/90 w-full">
              <a href="https://github.com/edgemining" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
