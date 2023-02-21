import {Sprite, useApp} from '@pixi/react';
import {useState} from 'react';
import useData from "../../hooks/useData";
import CoordinationTag from "./CoordinationTag";

export default function Player() {
  const app = useApp();
  const data = useData();
  const x = 0;
  const y = app.view.height/4 - data.phaseShift*100;
  return (
    <>
    <CoordinationTag x={x} y={data.phaseShift} positionX={x} positionY={y-100}/>
    <Sprite image="player.png" x={x} y={y - 31} />
    </>
  );
};
