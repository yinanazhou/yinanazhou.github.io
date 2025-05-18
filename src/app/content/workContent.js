const WORK_CONTENT = [
  {
    id: 9,
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
            Led a team of three to develop a music score editor{' '}
            <a
              href="https://github.com/DDMAL/Neon"
              className="link"
              target="_blank"
            >
              Neon
            </a>{' '}
            in MEI using TypeScript, D3.js, IndexedDB, Cypress for E2E testing,
            webpack, and C++ (
            <a
              href="https://github.com/DDMAL/Verovio"
              className="link"
              target="_blank"
            >
              Verovio
            </a>
            ), resulting in more than 50% reduction in user correction time per
            folio.
          </span>
        </li>
        <li>
          <span>
            Fixed UI and algorithms for the Optical Music Recognition website{' '}
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
            Built{' '}
            <a
              href="https://github.com/DDMAL/Cress"
              className="link"
              target="_blank"
            >
              Cress
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/DDMAL/VIM"
              className="link"
              target="_blank"
            >
              UMIL
            </a>{' '}
            websites for digital musicology with Django, JavaScript, TypeScript,
            Bootstrap, and Docker.
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
            Migrated DSP baseline from MATLAB to Python, improved downbeat
            detection F-Measure by 7.7% with a DL model.
          </span>
        </li>
        <li>
          <span>
            Reduced ML workflow runtime by 71.5% and boosted performance using
            application-specific features.
          </span>
        </li>
        <li>
          <span>
            Deployed REST API with Flask and built prototypes for Sibelius and
            ProTools to support two use cases.
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
            Fixed bugs and improved the UI of a music analysis app{' '}
            <a
              href="https://github.com/DCMLab/reductive_analysis_app/tree/develop"
              className="link"
              target="_blank"
            >
              MuseReduce
            </a>{' '}
            using JavaScript, SCSS, D3.js, and Vite.
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
            Built ML models and pipelines in Python and MATLAB for breathing
            rate estimation, speech enhancement, and out-of-ear detection.
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
