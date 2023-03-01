import { Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useMemo } from 'react';
import useCanvasSize from '../../hooks/useCanvasSize';
import useData from '../../hooks/useData';

export default function SineText() {
  const { width } = useCanvasSize();
  const { level } = useData();
  const text = useMemo(() => `Level ${level}`, [level]);

  return (
    <Text
      text={text}
      x={width / 2 - 110}
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
