"use client";

import { useState } from 'react';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import Footer from './Footer';
import ChristmasLanding from './ChristmasLanding';
import { AnimatePresence, motion } from 'framer-motion';

export default function ClientHome({ lastEditDate }) {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLanding && (
          <ChristmasLanding key="landing" onEnter={() => setShowLanding(false)} />
        )}
      </AnimatePresence>
      
      {!showLanding && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900"
        >
          <Navbar />
          <div className="container mt-24 mx-auto px-4 lg:px-16 py-4">
            <HeroSection />
            <AboutSection />
            <SkillSection />
          </div>
          <Footer date={lastEditDate} />
        </motion.main>
      )}
    </>
  );
}

