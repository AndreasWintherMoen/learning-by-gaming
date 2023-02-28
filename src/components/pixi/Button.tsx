import { Sprite } from '@pixi/react';

type Props = {
  onClick: () => void;
  image: string;
  x: number;
  y: number;
  opacity?: number;
};

export default function Button({ onClick, image, x, y, opacity }: Props) {
  return (
    <Sprite
      image={image}
      anchor={0.5}
      x={x}
      y={y}
      interactive={true}
      pointerdown={onClick}
      alpha={opacity ?? 1}
    />
  );
}
