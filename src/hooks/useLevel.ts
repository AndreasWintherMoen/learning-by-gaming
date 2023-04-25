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
    title: 'Level 8',
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
    title: 'Level 9',
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
    title: 'Level 11',
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
    title: 'Level 12',
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
