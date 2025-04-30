
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, BarChart2 } from 'lucide-react';

const ComingSoonSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-dark relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute inset-0 bg-dark"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-accent">
          Coming Soon
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-effect border border-gray-800/20 shadow-xl overflow-hidden group hover:border-gray-800/50 transition-all duration-300">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
              <div className="mb-6 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BookOpen size={24} className="text-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Documentation</h3>
              <p className="text-muted-text">
                Complete guides and step-by-step tutorials on integrating Edge Mining with your renewable energy system for optimal results.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border border-gray-800/20 shadow-xl overflow-hidden group hover:border-gray-800/50 transition-all duration-300">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"></div>
              <div className="mb-6 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BarChart2 size={24} className="text-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Blog</h3>
              <p className="text-muted-text">
                Coming soon! Stay updated with case studies, best practices, and insights from our team and community members.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
