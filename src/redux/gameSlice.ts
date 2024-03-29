import {createSlice} from '@reduxjs/toolkit';
import {Coin, Data} from '../types';
import {sound} from '@pixi/sound';
import {levels} from '../hooks/useLevel';

const initialState = {
  displayScore: false,
  level: 0,
  numAttempts: 0,
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
  verticalShift: 0,
  isFiring: false,
  isCharging: false,
  chargePower: 0,
  isBackgroundSound: true,
  showLevels: false,
  coins: [],
  coinIndexJustCollected: -1,
  coinsCollectedThisShot: 0,
  currentScore: 0,
  totalScore: 0,
  selectedFunction: 'sin',
  functionPickups: [],
  showTutorial: false,
} as Data;

function generateNewCoins(levelIndex: number) {
  const level = levels[levelIndex-1];
  if(!level) return [];

  const coins = level.coinPositions.map((coin) => ({
    type: 'coin',
    position: coin.coordinates,
    isCollected: false,
    text: coin.text,
  } as Coin));

  const bombs = level.bombPositions.map((coin) => ({
    type: 'bomb',
    position: coin.coordinates,
    isCollected: false,
    text: coin.text,
  } as Coin));

  const sins = level.sinPositions?.map((coin) => ({
    type: 'sin',
    position: coin.coordinates,
    isCollected: false,
    text: coin.text,
  } as Coin)) || [];

  const coss = level.cosPositions?.map((coin) => ({
    type: 'cos',
    position: coin.coordinates,
    isCollected: false,
    text: coin.text,
  } as Coin)) || [];

  const tans = level.tanPositions?.map((coin) => ({
    type: 'tan',
    position: coin.coordinates,
    isCollected: false,
    text: coin.text,
  } as Coin)) || [];

  return [...coins, ...bombs, ...sins, ...coss, ...tans].sort((a, b) => a.position[0] - b.position[0]);
}


export const gameSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
      state.numAttempts = 0;
      state.chargePower = 0;
      state.isCharging = false;
      state.isFiring = false;
      state.coins = generateNewCoins(state.level);
      state.coinsCollectedThisShot = 0;
      state.currentScore = 0;
      state.functionPickups = [];
      state.coinIndexJustCollected = -1;
    },
    nextLevel: (state) => {
      state.level = state.level + 1;
      state.totalScore += state.currentScore;
      state.numAttempts = 0;
      state.chargePower = 0;
      state.isCharging = false;
      state.isFiring = false;
      state.coins = generateNewCoins(state.level);
      state.coinsCollectedThisShot = 0;
      state.currentScore = 0;
      state.functionPickups = [];
      state.coinIndexJustCollected = -1;
    },
    resetLevel: (state) => {
      state.numAttempts = 0;
      state.chargePower = 0;
      state.isCharging = false;
      state.isFiring = false;
      state.coins = generateNewCoins(state.level);
      state.coinsCollectedThisShot = 0;
      state.currentScore = 0;
      state.functionPickups = [];
      state.coinIndexJustCollected = -1;
    },
    setAmplitude: (state, action) => {
      state.amplitude = action.payload;
    },
    setAngularFrequency: (state, action) => {
      state.angularFrequency = action.payload;
    },
    setVerticalShift: (state, action) => {
      state.verticalShift = action.payload;
    },
    setPhaseShift: (state, action) => {
      state.phaseShift = action.payload;
    },
    setIsFiring: (state, action) => {
      state.isFiring = action.payload;
      state.coinIndexJustCollected = -1;
      state.isCharging = false;
      if (!!action.payload) {
        state.numAttempts += 1;
        state.functionPickups = [];
      } else {
        state.chargePower = 0;
      }
    },
    setIsCharging: (state, action) => {
      state.isCharging = action.payload;
    },
    setChargePower: (state, action) => {
      state.chargePower = action.payload;
    },
    setIsBackgroundSound: (state, action) => {
      state.isBackgroundSound = action.payload;
      if (state.isBackgroundSound) {
        sound.volume('intro-music', 0.1);
      } else {
        sound.volume('intro-music', 0);
      }
    },
    setShowTutorial: (state, action) => {
      state.showTutorial = action.payload;
    },
    setDisplayScore: (state, action) => {
      state.displayScore = action.payload;
    },
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setCoinsCollectedThisShot: (state, action) => {
      state.coinsCollectedThisShot = action.payload;
    },
    setCurrentScore: (state, action) => {
      state.currentScore = action.payload;
    },
    setSelectedFunction: (state, action) => {
      state.selectedFunction = action.payload;
    },
    setFunctionPickups: (state, action) => {
      state.functionPickups = [...state.functionPickups, action.payload];
    },
    setShowLevels: (state, action) => {
      if (typeof action.payload != "boolean") return;
      state.showLevels = action.payload;
    },
    resetSineController: (state) => {
      state.amplitude = 1;
      state.angularFrequency = 1;
      state.verticalShift = 0;
      state.phaseShift = 0;
      state.selectedFunction = 'sin';
    },
    setCoinIndexJustCollected: (state, action) => {
      state.coinIndexJustCollected = action.payload;
    }
  }
});

export const {
  setDisplayScore,
  setLevel,
  nextLevel,
  resetLevel,
  setAmplitude,
  setAngularFrequency,
  setIsFiring,
  setIsCharging,
  setChargePower,
  setVerticalShift,
  setPhaseShift,
  setIsBackgroundSound,
  setShowTutorial,
  setCoins,
  setCoinIndexJustCollected,
  setCurrentScore,
  setCoinsCollectedThisShot,
  setSelectedFunction,
  setFunctionPickups,
  setShowLevels,
  resetSineController
} = gameSlice.actions;

export default gameSlice.reducer;
