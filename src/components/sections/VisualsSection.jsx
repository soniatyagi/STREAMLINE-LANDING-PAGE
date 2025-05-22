import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const VisualsSection = () => {
  return (
    <AnimatedSection className="section-padding bg-brand-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Experience <span className="text-brand-green">Immersive Entertainment</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatedSection animationType="slideLeft" className="w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
              <img 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                alt="Person watching thrilling sports match on a large TV screen in a cozy living room"
               src="https://images.unsplash.com/photo-1538488881038-e252a119ace7" />
            </div>
            <p className="text-center mt-4 text-gray-300 text-lg">Live Sports Action Like Never Before</p>
          </AnimatedSection>
          <AnimatedSection animationType="slideRight" className="w-full">
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
              <img 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                alt="Family enjoying a movie night on a tablet, showcasing multi-device compatibility"
               src="https://images.unsplash.com/photo-1603695680521-1f8489438a92" />
            </div>
            <p className="text-center mt-4 text-gray-300 text-lg">Movies & Shows on Any Device</p>
          </AnimatedSection>
        </div>
        <div className="mt-16">
          <AnimatedSection animationType="fadeInUp" className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Intuitive <span className="text-brand-green">TV Dashboard</span> Mockup
            </h3>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-brand-green/50 max-w-4xl mx-auto">
              <img 
                className="w-full h-auto object-contain"
                alt="Mockup of a sleek IPTV dashboard interface showing channel guide and movie posters"
               src="https://images.unsplash.com/photo-1689956622251-dedbf3c722a8" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VisualsSection;