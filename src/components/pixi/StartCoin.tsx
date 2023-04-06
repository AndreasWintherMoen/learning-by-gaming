import React from 'react';
import {Sprite} from '@pixi/react';
import useData from "../../hooks/useData";
import useCanvasSize from "../../hooks/useCanvasSize";
import getFunction from "../../utils/getFunction";

export default function StartCoin() {
  const {selectedFunction, verticalShift, phaseShift} = useData();
  const {origoPosition, cellSize} = useCanvasSize();
  const func = getFunction(selectedFunction);

  const xStart = (origoPosition.x - phaseShift) * cellSize;
  const yStart = (origoPosition.y - verticalShift - func(0)) * cellSize;
  console.log("xStart", xStart);

  return (
    <Sprite
      image={`${selectedFunction}.png`}
      width={30}
      height={30}
      anchor={0.5}
      x={xStart}
      y={yStart}
    />
  );
}
