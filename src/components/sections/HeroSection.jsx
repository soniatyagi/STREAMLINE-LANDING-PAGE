import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react'; // Changed from MessageCircle
import AnimatedSection from '@/components/AnimatedSection';

const HeroSection = () => {
  const WHATSAPP_LINK = "https://wa.me/13158854633?text=Hi%2C%20I%20want%20to%20activate%20IPTV%20now";

  return (
    <AnimatedSection className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden section-padding min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover opacity-30"
          alt="Vibrant abstract image representing digital streaming and entertainment on a TV screen"
          src="https://images.unsplash.com/photo-1663570415261-507388b076ab" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-white leading-tight">
          🎉 Get <span className="text-brand-green">5000+</span> Channels and <span className="text-brand-green">50+</span> OTT platform Content in HD, Ultra HD & 4K
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
          Live Sports | Global Movies | Netflix content | Amazon Prime and Hulu content | 50+ other OTT platform | 10-Day Playback | 24x7 Support
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block">
          <Button className="glowing-cta-big text-base sm:text-lg md:text-xl inline-flex items-center !px-6 !py-4 md:!px-8 md:!py-5"> {/* Increased mobile padding */}
            <MessageSquare className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            Activate Your Free Trial Now via WhatsApp
          </Button>
        </a>
        <p className="mt-4 text-sm text-brand-green italic font-semibold"> {/* Changed color */}
          *Limited Time Offer - Instant Activation*
        </p>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;