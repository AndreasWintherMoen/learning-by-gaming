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
}

export const levels: Level[] = [
  {
    title: 'Sinus Funksjon Intro',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ],
    showPowerBar: false,
    cellSize: 80,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [3.14 * 4, 0],
    ],
    coinPositions: [
      [3.14 * 0.5, -1],
      [3.14 * 1, 0],
      [3.14 * 1.5, 1],
      [3.14 * 2, 0],
      [3.14 * 2.5, -1],
      [3.14 * 3, 0],
      [3.14 * 3.5, 1],
    ],
  },
  {
    title: 'Amplitude Intro',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ],
    showPowerBar: false,
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [3.14 * 4, 0],
    ],
    coinPositions: [
      [3.14 * 0.5, -2],
      [3.14 * 1, 0],
      [3.14 * 1.5, 2],
      [3.14 * 2, 0],
      [3.14 * 2.5, -2],
      [3.14 * 3, 0],
      [3.14 * 3.5, 2],
      [3.14 * 4.5, -2],
      [3.14 * 5, 0],
      [3.14 * 5.5, 2],
      [3.14 * 6, 0],
      [3.14 * 6.5, -2],
    ],
  },
  {
    title: 'Level 3',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ],
    showPowerBar: false,
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [[0, 0]],
    coinPositions: [
      [3.14 * 0.5, -3],
      [3.14 * 1, -1],
      [3.14 * 1.5, 1],
      [3.14 * 2, -1],
      [3.14 * 2.5, -3],
      [3.14 * 3, -1],
      [3.14 * 3.5, 1],
      [3.14 * 4, -1],
      [3.14 * 4.5, -3],
      [3.14 * 5, -1],
      [3.14 * 5.5, 1],
      [3.14 * 6, -1],
      [3.14 * 6.5, -3],
    ]
  },
  {
    title: 'Level 4',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ],
    showPowerBar: true,
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [[0, 0]],
    coinPositions: [
      [3.14 * 0.5 /2, -2],
      [3.14 * 1 /2, 0],
      [3.14 * 1.5 /2, 2],
      [3.14 * 2 /2, 0],
      [3.14 * 2.5 /2, -2],
      [3.14 * 3 /2, 0],
      [3.14 * 3.5 /2, 2],
      [3.14 * 4 /2, 0],
      [3.14 * 4.5 /2, -2],
      [3.14 * 5 /2, 0],
      [3.14 * 5.5 /2, 2],
      [3.14 * 6 /2, 0],
      [3.14 * 6.5 /2, -2],
    ]
  },
  {
    title: 'Level 5',
    descriptions: [
      {type: 'text', content: 'Trig functions like sine and cosine have periodic graphs which we called Sinusoidal Graph, or Sine wave.'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:932/format:webp/0*qtpAmBFyFAV_40YH.png'},
      {type: 'text', content: 'Every period of sine wave is a whole unit circle:'},
      {type: 'image', content: 'https://miro.medium.com/v2/resize:fit:800/0*JSIcq8SNHMnUTkv2.gif'},
      {type: 'lottieAnimation', content: '../assets/lottie/sine-loader.json'},
    ],
    showPowerBar: true,
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [[3.14 * 0.5 /2, -2]],
    coinPositions: [
      [3.14 * 1 /2 - 1, 0],
      [3.14 * 1.5 /2 - 1, 2],
      [3.14 * 2 /2 - 1, 0],
      [3.14 * 2.5 /2 - 1, -2],
      [3.14 * 3 /2 - 1, 0],
      [3.14 * 3.5 /2 - 1, 2],
      [3.14 * 4 /2 - 1, 0],
      [3.14 * 4.5 /2 - 1, -2],
      [3.14 * 5 /2 - 1, 0],
      [3.14 * 5.5 /2 - 1, 2],
      [3.14 * 6 /2 - 1, 0],
      [3.14 * 6.5 /2 - 1, -2],
    ]
  },
];

export default function useLevel(index: number) {
  const zeroIndexed = index - 1;
  if (zeroIndexed > levels.length) return null;
  return levels[zeroIndexed];
}
