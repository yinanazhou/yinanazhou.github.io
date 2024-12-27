import React from 'react';
import { motion } from 'framer-motion';

const JumpingLetters = ({ text }) => {
  const letters = text.split('');
  return (
    <div className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          whileHover={{
            y: -10,
            transition: { duration: 0.3, delay: index * 0.05 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default JumpingLetters;
