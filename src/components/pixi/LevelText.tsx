import { Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useMemo } from 'react';
import useCanvasSize from '../../hooks/useCanvasSize';
import useData from '../../hooks/useData';
import useTheme from '../../hooks/useTheme';

export default function SineText() {
  const theme = useTheme();
  const { pixelWidth } = useCanvasSize();
  const { level, numAttempts } = useData();
  const text = useMemo(() => `Level ${level}`, [level]);

  console.log('numAttempts', numAttempts);

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
        text={`Forsøk: ${numAttempts}`}
        x={pixelWidth - 20}
        anchor={1}
        y={120}
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
