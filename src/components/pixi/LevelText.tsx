import { Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useMemo } from 'react';
import useCanvasSize from '../../hooks/useCanvasSize';
import useData from '../../hooks/useData';
import useTheme from '../../hooks/useTheme';

export default function SineText() {
  const theme = useTheme();
  const { pixelWidth } = useCanvasSize();
  const { level, numAttempts, currentScore } = useData();
  const text = useMemo(() => `Level ${level}`, [level]);

  return (
    <>
      <Text
        text={text}
        x={pixelWidth - 20}
        anchor={1}
        y={50}
        style={
          new TextStyle({
            fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 36,
            fill: theme.text.primary,
          })
        }
      />
      <Text
        text={`Poeng: ${formatScore(currentScore)}`}
        x={pixelWidth - 20}
        anchor={1}
        y={100}
        style={
          new TextStyle({
            fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 36,
            fill: theme.text.primary,
          })
        }
      />
      <Text
        text={`Forsøk: ${numAttempts}`}
        x={pixelWidth - 20}
        anchor={1}
        y={150}
        style={
          new TextStyle({
            fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 36,
            fill: theme.text.primary,
          })
        }
      />
    </>
  );
}

function formatScore(score: number) {
  const text = Math.round(score).toString();
  const desiredLength = 4;
  return text.padStart(desiredLength, '0');
}
