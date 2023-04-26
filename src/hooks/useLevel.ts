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
  sinPositions?: number[][];
  cosPositions?: number[][];
  tanPositions?: number[][];
  title: string;
  descriptions: IDescriptionPart[];
  starScores: [number, number, number];
  maxAmplitude: number;
  maxVerticalShift: number;
  maxAngularFrequency: number;
  highAccuracy?: boolean;
}

export const levels: Level[] = [
  {
    title: 'Velkommen til Aftermath',
    descriptions: [
      {type: 'text', content: 'Det er plassert mynter rundt omkring på spillbrettet. Målet ditt er å lage sinusfunksjoner som samler inn alle myntene på færrest mulig forsøk.'},
      {type: 'image', content: 'infomodal/space.gif'},
      {type: 'text', content: 'Trykk på mellomrom (Space) for å skyte, og trykk på krysset øverst til venstre for å lukke denne boksen'},
      {type: 'text', content: ''},
      {type: 'text', content: 'Lykke til!'},
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
    title: 'Amplitude',
    descriptions: [
      {type: 'text', content: 'Det gikk bra!'},
      {type: 'text', content: 'Nå skal vi se på amplitude. Amplitude er avstanden mellom topp- og bunnpunktene til sinusfunksjonen, altså hvor høy funksjonen er. Denne verdien kan du endre ved å trykke på pilene som vist under.'},
      {type: 'image', content: 'infomodal/amplitude.gif'},
      {type: 'text', content: 'Prøv å treffe alle myntene med ett skudd for å få full poengsum.'},
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
    title: 'Amplitude og enhetssirkel',
    descriptions: [
      {type: 'text', content: 'Du er sikkert kjent med enhetssirkelen og hvordan den kan brukes til å finne sinus og cosinus av vinkler.'},
      {type: 'image', content: 'infomodal/amplitude-unitcircle.gif'},
      {type: 'text', content: 'Amplituden til en sinusfunksjon kan du tenke på som radius til enhetssirkelen.'},
    ],
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
    title: 'Vertikal forskyvning',
    descriptions: [
      { type: "text", content: "Akkurat som med ikke-trigonometriske funksjoner, kan vi også forskyve trigonometriske funksjoner opp og ned. Dette kalles ofte vertikal forskyvning."},
      { type: "image", content: "infomodal/vertical-shift.gif" },
    ],
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
    title: 'Mer om enhetssirkelen',
    descriptions: [
      {type: 'text', content: "Sinus av en vinkel er også definert som forholdet mellom motstående katet og hypotenusen i en rettvinklet trekant."},
      {type: 'image', content: "infomodal/sinus-katet-hypotenus.gif"},
      {type: 'text', content: "I en enhetssirkel er hypotenusen alltid lik 1 (det er derfor vi kaller den ENHETSsirkel), og dermed er sinus lik lengden til motstående katet."},
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
    title: 'Pass på bombene!',
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
  {
    title: 'Cosinus!',
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
      [3.14 * 2, 0],
    ],
    cosPositions: [[3.14 * 1.5, 2]],
    starScores: [10, 200, 280],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Level 9',
    descriptions: [],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      // [Math.PI * 0.5, 0],
      [3.14 * 0.75, 1],
      [3.14, 0],
      [3.14 * 1.25, -1],
    ],
    cosPositions: [[Math.PI * 0.5, 0]],
    starScores: [10, 200, 280],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Level 10',
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
  {
    title: 'Level 11', // Solution: 1cos(2x)+2
    descriptions: [],
    showPowerBar: true,
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [Math.PI* 2, -6],
      [Math.PI* 2, -5.5],
      [Math.PI* 2, -5],
      [Math.PI* 2, -4.5],
      [Math.PI* 2, -4],
      [Math.PI* 2, -2],
      [Math.PI* 2, -1.5],
      [Math.PI* 2, -1],
      [Math.PI* 2, -0.5],
      [Math.PI* 2, 0],
      [Math.PI* 2, 0.5],
      [Math.PI* 2, 1],
      [Math.PI* 2, 1.5],
      [Math.PI* 2, 2],
      [Math.PI* 2, 2.5],
      [Math.PI* 2, 3],
      [Math.PI* 2, 3.5],
      [Math.PI* 2, 4],
      [4.1588 + Math.PI * 4, 0],
      [5.7296 + Math.PI * 4, 0],
      [11 + Math.PI * 2, -2],
      [11 + Math.PI * 2.5, -2],
    ],
    coinPositions: [
      [Math.PI * 0.5, -1],
      [Math.PI * 1.5, -1],
      [4.1588 + Math.PI * 2, 0],
      [5.7296 + Math.PI * 2, 0],
      [7.3004 + Math.PI * 2, 0],
      [11, -2],
      [11 + Math.PI * 0.5, -2],
      [11 + Math.PI * 1, -2],
    ],
    starScores: [10, 200, 280],
    cosPositions: [
      [Math.PI * 1, -2],
      [Math.PI * 1, -1.5],
      [Math.PI * 1, -1],
      [Math.PI * 1, -0.5],
      [Math.PI * 1, 0],
      [Math.PI * 1, 0.5],
      [Math.PI * 1, 1],
      [Math.PI * 1, 1.5],
      [Math.PI * 1, 2],
    ],
    tanPositions: [[Math.PI * 3, -3]],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Arcsin', // Solution: 2.0 arcsin(0.1x) - 1.0
    descriptions: [],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [0.1 * 10, -0.1 * 2 + 1],
      [0.2 * 10, -0.201 * 2 + 1],
      [0.3 * 10, -0.304 * 2 + 1],
      [0.4 * 10, -0.412 * 2 + 1],
      [0.5 * 10, -0.524 * 2 + 1],
      [0.6 * 10, -0.644 * 2 + 1],
      [0.7 * 10, -0.775 * 2 + 1],
      [0.8 * 10, -0.927 * 2 + 1],
      [0.9 * 10, -1.112 * 2 + 1],
      [0.98 * 10, -1.37 * 2 + 1],
    ],
    sinPositions: [
      // [0.845 * 10, -1],
    ],
    cosPositions: [
    ],
    starScores: [10, 200, 280],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
    highAccuracy: true,
  },













  {
    title: 'Level 13',
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
  {
    title: 'Level 14',
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
  {
    title: 'Level 15',
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
  {
    title: 'Level 16',
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
  {
    title: 'Level 17',
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
