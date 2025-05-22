import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Smartphone, Tv, Cast, Apple, MessageSquare } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Footer = ({ whatsAppUrl, ctaButtonVariants }) => {
      return (
        <footer className="text-center py-12 md:py-16 bg-black/70 border-t border-gray-700/50">
          <div className="container mx-auto">
            <div className="mb-8">
              <Button
                size="lg"
                onClick={() => window.open(whatsAppUrl, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg sm:text-xl py-4 px-10 rounded-lg shadow-lg shadow-green-500/40 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-70"
                as={motion.button}
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MessageSquare className="mr-3 h-6 w-6" /> Questions? Chat on WhatsApp!
              </Button>
            </div>
            <p className="text-gray-400 text-md mb-4">Works seamlessly on all your favorite devices:</p>
            <div className="flex justify-center items-center space-x-5 sm:space-x-6 mb-8">
              {[Tv, Cast, Smartphone, Apple].map((Icon, index) => (
                 <motion.div 
                    key={index}
                    whileHover={{ scale: 1.2, color: 'hsl(var(--primary))' }} 
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9 text-gray-500 transition-colors" />
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">&copy; {new Date().getFullYear()} Streamline IPTV. All Rights Reserved. <br className="sm:hidden"/>Operated by YourCompanyName Inc.</p>
            <p className="text-gray-700 text-xs mt-2">Disclaimer: Streamline IPTV provides access to publicly available content. Users are responsible for ensuring they have the rights to view content in their region.</p>
          </div>
        </footer>
      );
    };

    export default Footer;
