import { useApp } from '@pixi/react';

export default function useCanvasSize() {
  const app = useApp();
  const { width, height } = app.view;
  const scale = window.devicePixelRatio;
  return { width: width / scale, height: height / scale };
}
