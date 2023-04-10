import { SupportedFunctions } from '../types';
import getFunction, { getInverseFunction } from './getFunction';

export type Params = {
  point: [number, number];
  func: SupportedFunctions;
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
  verticalShift: number;
  cellSize: number;
}

const coinSize = 30;

// TODO: I'm pretty sure this won't work for arcsin and arccos
export default function trigFunctionIntersectsPoint(params: Params): boolean {
  if (intersectsAtX(params)) {
    return true;
  }
  if (intersectsAtY(params)) {
    return true;
  }
  return false;
}

function intersectsAtX({ point, func, amplitude, angularFrequency, phaseShift, verticalShift, cellSize}: Params) {
  // evaluate the function at the given x value and check if y is within 0.1 of the point
  const pointX = point[0];
  const pointY = (-1) * point[1];
  const trigFunction = getFunction(func);
  const y = amplitude * trigFunction(angularFrequency * pointX + phaseShift) + verticalShift;
  const threshold = coinSize / (cellSize * 2);
  return Math.abs(y - pointY) < threshold;
}

function intersectsAtY({ point, func, amplitude, angularFrequency, phaseShift, verticalShift, cellSize}: Params) {
  // solve equation for x with the given y value and check if x is within 0.1 of the point
  const pointX = point[0];
  const pointY = (-1) * point[1];
  const threshold = coinSize / (cellSize * 2);
  if (angularFrequency === 0 || amplitude === 0) {
    return Math.abs(pointX - verticalShift) < threshold;
  }
  const trigFunction = getInverseFunction(func);
  const trigElement = trigFunction((verticalShift - pointY) / amplitude);
  if (isNaN(trigElement)) {
    return false;
  }
  const x = (trigElement - phaseShift + Math.PI) / angularFrequency;
  const modPointX = Math.abs(pointX) % (2 * Math.PI);
  return Math.abs(x - modPointX) < threshold;
}
