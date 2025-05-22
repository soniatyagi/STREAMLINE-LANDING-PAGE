import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { MessageSquare, CheckCircle } from 'lucide-react'; // Changed from MessageCircle

const PlanHighlightsSection = () => {
  const WHATSAPP_LINK = "https://wa.me/13158854633?text=Hi%2C%20I%20want%20to%20claim%20this%20offer%20now!";
  
  const features = [
    "5000+ channels",
    "HD/4K/UHD quality",
    "10-day playback",
    "Multi-device support",
    "Netflix, Amazon Prime, Hotstar, Hulu, Sony Liv & 50+ OTT platforms",
    "24/7 customer service"
  ];

  return (
    <AnimatedSection className="section-padding bg-brand-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto glassmorphism-card p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-brand-green">
            Unlock Premium Access Today!
          </h2>
          <p className="text-center text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
            Experience the best IPTV service at an unbeatable price.
          </p>
          
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">Just $12.99</span>
            <span className="text-2xl sm:text-3xl text-gray-300">/Month*</span>
          </div>
          
          <ul className="space-y-3 mb-8 sm:mb-10 text-sm sm:text-base text-gray-300">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-green mr-3 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button className="glowing-cta-big w-full sm:w-auto !px-6 !py-4 text-base sm:text-lg md:!py-5"> {/* Increased mobile padding */}
                <MessageSquare className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Claim This Offer on WhatsApp
              </Button>
            </a>
          </div>
          
          <p className="text-center text-xs text-gray-400 mt-6 sm:mt-8">
            *Billed yearly plan for extra savings. Price shown in USD.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PlanHighlightsSection;