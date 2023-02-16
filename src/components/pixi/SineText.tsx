import { Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useMemo } from 'react';
import { useData } from '../../DataContext';

export default function SineText() {
  const { amplitude, angularFrequency, phaseShift } = useData();

  const text = useMemo(() => {
    const amplitudeText = amplitude !== 1 ? amplitude : '';
    const angularFrequencyText = angularFrequency !== 1 ? angularFrequency : '';
    const phaseShiftText = phaseShift !== 0 ? ` + ${phaseShift}` : '';
    return `y = ${amplitudeText}sin(${angularFrequencyText}x${phaseShiftText})`;
  }, [amplitude, angularFrequency, phaseShift]);

  return (
    <Text
      text={text}
      x={20}
      y={530}
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
