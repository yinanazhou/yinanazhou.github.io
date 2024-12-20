const EDUCATION_CONTENT = [
  // {
  //   university: 'McGill University',
  //   degree: 'Incoming Ph.D. student in Music Technology',
  //   date: '2025 Winter',
  //   location: 'Montreal, Quebec',
  //   description: '',
  // },
  {
    id: 1,
    university: 'McGill University',
    degree: 'Master of Arts in Music Technology (Thesis)',
    date: 'Sep. 2020 - Oct. 2022',
    location: 'Montreal, Quebec',
    description: (
      <ul className="list-style">
        <li>
          <span>GPA: 4.0</span>
        </li>
        <li>
          <span>
            Thesis: Music Emotion Recognition on Lyrics Using Natural Language
            Processing | Supervisor: Prof. Ichiro Fujinaga
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: 0,
    university: 'Communication University of China',
    degree: 'Bachelor of Engineering in Network Engineering',
    date: 'Sep. 2016 - Jul. 2020',
    location: 'Beijing, China',
    description: (
      <ul className="list-style">
        <li>
          <span>
            Excellent Thesis: Research on Optical Music Notation Recognition
            Based on Convolutional Neural Network
          </span>
        </li>
      </ul>
    ),
  },
];

export default EDUCATION_CONTENT;
