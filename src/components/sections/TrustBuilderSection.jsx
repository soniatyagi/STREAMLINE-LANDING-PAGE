import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const reviews = [
  {
    name: "Alex P.",
    rating: 5,
    text: "Absolutely love Streamline Services! The channel selection is massive and quality is top-notch. Support team is super responsive too!",
    altText: "Positive customer review displayed on a smartphone screen with chat bubbles."
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Best streaming service I've used. Works flawlessly on my Firestick. The 10-day catch-up is a lifesaver. Highly recommend!",
    altText: "Glowing five-star rating review for Streamline Services shown in a testimonial format."
  },
  {
    name: "Mike D.",
    rating: 4,
    text: "Great value for money. So many sports channels in HD! Setup was easy. Sometimes a channel buffers but it's rare.",
    altText: "Customer feedback screenshot with positive comments about Streamline Services."
  }
];

const TrustBuilderSection = () => {
  return (
    <AnimatedSection className="section-padding bg-brand-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Trusted by <span className="text-brand-green">Thousands</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Used by <span className="font-bold text-brand-green">3000+</span> happy customers worldwide!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} animationType="fadeInUp" className="h-full">
              <Card className="p-6 h-full flex flex-col justify-between transform hover:shadow-2xl transition-shadow duration-300 glassmorphism-card">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-black font-bold text-xl mr-3">
                      {review.name.substring(0,1)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gray-600 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                </div>
                <div className="mt-auto aspect-[16/9] rounded-md overflow-hidden border border-white/10 shadow-md">
                   <img  
                    className="w-full h-full object-cover"
                    alt={review.altText}
                    src="https://images.unsplash.com/photo-1683754436053-a4fc96739f7f" />
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TrustBuilderSection;