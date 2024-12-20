'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PB_CONTENT from '../content/publicationContent';

const PublicationsSection = () => {
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
        className="rounded-xl w-full mt-3 card-bg py-6 px-6 shadow-md shadow-neutral-500/30"
      >
        <h1 className="w-full txt-color-primary text-center text-4xl font-bold pb-6">
          Publications
        </h1>
        <div className="items-center px-3">
          <ul className="grid gap-8 list-style txt-color-secondary">
            {PB_CONTENT.map((publication, index) => (
              <li key={index}>
                <span>{publication.refs}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PublicationsSection;
