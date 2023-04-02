import {createSlice} from '@reduxjs/toolkit';
import {Data} from '../types';
import {sound} from '@pixi/sound';

const initialState = {
  displayScore: false,
  level: 0,
  numAttempts: 0,
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
  verticalShift: 0,
  fireSubscribers: [],
  isFiring: false,
  isCharging: false,
  chargePower: 0,
  isBackgroundSound: true,
  showTutorial: false,
} as Data;

export const gameSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    nextLevel: (state) => {
      state.level = state.level + 1;
      state.numAttempts = 0;
      state.chargePower = 0;
      state.isCharging = false;
      state.isFiring = false;
    },
    resetLevel: (state, action) => {
      state.level = state.level;
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
    addFireSubscriber: (state, action) => {
      state.fireSubscribers = [...state.fireSubscribers, action.payload];
    },
    removeFireSubscriber: (state, action) => {
      state.fireSubscribers = state.fireSubscribers.filter(
        (subscriber) => subscriber !== action.payload
      );
    },
    setIsFiring: (state, action) => {
      state.isFiring = action.payload;
      state.isCharging = false;
      if (!!action.payload) {
        state.numAttempts += 1;
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
      console.log('state.isBackgroundSound', state.isBackgroundSound);
      if (state.isBackgroundSound) {
        sound.volume('intro-music', 0.1);
      } else {
        sound.volume('intro-music', 0);
      }
    },
    setShowTutorial: (state, action) => {
      console.log('setShowTutorial', action.payload);
      state.showTutorial = action.payload;
    },
    setDisplayScore: (state, action) => {
      state.displayScore = action.payload;
    }
  },
});

export const {
  setDisplayScore,
  nextLevel,
  resetLevel,
  setAmplitude,
  setAngularFrequency,
  setIsFiring,
  setIsCharging,
  setChargePower,
  removeFireSubscriber,
  addFireSubscriber,
  setVerticalShift,
  setPhaseShift,
  setIsBackgroundSound,
  setShowTutorial
} = gameSlice.actions;

export default gameSlice.reducer;
