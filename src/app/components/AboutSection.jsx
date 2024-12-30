'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col" id="about">
      <motion.div
        className="mt-4 md:mt-0 text-left flex flex-col flex-1
      border border-neutral-300  border-l-transparent border-r-transparent border-b-transparent
      dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent dark:border-b-transparent mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="w-full font-noto txt-color-primary text-center text-4xl font-bold mt-16 mb-4">
          About Me
        </h2>

        <div className="flex flex-col lg:w-[50vw] flex-1 justify-center mx-auto pb-16">
          <span className="text-center text-sm md:text-lg lg:text-sm xl:text-lg mt-8 pt-4 md:px-6 px-0 txt-color-p">
            I do research in music<sup>*</sup> for school;
            <br />
            I develop interactive and responsive web applications for bread;
            <br />
            And I tend a bar in Griffintown occasionally for fun.
          </span>
          <span className="text-center text-sm md:text-lg lg:text-sm xl:text-lg mt-8 pt-4 md:px-6 px-0 txt-color-p">
            <sup>*</sup>If you are interested, my research interests are Large
            Language Models and Computational Feminist Analysis in lyrics :)
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
