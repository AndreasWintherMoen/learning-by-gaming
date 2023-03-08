import {useApp} from '@pixi/react';
import useLevel from "./useLevel";

export default function useCanvasSize() {
  const { level } = useLevel();
  const { cellSize } = level;
  const app = useApp();
  const { width, height } = app.view;
  const scale = window.devicePixelRatio;
  const pixelWidth = width / scale;
  const pixelHeight = height / scale;
  const gridWidth = Math.floor(pixelWidth / cellSize);
  const gridHeight = Math.floor(pixelHeight / cellSize);
  const origoPosition = {
    y: 3,
    x: 4
  }

  return {
    gridWidth,
    gridHeight,
    pixelWidth,
    pixelHeight,
    origoPosition,
    cellSize,
  };
}
