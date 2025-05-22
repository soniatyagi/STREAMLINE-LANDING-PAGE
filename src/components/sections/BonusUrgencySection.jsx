import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Clock, MessageSquare } from 'lucide-react'; // Added MessageSquare
import { motion } from 'framer-motion';

const BonusUrgencySection = () => {
  const WHATSAPP_LINK = "https://wa.me/13158854633?text=Hi%2C%20I%20want%20to%20claim%20my%20free%20trial%20now!";
  return (
    <AnimatedSection className="section-padding bg-gradient-to-r from-brand-green to-green-400 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            className="bg-black/80 p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl"
          >
            <AlertTriangle className="h-12 w-12 sm:h-16 sm:w-16 text-brand-green mx-auto mb-4 sm:mb-6 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              <span className="text-brand-green">Free Trial</span> Ending Soon – Claim Today!
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
              Don't miss out! Only <span className="font-bold text-brand-green text-xl sm:text-2xl">15 slots</span> available today for our exclusive trial.
            </p>
            <div className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 text-brand-green" />
              <span>TODAY ONLY!</span>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button className="bg-white text-brand-blue-dark font-bold py-4 px-6 sm:py-4 sm:px-8 text-base sm:text-lg rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 w-full sm:w-auto"> {/* Increased mobile padding */}
                <MessageSquare className="mr-2 h-5 w-5 sm:h-6 sm:w-6" /> {/* Added icon */}
                Claim Your Free Trial Now!
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BonusUrgencySection;