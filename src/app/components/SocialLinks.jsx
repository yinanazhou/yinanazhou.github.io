import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react';

const SocialLinks = () => {
  // Dark mode state and toggle logic
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is preferred in system or local storage
    let isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode == null) {
      isDarkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setDarkMode(isDarkMode);
    updateDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    updateDarkMode(newDarkMode);
  };

  const updateDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="socials flex p-4 md:p-0 md:flex-row md:space-x-8 space-x-4 mt-0 justify-items-end">
      <Link
        href="https://github.com/yinanazhou"
        target="_blank"
        className="content-center group"
      >
        <FaGithub
          className="txt-color-primary group-hover:scale-110 transition-transform"
          size={30}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yinan-zhou-ana/"
        target="_blank"
        className="content-center group"
      >
        <FaLinkedin
          className="txt-color-primary group-hover:scale-110 transition-transform"
          size={30}
        />
      </Link>
      <button
        onClick={toggleDarkMode}
        className="text-sm border rounded-full px-2 w-8 h-8 content-center
                   justify-items-center bg-neutral-800 hover:bg-neutral-800
                   text-neutral-100 dark:bg-neutral-200 dark:hover:bg-neutral-200
                   dark:text-neutral-900 hover:scale-110 transition-transform"
      >
        {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
      </button>
    </div>
  );
};

export default SocialLinks;
