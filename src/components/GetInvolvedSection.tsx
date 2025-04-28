
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Github, MessageCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GetInvolvedSection: React.FC = () => {
  return (
    <section id="get-involved" className="py-24 px-4 bg-gradient-to-br from-dark-accent via-dark to-dark-accent relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(131,56,236,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(58,134,255,0.1),transparent_50%)]"></div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Get Involved
        </h2>
        
        <p className="text-xl text-muted-text max-w-2xl mx-auto mb-12">
          Want to get in touch and contribute? Join our community and help us optimize renewable energy through Bitcoin mining.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-dark border border-gray-800 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px] group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Join Discord</h3>
              <p className="text-muted-text mb-6 flex-grow">Connect with our community to ask questions and share ideas.</p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 w-full">
                <a href="https://discord.gg/edgemining" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark border border-gray-800 shadow-lg hover:shadow-purple-900/20 transition-all duration-300 hover:translate-y-[-5px] group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">Test Edge Mining</h3>
              <p className="text-muted-text mb-6 flex-grow">Want to try Edge Mining for yourself? Fill out our early access form.</p>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Request Access
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark border border-gray-800 shadow-lg hover:shadow-pink-900/20 transition-all duration-300 hover:translate-y-[-5px] group">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-white">View on GitHub</h3>
              <p className="text-muted-text mb-6 flex-grow">Browse our source code, submit issues, and contribute to development.</p>
              <Button asChild className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-0 w-full">
                <a href="https://github.com/edgemining" target="_blank" rel="noopener noreferrer">
                  View Code
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
