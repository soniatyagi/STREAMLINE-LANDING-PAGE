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
    
    const HowItWorksSection = ({ heroItemVariants }) => {
      return (
        <SectionWrapper id="how-it-works">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-100">Get Started in <span className="text-green-400">3 Simple Steps</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <motion.div className="flex flex-col items-center" variants={heroItemVariants}>
                <div className="bg-green-500 text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-green-500/30">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">Chat With Us</h3>
                <p className="text-gray-400">Click the WhatsApp button to discuss your needs and get a free trial.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={heroItemVariants} transition={{delay:0.2}}>
                <div className="bg-green-500 text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-green-500/30">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">Get Your Plan</h3>
                <p className="text-gray-400">Choose our unbeatable monthly or yearly plan for maximum savings.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={heroItemVariants} transition={{delay:0.4}}>
                <div className="bg-green-500 text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-green-500/30">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">Start Watching</h3>
                <p className="text-gray-400">Receive your access and enjoy thousands of channels instantly!</p>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      );
    };

    export default HowItWorksSection;