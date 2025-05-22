import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, Tv, Smartphone, Wifi, Clock, DollarSign } from 'lucide-react';

const benefits = [
  { icon: <Tv className="h-8 w-8 text-brand-green" />, text: 'Works on Android, iOS, Firestick, Smart TVs' },
  { icon: <Clock className="h-8 w-8 text-brand-green" />, text: '10-Day Catch-up' },
  { icon: <Wifi className="h-8 w-8 text-brand-green" />, text: '5000+ HD Channels & OTT Content' },
  { icon: <Smartphone className="h-8 w-8 text-brand-green" />, text: '24x7 Customer Support' },
  { icon: <DollarSign className="h-8 w-8 text-brand-green" />, text: '$12.99/month only (billed yearly)' }, // Updated price
];

const BenefitsSection = () => {
  return (
    <AnimatedSection className="section-padding bg-brand-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why Choose <span className="text-brand-green">Streamline Services?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animationType="fadeInUp" className="h-full">
              <div className="glassmorphism-card p-6 rounded-lg h-full flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-brand-green/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <p className="text-lg font-semibold text-white">{benefit.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
