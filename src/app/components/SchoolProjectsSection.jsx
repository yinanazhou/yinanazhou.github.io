'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SchoolProjectCard from './SchoolProjectCard';
import SCHOOL_PJ_CONTENT from '../content/schoolProjectContent';

const SchoolProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex justify-center mt-6">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="rounded-xl w-full mt-3 card-bg py-6 px-2 md:px-6 shadow-md shadow-neutral-500/30"
      >
        <h1 className="w-full txt-color-primary text-center text-4xl font-bold pb-6">
          School Projects
        </h1>
        <ul ref={ref} className="grid gap-8">
          {SCHOOL_PJ_CONTENT.map((project, index) => (
            <li key={index}>
              <SchoolProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SchoolProjectsSection;
