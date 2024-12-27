'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AW_CONTENT from '../content/awardContent';

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref} className="flex justify-center mt-6">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="rounded-xl w-full mt-3 card-bg py-6 px-0 md:px-6 shadow-md shadow-neutral-500/30"
      >
        <h1 className="font-noto w-full txt-color-primary text-center text-4xl font-bold pb-6">
          Awards & Scholarships
        </h1>
        <div className="items-center">
          <ul className="grid gap-8 txt-color-secondary">
            {AW_CONTENT.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AwardsSection;
