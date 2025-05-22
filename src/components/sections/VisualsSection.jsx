import React, { useEffect, useRef } from 'react';
    import { motion, useAnimation, useInView } from 'framer-motion';

    const SectionWrapper = ({ children, className = "", id }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.15 });
      const mainControls = useAnimation();

      useEffect(() => {
        if (isInView) {
          mainControls.start("visible");
        }
      }, [isInView, mainControls]);

      return (
        <motion.section
          id={id}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`py-12 md:py-20 ${className}`}
        >
          {children}
        </motion.section>
      );
    };

    const VisualsSection = ({ heroItemVariants }) => {
      return (
        <SectionWrapper id="visuals" className="bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">See Streamline IPTV in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <motion.div variants={heroItemVariants} className="rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-green-500/70 transition-all duration-300">
                <img  
                  className="w-full h-auto object-cover aspect-video"
                  alt="Person relaxing on a couch watching sports on a large TV screen with vibrant colors"
                 src="https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1" />
              </motion.div>
              <motion.div variants={heroItemVariants} transition={{delay:0.2}} className="rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-green-500/70 transition-all duration-300">
                <img  
                  className="w-full h-auto object-cover aspect-video"
                  alt="Sleek and modern TV dashboard interface showing various channels and movie posters"
                 src="https://images.unsplash.com/photo-1689956622251-dedbf3c722a8" />
              </motion.div>
            </div>
             <motion.div variants={heroItemVariants} transition={{delay:0.4}} className="mt-8 md:mt-12 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-green-500/70 transition-all duration-300 max-w-3xl mx-auto">
                <img  
                  className="w-full h-auto object-cover aspect-video"
                  alt="Family gathered around a tablet, smiling and watching a movie together"
                 src="https://images.unsplash.com/photo-1603695680521-1f8489438a92" />
              </motion.div>
          </div>
        </SectionWrapper>
      );
    };

    export default VisualsSection;