import React from 'react';
import { motion } from 'framer-motion';
const FloatingCircle = ({ size, top, left = 0, xValue = 900 }) => {
  const circleSize = `${size}px`;
  const circleTop = `${top}px`;
  const circleLeft = `${left}px`;
  const circleXValue = xValue;
  return (
    <>
      <motion.div
        style={{
          position: 'absolute',
          width: circleSize,
          height: circleSize,
          left: circleLeft,
          top: circleTop,
          background: '#FFFFFF',
          opacity: 0.16,
          borderRadius: '50%',
        }}
        animate={{ x: circleXValue }}
        transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
      />
    </>
  );
};

export default FloatingCircle;
