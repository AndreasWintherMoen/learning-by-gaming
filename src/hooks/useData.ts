import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addFireSubscriber,
  nextLevel,
  removeFireSubscriber,
  resetLevel,
  setAmplitude,
  setDisplayScore,
  setAngularFrequency,
  setIsBackgroundSound,
  setIsFiring,
  setIsCharging,
  setChargePower,
  setPhaseShift,
  setVerticalShift, setShowTutorial, setCoins,
} from '../redux/gameSlice';
import { Coin } from '../types';

export type DataContext = {
  displayScore: boolean;
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
  showTutorial: boolean;
  coins: Coin[];
  setDisplayScore: (displayScore: boolean) => void;
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
  setShowTutorial: (showTutorial: boolean) => void;
  collectCoin: (index: number) => void;
  collectBomb: (index: number) => void;
};

export default function useData(): DataContext {
  const data = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  function dispatchSetDisplayScore(displayScore: boolean) {
    dispatch(setDisplayScore(displayScore));
  }
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

  function dispatchSetTutorial(showTutorial: boolean) {
    dispatch(setShowTutorial(showTutorial));
  }

  function collectCoin(index: number) {
    const coins = [...data.coins];
    coins[index] = { ...coins[index], isCollected: true };
    dispatch(setCoins(coins));
  }

  function  collectBomb(index: number) {
    const coins = [...data.coins];
    const bombsIndex = coins.findIndex((coin) => coin.type === 'bomb');
    const finalIndex = index + bombsIndex;
    coins[finalIndex] = { ...coins[finalIndex], isCollected: true };
    dispatch(setCoins(coins));
  }

  return {
    ...data,
    setDisplayScore: dispatchSetDisplayScore,
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
    setShowTutorial: dispatchSetTutorial,
    collectCoin,
    collectBomb
  };
}
