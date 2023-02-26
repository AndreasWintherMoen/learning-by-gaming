import { Sprite } from '@pixi/react';

type Props = {
  x: number;
  y: number;
};

export default function Fireworks({ x, y }: Props) {
  return (
    <Sprite
      image='fireworks.png'
      width={250}
      height={250}
      anchor={0.5}
      x={x}
      y={y}
    />
  );
}
