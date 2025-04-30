
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GetInvolvedSection: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="get-involved" className="py-24 px-4 bg-gradient-to-br from-dark-accent via-dark to-dark-accent relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-accent/5"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">
          Get Involved
        </h2>
        
        <p className="text-xl text-muted-text max-w-2xl mx-auto mb-12">
          Join our growing community of developers and energy enthusiasts. Together, we're building the future of renewable energy optimization.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border border-accent/10 shadow-md hover:shadow-accent/20 transition-all duration-300 hover:translate-y-[-5px] group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center bg-accent rounded-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-light-text">Discord</h3>
              <p className="text-muted-text mb-6 flex-grow">Connect with our community to discuss ideas, ask questions, and collaborate on new features.</p>
              <Button asChild className="bg-accent hover:bg-accent/80 text-white font-medium border-0 w-full">
                <a href="https://discord.gg/qpVU7wu9" target="_blank" rel="noopener noreferrer">
                  Join
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border border-accent/10 shadow-md hover:shadow-accent/20 transition-all duration-300 hover:translate-y-[-5px] group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center bg-accent rounded-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-light-text">GitHub</h3>
              <p className="text-muted-text mb-6 flex-grow">Explore our codebase, contribute to development, or fork the project to create your own solution.</p>
              <Button asChild className="bg-accent hover:bg-accent/80 text-white font-medium border-0 w-full">
                <a href="https://github.com/edgemining" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
