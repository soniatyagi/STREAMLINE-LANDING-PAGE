import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react'; // Changed from MessageCircle

const StickyBrandingBar = () => {
  const WHATSAPP_LINK = "https://wa.me/13158854633?text=Hi%2C%20I%20want%20to%20activate%20IPTV%20now";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-blue-dark/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl md:text-3xl font-bold font-display text-white">
              Streamline<span className="text-brand-green">Services</span>
            </a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="glowing-cta hidden sm:inline-flex items-center !px-4 !py-3 text-sm md:!px-6 md:!py-3 md:text-base"> {/* Increased mobile padding (py-3) */}
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat Now
            </Button>
             <Button variant="ghost" size="icon" className="sm:hidden text-brand-green hover:text-brand-green-dark !p-3"> {/* Increased padding for icon button */}
              <MessageSquare className="h-7 w-7" />
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default StickyBrandingBar;