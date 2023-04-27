import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type SupportedFunctions = 'sin' | 'cos' | 'tan' | 'arcsin' | 'arccos' | 'arctan';

export type SupportedFuncWithXPos = {
  x: number;
  func: SupportedFunctions;
}

export type CoinType = 'coin' | 'bomb' | SupportedFunctions;
export type TrigParams = 'amplitude' | 'angularFrequency' | 'phaseShift' | 'verticalShift';
export type Coin = {
  type: CoinType;
  position: [number, number];
  isCollected: boolean;
}

export type LevelScore = "locked" | "not played" | 0 | 1 | 2 | 3;

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;

export type Data = {
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
  showTutorial: boolean;
  coins: Coin[];
  coinIndexJustCollected: number;
  coinsCollectedThisShot: number;
  currentScore: number;
  totalScore: number;
  selectedFunction: SupportedFunctions;
  functionPickups: SupportedFuncWithXPos[];
  showLevels: boolean;
};

export type EasingFunctions =
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInElastic'
  | 'easeOutElastic'
  | 'easeInOutElastic'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack'
  | 'easeInBounce'
  | 'easeOutBounce'
  | 'easeInOutBounce';
