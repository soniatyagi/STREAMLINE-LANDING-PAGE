import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "How does IPTV work?",
    answer: "IPTV (Internet Protocol Television) delivers television content over internet protocol networks. Instead of traditional satellite or cable, you stream channels directly through your internet connection to your device."
  },
  {
    question: "Will it work on my Firestick?",
    answer: "Yes! Streamline IPTV is compatible with Amazon Firestick, Fire TV, Android TV boxes, Smart TVs (Samsung, LG, etc.), Android & iOS mobile devices, computers, and many other IPTV-compatible devices."
  },
  {
    question: "Can I watch sports in 4K?",
    answer: "Absolutely! We offer a wide range of sports channels in HD, Ultra HD, and stunning 4K quality, ensuring you get the best viewing experience for live events."
  },
  {
    question: "Is Netflix included?",
    answer: "Our service provides access to a vast library of live TV channels and on-demand content. While direct Netflix login isn't part of the package, we offer access to many popular OTT platforms and a huge selection of movies and series similar to what you find on Netflix and other streaming services."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, we offer 24x7 customer support. You can reach out to us via WhatsApp or email, and our dedicated team will assist you with any queries or setup help you might need."
  }
];

const FaqSection = () => {
  return (
    <AnimatedSection className="section-padding bg-brand-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked <span className="text-brand-green">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="mb-4 glassmorphism-card !border-b-0">
                <AccordionTrigger className="px-6 text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FaqSection;