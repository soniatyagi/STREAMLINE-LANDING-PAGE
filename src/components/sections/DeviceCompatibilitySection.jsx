import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Tv, Smartphone, Laptop, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const devices = [
  { name: 'Smart TV', icon: <Tv className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-brand-green" /> },
  { name: 'Firestick', icon: <MonitorSmartphone className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-brand-green" /> },
  { name: 'Mobile', icon: <Smartphone className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-brand-green" /> },
  { name: 'Laptop', icon: <Laptop className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-brand-green" /> },
];

const DeviceCompatibilitySection = () => {
  return (
    <AnimatedSection className="section-padding bg-brand-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Works <span className="text-brand-green">Everywhere</span> You Watch
        </h2>
        <div className="overflow-x-auto pb-4 sm:overflow-visible">
          <motion.div 
            className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center items-center space-x-4 sm:space-x-6 md:space-x-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {devices.map((device, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col items-center p-3 sm:p-4 glassmorphism-card rounded-lg flex-shrink-0 w-32 sm:w-36 md:w-40"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                {device.icon}
                <p className="mt-3 text-base sm:text-lg font-semibold text-white">{device.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DeviceCompatibilitySection;