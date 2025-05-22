import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const ottLogos = [
  { name: "Netflix", alt: "Netflix Logo" },
  { name: "Amazon Prime Video", alt: "Amazon Prime Video Logo" },
  { name: "Sony Liv", alt: "Sony Liv Logo" },
  { name: "Hulu", alt: "Hulu Logo" },
  { name: "Hotstar", alt: "Hotstar Logo" },
  { name: "Apple TV+", alt: "Apple TV+ Logo" },
  { name: "Disney+", alt: "Disney+ Logo" },
];

const OttPlatformsSection = () => {
  const duplicatedLogos = [...ottLogos, ...ottLogos, ...ottLogos]; 

  return (
    <AnimatedSection className="section-padding bg-brand-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Includes Top <span className="text-brand-green">OTT Platforms</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Enjoy Netflix, Amazon Prime, Sony Liv, Hulu and 50+ OTT services all in one IPTV plan.
        </p>
        <div className="relative w-full overflow-hidden group">
          <motion.div
            className="flex space-x-12 md:space-x-16 group-hover:pause-animation"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 40, 
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 h-16 md:h-20 w-32 md:w-40 flex items-center justify-center p-2 bg-gray-800/50 rounded-lg">
                <img 
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt={logo.alt}
                 src="https://images.unsplash.com/photo-1678329886698-74c27614db86" />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-blue-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-blue-dark to-transparent z-10"></div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OttPlatformsSection;