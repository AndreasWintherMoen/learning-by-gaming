import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setLevel,
  nextLevel,
  resetLevel,
  setAmplitude,
  setDisplayScore,
  setAngularFrequency,
  setIsBackgroundSound,
  setIsFiring,
  setIsCharging,
  setChargePower,
  setPhaseShift,
  setVerticalShift,
  setShowTutorial,
  setCoins,
  setCurrentScore,
  setCoinsCollectedThisShot,
  setSelectedFunction,
  setShowLevels,
  setFunctionPickups, resetSineController,
} from '../redux/gameSlice';
import {Coin, SupportedFuncWithXPos, SupportedFunctions} from '../types';

export type DataContext = {
  selectedFunction: SupportedFunctions;
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
  setLevel: (level: number) => void;
  nextLevel: () => void;
  resetLevel: () => void;
  showTutorial: boolean;
  coins: Coin[];
  coinsCollectedThisShot: number;
  currentScore: number;
  totalScore: number;
  setDisplayScore: (displayScore: boolean) => void;
  setAmplitude: (amplitude: number) => void;
  setAngularFrequency: (angularFrequency: number) => void;
  setPhaseShift: (phaseShift: number) => void;
  setVerticalShift: (verticalShift: number) => void;
  fire: () => void;
  stopFire: () => void;
  startCharge: () => void;
  setChargePower: (chargePower: number) => void;
  toggleBackgroundSound: () => void;
  setShowTutorial: (showTutorial: boolean) => void;
  collectCoin: (index: number) => void;
  collectBomb: (index: number) => void;
  setSelectedFunction: (selectedFunction: SupportedFunctions) => void;
  functionPickups: SupportedFuncWithXPos[];
  pickupFunction: (selectedFunction: SupportedFunctions, x: number) => void;
  showLevels: boolean;
  setShowLevels: (showLevels: boolean) => void;
  resetSineController: () => void;
};

// TODO: Move this somewhere else (either to Coin.value or to a separate file of constants)
const SCORE_PER_COIN = 100;
const SCORE_LOST_PER_BOMB = 300;

export default function useData(): DataContext {
  const data = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  function dispatchSetDisplayScore(displayScore: boolean) {
    dispatch(setDisplayScore(displayScore));
  }

  function dispatchSetLevel(level: number) {
    dispatch(setLevel(level));
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

  function dispatchVerticalShift(verticalShift: number) {
    dispatch(setVerticalShift(verticalShift));
  }

  function fire() {
    dispatch(setCoinsCollectedThisShot(0));
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

    // const chargeScoreMultiplier = (data.chargePower + 1) / 2; // 0.5 to 1 depending on charge power
    const coinsCollectedMultiplier = 1 + data.coinsCollectedThisShot * 0.1; // 1 + 0.1 per coin collected
    const shotMultiplier = 1 / ((data.numAttempts - 1) * 0.2 + 1); // 1st shot: 1, 2nd shot: 0.83, 3rd shot: 0.71, 4th shot: 0.63, etc.
    const levelScore = SCORE_PER_COIN * coinsCollectedMultiplier * shotMultiplier / 2;
    dispatch(setCurrentScore(data.currentScore + levelScore));

    dispatch(setCoinsCollectedThisShot(data.coinsCollectedThisShot + 1));
  }

  function collectBomb(index: number) {
    const coins = [...data.coins];
    const bombsIndex = coins.findIndex((coin) => coin.type === 'bomb');
    const finalIndex = index + bombsIndex;
    coins[finalIndex] = { ...coins[finalIndex], isCollected: true };
    dispatch(setCoins(coins));
    const newScore = data.currentScore/2;
    dispatch(setCurrentScore(newScore));
  }

  function dispatchSetSelectedFunction(selectedFunction: SupportedFunctions) {
    dispatch(setSelectedFunction(selectedFunction));
  }

  function pickupFunction(selectedFunction: SupportedFunctions, x: number) {
    dispatch(setFunctionPickups({
      func: selectedFunction,
      x,
    }))
  }

  function dispatchSetShowLevels(showLevels: boolean) {
    dispatch(setShowLevels(showLevels));
  }

  function disptachResetSineController() {
    dispatch(resetSineController());
  }

  return {
    ...data,
    resetSineController: disptachResetSineController,
    setDisplayScore: dispatchSetDisplayScore,
    setLevel: dispatchSetLevel,
    nextLevel: dispatchNextLevel,
    resetLevel: dispatchResetLevel,
    setVerticalShift: dispatchVerticalShift,
    setAmplitude: dispatchAmplitude,
    setAngularFrequency: dispatchAngularFrequency,
    setPhaseShift: dispatchPhaseShift,
    setSelectedFunction: dispatchSetSelectedFunction,
    pickupFunction,
    setShowLevels: dispatchSetShowLevels,
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
