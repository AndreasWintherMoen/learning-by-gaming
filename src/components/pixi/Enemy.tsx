import { Sprite } from '@pixi/react';
import { Rectangle, Sprite as PixiSprite } from 'pixi.js';
import React, { useEffect } from 'react';

type Props = {
  x: number;
  y: number;
  bullet: Rectangle | null;
  onHit: () => void;
};

export default function Enemy({ x, y, bullet, onHit }: Props): JSX.Element {
  const ref = React.useRef<PixiSprite | null>(null);

  useEffect(() => {
    if (!bullet || !ref.current) return;
    if (bullet.intersects(ref.current.getBounds())) {
      onHit();
    }
  }, [bullet, onHit, ref, ref.current]);

  return (
    <Sprite image='sans.png' scale={0.1} anchor={0.5} x={x} y={y} ref={ref} />
  );
}
