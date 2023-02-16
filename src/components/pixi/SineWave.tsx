import { Graphics, useApp, useTick } from '@pixi/react';
import { useCallback, useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import { Draw } from '../../types';

const pixelsPerUnit = 100;
const startX = -314 * 2 - 2;
const startY = 0;
const speed = 20;

export default function SineWave() {
  const {
    amplitude,
    angularFrequency,
    phaseShift,
    isFiring,
    addFireSubscriber,
    removeFireSubscriber,
    stopFire,
  } = useData();

  const [timer, setTimer] = useState(0);

  const app = useApp();
  const { height, width } = app.view;

  useTick((_, ticker) => {
    if (!isFiring) return;
    setTimer((timer) => timer + ticker.deltaMS / 1000);
  });

  useEffect(() => {
    addFireSubscriber(() => {
      setTimer(0);
    });
    return () => {
      removeFireSubscriber(() => setTimer(0));
    };
  }, []);

  const drawSineWave = useCallback<Draw>(
    (g) => {
      function drawPoint(x: number, y: number) {
        g.beginFill(0xffff00);
        g.drawCircle(x, y, 1);
      }
      g.clear();
      g.lineStyle(4, 0xffff00, 1);
      g.moveTo(startX, startY);
      const startI = Math.floor(timer * speed * pixelsPerUnit);
      if (startI > width) stopFire();
      for (let i = startI; i < startI + 314 * 2; i++) {
        const x = startX + i;
        const y =
          height / 4 -
          // startY +
          amplitude *
            Math.sin((angularFrequency * i) / pixelsPerUnit) *
            pixelsPerUnit -
          phaseShift * pixelsPerUnit;
        drawPoint(x, y);
      }
    },
    [amplitude, angularFrequency, phaseShift, timer]
  );

  return <Graphics draw={drawSineWave} />;
}
