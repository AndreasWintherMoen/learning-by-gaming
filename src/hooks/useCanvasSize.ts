import { useApp } from '@pixi/react';
import useData from './useData';
import useLevel from './useLevel';

const defaultCanvasSize = {
  pixelWidth: 1200,
  pixelHeight: 800,
  cellSize: 50,
  gridWidth: 1200 / 50,
  gridHeight: 800 / 50,
  origoPosition: {
    x: 1,
    y: 0,
  },
};

export default function useCanvasSize() {
  const { level: levelIndex } = useData();
  const level = useLevel(levelIndex);
  if (!level) return defaultCanvasSize;

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
