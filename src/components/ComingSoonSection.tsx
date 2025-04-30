
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComingSoonSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-dark relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute inset-0 bg-dark"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-accent">
          Resources
        </h2>
        
        <p className="text-xl text-muted-text max-w-2xl mx-auto mb-12">
          Join our growing community of developers and energy enthusiasts. Together, we're building the future of renewable energy optimization.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-effect border border-accent/10 shadow-md overflow-hidden group hover:border-accent/20 transition-all duration-300">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
              <div className="mb-6 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-light-text">Documentation</h3>
              <p className="text-muted-text mb-6">
                Complete guides and step-by-step tutorials on integrating Edge Mining with your renewable energy system for optimal results.
              </p>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border border-accent text-light-text hover:bg-accent/10"
              >
                <a href="https://github.com/edge-mining/docs" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border border-accent/10 shadow-md overflow-hidden group hover:border-accent/20 transition-all duration-300">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
              <div className="mb-6 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BarChart2 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-light-text">Blog</h3>
              <p className="text-muted-text">
                Coming Soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
