'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-neutral-800 dark:text-neutral-100 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 pb-0">
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Yinan',
                1000,
                'ML Researcher',
                1000,
                'Web Developer',
                1000,
                'Bartender',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p> */}
          <div className="flex space-x-2">
            <div
              className="text-sm border rounded-full px-2 w-8 h-8 content-center
                               justify-items-center bg-neutral-600
                               text-neutral-100 dark:bg-neutral-200
                               dark:text-neutral-900 transition-transform"
            >
              <HiMail size={20} />
            </div>
            <span className="text-neutral-600 dark:text-neutral-200 text-base sm:text-lg mb-6 lg:text-xl">
              yinan.zhou@mail.mcgill.ca
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full"
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
