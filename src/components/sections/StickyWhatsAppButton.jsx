import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react'; // Changed from MessageCircle
import { motion, AnimatePresence } from 'framer-motion';

const StickyWhatsAppButton = () => {
  const WHATSAPP_LINK = "https://wa.me/13158854633?text=Hi%2C%20I%20want%20to%20activate%20IPTV%20now";
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button className="glowing-cta rounded-full p-4 h-16 w-16 shadow-xl flex items-center justify-center sm:hidden !py-4 !px-4"> {/* Ensured padding for mobile sticky */}
            <MessageSquare className="h-8 w-8 text-black" />
            <span className="sr-only">Chat Now on WhatsApp</span>
          </Button>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default StickyWhatsAppButton;