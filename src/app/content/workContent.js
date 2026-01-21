const WORK_CONTENT = [

  {
    id: 11,
    tag: ['All', 'Tech'],
    title: 'Software Developer',
    company:
      'Distributed Digital Music Archives & Libraries Lab (DDMAL), McGill University',
    date: 'May 2021 - Present',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Led development of{' '}
            <a
              href="https://github.com/DDMAL/Neon"
              className="link"
              target="_blank"
            >
              Neon
            </a>, a browser-based music score editor built in vanilla TypeScript, delivering interactive features such as zooming, dragging, highlighting, and editing under an Agile/Scrum workflow. Reduced manual correction time by 50%+ for end users.
            {' '}<a
              href="https://github.com/DDMAL/Neon/wiki/Instructions#using-neon"
              className="link"
              target="_blank"
            >
              [Demo Videos]
            </a>
          </span>
        </li>
        <li>
          <span>
            Implemented engraving and editing toolkit in the {' '}<a
              href="https://github.com/DDMAL/Verovio"
              className="link"
              target="_blank"
            >
              Verovio
            </a>{' '}
            (C++) codebase to enable real-time SVG rendering and
            interactive editing for the notation system used by Neon.
          </span>
        </li>
        <li>
          <span>
            Built{' '}
            <a
              href="https://github.com/DDMAL/Cress"
              className="link"
              target="_blank"
            >
              Cress
            </a>{' '}in TypeScript,an table-like tool for mapping glyphs to MEI, and fixed UI and algorithms for the Optical Music Recognition website{' '}
            <a
              href="https://github.com/DDMAL/Rodan"
              className="link"
              target="_blank"
            >
              Rodan
            </a>{' '}
            in Python and JavaScript.
          </span>
        </li>
        <li>
          <span>
            Designed and implemented a fully responsive web UI for {' '}
            <a
              href="https://github.com/DDMAL/VIM"
              className="link"
              target="_blank"
            >
              UMIL
            </a>, a multilingual instrument-lexicon platform, using TypeScript, Vite, Bootstrap, Django, PostgreSQL, and Solr with a focus on usability and accessibility.
          </span>
        </li>
        <li>
          <span>
            Integrated Google Analytics and Google Tag Manager to support product usage analysis.
          </span>
        </li>
        <li>
          <span>
            Established CI/CD pipelines with GitHub Actions for automated formatting, testing, link checking, rebasing, and scheduled jobs, improving code quality and deployment reliability.
          </span>
        </li>
        <li>
          <span>
            Deployed staging/production services with Docker and Nginx, including email verification workflows with rate limiting via AWS SMTP.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 10,
    tag: ['All', 'Tech'],
    title: 'Frontend Developer',
    company:
      'Trinity College London',
    date: 'Dec. 2025 - Jan. 2026',
    location: 'United Kingdom (Remote)',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Owned end-to-end development of an interactive React + TypeScript score visualization component, delivering a
            responsive overlay system for learner feedback in production.
          </span>
        </li>
        <li>
          <span>
            Designed robust state management for async loading and annotation filtering, enabling reliable highlights,
            shadow notes, and color-coded cues.
          </span>
        </li>
        <li>
          <span>
            Optimized performance with memoized event processing and resize-safe reflow for smooth interaction at scale.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 9,
    tag: ['All', 'Tech'],
    title: 'Software Developer',
    company:
      'Vortexpert Inc.',
    date: 'Aug. 2025 - Sep. 2025',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Built a real-time dashboard with React and TypeScript, leveraging Redis pub/sub to broadcast updates via
            Socket.IO to a centralized state store.
          </span>
        </li>
        <li>
          <span>
            Developed the global store using React&apos;s useSyncExternalStore pattern for concurrent-safe subscriptions,
            incorporating runtime Zod validation to ensure data consistency, state deduplication to minimize unnecessary
            re-renders, and error boundaries to enhance UI resilience.
          </span>
        </li>
        <li>
          <span>
            Implemented automated tests with Jest + React Testing Library, simulating real-time push events to verify state
            updates and UI behavior.
          </span>
        </li>
      </ul>
    ),
  },
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
            Built prototypes and REST APIs for music applications, including audio-to-score alignment in Sibelius and music
            structure segmentation in Pro Tools.
          </span>
        </li>
        <li>
          <span>
            Integrated machine learning models into user-facing workflows, bridging research prototypes and production tools
            by incorporating product-specific context to optimize algorithm behavior for real-world scenarios.
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
      'Digital and Cognitive Musicology Lab (DCML), École Polytechnique Fédérale de Lausanne (EPFL) ',
    date: 'Mar. 2025 - May 2025',
    location: 'Switzerland (Remote)',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Proposed and implemented improved score annotation visualizations and UI/UX for the interactive Schenkerian
            analysis application
            {' '}<a
              href="https://github.com/DCMLab/reductive_analysis_app/tree/develop"
              className="link"
              target="_blank"
            >
              MuseReduce
            </a>{' '}, using vanilla JavaScript, SASS, D3.js, and Vite, significantly enhancing overall
            user experience.
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
    date: 'Mar. 2022 - Mar. 2023',
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
            Built ML models and data pipelines in Python and MATLAB for audio-based health applications.
          </span>
        </li>
        <li>
          <span>
            Authored deliverables, and collaborated with hardware and real-time developers for product prototyping.
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
    location: 'Heilongjiang, China',
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
    location: 'Jilin, China',
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
    location: 'Beijing, China',
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
