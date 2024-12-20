import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NavLink = ({ href, title, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = isActive
    ? 'text-primary-600 dark:text-primary-400'
    : 'txt-color-primary';

  return (
    <div className="relative inline-block">
      <Link
        href={href}
        className={`${textColorClass} block relative hover:scale-110`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
        <motion.div
          className="absolute -bottom-0.5 left-0 h-0.5 gradient-bg"
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
