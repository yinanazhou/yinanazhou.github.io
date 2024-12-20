'use client';
import React, { useState, useRef } from 'react';
import WorkCard from './WorkCard';
import CardTag from './CardTag';
import { motion, useInView } from 'framer-motion';
import WORK_CONTENT from '../content/workContent';

const WorkSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredWork = WORK_CONTENT.filter((work) => work.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="work" className="min-h-[80vh]">
      <div className="txt-color-primary flex flex-row justify-center items-center gap-4 py-6">
        <CardTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <CardTag
          onClick={handleTagChange}
          name="Tech"
          isSelected={tag === 'Tech'}
        />
        <CardTag
          onClick={handleTagChange}
          name="Media"
          isSelected={tag === 'Media'}
        />
        <CardTag
          onClick={handleTagChange}
          name="Bar"
          isSelected={tag === 'Bar'}
        />
      </div>
      <ul ref={ref} className="grid gap-6 mb-8">
        {filteredWork.map((work, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <WorkCard
              key={work.id}
              title={work.title}
              company={work.company}
              date={work.date}
              location={work.location}
              description={work.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;
