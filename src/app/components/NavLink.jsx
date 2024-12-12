import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NavLink = ({ href, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <Link
        href={href}
        className="block txt-color-primary relative hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
        <motion.div
          className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-600"
          initial={{ width: 0 }}
          animate={{
            width: isHovered ? '100%' : 0,
            transition: {
              duration: 0.3,
              ease: 'easeInOut',
            },
          }}
        />
      </Link>
    </div>
  );
};

export default NavLink;
