import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  setAmplitude,
  setAngularFrequency,
  setPhaseShift,
} from '../store';

export type DataContext = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  setAmplitude: (amplitude: number) => void;
  setAngularFrequency: (angularFrequency: number) => void;
  setPhaseShift: (phaseShift: number) => void;
};

export default function useData(): DataContext {
  const data = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function dispatchAmplitude(amplitude: number) {
    dispatch(setAmplitude(amplitude));
  }

  function dispatchAngularFrequency(angularFrequency: number) {
    dispatch(setAngularFrequency(angularFrequency));
  }

  function dispatchPhaseShift(phaseShift: number) {
    dispatch(setPhaseShift(phaseShift));
  }

  return {
    ...data,
    setAmplitude: dispatchAmplitude,
    setAngularFrequency: dispatchAngularFrequency,
    setPhaseShift: dispatchPhaseShift,
  };
}
