import { Graphics } from '@pixi/react';
import { useCallback } from 'react';
import { Draw } from '../../types';
import useCanvasSize from '../../hooks/useCanvasSize';

export default function Axes() {
  const { pixelWidth, pixelHeight, gridHeight, origoPosition, cellSize } =
    useCanvasSize();

  const draw = useCallback<Draw>(
    (g) => {
      g.clear();
      g.beginFill(0x000000, 0.5);
      for (let i = 0; i < pixelHeight; i += 50) {
        g.drawRect(origoPosition.x * cellSize, i, 2, 30);
      }
      for (let i = 0; i < pixelWidth; i += 50) {
        g.drawRect(i, origoPosition.y * cellSize, 30, 2);
      }
      g.endFill();
    },
    [cellSize, gridHeight, origoPosition, pixelHeight, pixelWidth]
  );

  return <Graphics draw={draw} />;
}
