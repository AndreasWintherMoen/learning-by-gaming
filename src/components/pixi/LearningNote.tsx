import { Sprite, Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';
import { useEffect, useState } from 'react';

type Props = {
  text: string;
  x: number;
  y: number;
};

export default function LearningNote({ text, x, y }: Props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisibility(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const padding = {
    left: 20,
    right: 20,
    top: 100,
    bottom: 20,
  };

  return (
    <>
      <Sprite
        image='postitnote.png'
        anchor={0.5}
        x={x}
        y={y}
        scale={1}
        visible={visibility}
        ref={(r) => {
          setHeight(r?.height ?? 0);
          setWidth(r?.width ?? 0);
        }}
      />
      <Text
        text={text}
        anchor={0.5}
        x={x}
        y={y - height / 2 + padding.top}
        visible={visibility}
        style={
          new TextStyle({
            fontFamily: 'Helvetica, sans-serif',
            fontSize: 15,
            fill: '#000000',
            wordWrap: true,
            wordWrapWidth: width - padding.left - padding.right,
          })
        }
      />
    </>
  );
}
