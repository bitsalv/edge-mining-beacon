
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-dark opacity-50 pointer-events-none"></div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">
              About Edge Mining
            </h2>
            
            <p className="text-light-text text-lg leading-relaxed mb-6">
              Edge Mining optimizes renewable energy systems by integrating Bitcoin mining at the source. Our solution helps small and medium-sized renewable power plants transform excess energy into valuable digital assets.
            </p>
            
            <p className="text-light-text text-lg leading-relaxed">
              Our intelligent system automatically adjusts mining operations based on real-time energy availability, while capturing the generated heat for practical applications like space heating—creating a truly efficient energy ecosystem.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <Card className="glass-effect shadow-md border-accent/10">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-semibold mb-6 text-light-text">Key Features</h3>
                
                <ul className="space-y-4">
                  {[
                    "Smart automation based on energy availability",
                    "Heat recovery for practical applications",
                    "Designed for small to medium renewable installations",
                    "100% open-source with no licensing fees"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mr-4 mt-1 text-accent">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-light-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
