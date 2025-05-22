import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, animationType = "fadeInUp" }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    fadeIn: { opacity: 0 },
    fadeInVisible: { opacity: 1 },
    slideLeft: { opacity: 0, x: -50 },
    slideLeftVisible: { opacity: 1, x: 0 },
    slideRight: { opacity: 0, x: 50 },
    slideRightVisible: { opacity: 1, x: 0 },
  };

  let initial, animate, transition;

  switch (animationType) {
    case "fadeIn":
      initial = "fadeIn";
      animate = "fadeInVisible";
      transition = { duration: 0.8, ease: "easeOut" };
      break;
    case "slideLeft":
      initial = "slideLeft";
      animate = "slideLeftVisible";
      transition = { duration: 0.7, ease: "easeOut" };
      break;
    case "slideRight":
      initial = "slideRight";
      animate = "slideRightVisible";
      transition = { duration: 0.7, ease: "easeOut" };
      break;
    case "fadeInUp":
    default:
      initial = "hidden";
      animate = "visible";
      transition = { duration: 0.6, delay: 0.2, ease: "easeOut" };
      break;
  }

  return (
    <motion.section
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
