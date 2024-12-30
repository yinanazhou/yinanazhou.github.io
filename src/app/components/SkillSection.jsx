'use client';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SK_CONTENT from '../content/skillContent';

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [multipliers, setMultipliers] = useState({ x: 0, y: 0 }); // Start with 0 to avoid initial jump

  useLayoutEffect(() => {
    function updateMultipliers() {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        let newMultipliers;
        if (width < 640) {
          // sm
          newMultipliers = { x: 4, y: 8 };
        } else if (width < 768) {
          // md
          newMultipliers = { x: 4, y: 6 };
        } else if (width < 1024) {
          // lg
          newMultipliers = { x: 4, y: 4 };
        } else {
          // xl and above
          newMultipliers = { x: 6, y: 4 };
        }

        setMultipliers(newMultipliers);
      }
    }

    // Run immediately on mount
    updateMultipliers();

    // Add resize listener
    window.addEventListener('resize', updateMultipliers);

    // Cleanup
    return () => window.removeEventListener('resize', updateMultipliers);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col" id="about">
      <div className="mt-4 md:mt-0 text-left flex flex-col flex-1 border border-neutral-300 border-l-transparent border-r-transparent border-b-transparent dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent dark:border-b-transparent mb-16">
        <h2 className="w-full font-noto txt-color-primary text-center text-4xl font-bold mt-16 mb-4">
          Skills
        </h2>
        <div
          ref={ref}
          className="relative h-[80vh] w-full mx-auto text-primary-800 dark:text-primary-400 font-bold"
        >
          {/* Coordinate System Labels */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Center Plus */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                +
              </div>
              {/* Labels */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
                ← Framework →
              </div>
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2">
                ← Language →
              </div>
              {/* Vertical Labels */}
              <div className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2">
                <div className="transform -rotate-90 whitespace-nowrap">
                  ← Web →
                </div>
              </div>
              <div className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2">
                <div className="transform rotate-90 whitespace-nowrap">
                  ← Toolkit →
                </div>
              </div>
            </div>
          </div>

          {/* Animated Skills */}
          {SK_CONTENT.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute w-10 h-10 md:w-16 md:h-16 top-1/2 left-1/2"
              initial={{
                x: '-50%',
                y: '-50%',
                opacity: 0,
              }}
              animate={
                isInView && multipliers.x !== 0
                  ? {
                      x: `calc(${skill.x}% * ${multipliers.x} - 50%)`,
                      y: `calc(${-skill.y}% * ${multipliers.y} - 50%)`,
                      opacity: 1,
                    }
                  : {
                      x: '-50%',
                      y: '-50%',
                      opacity: 0,
                    }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
                type: 'spring',
                bounce: 0.25,
              }}
            >
              <motion.div
                className="flex flex-col items-center justify-center txt-color-p"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <img
                  src={skill.iconPath}
                  alt={`${skill.name} icon`}
                  className="w-6 h-6 md:w-10 md:h-10 object-contain"
                />
                <span className="text-sm mt-1 text-center">{skill.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
