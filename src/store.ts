import { createStore } from 'redux';
import { Data, SetDataAction } from './types';

const defaultState: Data = {
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
};

function reducer(state = defaultState, action: SetDataAction) {
  switch (action.type) {
    case 'SET_AMPLITUDE':
      return { ...state, amplitude: action.payload };
    case 'SET_FREQUENCY':
      return { ...state, angularFrequency: action.payload };
    case 'SET_PHASE':
      return { ...state, phaseShift: action.payload };
    default:
      return state;
  }
}

export const setAmplitude = (amplitude: number) => ({
  type: 'SET_AMPLITUDE',
  payload: amplitude,
});

export const setAngularFrequency = (frequency: number) => ({
  type: 'SET_FREQUENCY',
  payload: frequency,
});

export const setPhaseShift = (phase: number) => ({
  type: 'SET_PHASE',
  payload: phase,
});

export type RootState = ReturnType<typeof reducer>;

const store = createStore(reducer);

export default store;
