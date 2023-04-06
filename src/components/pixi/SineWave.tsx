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
import useLevel from '../../hooks/useLevel';
import getFunction from "../../utils/getFunction";

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
      chargePower,
      level,
      selectedFunction
    } = useData();
    const { origoPosition, cellSize, pixelWidth } = useCanvasSize();
    const startX = origoPosition.x * cellSize - phaseShift * cellSize;
    const startY = origoPosition.y * cellSize;
    const sineLength = cellSize * 3.14 * 2; // one full sine wave period

    const levelInfo = useLevel(level);
    const adjustedChargePower = levelInfo?.showPowerBar
      ? ((chargePower + 0.5) * 2) / 3 // between 0.33 and 1
      : 1;

    // const [speed, setSpeed] = useState(2);
    const [timer, setTimer] = useState(0);
    const [bulletCollider, setBulletCollider] = useState<Rectangle>();

    useImperativeHandle(ref, () => bulletCollider);

    useTick((_, ticker) => {
      if (!isFiring) return;
      const newTimer = timer + ticker.deltaMS / 1000;
      if (newTimer > 4) {
        setTimer(0);
        stopFire();
        return;
      }
      setTimer(newTimer);
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
        if (!isFiring) {
          g.clear();

          setTimer(0);
          setBulletCollider(undefined);
          return;
        }
        function drawPoint(x: number, y: number) {
          g.beginFill(0xf00000, 0);
          g.drawCircle(x, y, 1);
        }
        const powerDistance = levelInfo?.showPowerBar ? chargePower : 1;
        const adjustedOrigoX = origoPosition.x * cellSize;
        const targetDistance = (pixelWidth - adjustedOrigoX) * powerDistance + adjustedOrigoX;
        g.clear();
        g.lineStyle(4, 0x000000, 1);
        g.moveTo(startX, startY);

        const startI = Math.floor(timer * adjustedChargePower * cellSize * 5);
        const func = getFunction(selectedFunction);
        let lastPoint = { x: startX, y: startY };
        const paintAccuracyMultiplier = (amplitude > 2 || angularFrequency > 2) ? 0.5 : 1;
        for (
          let i = startI - sineLength;
          i < Math.min(startI, targetDistance - adjustedOrigoX);
          i += 1 * paintAccuracyMultiplier
        ) {
          const opacity = (1 - (startI - i) / sineLength) * 0.3;
          g.lineStyle(4, 0x000000, opacity);
          const x = startX + i;
          if (x < startX) continue;
          const y = startY - amplitude * func((angularFrequency * i) / cellSize) * cellSize - verticalShift * cellSize;

          drawPoint(x, y);
          lastPoint = { x, y };
        }
        setBulletCollider(new Rectangle(lastPoint.x, lastPoint.y, 1, 1));
        // TODO: Adjust this with phase shift
        if (startI - sineLength > targetDistance) {
          stopFire();
        }
      },
      [amplitude, angularFrequency, verticalShift, timer, isFiring]
    );

    return <Graphics draw={drawSineWave} />;
  }
);

export default SineWave;
