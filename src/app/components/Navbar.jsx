'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import MenuOverlay from './MenuOverlay';
import { Limelight } from 'next/font/google';
import SocialLinks from './SocialLinks';

const limelight = Limelight({
  subsets: ['latin'],
  weight: ['400'],
});

const navLinks = [
  {
    title: 'Work',
    path: '/work',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Academic',
    path: '/academic',
  },
];

const Navbar = ({ page }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="fixed mx-auto font-bold top-0 left-0 right-0 z-10 bg-neutral-100 dark:bg-neutral-900 bg-opacity-100
    border border-neutral-300  border-l-transparent border-r-transparent border-t-transparent
      dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent dark:border-t-transparent"
    >
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
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
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={page === link.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={'/'}
          className={`text-2xl md:text-5xl text-neutral-900 dark:text-neutral-100 hover:scale-110 ${limelight.className}`}
        >
          YINAN
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <SocialLinks />
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
