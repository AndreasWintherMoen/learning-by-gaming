import { Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';

interface CoordinationTagProps {
  x: number;
  y: number;
  positionX: number;
  positionY: number;
}

export default function CoordinationTag({
  x,
  y,
  positionX,
  positionY,
}: CoordinationTagProps) {
  return (
    <Text
      text={`${x.toFixed(1)}, ${y.toFixed(1)}`}
      x={positionX}
      y={positionY}
      style={
        new TextStyle({
          fontFamily: 'Helvetica, sans-serif',
          fontSize: 15,
          fill: '#ffffff',
        })
      }
    />
  );
}
