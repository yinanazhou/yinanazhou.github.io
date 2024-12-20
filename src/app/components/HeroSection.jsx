'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { useState } from 'react';

const HeroSection = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <section className="content-center  h-[75vh]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start order-last sm:order-first"
        >
          <h1 className="txt-color-primary mb-4 text-4xl xl:text-6xl 2xl:text-7xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text gradient-bg pb-0">
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Yinan',
                1000,
                'ML Researcher',
                1000,
                'Software Developer',
                1000,
                'Bartender',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="txt-color-p text-base mb-6 lg:text-xl">
            A bartender who does not want to be a Machine Learning researcher is
            not a good software developer.
          </p>
          <div className="flex space-x-2 lg:space-x-4 justify-center sm:justify-start">
            <div
              className="text-sm border rounded-full px-2 w-8 h-8 content-center
                                justify-items-center bg-neutral-600
                               text-neutral-100 dark:bg-neutral-200
                               dark:text-neutral-900 transition-transform hover:scale-110 mb-6"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              <HiMail size={20} />
            </div>
            <motion.div
              className="txt-color-p text-base sm:text-lg mb-6 lg:text-xl overflow-hidden"
              initial={{ width: 0 }}
              animate={{
                width: isEmailHovered ? 'max-content' : 0,
                transition: {
                  duration: 0.3,
                  delay: isEmailHovered ? 0 : 1,
                  ease: 'easeInOut',
                },
              }}
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              yinan.zhou@mail.mcgill.ca
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-0 mb-4 sm:mb-0"
        >
          <div className="rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] shadow-lg shadow-neutral-500/50">
            <img
              src="/images/profile.jpeg"
              alt="hero image"
              className="object-fill rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
