import { useEffect, useRef } from 'react';
import { Sprite } from '@pixi/react';
import { Rectangle, Sprite as PixiSprite } from 'pixi.js';

type Props = {
  x: number;
  y: number;
  show: boolean;
  bullet: Rectangle | null;
  onHit: () => void;
};

export default function Coin({
  x,
  y,
  show,
  bullet,
  onHit,
}: Props): JSX.Element {
  const ref = useRef<PixiSprite | null>(null);

  useEffect(() => {
    if (!bullet || !show || !ref.current) return;
    if (bullet.intersects(ref.current.getBounds())) {
      onHit();
    }
  }, [bullet, onHit, ref]);

  if (!show) return <></>;

  return (
    <Sprite
      image='coin.png'
      width={50}
      height={50}
      anchor={0.5}
      x={x}
      y={y}
      ref={ref}
    />
  );
}
