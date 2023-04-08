export interface IDescriptionPart {
  type: 'text' | 'image' | 'lottieAnimation' | 'svgAnimation';
  content: string;
}
export interface ILevelData {
  title: string;
  descriptions: IDescriptionPart[];
}

export interface ILevelDataMap {
  [key: number]: ILevelData;
}

type Level = {
  showPowerBar: boolean;
  cellSize: number;
  origoPosition: {
    x: number;
    y: number;
  };
  bombPositions: number[][];
  coinPositions: number[][];
  title: string;
  descriptions: IDescriptionPart[];
  starScores: [number, number, number];
  maxAmplitude: number;
  maxVerticalShift: number;
  maxAngularFrequency: number;
}

export const levels: Level[] = [
  {
    title: 'Sinus Funksjon Intro',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: 'lottie/sine-loader.json'},
    ],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [Math.PI * 0.5, -1],
      [3.14 * 1, 0],
      [3.14 * 1.5, 1],
      [3.14 * 2, 0],
      [3.14 * 2.5, -1],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'What is Amplitude?',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: 'lottie/sine-loader.json'},
    ],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [Math.PI * 0.5, -2],
      [3.14 * 1, 0],
      [3.14 * 1.5, 2],
      [3.14 * 2, 0],
      [3.14 * 2.5, -2],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Amplitude',
    descriptions: [],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [3.14 * 0.5, 0],
      [3.14 * 1, 0],
      [3.14 * 2.5, 0],
      [3.14 * 3, 0],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 5,
    maxAngularFrequency: 3,
  },
  {
    title: 'Vertical Shift',
    descriptions: [],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [3.14 * 0.5, -1.5],
      [3.14 * 1, -1.5],
      [3.14 * 2.5, -1.5],
      [3.14 * 3, -1.5],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Vertical Shift & Amplitude',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: 'lottie/sine-loader.json'},
    ],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [Math.PI * 0.5, -2],
      [3.14 * 1, -1],
      [3.14 * 1.5, 0],
      [3.14 * 2, -1],
      [3.14 * 2.5, -2],
      [3.14 * 3, -1],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Neagtive Vertical Shift',
    descriptions: [],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [Math.PI * 0.5, 0],
      [3.14 * 1, 1],
      [3.14 * 1.5, 2],
      [3.14 * 2, 1],
      [3.14 * 2.5, 0],
      [3.14 * 3, 1],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Watch out fot the bombs!',
    descriptions: [],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [[3.14 * 2, 1]],
    coinPositions: [
      [Math.PI * 0.5, 0],
      [3.14 * 1, 1],
      [3.14 * 1.5, 2],
    ],
    starScores: [10, 200, 280],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
]

export default function useLevel(index: number) {
  const zeroIndexed = index - 1;
  if (zeroIndexed > levels.length) return null;
  return levels[zeroIndexed];
}
