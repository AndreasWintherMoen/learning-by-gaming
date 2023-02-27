import { Sprite } from '@pixi/react';

type Props = {
  onClick: () => void;
  image: string;
  x: number;
  y: number;
};

export default function Button({ onClick, image, x, y }: Props) {
  return (
    <Sprite
      image={image}
      anchor={0.5}
      x={x}
      y={y}
      interactive={true}
      pointerdown={onClick}
    />
  );
}
