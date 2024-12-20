'use client';
import React, { useTransition, useState } from 'react';
import AboutTag from './AboutTab';
import SK_CONTENT from '../content/skillContent';

const AboutSection = () => {
  const [tab, setTab] = useState('coding');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div
        className="mt-4 md:mt-0 text-left flex flex-col h-full
      border border-neutral-300  border-l-transparent border-r-transparent border-b-transparent
      dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent dark:border-b-transparent"
      >
        <h2 className="w-full txt-color-primary text-center lg:justify-start text-4xl font-bold mt-16 mb-4">
          About Me
        </h2>

        <div className="flex flex-col md:gap-2 lg:flex-row justify-center sm:justify-between">
          <span className="basis-1/2 text-center lg:text-justify text-sm md:text-lg lg:text-sm xl:text-lg mt-8 pt-4 px-6 sm:px-0 txt-color-p">
            I do research in music<sup>*</sup> for school;
            <br />
            I develop interactive and responsive web applications for bread;
            <br />
            And I tend a bar in Griffintown occasionally for fun.
            <br />
            <br />
            <sup>*</sup>If you are interested, my research interests are Large
            Language Models and Computational Feminist Analysis in lyrics :)
          </span>

          <div className="basis-1/2 flex justify-center lg:justify-end pt-12 lg:pt-0">
            <div>
              <div className="flex flex-row justify-center lg:justify-start mt-8">
                <AboutTag
                  selectTab={() => handleTabChange('coding')}
                  active={tab === 'coding'}
                >
                  {' '}
                  Coding{' '}
                </AboutTag>
                <AboutTag
                  selectTab={() => handleTabChange('framework')}
                  active={tab === 'framework'}
                >
                  {' '}
                  Framework{' '}
                </AboutTag>
                <AboutTag
                  selectTab={() => handleTabChange('toolkit')}
                  active={tab === 'toolkit'}
                >
                  {' '}
                  Toolkit{' '}
                </AboutTag>
                <AboutTag
                  selectTab={() => handleTabChange('language')}
                  active={tab === 'language'}
                >
                  {' '}
                  Language{' '}
                </AboutTag>
                <AboutTag
                  selectTab={() => handleTabChange('research')}
                  active={tab === 'research'}
                >
                  {' '}
                  Research Interest{' '}
                </AboutTag>
              </div>
              <div className="mt-4 lg:mt-8 txt-color-p min-h-[300px] text-sm md:text-lg lg:text-sm xl:text-lg">
                {SK_CONTENT.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
