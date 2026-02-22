"use client"

import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElement = ({ children, delay = 0, className, x = 0, y = 15 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -y, 0],
        x: [0, x, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
