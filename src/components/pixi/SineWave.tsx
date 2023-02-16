import { Graphics } from '@pixi/react';
import { useCallback } from 'react';
import { useData } from '../../DataContext';
import { Draw } from '../../types';

const pixelsPerUnit = 100;
const startX = 0;
const startY = 300;

export default function SineWave() {
  const { amplitude, angularFrequency, phaseShift } = useData();
  const drawSineWave = useCallback<Draw>(
    (g) => {
      function drawPoint(x: number, y: number) {
        g.beginFill(0xffff00);
        g.drawCircle(x, y, 1);
      }
      g.clear();
      g.lineStyle(4, 0xffff00, 1);
      g.moveTo(startX, startY);
      for (let i = 0; i < 1000; i++) {
        const x = startX + i;
        const y =
          startY +
          amplitude *
            Math.sin((angularFrequency * i) / pixelsPerUnit) *
            pixelsPerUnit +
          phaseShift * pixelsPerUnit;
        drawPoint(x, y);
      }
    },
    [amplitude, angularFrequency, phaseShift, startX]
  );

  return <Graphics draw={drawSineWave} />;
}
