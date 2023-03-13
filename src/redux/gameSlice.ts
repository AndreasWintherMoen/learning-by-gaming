import { createSlice } from '@reduxjs/toolkit';
import { Data } from '../types';
import { sound } from '@pixi/sound';

const initialState = {
  level: 0,
  numAttempts: 0,
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
  verticalShift: 0,
  fireSubscribers: [],
  isFiring: false,
  isBackgroundSound: true,
} as Data;

export const gameSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    nextLevel: (state) => {
      state.level = state.level + 1;
      state.numAttempts = 0;
    },
    resetLevel: (state) => {
      state.level = 0;
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
      if (!!action.payload) {
        state.numAttempts += 1;
      }
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
  },
});

export const {
  nextLevel,
  resetLevel,
  setAmplitude,
  setAngularFrequency,
  setIsFiring,
  removeFireSubscriber,
  addFireSubscriber,
  setVerticalShift,
  setPhaseShift,
  setIsBackgroundSound,
} = gameSlice.actions;

export default gameSlice.reducer;
