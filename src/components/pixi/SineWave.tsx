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
    const { origoPosition, cellSize } = useCanvasSize();
    const startX = origoPosition.x * cellSize - phaseShift * cellSize;
    const startY = origoPosition.y * cellSize;
    const sineLength = cellSize * 3.14 * 2; // one full sine wave period

    const levelInfo = useLevel(level);
    const adjustedChargePower = levelInfo?.showPowerBar
      ? ((chargePower + 0.5) * 2) / 3
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
        g.clear();
        g.lineStyle(4, 0x000000, 1);
        g.moveTo(startX, startY);

        // WARNING: Complex and poorly documented math incoming!!
        const amplitudeAngFreqFactors = Math.min(
          2,
          Math.max(
            0.05,
            (amplitude + 0.1) * 0.2 * ((angularFrequency + 0.1) * 0.2)
          )
        );
        const startI = Math.floor(
          (timer * adjustedChargePower * 0.5 * cellSize) /
            amplitudeAngFreqFactors
        );
        const func = getFunction(selectedFunction);
        let lastPoint = { x: startX, y: startY };
        let paintAccuracyMultiplier = 1;
        if (amplitude >= 5) paintAccuracyMultiplier *= 0.5;
        if (angularFrequency >= 5) paintAccuracyMultiplier *= 0.5;
        if (amplitude + angularFrequency >= 5) paintAccuracyMultiplier *= 0.5;
        if (adjustedChargePower > 0.8) paintAccuracyMultiplier *= 0.5;
        else if (adjustedChargePower < 0.2) paintAccuracyMultiplier *= 2;
        for (
          let i = startI - sineLength;
          i < startI;
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
      },
      [amplitude, angularFrequency, verticalShift, timer, isFiring]
    );

    return <Graphics draw={drawSineWave} />;
  }
);

export default SineWave;
