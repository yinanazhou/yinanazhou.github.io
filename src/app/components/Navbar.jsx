'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import MenuOverlay from './MenuOverlay';
import {
  Diplomata,
  Fascinate_Inline,
  Limelight,
  Gravitas_One,
} from 'next/font/google';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import SocialLinks from './SocialLinks';

const diplomata = Diplomata({ subsets: ['latin'], weight: ['400'] });
const fascinate_inline = Fascinate_Inline({
  subsets: ['latin'],
  weight: ['400'],
});

const limelight = Limelight({
  subsets: ['latin'],
  weight: ['400'],
});
const gravitas_one = Gravitas_One({
  subsets: ['latin'],
  weight: ['400'],
});

const navLinks = [
  {
    title: 'Work',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Education',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-neutral-300 dark:border-[#33353F] font-bold top-0 left-0 right-0 z-10 bg-neutral-100 dark:bg-neutral-900 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-neutral-600 hover:text-neutral-500 dark:text-neutral-300 hover:dark:text-neutral-200 "
            >
              <HiBars3 className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded text-neutral-600 hover:text-neutral-500 dark:text-neutral-300 hover:dark:text-neutral-200 "
            >
              <HiXMark className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={'/'}
          className={`text-2xl md:text-5xl text-neutral-900 dark:text-neutral-100 ${limelight.className}`}
        >
          YINAN
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <SocialLinks />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
