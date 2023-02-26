import { Graphics, useApp, useTick } from '@pixi/react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import useData from '../../hooks/useData';
import { Draw } from '../../types';
import useConstants from '../../hooks/useConstants';
import { Rectangle } from 'pixi.js';

const pixelsPerUnit = 100;
const startX = -314 * 2 - 2;
const startY = 0;

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

    const { LEFT_OFFSET } = useConstants();
    const totalXOffset = LEFT_OFFSET + phaseShift * 100;

    const app = useApp();
    const { height, width } = app.view;

    const [speed, setSpeed] = useState(5);
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
          g.beginFill(0xffff00);
          g.drawCircle(x, y, 1);
        }
        g.clear();
        g.lineStyle(4, 0xffff00, 1);
        g.moveTo(startX, startY);
        const startI = Math.floor(timer * speed * pixelsPerUnit);
        if (startI > width) {
          stopFire();
          setBulletCollider(undefined);
        }
        let lastPoint = { x: startX, y: startY };
        for (let i = startI; i < startI + 314 * 2; i++) {
          const x = startX + i + totalXOffset;
          if (x < totalXOffset) continue;
          const y =
            height / 4 -
            amplitude *
              Math.sin((angularFrequency * i) / pixelsPerUnit) *
              pixelsPerUnit -
            verticalShift * pixelsPerUnit;
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
