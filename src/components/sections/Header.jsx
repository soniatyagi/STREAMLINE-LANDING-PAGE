import React from 'react';
    import { Button } from '@/components/ui/button';
    import { MessageSquare } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Header = ({ whatsAppUrl, heroItemVariants, ctaButtonVariants }) => {
      return (
        <header className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center text-center overflow-hidden p-4 md:p-8 pt-20 md:pt-0">
          <div className="absolute inset-0 z-0">
            <img 
              className="object-cover w-full h-full opacity-10"
              alt="Futuristic entertainment technology background with glowing lines"
             src="https://images.unsplash.com/photo-1633832694722-596af9c55964" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
            className="relative z-10 container mx-auto max-w-3xl space-y-5 sm:space-y-7"
          >
            <motion.h1
              variants={heroItemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500"
            >
              Stop Overpaying for Cable. <br className="hidden md:block" /> Get 5000+ Channels in Stunning HD, UHD & 4K.
            </motion.h1>
            <motion.p
              variants={heroItemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-xl mx-auto"
            >
              Live Sports Worldwide, Blockbuster Movies, Your Favorite Series, 10-Day Catch-Up & 24/7 Friendly Support.
            </motion.p>
            <motion.div variants={heroItemVariants}>
              <Button
                size="lg"
                onClick={() => window.open(whatsAppUrl, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg sm:text-xl py-4 px-10 rounded-lg shadow-lg shadow-green-500/40 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-70 mt-4"
                as={motion.button}
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MessageSquare className="mr-3 h-6 w-6" /> Activate Your Free Trial via WhatsApp
              </Button>
            </motion.div>
            <motion.p variants={heroItemVariants} className="text-sm text-gray-500 pt-2">
              *Limited Time Offer - Instant Activation*
            </motion.p>
          </motion.div>
        </header>
      );
    };

    export default Header;