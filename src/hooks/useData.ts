import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addFireSubscriber,
  nextLevel,
  removeFireSubscriber,
  resetLevel,
  setAmplitude,
  setAngularFrequency,
  setIsBackgroundSound,
  setIsFiring,
  setIsCharging,
  setChargePower,
  setPhaseShift,
  setVerticalShift,
} from '../redux/gameSlice';

export type DataContext = {
  level: number;
  numAttempts: number;
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  verticalShift: number;
  isFiring: boolean;
  isCharging: boolean;
  chargePower: number;
  isBackgroundSound: boolean;
  nextLevel: () => void;
  resetLevel: () => void;
  setAmplitude: (amplitude: number) => void;
  setAngularFrequency: (angularFrequency: number) => void;
  setPhaseShift: (phaseShift: number) => void;
  setVerticalShift: (verticalShift: number) => void;
  addFireSubscriber: (subscriber: () => void) => void;
  removeFireSubscriber: (subscriber: () => void) => void;
  fire: () => void;
  stopFire: () => void;
  startCharge: () => void;
  setChargePower: (chargePower: number) => void;
  toggleBackgroundSound: () => void;
};

export default function useData(): DataContext {
  const data = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  function dispatchNextLevel() {
    dispatch(nextLevel());
  }

  function dispatchResetLevel() {
    dispatch(resetLevel());
  }

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

  function dispatchVerticalShift(verticalShift: number) {
    dispatch(setVerticalShift(verticalShift));
  }

  function fire() {
    data.fireSubscribers.forEach((subscriber) => subscriber());
    dispatch(setIsFiring(true));
    dispatch(setIsCharging(false));
  }

  function stopFire() {
    dispatch(setIsFiring(false));
  }

  function startCharge() {
    dispatch(setIsCharging(true));
  }

  function dispatchSetChargePower(chargePower: number) {
    dispatch(setChargePower(chargePower));
  }

  function toggleBackgroundSound() {
    dispatch(setIsBackgroundSound(!data.isBackgroundSound));
  }

  return {
    ...data,
    nextLevel: dispatchNextLevel,
    resetLevel: dispatchResetLevel,
    setVerticalShift: dispatchVerticalShift,
    setAmplitude: dispatchAmplitude,
    setAngularFrequency: dispatchAngularFrequency,
    setPhaseShift: dispatchPhaseShift,
    addFireSubscriber: dispatchAddFireSubscriber,
    removeFireSubscriber: dispatchRemoveFireSubscriber,
    fire,
    stopFire,
    startCharge,
    setChargePower: dispatchSetChargePower,
    toggleBackgroundSound,
  };
}
