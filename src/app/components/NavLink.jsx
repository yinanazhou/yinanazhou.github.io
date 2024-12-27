import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import JumpingLetters from './JumpingLetter';

const NavLink = ({ href, title, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = isActive
    ? 'text-primary-700 dark:text-primary-600'
    : 'txt-color-primary';

  const letterAnimation = {
    initial: { y: 0 }, // Starting position
    hover: (i) => ({
      y: [5, -10, 0], // Jump up and return
      transition: {
        delay: i * 0.1, // Stagger the jump by index
        duration: 0.5, // Total duration of the animation
        ease: 'easeInOut', // Smooth easing
      },
    }),
  };
  return (
    <div className="relative inline-block">
      <Link
        href={href}
        className={`${textColorClass} block relative hover:scale-110 font-noto`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title.split('').map((char, index) => (
          <motion.span
            key={index}
            custom={index} // Pass the index for staggered animation
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            variants={letterAnimation}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </Link>
    </div>
  );
};

export default NavLink;
