import React from 'react';
import { Limelight } from 'next/font/google';

const limelight = Limelight({
  subsets: ['latin'],
  weight: ['400'],
});

const Footer = ({ date }) => {
  return (
    <footer
      className="footer mt-10 flex justify-center border z-10
      bg-neutral-100 dark:bg-neutral-900
    border-neutral-300 border-l-transparent border-r-transparent
    dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent"
    >
      <div className="container px-3 py-4 flex justify-between items-center ">
        <div
          href={'/'}
          className={`text-2xl lg:text-4xl text-neutral-900 dark:text-neutral-100 ${limelight.className}`}
        >
          YINAN
        </div>
        <p className="font-mono text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
          &mdash; {date} &mdash;
        </p>
        <p className="text-xs md:text-base text-neutral-900 dark:text-neutral-100">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
