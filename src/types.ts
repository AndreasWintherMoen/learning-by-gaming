import { Graphics } from '@pixi/react';
import { ComponentProps } from 'react';

export type Draw = Exclude<ComponentProps<typeof Graphics>['draw'], undefined>;

export type Data = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  fireSubscribers: (() => void)[];
  isFiring: boolean;
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

export type AddFireSubscriberAction = {
  type: 'ADD_FIRE_SUBSCRIBER';
  payload: () => void;
};

export type RemoveFireSubscriberAction = {
  type: 'REMOVE_FIRE_SUBSCRIBER';
  payload: () => void;
};

export type SetIsFiringAction = {
  type: 'SET_IS_FIRING';
  payload: boolean;
};

export type SetDataAction =
  | SetAmplitudeAction
  | SetFrequencyAction
  | SetPhaseAction
  | AddFireSubscriberAction
  | RemoveFireSubscriberAction
  | SetIsFiringAction;
