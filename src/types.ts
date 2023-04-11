import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type CoinType = 'coin' | 'sin' | 'cos' | 'divide' | 'multiply' | 'plus' | 'minus' | 'bomb';
export type TrigParams = 'amplitude' | 'angularFrequency' | 'phaseShift' | 'verticalShift';
export type Coin = {
  type: CoinType;
  position: [number, number];
  isCollected: boolean;
}

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;

export type SupportedFunctions = 'sin' | 'cos' | 'arcsin' | 'arccos';

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
  coinsCollectedThisShot: number;
  currentScore: number;
  totalScore: number;
  selectedFunction: SupportedFunctions;
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
