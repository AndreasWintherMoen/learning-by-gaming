import { Text } from '@pixi/react';
import { TextStyle} from 'pixi.js';
import { useMemo } from 'react';
import useData from '../../hooks/useData';
import useTheme from "../../hooks/useTheme";

export default function SineText({ x, y }: { x: number, y: number }): JSX.Element {
  const { amplitude, angularFrequency, phaseShift, verticalShift } = useData();
  const theme = useTheme();

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
      anchor={0.5}
      text={text}
      x={x}

      y={y}
      style={
        new TextStyle({
          fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
          fontSize: 36,
          fill: theme.text.primary,
        })
      }
    />
  );
}
