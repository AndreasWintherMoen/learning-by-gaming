import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;

export type Data = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
};

export type SetAmplitudeAction = {
  type: 'SET_AMPLITUDE';
  payload: number;
};

export type SetFrequencyAction = {
  type: 'SET_FREQUENCY';
  payload: number;
};

export type SetPhaseAction = {
  type: 'SET_PHASE';
  payload: number;
};

export type SetDataAction =
  | SetAmplitudeAction
  | SetFrequencyAction
  | SetPhaseAction;
