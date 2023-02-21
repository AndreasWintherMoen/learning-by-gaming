import { createStore } from 'redux';
import { Data, SetDataAction } from './types';

const defaultState: Data = {
  amplitude: 1,
  angularFrequency: 1,
  phaseShift: 0,
  verticalShift: 0,
  fireSubscribers: [],
  isFiring: false,
};

function reducer(state = defaultState, action: SetDataAction) {
  switch (action.type) {
    case 'SET_AMPLITUDE':
      return { ...state, amplitude: action.payload };
    case 'SET_FREQUENCY':
      return { ...state, angularFrequency: action.payload };
    case 'SET_VERTICAL':
      return { ...state, verticalShift: action.payload };
    case 'SET_PHASE':
      return { ...state, phaseShift: action.payload };
    case 'ADD_FIRE_SUBSCRIBER':
      return {
        ...state,
        fireSubscribers: [...state.fireSubscribers, action.payload],
      };
    case 'REMOVE_FIRE_SUBSCRIBER':
      return {
        ...state,
        fireSubscribers: state.fireSubscribers.filter(
          (subscriber) => subscriber !== action.payload
        ),
      };
    case 'SET_IS_FIRING':
      return { ...state, isFiring: action.payload };
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

export const setVerticalShift = (vertical: number) => ({
  type: 'SET_VERTICAL',
  payload: vertical,
});


export const setPhaseShift = (phase: number) => ({
  type: 'SET_PHASE',
  payload: phase,
});

export const addFireSubscriber = (subscriber: () => void) => ({
  type: 'ADD_FIRE_SUBSCRIBER',
  payload: subscriber,
});

export const removeFireSubscriber = (subscriber: () => void) => ({
  type: 'REMOVE_FIRE_SUBSCRIBER',
  payload: subscriber,
});

export const setIsFiring = (isFiring: boolean) => ({
  type: 'SET_IS_FIRING',
  payload: isFiring,
});

export type RootState = ReturnType<typeof reducer>;

const store = createStore(reducer);

export default store;
