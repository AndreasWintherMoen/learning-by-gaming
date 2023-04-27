import React, {useEffect, useRef, useState} from 'react';
import {AnimatedSprite, Container, Sprite, Text} from '@pixi/react';
import { Rectangle, Sprite as PixiSprite } from 'pixi.js';
import {TextStyle} from "@pixi/text";
import bombSpritesheet from "../../utils/bombSpritesheet";
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

export default function Bomb({x, y, xCord, yCord, show, bullet, onHit, myIndex}: Props): JSX.Element {
  const [explosionFinished, setExplosionFinished] = useState(false);
  const ref = useRef<PixiSprite | null>(null);
  const [hasPickedUp, setHasPickedUp] = useState(false);

  const { coinIndexJustCollected, numAttempts } = useData();
  const [showCord, setShowCord] = useState(true);

  useEffect(() => {
    if (myIndex !== coinIndexJustCollected) return;
    if (!bullet || !show || !ref.current) return;
    if (hasPickedUp) return;
    if (bullet.left > ref.current.x -30) {
      onHit();
      setHasPickedUp(true);
    }
  }, [bullet, onHit, ref]);

  useEffect(() => {
    if (numAttempts === 0) {
      console.log("reset bomb");
      setHasPickedUp(false);
      setExplosionFinished(false);
    }
  }, [numAttempts]);

  if(explosionFinished) return <></>;

  if (hasPickedUp) return (
    <Container position={[x, y]} width={125} height={125} ref={ref}>
      <AnimatedSprite
        height={1}
        width={1}
        anchor={0.5}
        textures={bombSpritesheet}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.2}
        loop={false}
        onComplete={() => {
          setExplosionFinished(true);
          setHasPickedUp(false);
        }}
      />
    </Container>
  );

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
