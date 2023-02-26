import { Text, useApp } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useMemo } from 'react';
import useData from '../../hooks/useData';

export default function SineText() {
  const app = useApp();
  const { level } = useData();
  const text = useMemo(() => `Level ${level}`, [level]);

  return (
    <Text
      text={text}
      x={app.view.width / 2 - 110}
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
