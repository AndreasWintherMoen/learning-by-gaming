import { useState } from 'react';
import { EasingFunctions } from '../types';

type TweenOptions = {
  func: EasingFunctions;
  start: number;
  end: number;
  duration: number;
  // callback: (value: number) => void;
};

export default function useTween({
  func,
  start,
  end,
  duration,
}: // callback,
TweenOptions): [number, () => void] {
  const [value, setValue] = useState(start);
  const tweenFunction = getTweenFunction(func);

  function tween() {
    const startTime = Date.now() / 1000;
    const endTime = startTime + duration;
    const range = end - start;

    function update() {
      const now = Date.now() / 1000;
      const time = (now - startTime) / duration;
      const newValue = start + range * tweenFunction(time);
      // callback(tweenedValue);
      setValue(newValue);
      if (now < endTime) {
        requestAnimationFrame(update);
      }
    }

    update();
  }

  return [value, tween];
}

function getTweenFunction(func: EasingFunctions) {
  switch (func) {
    case 'easeInSine':
      return (t: number) => 1 - Math.cos((t * Math.PI) / 2);
    case 'easeOutSine':
      return (t: number) => Math.sin((t * Math.PI) / 2);
    case 'easeInOutSine':
      return (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
    case 'easeInCubic':
      return (t: number) => t * t * t;
    case 'easeOutCubic':
      return (t: number) => 1 - Math.pow(1 - t, 3);
    case 'easeInOutCubic':
      return (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    case 'easeInQuint':
      return (t: number) => t * t * t * t * t;
    case 'easeOutQuint':
      return (t: number) => 1 - Math.pow(1 - t, 5);
    case 'easeInOutQuint':
      return (t: number) =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
    case 'easeInCirc':
      return (t: number) => 1 - Math.sqrt(1 - Math.pow(t, 2));
    case 'easeOutCirc':
      return (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2));
    case 'easeInOutCirc':
      return (t: number) =>
        t < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
    case 'easeInElastic':
      return (t: number) => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0
          ? 0
          : t === 1
          ? 1
          : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
      };
    case 'easeOutElastic':
      return (t: number) => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0
          ? 0
          : t === 1
          ? 1
          : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
      };
    case 'easeInOutElastic':
      return (t: number) => {
        const c5 = (2 * Math.PI) / 4.5;
        return t === 0
          ? 0
          : t === 1
          ? 1
          : t < 0.5
          ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
          : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 +
            1;
      };
    case 'easeInQuad':
      return (t: number) => t * t;
    case 'easeOutQuad':
      return (t: number) => t * (2 - t);
    case 'easeInOutQuad':
      return (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    case 'easeInQuart':
      return (t: number) => t * t * t * t;
    case 'easeOutQuart':
      return (t: number) => 1 - Math.pow(1 - t, 4);
    case 'easeInOutQuart':
      return (t: number) =>
        t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    case 'easeInExpo':
      return (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * t - 10));
    case 'easeOutExpo':
      return (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    case 'easeInOutExpo':
      return (t: number) => {
        if (t === 0) return 0;
        if (t === 1) return 1;
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
        return 0.5 * (-Math.pow(2, -10 * --t) + 2);
      };
    case 'easeInBack':
      return (t: number) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return c3 * t * t * t - c1 * t * t;
      };
    case 'easeOutBack':
      return (t: number) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
      };
    case 'easeInOutBack':
      return (t: number) => {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        return (t /= 0.5) < 1
          ? 0.5 * (t * t * ((c2 + 1) * t - c2))
          : 0.5 * ((t -= 2) * t * ((c2 + 1) * t + c2) + 2);
      };
    case 'easeInBounce':
      return (t: number) => 1 - bounceOut(1 - t);
    case 'easeOutBounce':
      return (t: number) => {
        const n1 = 7.5625;
        const d1 = 2.75;
        if (t < 1 / d1) {
          return n1 * t * t;
        } else if (t < 2 / d1) {
          return n1 * (t -= 1.5 / d1) * t + 0.75;
        } else if (t < 2.5 / d1) {
          return n1 * (t -= 2.25 / d1) * t + 0.9375;
        } else {
          return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
      };
    case 'easeInOutBounce':
      return (t: number) =>
        t < 0.5
          ? (1 - bounceOut(1 - 2 * t)) / 2
          : (1 + bounceOut(2 * t - 1)) / 2;
    default:
      console.warn('Unknown easing function: ' + func);
      return (t: number) => t;
  }
}

function bounceOut(t: number) {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
}
