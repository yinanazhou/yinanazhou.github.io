const PJ_CONTENT = [
  {
    id: 0,
    title: 'Neon',
    description: (
      <p>
        Neon is a browser-based music notation editor written in JavaScript
        using the Verovio music engraving library. The editor can be used to
        manipulate digitally encoded early musical scores in square-note
        notation.
      </p>
    ),
    image: '/images/projects/neon.png',
    tag: ['All', 'Dev'],
    gitUrl: 'https://github.com/DDMAL/Neon',
    previewUrl: 'https://ddmal.music.mcgill.ca/Neon/',
  },
  {
    id: 1,
    title: 'Verovio',
    description: (
      <p>
        Verovio is a fast, portable and lightweight open-source library for
        engraving Music Encoding Initiative (MEI) music scores into SVG. My work
        focuses on the engraving and editing actions of neume notation in
        Verovio.
      </p>
    ),
    image: '/images/projects/verovio.png',
    tag: ['All', 'Dev'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'UMIL',
    description: (
      <p>
        The Universal Musical Instrument Lexicon (UMIL) is a crowd-sourcing
        website dedicated to collecting names and images of musical instruments
        from various historical periods and cultures.
      </p>
    ),
    image: '/images/projects/umil.png',
    tag: ['All', 'Dev'],
    gitUrl: 'https://github.com/DDMAL/VIM',
    previewUrl: 'https://vim.simssa.ca/',
  },
  {
    id: 3,
    title: 'Cress',
    description: (
      <p>
        Cress is an MEI mapping tool that allows users to edit MEI and validate
        it against the MEI schema. It is built using TypeScript.
      </p>
    ),
    image: '/images/projects/cress.png',
    tag: ['All', 'Dev'],
    gitUrl: 'https://github.com/DDMAL/Cress',
    previewUrl: 'https://ddmal.music.mcgill.ca/Cress/',
  },
  {
    id: 4,
    title: 'Data Analysis: Rum Market Analysis',
    description: (
      <p>
        This project built a rum dataset by scraping rumratings.com with
        BeautifulSoup and saq.com with Selenium, followed by data cleaning and
        preprocessing. It analyzed the rum market to identify trends, market
        gaps, and opportunities, and developed an interactive dashboard using
        Plotly and Dash to visualize the insights.
      </p>
    ),
    image: '/images/projects/rum.png',
    tag: ['All', 'Dev'],
    gitUrl: 'https://github.com/yinanazhou/rum-analysis',
    previewUrl: null,
  },
  {
    id: 5,
    title: 'AI Song Contest 2022',
    description: (
      <p>
        This project built a MIDI dataset of 6,500 ancient Chinese poems and
        their corresponding melodies using Optical Music Recognition software.
        It fine-tuned a submodule in the{' '}
        <a
          href="https://speechresearch.github.io/telemelody/"
          className="link"
          target="_blank"
        >
          Telemelody
        </a>{' '}
        lyrics-to-melody generation model to create melodies and collaborated
        with musicians to produce a music piece.
      </p>
    ),
    image: '/images/projects/asc.png',
    tag: ['All', 'Research'],
    gitUrl: null,
    previewUrl:
      'https://www.aisongcontest.com/participants-2022/expecto-patronum',
  },
  {
    id: 6,
    title: 'Data Scientist Salary Estimation Model',
    description: (
      <p>
        This project developed a tool to estimate data science salaries, helping
        data scientists negotiate their income. It included a client-facing API
        built with Flask. The project scraped over 500 Canadian job postings
        from Glassdoor using Python and Selenium, engineered features from job
        descriptions to quantify the value of skills like Python, Excel, AWS,
        and Spark, and optimized Linear, Lasso, Ridge, and Random Forest
        Regressors using GridSearchCV to identify the best model.
      </p>
    ),
    image: '/images/projects/ds.png',
    tag: ['All', 'Dev'],
    gitUrl: 'https://github.com/yinanazhou/ds-glassdoor',
    previewUrl: null,
  },
];

export default PJ_CONTENT;
