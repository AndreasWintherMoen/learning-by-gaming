import React, {useEffect, useRef, useState} from 'react';
import {Container, Sprite, Text} from '@pixi/react';
import {Rectangle, Sprite as PixiSprite} from 'pixi.js';
import {TextStyle} from "@pixi/text";
import { SupportedFunctions } from '../../types';
import useData from '../../hooks/useData';

type Props = {
  x: number;
  y: number;
  text: string;
  bullet: Rectangle | null;
  pickupType: SupportedFunctions;
  myIndex: number;
};

export default function Pickup({
  x,
  y,
  text,
  bullet,
  pickupType,
  myIndex,
}: Props): JSX.Element {
  const ref = useRef<PixiSprite | null>(null);
  const { pickupFunction, isFiring } = useData();
  const [hasPickedUp, setHasPickedUp] = useState(false);
  const { coinIndexJustCollected } = useData();

  useEffect(() => {
    setHasPickedUp(false);
  }, [isFiring]);

  useEffect(() => {
    if (myIndex !== coinIndexJustCollected) return;
    if (!bullet || !ref.current) return;
    if (hasPickedUp) return;
    if (bullet.left > ref.current.x -30) {
      pickupFunction(pickupType, x);
      setHasPickedUp(true);
    }
  }, [bullet, ref]);

  return (
    <>
      <Sprite width={30} height={30} x={x} y={y} anchor={0.5} image={`${pickupType}.png`} ref={ref} />
      <Text
        text={text}
        anchor={0.5}
        x={x}
        y={y+30}
        style={new TextStyle({
            fill: 0x909090,
            fontSize: 18,
            fontFamily: 'Infomodal',
          })
        }
      />
  </>
  );
}
