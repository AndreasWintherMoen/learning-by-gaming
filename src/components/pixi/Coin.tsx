import React, {useEffect, useRef, useState} from 'react';
import {AnimatedSprite, Container, Text} from '@pixi/react';
import {Rectangle, Sprite as PixiSprite, Texture} from 'pixi.js';
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

const spritesheet = [
  'coins/coin-0.png',
  'coins/coin-1.png',
  'coins/coin-2.png',
  'coins/coin-3.png',
  'coins/coin-4.png',
  'coins/coin-3.png',
  'coins/coin-2.png',
  'coins/coin-1.png',
];

export default function Coin({
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

  const [frames, setFrames] = useState<Texture[]>(spritesheet.map((url) => Texture.from(url)));
  const [spriteAlpha, setSpriteAlpha] = useState(1);
  const [fadeOutInterval, setFadeOutInterval] = useState<number>();
  function fadeOutSprite() {
    const stuff = setInterval(() => setSpriteAlpha((spriteAlpha) => spriteAlpha - 0.15), 100);
    if(fadeOutInterval) clearInterval(fadeOutInterval);
    setFadeOutInterval(stuff);
  }

  useEffect(() => {
    clearInterval(fadeOutInterval);
    setSpriteAlpha(1);
  }, [show]);

  useEffect(() => {
    if (!bullet || !show || !ref.current) return;
    if (bullet.intersects(ref.current.getBounds())) {
      onHit();
      setTimeout(fadeOutSprite, 1000);
    }
  }, [bullet, onHit, ref]);

  return (
    <>
      <Container position={[x, y]} width={30} height={30} ref={ref}>
        <AnimatedSprite
          height={1}
          width={1}
          alpha={spriteAlpha}
          anchor={0.5}
          textures={frames}
          isPlaying={!show}
          initialFrame={0}
          animationSpeed={0.1}
        />
      </Container>
      {showCord && (
        <Text
          alpha={spriteAlpha}
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
