import {SupportedFunctions} from "../types";

export default function getFunction(functionName: SupportedFunctions) {
  switch (functionName) {
    case 'sin':
      return Math.sin;
    case 'cos':
      return Math.cos;
    case 'tan':
      return Math.tan;
    case 'arcsin':
      return Math.asin;
    case 'arccos':
      return Math.acos;
    default:
      throw new Error(`Invalid function name: ${functionName}`);
  }
}
