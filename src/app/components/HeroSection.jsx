'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { useState } from 'react';
import { Courier_Prime } from 'next/font/google';

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const HeroSection = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <section className={`${courier_prime.className} content-center  h-[75vh]`}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start order-last sm:order-first"
        >
          <h1
            className={`${courier_prime.className} txt-color-primary mb-4 text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bold`}
          >
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
              className="text-sm border rounded-full px-2 w-8 h-8 flex items-center
                                justify-center bg-neutral-600
                               text-neutral-100 dark:bg-neutral-200
                               dark:text-neutral-900 transition-transform hover:scale-110 mb-6"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              <HiMail className="transform scale-125" />
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
          initial={{ opacity: 0, x: '100vw' }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Move to the normal position with full opacity
          transition={{ duration: 1 }} // Duration of the "fly in" effect
          whileHover={{ scale: 1.05 }} // Optional: slightly scale up on hover for interaction
          className="col-span-5 place-self-center mt-0 mb-4 sm:mb-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }} // Up and down floating effect
            transition={{
              y: {
                repeat: Infinity, // Infinite floating
                repeatType: 'loop', // Loop the animation
                duration: 3, // Floating speed
                ease: 'easeInOut', // Smooth easing
              },
            }}
            className="rounded-full bg-primary-800 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative shadow-lg shadow-primary-800/50"
          >
            <img
              src="/images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={220}
              height={220}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
