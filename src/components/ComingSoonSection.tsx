
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, BarChart2 } from 'lucide-react';

const ComingSoonSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-dark relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(58,134,255,0.03),transparent_70%)]"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Coming Soon
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-dark-accent/40 backdrop-blur-sm border border-gray-800/50 shadow-xl overflow-hidden group hover:border-blue-900/50 transition-all duration-300">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <div className="mb-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Documentation</h3>
              <p className="text-muted-text">
                Comprehensive guides and tutorials on setting up and optimizing Edge Mining with your renewable energy system.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-accent/40 backdrop-blur-sm border border-gray-800/50 shadow-xl overflow-hidden group hover:border-purple-900/50 transition-all duration-300">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
              <div className="mb-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <BarChart2 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Blog</h3>
              <p className="text-muted-text">
                Stay updated with the latest developments, case studies, and insights from the Edge Mining team.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
