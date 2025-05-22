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

    const FeatureCard = ({ icon, title, description, delay }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.3 });
      const controls = useAnimation();

      useEffect(() => {
        if (isInView) {
          controls.start("visible");
        }
      }, [isInView, controls]);
      
      return (
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: delay * 0.15 }}
          className="bg-gray-800/60 p-6 rounded-xl shadow-2xl border border-gray-700/70 hover:border-green-500/70 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full"
        >
          <div className="p-4 bg-green-500/10 rounded-full mb-4 text-green-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
      );
    };

    const FeaturesSection = ({ benefits }) => {
      return (
        <SectionWrapper id="features" className="bg-gray-900/50">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-100">Everything You Need for <span className="text-green-400">Ultimate Entertainment</span></h2>
            <p className="text-lg text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">Streamline IPTV offers a premium viewing experience with features designed for sports fans, movie lovers, and binge-watchers. Plus, get access to a massive library of on-demand content from top OTT platforms.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <FeatureCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} delay={index} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      );
    };

    export default FeaturesSection;
