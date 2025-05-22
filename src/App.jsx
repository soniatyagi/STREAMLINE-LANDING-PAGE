import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import { motion } from 'framer-motion';

    import Header from '@/components/sections/Header';
    import FeaturesSection from '@/components/sections/FeaturesSection';
    import HowItWorksSection from '@/components/sections/HowItWorksSection';
    import PricingSection from '@/components/sections/PricingSection';
    import TestimonialsSection from '@/components/sections/TestimonialsSection';
    import VisualsSection from '@/components/sections/VisualsSection';
    import Footer from '@/components/sections/Footer';
    
    import { Tv2, Zap, Film, PlayCircle, Clapperboard } from 'lucide-react';


    function App() {
      const whatsAppUrl = "https://wa.me/13158854633?text=Hi%2C%20I%20want%20to%20activate%20IPTV%20now";

      const heroItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } },
      };
      
      const ctaButtonVariants = {
        hover: { 
          scale: 1.05, 
          boxShadow: "0px 0px 20px rgba(52, 211, 153, 0.7)",
          transition: { yoyo: Infinity, duration: 0.8 }
        },
        tap: { scale: 0.95 }
      };

      const benefits = [
        { icon: <Tv2 size={36} />, title: "All Your Devices", description: "Smart TV, Firestick, Android & iOS compatible." },
        { icon: <Zap size={36} />, title: "Buffer-Free", description: "Smooth streaming with daily content updates." },
        { icon: <Film size={36} />, title: "Premium Quality", description: "Enjoy 3D & 4K UHD sports and movies." },
        { icon: <PlayCircle size={36} />, title: "10-Day Playback", description: "Never miss a show with our catch-up feature." },
        { icon: <Clapperboard size={36} />, title: "Vast OTT Library", description: "Access content from Netflix, Prime, Hotstar, Hulu, Sony Liv & 50+ more OTT platforms." },
      ];

      const testimonials = [
        { name: "Alex R.", quote: "The channel variety is insane! And the 4K quality for sports is a game-changer. Best IPTV service I've used.", rating: 5, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
        { name: "Maria S.", quote: "Finally, an IPTV that just works. No buffering during big games and the 10-day playback is super useful.", rating: 5, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956" },
        { name: "John B.", quote: "Excellent customer support and the yearly plan is great value. Highly recommend Streamline IPTV!", rating: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
      ];


      return (
        <>
          <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 selection:bg-green-500 selection:text-black overflow-x-hidden font-inter">
            
            <Header 
              whatsAppUrl={whatsAppUrl}
              heroItemVariants={heroItemVariants}
              ctaButtonVariants={ctaButtonVariants}
            />

            <FeaturesSection 
              benefits={benefits} 
            />

            <HowItWorksSection 
              heroItemVariants={heroItemVariants}
            />
            
            <PricingSection 
              whatsAppUrl={whatsAppUrl}
              ctaButtonVariants={ctaButtonVariants}
            />

            <TestimonialsSection 
              testimonials={testimonials}
              heroItemVariants={heroItemVariants}
            />
            
            <VisualsSection 
              heroItemVariants={heroItemVariants}
            />

            <Footer 
              whatsAppUrl={whatsAppUrl}
              ctaButtonVariants={ctaButtonVariants}
            />
          </div>
          <Toaster />
        </>
      );
    }

    export default App;
