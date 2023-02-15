import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type SineProps = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
};

export type SetSineProps = {
  setAmplitude: React.Dispatch<React.SetStateAction<number>>;
  setAngularFrequency: React.Dispatch<React.SetStateAction<number>>;
  setPhaseShift: React.Dispatch<React.SetStateAction<number>>;
};

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;
