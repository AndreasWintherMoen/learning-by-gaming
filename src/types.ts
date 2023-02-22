import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;

export type Data = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  verticalShift: number;
  fireSubscribers: (() => void)[];
  isFiring: boolean;
};
