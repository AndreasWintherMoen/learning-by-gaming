import {Sprite} from '@pixi/react';
import {ObservablePoint, Sprite as PixiSprite} from 'pixi.js';
import React, {useRef} from 'react';
import useCanvasSize from "../../hooks/useCanvasSize";
import useData from "../../hooks/useData";
import SineText from "./SineText";


export default function ActionPanel() {
  const { pixelWidth, pixelHeight} = useCanvasSize();
  const { level } = useData();
  const anchor = new ObservablePoint(() => {}, null, 0.5, 1);
  const ref = useRef<PixiSprite | null>(null);

  if (level === 0) {
    return <></>
  }

  return (
    <>
      <Sprite image='action-panel.png' scale={0.6} anchor={anchor} x={pixelWidth/2} y={pixelHeight - 16} ref={ref}/>
      <SineText x={pixelWidth/2} y={pixelHeight - 90} />
    </>
  );
}
