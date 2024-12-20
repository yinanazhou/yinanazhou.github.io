import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const AboutTag = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="hover:scale-105">
      <p
        className={`mr-3 font-semibold txt-color-secondary text-xs md:text-lg lg:text-sm xl:text-lg`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="h-0.5 gradient-bg"
      ></motion.div>
    </button>
  );
};

export default AboutTag;
