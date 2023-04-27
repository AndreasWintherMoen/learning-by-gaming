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
    starScores: [180, 220, 300],
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
    starScores: [160, 200, 220],
    maxAmplitude: 3,
    maxVerticalShift: 5,
    maxAngularFrequency: 3,
  },
  {
    title: 'Vertikal forskyvning',
    descriptions: [
      { type: "text", content: "Akkurat som med ikke-trigonometriske funksjoner, kan vi også forskyve trigonometriske funksjoner opp og ned. Dette kalles ofte vertikal forskyvning."},
      { type: "image", content: "infomodal/vertical-shift.gif" },
      { type: "text", content: "" },
      { type: "text", content: "Forresten! Du kan når som helst trykke R for å restarte nivået du er på." },
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
    starScores: [160, 200, 220],
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
    starScores: [260, 300, 375],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Kahoot!',
    descriptions: [
      { type: "text", content: "Visste du at Aftermath er laget i samarbeid med Alf Inge Wang, som også veiledet utviklerne av Kahoot?" },
      { type: "image", content: "infomodal/Kahoot-Logo.png" },
      { type: "text", content: "Målet vårt er å modernisere matematikkundervisning på tilsvarende måte som Kahoot har modernisert undervisning generelt." },
    ],
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
    starScores: [260, 300, 375],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Se opp for bombene!',
    descriptions: [
      { type: "text", content: "Okay, nå blir det litt vanskeligere! I stedet for å trykke på mellomrom må du nå holde inne mellomrom for å lade opp sinuskurven." },
      { type: "image", content: "infomodal/powerbar.gif" },
      { type: "text", content: "Pass på at du ikke skyter for hardt!" },
    ],
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
    starScores: [100, 135, 165],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Cosinus',
    descriptions: [
      { type: "text", content: "Husker du fra tidligere at Sinus av en vinkel er forholdet mellom motstående katet og hypotenusen i en rettvinklet trekant?" },
      { type: "text", content: "Hint: Du kan gå tilbake til tidligere lærekort ved å trykke på pilen nederst til venstre" },
      { type: "text", content: "Cosinus er tilsvarende definert som forholdet mellom hosliggende katet og hypotenusen." },
      { type: "image", content: "infomodal/cos-katet-hypotenus.gif" },
      { type: "text", content: "Noen av nivåene i Aftermath har cosinus-mynter. Hvis du treffer en slik mynt med en sinus-funksjon blir den omgjort til en cosinus-funksjon fra og med den x-verdien." },
      { type: "image", content: "infomodal/cos-coin.gif" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [Math.PI * 0.5, 0],
      [3.14 * 1, 1],
      [3.14 * 2, 0],
    ],
    cosPositions: [[3.14 * 1.5, 2]],
    starScores: [100, 135, 165],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Mer cosinus',
    descriptions: [
      { type: "text", content: "Du kan også bytte mellom sinus og cosinus i funksjonsbyggeren." },
      { type: "image", content: "infomodal/cos-toggle.gif" },
      { type: "text", content: "Hvorfor 'hopper' startpunktet opp når vi bytter til cosinus?" },
      { type: "text", content: "Tenk på enhetssirkelen! Husk at sin(0)=0 og cos(0)=1" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      [Math.PI * 0.5, 0],
      [Math.PI * 1, 1],
      [Math.PI * 1.5, 0],
      [Math.PI * 2, -1],
      [Math.PI * 2.5, 0],
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Sinus vs Cosinus',
    descriptions: [
      { type: "text", content: "Ettersom sinus og cosinus er kontinuerlige, kan man lage en cosinus-funksjon ved å faseforskyve sinus." },
      { type: "image", content: "infomodal/sin-cos-comparison.png"},
      { type: "text", content: "I Aftermath kan du plukke opp sinus/cosinus-mynter og endre funksjonen underveis. Men hvis du treffer samme funksjon som du allerede har, så vil du fortsette med samme funksjon." },
      { type: "image", content: "infomodal/sin-cos-coins.gif" },
      { type: "text", content: "For eksempel, hvis du skyter en cosinus-funksjon og treffer en cosinus-mynt, er det akkurat som om mynten ikke var der!" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [Math.PI * 0.5, 1],
      [Math.PI * 0.5, -2],
    ],
    coinPositions: [
      [Math.PI * 1, 1],
      [Math.PI * 3, 1],
    ],
    cosPositions: [
      [Math.PI * 0.5, 0],
      [Math.PI * 0.5, -1],
      [Math.PI * 2, 1],
    ],
    starScores: [50, 70, 90],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Frekvens',
    descriptions: [
      { type: "text", content: "Den generelle sinus-formelen er vist under" },
      { type: "image", content: "infomodal/sin-formula.png" },
      { type: "text", content: "I mange sammenhenger kalles tallet k for frekvensen til funksjonen. Vi kommer tilbake til frekvensen i neste oppgave."},
      { type: "text", content: "I Aftermath kan du justere frekvensen i funksjonsboksen som vist under." },
      { type: "image", content: "infomodal/angular-frequency.gif" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [Math.PI * 0.25, 0],
      [Math.PI * 0.75, 0],
      [Math.PI * 1.25, 0],
      [Math.PI * 1.75, 0],
      [Math.PI * 2.25, 0],
      [Math.PI * 2.75, 0],
    ],
    coinPositions: [
      [Math.PI * 1, 0],
      [Math.PI * 2, 0],
      [Math.PI * 3, 0],
      [Math.PI * 0.5, 0],
      [Math.PI * 1.5, 0],
      [Math.PI * 2.5, 0],
      [Math.PI * 0.25, -1],
      [Math.PI * 1.25, -1],
      [Math.PI * 2.25, -1],
      [Math.PI * 0.75, 1],
      [Math.PI * 1.75, 1],
      [Math.PI * 2.75, 1],
    ],
    starScores: [450, 600, 920],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Mer om frekvens',
    descriptions: [
      { type: "text", content: "Frekvensen brukes ofte til å regne ut perioden (p) til funksjonen."},
      { type: "image", content: "infomodal/period-formula.png" },
      { type: "text", content: "Perioden er avstanden i x-retning fra et punkt på grafen til neste punkt der grafen er i samme svingetilstand." },
      { type: "image", content: "infomodal/period.png" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [Math.PI * 7 / 3, 0],
      [Math.PI * 7 / 3, -1],
      [Math.PI * 7 / 3, 1],
    ],
    coinPositions: [
      [Math.PI * 0.5 / 3, 0],
      [Math.PI * 1.5 / 3, 0],
      [Math.PI * 2.5 / 3, 0],
      [Math.PI * 3.5 / 3, 0],
      [Math.PI * 4.5 / 3, 0],
      [Math.PI * 2 / 3, -1],
      [Math.PI * 4 / 3, -1],
      [Math.PI * 1 / 3, 1],
      [Math.PI * 3 / 3, 1],
      [Math.PI * 5 / 3, 1],
    ],
    starScores: [200, 400, 720],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Faseforskyvning',
    descriptions: [
      { type: "text", content: "Husker du den generelle sinus-formelen fra tidligere?"},
      { type: "image", content: "infomodal/sin-formula.png" },
      { type: "text", content: "Den siste variabelen vi ikke har beskrevet er φ. Dette tallet sier noe om faseforskyvningen til funksjonen. Faseforskyvning er hvor mye grafen er forskjøvet i x-retning, og er gitt ved" },
      { type: "image", content: "infomodal/phaseshift.png" },
      { type: "text", content: "I Aftermath kan du justere φ for å flytte startspunktet til funksjonen." },
      { type: "image", content: "infomodal/phaseshift.gif" },
      { type: "text", content: "Klarer du å se hvorfor en negativ φ flytter startpunktet til høyre? 🤔" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 3,
    },
    bombPositions: [
      [Math.PI * 0, 0],
    ],
    coinPositions: [
      [Math.PI * 0.5 + 1, -2],
      [Math.PI * 1.5 + 1, 2],
      [Math.PI * 2 + 1, 0],
    ],
    sinPositions: [
      [Math.PI * 1 + 1, 0],
    ],
    starScores: [100, 130, 165],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Definisjonsområde',
    descriptions: [
      { type: "text", content: "Definisjonsområdet til en generell sinus- eller cosinus-funksjon er 〈-∞,∞〉" },
      { type: "text", content: "Kort forklart betyr det at funksjonen er definert for alle mulige verdier av x, helt fra negativ uendelig til positiv uendelig. Men i Aftermath har vi satt funksjonene til å starte på x=0. Vi har altså avgrenset definisjonsområdet til [0, ∞〉. Vi har gjort dette for å gjøre spillet mer spennende. "},
      { type: "image", content: "infomodal/phaseshift.gif" },
      { type: "text", content: "Nå har du også fått mulighet til å justere faseforskyvning gjennom k og φ. Når du faseforskyver en funksjon i Aftermath, så endrer du definisjonsområdet. I en vanlig trigonometrisk funksjon vil derimot ikke definisjonsområdet endre seg. En funksjon med definisjonsområdet 〈-∞,∞〉 vil fortsatt ha definisjonsområdet〈-∞,∞〉 etter en faseforskyvning." },
      { type: "image", content: "infomodal/phaseshift2.png" },
      { type: "text", content: "Klarer du se at funksjonen sin(x+2π)=sin(x) ? 🤔" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 3,
    },
    bombPositions: [
      [Math.PI * 0, 0],
    ],
    coinPositions: [
      [Math.PI * 0.5 + 0.5, 0],
      [Math.PI * 1 + 0.5, 0],
      [Math.PI * 1.5 + 0.5, 0],
      [Math.PI * 2 + 0.5, 0],
    ],
    starScores: [10, 200, 280],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  






  {
    title: 'Tangens',
    descriptions: [
      { type: "text", content: "Tidligere har vi definert sinus som forholdet mellom motstående katet og hypotenus, og vi har definert cosinus som forholdet mellom hosliggende katet og hypotenus. Vi har også tangens, som er definert som forholdet mellom moststående katet og hosliggende katet." },
      { type: "image", content: "infomodal/tan-katet-katet.gif" },
      { type: "text", content: "Som du kanskje husker fra tidligere oppgaver, så gjør enhetssirkelen at vi kan forenkle sinus til lengden av motstående katet og cosinus til lengden av hosliggende katet. Vi kan derfor beskrive tangens som" },
      { type: "image", content: "infomodal/tan-formula.png" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
    ],
    coinPositions: [
      [Math.PI * 0.25, -1],
      [Math.PI * 0.352, -2],
      [Math.PI * 0.648, 2],
      [Math.PI * 0.75, 1],
      [Math.PI, 0],
      [Math.PI * 1.25, -1],
      [Math.PI * 1.352, -2],
      [Math.PI * 1.648, 2],
      [Math.PI * 1.75, 1],
      [Math.PI * 2, 0],
      [Math.PI * 2.352, -2],
      [Math.PI * 2.25, -1],
    ],
    starScores: [10, 200, 280],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },



  {
    title: 'Tangens og uendelig',
    descriptions: [
      { type: "text", content: "Du så kanskje at tangens-funksjonen har en litt annen form enn sinus og cosinus?" },
      { type: "image", content: "infomodal/tans.png" },
      { type: "text", content: "For å regne ut tangens deler vi som sagt sin(x) på cos(x). Som vi har sett tidligere, så kan cos(x) være lik 0 (den er faktisk lik 0 for uendelig mange verdier av x). Og hvis vi prøver å dele noe på 0, så får vi et udefinert svar. Derfor pleier vi å si at tan(x) kun er definert for verdier av x som ikke gir cos(x)=0" },
      { type: "image", content: "infomodal/tan-infinity.png" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
    ],
    coinPositions: [
      [Math.PI * 0.25, -1],
      [Math.PI * 0.75, 1],
      [Math.PI, 0],
      [Math.PI * 1.25, -1],
      [Math.PI * 1.75, 1],
      [Math.PI * 2, 0],
      [Math.PI * 2.25, -1],
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
      x: 3,
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
]

export default function useLevel(index: number) {
  const zeroIndexed = index - 1;
  if (zeroIndexed > levels.length) return null;
  return levels[zeroIndexed];
}
