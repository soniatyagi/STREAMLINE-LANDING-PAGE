import React, { useEffect, useRef } from 'react';
    import { Star } from 'lucide-react';
    import { motion, useAnimation, useInView } from 'framer-motion';

    const SectionWrapper = ({ children, className = "", id }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.15 });
      const mainControls = useAnimation();

      useEffect(() => {
        if (isInView) {
          mainControls.start("visible");
        }
      }, [isInView, mainControls]);

      return (
        <motion.section
          id={id}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`py-12 md:py-20 ${className}`}
        >
          {children}
        </motion.section>
      );
    };

    const TestimonialsSection = ({ testimonials, heroItemVariants }) => {
      return (
        <SectionWrapper id="testimonials">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-100">Loved by <span className="text-green-400">Viewers Like You</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/60 p-6 rounded-xl shadow-lg border border-gray-700/70 flex flex-col"
                  variants={heroItemVariants}
                  transition={{delay: index * 0.15}}
                >
                  <div className="flex items-center mb-4">
                    <img  src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
                    <div>
                      <h4 className="font-semibold text-gray-200">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i} size={16} className="text-gray-600" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm italic flex-grow">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      );
    };

    export default TestimonialsSection;