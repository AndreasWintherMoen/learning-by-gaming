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

type CoinPosition = {
  coordinates: [number, number],
  text: string,
}

type Level = {
  showPowerBar: boolean;
  cellSize: number;
  origoPosition: {
    x: number;
    y: number;
  };
  bombPositions: CoinPosition[];
  coinPositions: CoinPosition[];
  sinPositions?: CoinPosition[];
  cosPositions?: CoinPosition[];
  tanPositions?: CoinPosition[];
  title: string;
  descriptions: IDescriptionPart[];
  starScores: [number, number, number];
  maxAmplitude: number;
  maxVerticalShift: number;
  maxAngularFrequency: number;
  maxPhaseShift?: number;
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
      { coordinates: [Math.PI * 0.5, -1], text: '(0.5π, -1)' },
      { coordinates: [Math.PI * 1, 0], text: '(π, 0)' },
      { coordinates: [Math.PI * 1.5, 1], text: '(1.5π, 1)' },
      { coordinates: [Math.PI * 2, 0], text: '(2π, 0)' },
      { coordinates: [Math.PI * 2.5, -1], text: '(2.5π, -1)' },
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
      {type: 'text', content: 'Nå skal vi se på amplitude. Amplitude er avstanden fra funksjonens toppunkt eller bunnpunkt til likevektslinja (midten).'},
      {type: 'image', content: 'infomodal/amplitude.png'},
      {type: 'text', content: 'Denne verdien kan du endre ved å trykke på pilene som vist under.'},
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
      { coordinates: [Math.PI * 0.5, -2], text: '(0.5π, -2)' },
      { coordinates: [Math.PI * 1, 0], text: '(π, 0)' },
      { coordinates: [Math.PI * 1.5, 2], text: '(1.5π, 2)' },
      { coordinates: [Math.PI * 2, 0], text: '(2π, 0)' },
      { coordinates: [Math.PI * 2.5, -2], text: '(2.5π, -2)' },
    ],
    starScores: [180, 220, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Amplitude og enhetssirkel',
    descriptions: [
      {type: 'text', content: 'Hvis du er kjent med enhetssirkelen vet du kanskje den kan brukes til å finne sinus og cosinus av vinkler?'},
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
      { coordinates: [Math.PI * 0.5, -0.5], text: '(0.5π, -0.5)' },
      { coordinates: [Math.PI * 1, 0], text: '(π, 0)' },
      { coordinates: [Math.PI * 1.5, 0.5], text: '(1.5π, 0.5)' },
      { coordinates: [Math.PI * 2, 0], text: '(2π, 0)' },
      { coordinates: [Math.PI * 2.5, -0.5], text: '(2.5π, -0.5)' },
    ],
    starScores: [180, 220, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: '',
    descriptions: [],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      { coordinates: [Math.PI * 0.5, 0], text: '(0.5π, 0)' },
      { coordinates: [Math.PI * 1, 0], text: '(π, 0)' },
      { coordinates: [Math.PI * 2.5, 0], text: '(2.5π, 0)' },
      { coordinates: [Math.PI * 3, 0], text: '(3π, 0)' },
    ],
    starScores: [160, 190, 220],
    maxAmplitude: 3,
    maxVerticalShift: 5,
    maxAngularFrequency: 3,
  },
  {
    title: 'Vertikal forskyvning',
    descriptions: [
      { type: "text", content: "Akkurat som med ikke-trigonometriske funksjoner, kan vi også forskyve trigonometriske funksjoner opp og ned. Dette kalles ofte vertikal forskyvning."},
      { type: 'image', content: "infomodal/vertical-shift.png"},
      { type: "text", content: "Denne verdien kan du endre ved å trykke på pilene som vist under."},
      { type: "image", content: "infomodal/vertical-shift.gif" },
      { type: "text", content: "Forresten! Du kan trykke på stjernesymbolet nede til venstre for å gå tilbake til tidligere nivåer. Klarer du å få 3 stjerner på alle?" },
    ],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      { coordinates: [Math.PI * 0.5, -1.5], text: '(0.5π, -1.5)' },
      { coordinates: [Math.PI * 1, -1.5], text: '(π, -1.5)' },
      { coordinates: [Math.PI * 2.5, -1.5], text: '(2.5π, -1.5)' },
      { coordinates: [Math.PI * 3, -1.5], text: '(3π, -1.5)' },
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
      { coordinates: [Math.PI * 0.5, -2], text: '(0.5π, -2)' },
      { coordinates: [Math.PI * 1, -1], text: '(π, -1)' },
      { coordinates: [Math.PI * 1.5, 0], text: '(1.5π, 0)' },
      { coordinates: [Math.PI * 2, -1], text: '(2π, -1)' },
      { coordinates: [Math.PI * 2.5, -2], text: '(2.5π, -2)' },
      { coordinates: [Math.PI * 3, -1], text: '(3π, -1)' },
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
      { coordinates: [Math.PI * 0.5, -0.5], text: '(0.5π, -0.5)' },
      { coordinates: [Math.PI * 1, 0.5], text: '(π, 0.5)' },
      { coordinates: [Math.PI * 1.5, 1.5], text: '(1.5π, 1.5)' },
      { coordinates: [Math.PI * 2, 0.5], text: '(2π, 0.5)' },
      { coordinates: [Math.PI * 2.5, -0.5], text: '(2.5π, -0.5)' },
      { coordinates: [Math.PI * 3, 0.5], text: '(3π, 0.5)' },
    ],
    starScores: [260, 300, 375],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: '',
    descriptions: [],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      { coordinates: [Math.PI * 0.5, -1], text: '(0.5π, -1)' },
      { coordinates: [Math.PI * 1, 0.5], text: '(π, 0.5)' },
      { coordinates: [Math.PI * 1.5, 2], text: '(1.5π, 2)' },
      { coordinates: [Math.PI * 2, 0.5], text: '(2π, 0.5)' },
      { coordinates: [Math.PI * 2.5, -1], text: '(2.5π, -1)' },
      { coordinates: [Math.PI * 3, 0.5], text: '(3π, 0.5)' },
    ],
    starScores: [260, 300, 375],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Negativ Amplitude',
    descriptions: [
      {type: 'text', content: 'Når vi setter en amplitude til et negativt tall vil den starte å gå nedover fra fra origo.'},
      {type: 'image', content: 'infomodal/negative-amplitude.gif'},
    ],
    showPowerBar: false,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [],
    coinPositions: [
      { coordinates: [Math.PI * 0.5, 2], text: '(0.5π, 2)' },
      { coordinates: [Math.PI * 1, 0.5], text: '(π, 0.5)' },
      { coordinates: [Math.PI * 1.5, -1], text: '(1.5π, -1)' },
      { coordinates: [Math.PI * 2, 0.5], text: '(2π, 0.5)' },
      { coordinates: [Math.PI * 2.5, 2], text: '(2.5π, 2)' },
      { coordinates: [Math.PI * 3, 0.5], text: '(3π, 0.5)' },
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
    bombPositions: [
      { coordinates: [Math.PI * 2.5, 2], text: '(2.5π, 2)' },
    ],
    coinPositions: [
      { coordinates: [Math.PI * 0.5, 2], text: '(0.5π, 2)' },
      { coordinates: [Math.PI * 1, 0.5], text: '(π, 0.5)' },
      { coordinates: [Math.PI * 1.5, -1], text: '(1.5π, -1)' },
      { coordinates: [Math.PI * 2, 0.5], text: '(2π, 0.5)' },
    ],
    starScores: [150, 200, 230],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Cosinus',
    descriptions: [
      { type: "text", content: "Gitt en enkel cosinus og sinus funksjon kan vi grovt forklart si at cosinus starter i et topppunkt eller bunnpunkt, mens sinus starter i midten fra origo. Altså er sin(0)=0 og cos(0)=1" },
      { type: "image", content: "infomodal/cos-vs-sin.png" },
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
      { coordinates: [Math.PI * 0.5, 0], text: '(0.5π, 0)' },
      { coordinates: [Math.PI * 1, 1], text: '(π, 1)' },
      { coordinates: [Math.PI * 2, 0], text: '(2π, 0)' },
    ],
    cosPositions: [
      { coordinates: [Math.PI * 1.5, 2], text: '(1.5π, 2)' },
    ],
    starScores: [100, 135, 165],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Mer om cosinus',
    descriptions: [
      { type: "text", content: "Husker du fra tidligere at Sinus av en vinkel er forholdet mellom motstående katet og hypotenusen i en rettvinklet trekant?" },
      { type: "text", content: "Hint: Du kan gå tilbake til tidligere lærekort ved å trykke på pilen nederst til venstre" },
      { type: "text", content: "Cosinus er tilsvarende definert som forholdet mellom hosliggende katet og hypotenusen." },
      { type: "image", content: "infomodal/cos-katet-hypotenus.gif" },
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
      { coordinates: [Math.PI * 0.5, 0], text: '(0.5π, 0)' },
      { coordinates: [Math.PI * 1, 1], text: '(1π, 1)' },
      { coordinates: [Math.PI * 1.5, 0], text: '(1.5π, 0)' },
      { coordinates: [Math.PI * 2, -1], text: '(2π, -1)' },
      { coordinates: [Math.PI * 2.5, 0], text: '(2.5π, 0)' },
    ],
    starScores: [100, 200, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Sinus vs Cosinus',
    descriptions: [
      { type: "text", content: "Ettersom sinus og cosinus er kontinuerlige og uendelige, kan man lage en cosinus-funksjon ved å faseforskyve sinus." },
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
      { coordinates: [Math.PI * 0.5, 1], text: '(0.5π, 1)' },
      { coordinates: [Math.PI * 0.5, -2], text: '(0.5π, -2)' },
    ],
    coinPositions: [
      { coordinates: [Math.PI * 1, 1], text: '(π, 1)' },
      { coordinates: [Math.PI * 3, 1], text: '(3π, 1)' },
    ],
    cosPositions: [
      { coordinates: [Math.PI * 0.5, 0], text: '(0.5π, 0)' },
      { coordinates: [Math.PI * 0.5, -1], text: '(0.5π, -1)' },
      { coordinates: [Math.PI * 2, 1], text: '(2π, 1)' },
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
      { type: "text", content: "Amplituden (A) og vertikal forskyvning (d) har vi allerede beskrevet. Nå skal vi se på k."},
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
      { coordinates: [Math.PI * 0.25, 0], text: '(0.25π, 0)' },
      { coordinates: [Math.PI * 0.75, 0], text: '(0.75π, 0)' },
      { coordinates: [Math.PI * 1.25, 0], text: '(1.25π, 0)' },
      { coordinates: [Math.PI * 1.75, 0], text: '(1.75π, 0)' },
      { coordinates: [Math.PI * 2.25, 0], text: '(2.25π, 0)' },
      { coordinates: [Math.PI * 2.75, 0], text: '(2.75π, 0)' },
    ],
    coinPositions: [
      { coordinates: [Math.PI * 1, 0], text: '(π, 0)' },
      { coordinates: [Math.PI * 2, 0], text: '(2π, 0)' },
      { coordinates: [Math.PI * 3, 0], text: '(3π, 0)' },
      { coordinates: [Math.PI * 0.5, 0], text: '(0.5π, 0)' },
      { coordinates: [Math.PI * 1.5, 0], text: '(1.5π, 0)' },
      { coordinates: [Math.PI * 2.5, 0], text: '(2.5π, 0)' },
      { coordinates: [Math.PI * 0.25, -1], text: '(0.25π, -1)' },
      { coordinates: [Math.PI * 1.25, -1], text: '(1.25π, -1)' },
      { coordinates: [Math.PI * 2.25, -1], text: '(2.25π, -1)' },
      { coordinates: [Math.PI * 0.75, 1], text: '(0.75π, 1)' },
      { coordinates: [Math.PI * 1.75, 1], text: '(1.75π, 1)' },
      { coordinates: [Math.PI * 2.75, 1], text: '(2.75π, 1)' },
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
      { coordinates: [Math.PI * 7 / 3, 1], text: '(7/3π, 0)' },
      { coordinates: [Math.PI * 7 / 3, 1], text: '(7/3π, -1)' },
      { coordinates: [Math.PI * 7 / 3, 1], text: '(7/3π, 1)' },
    ],
    coinPositions: [
      { coordinates: [Math.PI * 0.5 / 3, 0], text: '(1/6π, 0)' },
      { coordinates: [Math.PI * 1.5 / 3, 0], text: '(1/2π, 0)' },
      { coordinates: [Math.PI * 2.5 / 3, 0], text: '(5/6π, 0)' },
      { coordinates: [Math.PI * 3.5 / 3, 0], text: '(7/6π, 0)' },
      { coordinates: [Math.PI * 4.5 / 3, 0], text: '(3/2π, 0)' },
      { coordinates: [Math.PI * 2 / 3, -1], text: '(2/3π, -1)' },
      { coordinates: [Math.PI * 4 / 3, -1], text: '(4/3π, -1)' },
      { coordinates: [Math.PI * 1 / 3, 1], text: '(1/3π, 1)' },
      { coordinates: [Math.PI * 3 / 3, 1], text: '(π, 1)' },
      { coordinates: [Math.PI * 5 / 3, 1], text: '(5/3π, 1)' },
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
      { type: "text", content: "Den siste variabelen vi ikke har beskrevet er φ (den greske bokstaven phi). Dette tallet sier noe om faseforskyvningen til funksjonen. Faseforskyvning er hvor mye grafen er forskjøvet i x-retning, og er gitt ved" },
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
      { coordinates: [0, 0], text: '(0, 0)' },
    ],
    coinPositions: [
      { coordinates: [Math.PI * 0.5 + 1, -2], text: '(0.5π+1, -2)' },
      { coordinates: [Math.PI * 1.5 + 1, -2], text: '(1.5π+1, 2)' },
      { coordinates: [Math.PI * 2 + 1, 0], text: '(2π+1, 0)' },
    ],
    sinPositions: [
      { coordinates: [Math.PI * 1 + 1, 0], text: '(π+1, 0)' },
    ],
    starScores: [100, 135, 165],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Definisjonsmengder',
    descriptions: [
      { type: "text", content: "Definisjonsområdet til en generell sinus- eller cosinus-funksjon er 〈-∞,∞〉" },
      { type: "text", content: "Kort forklart betyr det at funksjonen er definert for alle mulige verdier av x, helt fra negativ uendelig til positiv uendelig. Men i Aftermath har vi satt funksjonene til å starte på x=0. Vi har altså avgrenset definisjonsområdet til [0, ∞〉. Vi har gjort dette for å gjøre spillet mer spennende. "},
      { type: "image", content: "infomodal/phaseshift.gif" },
      { type: "text", content: "Nå har du også fått mulighet til å justere faseforskyvning gjennom k og φ. Når du faseforskyver en funksjon i Aftermath, så endrer du definisjonsområdet. I en vanlig trigonometrisk funksjon vil derimot ikke definisjonsområdet endre seg. En funksjon med definisjonsområdet 〈-∞,∞〉 vil fortsatt ha definisjonsområdet〈-∞,∞〉 etter en faseforskyvning." },
      { type: "image", content: "infomodal/phaseshift2.png" },
      { type: "text", content: "Klarer du se at funksjonen sin(x+2π)=sin(x) ? 🤔" },
    ],
    showPowerBar: true,
    cellSize: 80,
    origoPosition: {
      y: 0,
      x: 3,
    },
    bombPositions: [
      { coordinates: [0, 0], text: '(0, 0)' },
      { coordinates: [0.5, 0], text: '(0.5, 0)' },
      { coordinates: [1, 0], text: '(1, 0)' },
    ],
    coinPositions: [
      { coordinates: [Math.PI - 1, -0.5], text: '(π-1, -0.5)' },
      { coordinates: [Math.PI * 1.5 + 0.5, 0], text: '(2π-1, 0)' },
      { coordinates: [Math.PI * 3 - 1, 0], text: '(3π-1, 0)' },
    ],
    cosPositions: [
      { coordinates: [Math.PI * 2.5 - 1, -0.35], text: '(2.5π-1, -0.35)' },
    ],
    sinPositions: [
      { coordinates: [Math.PI, -1], text: '(π, -1)' },
    ],
    starScores: [100, 135, 165],
    maxAmplitude: 3,
    maxVerticalShift: 2,
    maxAngularFrequency: 3,
    maxPhaseShift: 1,
  },
  {
    title: 'Tangens',
    descriptions: [
      { type: "text", content: "I tillegg til sinus og cosinus har vi også tangens. Vi kommer tilbake til definisjonen i neste oppgave, men under ser du funksjonen grafisk." },
      { type: "image", content: "infomodal/tans.png" },
      { type: "text", content: "Som du kan se, har tangens en litt annen form enn sinus og cosinus. Verdimengden til sin(x) og cos(x), altså de mulige y-verdiene, er [-1,1]. Tangens går derimot helt fra -∞ til +∞." },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [2, -2],
      [3, -1],
      [4, 0],

      [Math.PI * 2.75, 1],
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
    starScores: [500, 650, 930],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },
  {
    title: 'Tangens og uendelig',
    descriptions: [
      { type: "text", content: "Tidligere har vi definert sinus som forholdet mellom motstående katet og hypotenus, og vi har definert cosinus som forholdet mellom hosliggende katet og hypotenus. Tilsvarende er tangens definert som forholdet mellom moststående katet og hosliggende katet." },
      { type: "image", content: "infomodal/tan-katet-katet.gif" },
      { type: "text", content: "Som du kanskje husker fra tidligere oppgaver, så gjør enhetssirkelen at vi kan forenkle sinus til lengden av motstående katet og cosinus til lengden av hosliggende katet. Vi kan derfor beskrive tangens som" },
      { type: "image", content: "infomodal/tan-formula.png" },
      { type: "text", content: "Men som vi så i forrige oppgave, så går tan(x) til ∞. Det er fordi cos(x) kan være lik 0 (den er faktisk lik 0 for uendelig mange verdier av x), og hvis vi prøver å dele noe på 0 så får vi et udefinert svar. Derfor pleier vi å si at tan(x) kun er definert for verdier av x som ikke gir cos(x)=0" },
      { type: "image", content: "infomodal/tan-infinity.png" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 2,
    },
    bombPositions: [
      [0, 0],
      [Math.PI * 1 - 1, -2],
    ],
    coinPositions: [
      [Math.PI * 0.5 - 1, -2],
      [Math.PI * 1 - 1, 0],
      [Math.PI * 2 - 1, 0],
      [Math.PI * 3 - 1, 0],
      [6, -1.743],
      [7.6, 2.164],
    ],
    tanPositions: [
      [Math.PI * 1.5 - 1, 2],
    ],
    cosPositions: [
      [Math.PI * 1 - 1, 2],
    ],
    starScores: [200, 300, 375],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },



  {
    title: 'Kos deg!',
    descriptions: [
      { type: "text", content: "Nå er det ikke mer pensum, så du kan fokusere kun på å fullføre alle nivåene! Og du har bare 4 nivåer igjen... Klarer du alle?" },
      // { type: "image", content: "infomodal/tan-katet-katet.gif" },
    ],
    showPowerBar: true,
    cellSize: 100,
    origoPosition: {
      y: 0,
      x: 6,
    },
    bombPositions: [
      [3.3, -0.2],
      [3.1, -0.5],
      [3.5, 0],
      [3.3, 0.2],
      [3.1, 0.5],
      [-2, 0],
    ],
    coinPositions: [
      [Math.PI * 1 - 3, 2],
      [2, 0.716],
      [1.3, 1.4],
    ],
    tanPositions: [
      [-1, -1]
    ],
    cosPositions: [
      [-0.906, 1.5],
    ],
    starScores: [80, 120, 165],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },


  {
    title: 'Har du lært noe?', // 2sin(x-1)+1
    descriptions: [
      { type: "text", content: "... Eller har du bare hoppet over informasjonen og gått rett til oppgavene?" },
      // { type: "image", content: "infomodal/tan-katet-katet.gif" },
    ],
    showPowerBar: true,
    cellSize: 80,
    origoPosition: {
      y: 0,
      x: 3,
    },
    bombPositions: [
      [3.3, -0.2],
    ],
    coinPositions: [
      [Math.PI * 0.5 + 1, -3],
      [5, -3.316],
      [6.2, 2.771],
      [7.22, -2.996],
      [10.5, 0.994],
    ],
    tanPositions: [
      [Math.PI + 1, -1]
    ],
    cosPositions: [
      [6.82, 0],
    ],
    starScores: [160, 220, 300],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },


  {
    title: '', // 2sin(x-1)+1
    descriptions: [
      { type: "text", content: "Det begynner å bli vanskelig nå..." },
      // { type: "image", content: "infomodal/tan-katet-katet.gif" },
    ],
    showPowerBar: true,
    cellSize: 80,
    origoPosition: {
      y: 0,
      x: 3,
    },
    bombPositions: [
      [8, 1.01],
      [-1, 1],
    ],
    coinPositions: [
      [0.8, 0.97],
      [1.32, -1.903],
      [4.7, 3],
      [3.2, 2.059],
      [4, 2.757],
      [5.7, 2.551],
    ],
    tanPositions: [
      [1.35 + 1, -2.455],
      [-1, -1],
    ],
    sinPositions: [
      [1.35, -2.455],
    ],
    starScores: [200, 300, 375],
    maxAmplitude: 3,
    maxVerticalShift: 3,
    maxAngularFrequency: 3,
  },


  {
    title: 'The End...', // Solution: 1cos(2x)+2
    descriptions: [
      { type: "text", content: "Klar for siste nivå...?" },
    ],
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
    starScores: [200, 400, 540],
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
]

export default function useLevel(index: number) {
  const zeroIndexed = index - 1;
  if (zeroIndexed > levels.length) return null;
  return levels[zeroIndexed];
}
