import {createSlice} from '@reduxjs/toolkit'
import {Data} from "../types";


const initialState = {
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
  verticalShift: 0,
  fireSubscribers: [],
  isFiring: false,
} as Data;


export const gameSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAmplitude: (state, action) => {
      state.amplitude = action.payload;
    },
    setAngularFrequency: (state, action) => {
      state.angularFrequency = action.payload;
    },
    setVerticalShift: (state, action) => {
      state.verticalShift = action.payload;
    },
    setPhaseShift:(state, action) => {
      state.phaseShift = action.payload;
    },
    addFireSubscriber: (state, action) => {
      state.fireSubscribers = [...state.fireSubscribers, action.payload];
    },
    removeFireSubscriber: (state, action) => {
      state.fireSubscribers = state.fireSubscribers.filter(
        (subscriber) => subscriber !== action.payload
      )
    },
    setIsFiring: (state, action) => {
      state.isFiring = action.payload;
    }
  },
})

export const { setAmplitude, setAngularFrequency, setIsFiring, removeFireSubscriber, addFireSubscriber, setVerticalShift, setPhaseShift } = gameSlice.actions

export default gameSlice.reducer
