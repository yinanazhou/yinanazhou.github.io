const WORK_CONTENT = [
  {
    id: 8,
    tag: ['All', 'Tech'],
    title: 'RADLab AI Research Intern',
    company: 'Avid Technology',
    date: 'Fall 2024',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Explored recent Music Structure Segmentation and Beat Detection
            models, migrating the company-provided DSP method from MATLAB to{' '}
            Python as baseline, resulting in a 7.70% improvement in downbeat
            detection F-Measure with a Machine Learning (ML) model.
          </span>
        </li>
        <li>
          <span>
            Optimized the ML model pipeline, achieving a 71.54% reduction in
            computational execution time, and enhanced the model to integrate
            additional application-specific information for better performance.
          </span>
        </li>
        <li>
          <span>
            Implemented the solution as a REST API with Flask for production
            use, and developed two prototypes integrating the optimized model
            with Sibelius and ProTools, addressing two distinct use cases.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 7,
    tag: ['All', 'Tech'],
    title: 'Software Developer',
    company:
      'Distributed Digital Music Archives & Libraries Lab (DDMAL), McGill University',
    date: 'May 2021 – Present',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Led a team of three in the development of a music score editor{' '}
            <a
              href="https://github.com/DDMAL/Neon"
              className="link"
              target="_blank"
            >
              Neon
            </a>{' '}
            using MEI/MusicXML. Implemented front-end interface with TypeScript,
            editor toolkit customization to
            <a
              href="https://github.com/DDMAL/Verovio"
              className="link"
              target="_blank"
            >
              Verovio
            </a>{' '}
            library in C++, database with IndexedDB, E2E tests with Cypress,
            resulting in more than 50% reduction in correcting time per folio.
          </span>
        </li>
        <li>
          <span>
            Enhanced front-end functionality of an Optical Music Recognition
            website{' '}
            <a
              href="https://github.com/DDMAL/Rodan"
              className="link"
              target="_blank"
            >
              Rodan
            </a>{' '}
            with JavaScript and Marionette, and resolved issues in different
            apps using Python.
          </span>
        </li>
        <li>
          <span>
            Built an MEI mapping website{' '}
            <a
              href="https://github.com/DDMAL/Cress"
              className="link"
              target="_blank"
            >
              Cress
            </a>{' '}
            and the{' '}
            <a
              href="https://github.com/DDMAL/VIM"
              className="link"
              target="_blank"
            >
              UMLI
            </a>{' '}
            website. Designed and implemented the front-end interface with
            JavaScript/Typescript and Bootstrap, back-end with Django, and
            container with Docker.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    tag: ['All', 'Tech'],
    title: 'Machine Learning Developer',
    company: 'EERS Global Technologies Inc.',
    date: 'Mar. 2022 – Mar. 2023',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Configured optimal AWS SageMaker settings, and documented
            infrastructure architecture.
          </span>
        </li>
        <li>
          <span>
            Built ML models for Breathing Rate Estimation, Speech
            Intelligibility Enhancement, and Out-of-Ear Detection. Created
            pipelines in Python and MATLAB for audio pre-processing, data
            labelling, feature extraction, and automated generation of tables
            and figures.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    tag: ['All', 'Bar'],
    title: 'Lead Bartender',
    company: 'Griffintown Piano & Art Bar',
    date: 'Jun. 2024 ‐ Present',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Managed three bars within the venue, overseeing bar operations,
            staffing, and ensuring smooth service delivery.
          </span>
        </li>
        <li>
          <span>
            Led and coordinated a team of bartenders, providing training and
            guidance on performance, drink preparation, and customer service.
          </span>
        </li>
        <li>
          <span>
            Responsible for sales reporting, inventory management, and
            overseeing bar setups to ensure operational efficiency throughout
            events.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    tag: ['All', 'Bar'],
    title: 'Bartender',
    company: 'Escondite Vieux Port',
    date: 'May 2023 - Jun. 2023',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Mixed drinks, stocked supplies, and maintained clean drinkware.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    tag: ['All', 'Bar'],
    title: 'Ecole du Bar de Montreal',
    company: 'Diploma',
    date: 'Apr. 2023',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>Theory on beer, wine, spirits, liquor, and cocktails.</span>
        </li>
        <li>
          <span>Practical training on free pour and classic cocktails.</span>
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    tag: ['All', 'Media'],
    title: 'Audio and Video Engineer',
    company: 'Heilongjiang Broadcast TV Station',
    date: 'Jul. 2019 - Aug. 2019',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Responsible for the audio and video recording of eight TV programs,
            including Happy Poker Party and Essence of Longjiang.
          </span>
        </li>
        <li>
          <span>
            Responsible for the audio and video during three live broadcasts,
            including Weekend Tour of Longjiang and Golden Dreams.
          </span>
        </li>
        <li>
          <span>
            Participated in the “Heilongjiang Province Celebration of the 70th
            Anniversary of the Founding of New China” press conference and live
            broadcast.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    tag: ['All', 'Media'],
    title: 'Audio Assistant',
    company: 'Jilin People"s Broadcasting Station',
    date: 'Aug. 2018 - Sept. 2018',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Installed new orchestration system for the recording system,
            debugged recording system, and renovated the recording studio.
          </span>
        </li>
        <li>
          <span>
            Arranged and recorded the original song &quot;Happy Village
            Convention.&quot;
          </span>
        </li>
        <li>
          <span>Transcribed the song &quot;The Best Stage.&quot;</span>
        </li>
      </ul>
    ),
  },
  {
    id: 0,
    tag: ['All', 'Media'],
    title: 'Audio Editor',
    company: 'Communication University of China Radio Station',
    date: 'Mar. 2017 - Jul. 2018',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>Recorded, edited, and broadcast radio programs.</span>
        </li>
        <li>
          <span>Synchronized all programs to the online platform.</span>
        </li>
        <li>
          <span>
            Produced 38 radio programs with an average duration of 20 minutes
            each.
          </span>
        </li>
      </ul>
    ),
  },
];

export default WORK_CONTENT;
