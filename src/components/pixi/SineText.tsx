import { Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useMemo } from 'react';
import useData from '../../hooks/useData';

export default function SineText() {
  const { amplitude, angularFrequency, phaseShift, verticalShift } = useData();

  const text = useMemo(() => {
    const amplitudeText = amplitude !== 1 ? amplitude : '';
    const angularFrequencyText = angularFrequency !== 1 ? angularFrequency : '';
    const phaseShiftText =
      phaseShift !== 0
        ? ` ${phaseShift < 0 ? '-' : '+'} ${Math.abs(phaseShift).toFixed(1)}`
        : '';
    const verticalShiftText =
      verticalShift !== 0
        ? ` ${verticalShift < 0 ? '-' : '+'} ${Math.abs(verticalShift).toFixed(
            1
          )}`
        : '';
    return `y = ${amplitudeText}sin(${angularFrequencyText}x${phaseShiftText})${verticalShiftText}`;
  }, [amplitude, angularFrequency, phaseShift, verticalShift]);

  return (
    <Text
      text={text}
      x={0}
      y={0}
      style={
        new TextStyle({
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 32,
          fill: '#ffffff',
        })
      }
    />
  );
}
