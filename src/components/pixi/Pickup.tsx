import React, {useEffect, useRef, useState} from 'react';
import {Container, Sprite, Text} from '@pixi/react';
import {Rectangle, Sprite as PixiSprite} from 'pixi.js';
import {TextStyle} from "@pixi/text";
import { SupportedFunctions } from '../../types';
import useData from '../../hooks/useData';

type Props = {
  x: number;
  y: number;
  xCord: number;
  yCord: number;
  bullet: Rectangle | null;
  pickupType: SupportedFunctions;
};

export default function Pickup({
  x,
  y,
  xCord,
  yCord,
  bullet,
  pickupType,
}: Props): JSX.Element {
  const ref = useRef<PixiSprite | null>(null);
  const { pickupFunction, isFiring } = useData();
  const [hasPickedUp, setHasPickedUp] = useState(false);

  useEffect(() => {
    setHasPickedUp(false);
  }, [isFiring]);

  useEffect(() => {
    if (!bullet || !ref.current) return;
    if (hasPickedUp) return;
    if (bullet.intersects(ref.current.getBounds())) {
      pickupFunction(pickupType, x);
      setHasPickedUp(true);
    }
  }, [bullet, ref]);

  console.log(pickupType, xCord, yCord);

  return (
    <>
      <Sprite width={30} height={30} x={x} y={y} anchor={0.5} image={`${pickupType}.png`} ref={ref} />
      <Text
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
      />
  </>
  );
}
