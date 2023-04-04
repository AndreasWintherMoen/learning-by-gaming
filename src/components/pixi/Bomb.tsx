import {useEffect, useRef, useState} from 'react';
import {Sprite, Text} from '@pixi/react';
import { Rectangle, Sprite as PixiSprite } from 'pixi.js';
import {TextStyle} from "@pixi/text";

type Props = {
  x: number;
  y: number;
  xCord: number;
  yCord: number;
  show: boolean;
  bullet: Rectangle | null;
  onHit: () => void;
};

export default function Bomb({
  x,
  y,
  xCord,
  yCord,
  show,
  bullet,
  onHit,
}: Props): JSX.Element {
  const ref = useRef<PixiSprite | null>(null);

  const [showCord, setShowCord] = useState(true);
  useEffect(() => {
    if (!bullet || !show || !ref.current) return;
    if (bullet.intersects(ref.current.getBounds())) {
      onHit();
    }
  }, [bullet, onHit, ref]);

  if (!show) return <></>;

  return (
    <>
      <Sprite
        image='bomb.png'
        width={90}
        height={90}
        anchor={0.5}
        x={x}
        y={y}
      />
      <Sprite
        image='bomb-hitbox.png'
        width={30}
        height={30}
        anchor={0.5}
        x={x}
        y={y}
        ref={ref}
      />
      {showCord && (
        <Text
          text={`(${xCord.toFixed(1)}, ${yCord.toFixed(1)})`}
          anchor={0.5}
          x={x}
          y={y+30}
          style={new TextStyle({
            fill: 0x6D6F6E,
            fontSize: 12,
            fontFamily: 'Handdrawn'
          })
          }
        />)}
    </>
  );
}
