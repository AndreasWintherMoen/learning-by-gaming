import {SupportedFunctions} from "../types";

export default function getFunction(functionName: SupportedFunctions) {
  switch (functionName) {
    case 'sin':
      return Math.sin;
    case 'cos':
      return Math.cos;
    case 'arcsin':
      return Math.asin;
    case 'arccos':
      return Math.acos;
    default:
      throw new Error(`Invalid function name: ${functionName}`);
  }
}

export function getInverseFunction(functionName: SupportedFunctions) {
  switch (functionName) {
    case 'sin':
      return Math.asin;
    case 'cos':
      return Math.acos;
    case 'arcsin':
      return Math.sin;
    case 'arccos':
      return Math.cos;
    default:
      throw new Error(`Invalid function name: ${functionName}`);
  }
}

