
import React from 'react';
import { cn } from '@/lib/utils';

const ComingSoonSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Coming Soon</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-dark-accent p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Documentation</h3>
            <p className="text-muted-text">
              Comprehensive guides and tutorials on setting up and optimizing Edge Mining with your renewable energy system.
            </p>
          </div>
          
          <div className="bg-dark-accent p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Blog</h3>
            <p className="text-muted-text">
              Stay updated with the latest developments, case studies, and insights from the Edge Mining team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
