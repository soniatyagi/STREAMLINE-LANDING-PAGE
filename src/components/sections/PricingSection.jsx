import React, { useEffect, useRef } from 'react';
    import { Button } from '@/components/ui/button';
    import { MessageSquare } from 'lucide-react';
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

    const PricingSection = ({ whatsAppUrl, ctaButtonVariants }) => {
      return (
        <SectionWrapper id="pricing" className="bg-gray-900/50">
          <div className="container mx-auto max-w-2xl text-center p-6 md:p-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-green-500/30">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-green-400">Unlock Premium Access Today!</h2>
            <p className="text-lg text-gray-300 mb-6">Experience the best IPTV service at an unbeatable price.</p>
            <div className="my-8">
              <p className="text-5xl sm:text-6xl font-black text-white mb-1">Just $12.99<span className="text-2xl sm:text-3xl text-gray-400">/Month*</span></p>
            </div>
            <p className="text-md text-gray-400 mb-8 max-w-md mx-auto">Includes all 5000+ channels, HD/4K/UHD quality, 10-day playback, multi-device support, access to Netflix, Amazon Prime, Hotstar, Hulu, Sony Liv & 50+ OTT platforms, and 24/7 customer service.</p>
            <Button
              size="lg"
              onClick={() => window.open(whatsAppUrl, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-black font-bold text-xl sm:text-2xl py-5 px-12 rounded-lg shadow-xl shadow-green-500/50 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
              as={motion.button}
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <MessageSquare className="mr-3 h-7 w-7" /> Claim This Offer on WhatsApp
            </Button>
            <p className="text-xs text-gray-500 mt-4">*Billed monthly or choose our yearly plan for extra savings ($160/year). Price shown in USD.</p>
          </div>
        </SectionWrapper>
      );
    };

    export default PricingSection;