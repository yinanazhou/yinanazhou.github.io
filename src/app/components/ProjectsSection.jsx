'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import CardTag from './CardTag';
import { motion, useInView } from 'framer-motion';
import PJ_CONTENT from '../content/projectContent';

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = PJ_CONTENT.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="min-h-[80vh]">
      <div className="txt-color-primary flex flex-row justify-center items-center gap-4 py-6">
        <CardTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <CardTag
          onClick={handleTagChange}
          name="Dev"
          isSelected={tag === 'Dev'}
        />
        <CardTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === 'Research'}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
