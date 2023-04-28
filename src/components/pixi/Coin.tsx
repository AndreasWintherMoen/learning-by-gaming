import React, {useEffect, useRef, useState} from 'react';
import {AnimatedSprite, Container, Text} from '@pixi/react';
import {Rectangle, Sprite as PixiSprite} from 'pixi.js';
import {TextStyle} from "@pixi/text";
import coinSpritesheet from '../../utils/coinSpritesheet';
import useData from '../../hooks/useData';

type Props = {
  x: number;
  y: number;
  xCord: number;
  yCord: number;
  show: boolean;
  bullet: Rectangle | null;
  onHit: () => void;
  myIndex: number;
};

export default function Coin({
  x,
  y,
  xCord,
  yCord,
  show,
  bullet,
  onHit,
  myIndex,
}: Props): JSX.Element {
  const ref = useRef<PixiSprite | null>(null);
  const [showCord, setShowCord] = useState(true);

  const { coinIndexJustCollected } = useData();

  const [spriteAlpha, setSpriteAlpha] = useState(1);
  const [fadeOutInterval, setFadeOutInterval] = useState<NodeJS.Timer>();
  const [hasPickedUp, setHasPickedUp] = useState(false);

  // this is a hack to force a re-render
  const [foo, setFoo] = useState({ bar: 'baz'});

  function fadeOutSprite() {
    const interval = setInterval(() => setSpriteAlpha((spriteAlpha) => spriteAlpha - 0.15), 100);
    if(fadeOutInterval) clearInterval(fadeOutInterval);
    setFadeOutInterval(interval);
  }

  useEffect(() => {
    clearInterval(fadeOutInterval);
    setSpriteAlpha(1);
    setHasPickedUp(false);
    setFoo({ ...foo });
  }, [show]);

  useEffect(() => {
    if (myIndex !== coinIndexJustCollected) return;
    if (!bullet || !show || !ref.current) return;
    if (hasPickedUp) return;
    if (bullet.left > ref.current.x -30) {
      console.log('onhit', myIndex);
      onHit();
      setHasPickedUp(true);
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
          textures={coinSpritesheet}
          isPlaying={!show}
          initialFrame={0}
          animationSpeed={0.1}
        />
      </Container>
      {showCord && (
        <Text
          alpha={spriteAlpha}
          text={`(${xCord.toFixed(1)}, ${(-yCord).toFixed(1)})`}
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
