import { useApp } from '@pixi/react';
import useLevel from './useLevel';

export default function useCanvasSize() {
  const { level } = useLevel();
  const { cellSize, origoPosition } = level;

  const app = useApp();
  const { width, height } = app.view;
  const scale = window.devicePixelRatio;
  const pixelWidth = width / scale;
  const pixelHeight = height / scale;
  const gridWidth = Math.floor(pixelWidth / cellSize);
  const gridHeight = Math.floor(pixelHeight / cellSize);

  return {
    gridWidth,
    gridHeight,
    pixelWidth,
    pixelHeight,
    origoPosition: {
      ...origoPosition,
      y: gridHeight / 2 + origoPosition.y,
    },
    cellSize,
  };
}
