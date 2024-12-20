'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VT_CONTENT from '../content/volunteerContent';

const VolunteerSection = () => {
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
        <h1 className="w-full txt-color-primary text-center text-4xl font-bold pb-6">
          Volunteer
        </h1>
        <div className="items-center">
          <ul className="grid gap-8 list-outside list-disc px-3 txt-color-secondary">
            {VT_CONTENT.map((volunteer, index) => (
              <div key={index} className="">
                <div className="header flex flex-col mb-4">
                  <div className="first-line flex flex-col lg:flex-row justify-between txt-color-primary">
                    <h5 className="text-xl font-semibold">{volunteer.title}</h5>
                    <h5 className="text-xl font-semibold">{volunteer.date}</h5>
                  </div>
                  <div className="second-line flex flex-col lg:flex-row justify-between txt-color-secondary">
                    <h6 className="text-lg italic">{volunteer.company}</h6>
                    <h6 className="text-lg italic">{volunteer.location}</h6>
                  </div>
                </div>
                <div className="txt-color-secondary md:text-justify">
                  {volunteer.description}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default VolunteerSection;
