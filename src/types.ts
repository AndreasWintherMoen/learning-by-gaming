import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;

export type Data = {
  level: number;
  numAttempts: number;
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  verticalShift: number;
  fireSubscribers: (() => void)[];
  isFiring: boolean;
  isCharging: boolean;
  chargePower: number;
  isBackgroundSound: boolean;
  showTutorial: boolean;
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
