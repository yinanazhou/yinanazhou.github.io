'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import EducationCard from './EducationCard';
import EDUCATION_CONTENT from '../content/educationContent';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref} className="flex justify-center">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3 }}
        className="rounded-xl w-full mt-3 card-bg py-6 px-2 md:px-6 shadow-md shadow-neutral-500/30"
      >
        <h1 className="txt-color-primary text-center text-4xl font-bold pb-6">
          Education
        </h1>
        <ul className="grid gap-8 mb-8">
          {EDUCATION_CONTENT.map((education, index) => (
            <li key={index}>
              <EducationCard
                key={education.id}
                university={education.university}
                degree={education.degree}
                date={education.date}
                location={education.location}
                description={education.description}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default EducationSection;
