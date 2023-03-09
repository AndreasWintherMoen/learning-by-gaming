import { Graphics, useTick } from '@pixi/react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import useData from '../../hooks/useData';
import { Draw } from '../../types';
import { Rectangle } from 'pixi.js';
import useCanvasSize from '../../hooks/useCanvasSize';

const SineWave = forwardRef<Rectangle | undefined, {}>(
  ({}: {}, ref: React.ForwardedRef<Rectangle | undefined>): JSX.Element => {
    const {
      amplitude,
      angularFrequency,
      phaseShift,
      verticalShift,
      isFiring,
      addFireSubscriber,
      removeFireSubscriber,
      stopFire,
    } = useData();
    const { origoPosition, cellSize, pixelWidth } = useCanvasSize();
    const startX = origoPosition.x * cellSize + phaseShift * cellSize;
    const startY = origoPosition.y * cellSize;
    const sineLength = cellSize * 3.14 * 2; // one full sine wave period

    const [speed, setSpeed] = useState(10);
    const [timer, setTimer] = useState(0);
    const [bulletCollider, setBulletCollider] = useState<Rectangle>();

    useImperativeHandle(ref, () => bulletCollider);

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
          g.beginFill(0x000000);
          g.drawCircle(x, y, 1);
        }
        g.clear();
        g.lineStyle(4, 0x000000, 1);
        g.moveTo(startX, startY);
        const startI = Math.floor(timer * speed * cellSize);
        if (startI - sineLength > pixelWidth) {
          stopFire();
          setBulletCollider(undefined);
        }
        let lastPoint = { x: startX, y: startY };
        for (let i = startI - sineLength; i < startI; i++) {
          const x = startX + i;
          if (x < startX) continue;
          const y =
            startY -
            amplitude * Math.sin((angularFrequency * i) / cellSize) * cellSize -
            verticalShift * cellSize;

          drawPoint(x, y);
          lastPoint = { x, y };
        }
        setBulletCollider(new Rectangle(lastPoint.x, lastPoint.y, 1, 1));
      },
      [amplitude, angularFrequency, phaseShift, timer]
    );

    return <Graphics draw={drawSineWave} />;
  }
);

export default SineWave;
