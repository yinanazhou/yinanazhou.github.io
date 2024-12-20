const SCHOOL_PJ_CONTENT = [
  {
    id: 0,
    title:
      'MUMT 621 Multimodal Music Emotion Recognition Using Convolutional Neural Network',
    description: (
      <p>
        This project explores the performance of multimodal learning on Music
        Emotion Recognition. Unimodal and bimodal methods on audio and lyrical
        features were built and compared. Both middle fusion and late fusion
        were applied for bimodal methods. This result demonstrates that the
        combination of two feature domains can improve the MER performance.
      </p>
    ),
    gitUrl: 'https://github.com/yinanazhou/Multimodal-Music-Emotion',
  },
  {
    id: 1,
    title: 'MUMT 501 Dereverberation on Music Signals',
    description: (
      <p>
        This project implements a block-based dereverberation algorithm. The
        hyperparameter settings are explored on a singing voice recording.
        Moreover, the algorithm is also implemented on a short clip of a
        symphonic music piece by Mozart. It is found that this algorithm has
        limited effect on signals with high reverberation. The hyperparameter
        setting for high reverberation extraction is also discussed.
      </p>
    ),
    gitUrl: 'https://github.com/yinanazhou/Dereverberation',
  },
  {
    id: 2,
    title:
      'MUMT 618 Realization and Comparison on Ukulele Sound Synthesis Models',
    description: (
      <p>
        This project implements both Karplus-Strong algorithm and digital
        waveguide model to synthesize ukulele sound. A system is then built to
        play MIDI files with the resulting sound of two models.
      </p>
    ),
    gitUrl: 'https://github.com/yinanazhou/ukulele-sound-synthesis',
  },
  {
    id: 3,
    title: 'MUMT 605 Cepstral Analysis of Audio Signals',
    description: (
      <p>
        This project introduces the basic concepts of cepstrum and cepstrogram.
        Their implementations in pitch estimation, spectral envelope estimation,
        and audio feature extraction are also covered.
      </p>
    ),
    gitUrl: 'https://github.com/yinanazhou/cepstral-analysis',
  },
  {
    id: 4,
    title:
      'College Students Innovation and Entrepreneurship Training Program in Automatic Classification of Music Emotion Based on Machine Learning',
    description: (
      <ul className="list-style">
        <li>Scraped MIDI files on YouTube with music emotion labels.</li>
        <li>
          Extracted MFCC, chords, and other features from music fragments.
        </li>
        <li>
          Trained deep neural network models to get the output value; calculated
          error and updated model parameters to reduce error.
        </li>
      </ul>
    ),
    gitUrl: null,
  },
  {
    id: 5,
    title:
      'Scientific Research Camp on School Bullying Detection Based on Pattern Recognition at Harbin Institute of Technology',
    description: (
      <ul className="list-style">
        <li>
          Preprocessed motion and speech data using techniques including wavelet
          filtering, pre-emphasis, windowing, and Fourier transform.
        </li>
        <li>
          Performed feature extraction, filtering, and dimensionality reduction
          on motion and speech data using quartile box charts and PCA
          algorithms.
        </li>
        <li>Classified data using KNN, GMM, and decision trees.</li>
      </ul>
    ),
    gitUrl: null,
  },
];

export default SCHOOL_PJ_CONTENT;
