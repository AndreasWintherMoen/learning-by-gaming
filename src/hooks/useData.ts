import { useDispatch, useSelector } from 'react-redux';
import {
  addFireSubscriber,
  removeFireSubscriber,
  RootState,
  setAmplitude,
  setAngularFrequency,
  setIsFiring,
  setPhaseShift,
} from '../store';

export type DataContext = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  isFiring: boolean;
  setAmplitude: (amplitude: number) => void;
  setAngularFrequency: (angularFrequency: number) => void;
  setPhaseShift: (phaseShift: number) => void;
  addFireSubscriber: (subscriber: () => void) => void;
  removeFireSubscriber: (subscriber: () => void) => void;
  fire: () => void;
  stopFire: () => void;
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

  function dispatchAddFireSubscriber(subscriber: () => void) {
    dispatch(addFireSubscriber(subscriber));
  }

  function dispatchRemoveFireSubscriber(subscriber: () => void) {
    dispatch(removeFireSubscriber(subscriber));
  }

  function fire() {
    data.fireSubscribers.forEach((subscriber) => subscriber());
    dispatch(setIsFiring(true));
  }

  function stopFire() {
    dispatch(setIsFiring(false));
  }

  return {
    ...data,
    setAmplitude: dispatchAmplitude,
    setAngularFrequency: dispatchAngularFrequency,
    setPhaseShift: dispatchPhaseShift,
    addFireSubscriber: dispatchAddFireSubscriber,
    removeFireSubscriber: dispatchRemoveFireSubscriber,
    fire,
    stopFire,
  };
}
