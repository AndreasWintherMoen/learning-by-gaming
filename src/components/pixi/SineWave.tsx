import { Graphics, useTick } from '@pixi/react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import useData from '../../hooks/useData';
import { Draw } from '../../types';
import { Rectangle } from 'pixi.js';
import useCanvasSize from '../../hooks/useCanvasSize';
import useLevel from '../../hooks/useLevel';
import getFunction from "../../utils/getFunction";
import trigFunctionIntersectsPoint from '../../utils/trigFunctionIntersectsPoints';

const SineWave = forwardRef<Rectangle | undefined, {}>(
  ({}: {}, ref: React.ForwardedRef<Rectangle | undefined>): JSX.Element => {
    const {
      amplitude,
      angularFrequency,
      phaseShift,
      verticalShift,
      isFiring,
      stopFire,
      chargePower,
      level,
      selectedFunction,
      coins,
      functionPickups,
      setCoinIndexJustColled,
    } = useData();
    const { origoPosition, cellSize, pixelWidth } = useCanvasSize();
    const realPhaseShift = -phaseShift / angularFrequency;
    const startX = origoPosition.x * cellSize + realPhaseShift * cellSize;
    const startY = origoPosition.y * cellSize;
    const sineLength = cellSize * 3.14 * 1; // one half sine wave period

    const levelInfo = useLevel(level);
    const adjustedChargePower = levelInfo?.showPowerBar
      ? ((chargePower + 0.5) * 2) / 3 // between 0.33 and 1
      : 1;

    const [timer, setTimer] = useState(0);
    const [bulletCollider, setBulletCollider] = useState<Rectangle>();

    useImperativeHandle(ref, () => bulletCollider);

    useTick((_, ticker) => {
      if (!isFiring) return;
      const newTimer = timer + ticker.deltaMS / 1000;
      setTimer(newTimer);
    });

    const [indexForStuffThatsGoingToHappen, setIndexForStuffThatsGoingToHappen] = useState(0);

    const stuffThatsGoingToHappen = useMemo(() => {
      if (!isFiring || !levelInfo) return [];
      setTimer(0);
      setIndexForStuffThatsGoingToHappen(0);
      const startX = realPhaseShift;
      let currentDomain: [number, number] = [startX, 100];
      let currentFunc = (selectedFunction);
      const newCoins = [...coins];
      return newCoins.map((coin, index) => {
        const params = {
          point: coin.position,
          domain: currentDomain,
          func: currentFunc, 
          amplitude, 
          angularFrequency, 
          phaseShift, 
          verticalShift,
          cellSize: levelInfo.cellSize,
        } as const;
        const isGoingToHit = trigFunctionIntersectsPoint(params);
        if (isGoingToHit) {
          currentDomain = [coin.position[0], 100];
          if (coin.type === 'sin') currentFunc = 'sin';
          else if (coin.type === 'cos') currentFunc = 'cos';
          else if (coin.type === 'tan') currentFunc = 'tan';
          else if (coin.type === 'arcsin') currentFunc = 'arcsin';
          else if (coin.type === 'arccos') currentFunc = 'arccos';
          else if (coin.type === 'arctan') currentFunc = 'arctan';
        }
        return {
          x: coin.position[0],
          action: coin.type,
          isGoingToHit,
          index,
        }
      })
      .filter((coin) => coin.isGoingToHit);
    }, [isFiring]);

    const drawSineWave = useCallback<Draw>(
      (g) => {
        if (!isFiring) {
          g.clear();

          setTimer(0);
          setBulletCollider(undefined);
          return;
        }
        function drawPoint(x: number, y: number) {
          g.drawCircle(x, y, 2);
        }
        const powerDistance = levelInfo?.showPowerBar ? chargePower : 1;
        const adjustedOrigoX = origoPosition.x * cellSize;
        const targetDistance = (pixelWidth - adjustedOrigoX) * powerDistance + adjustedOrigoX;
        g.clear();
        g.lineStyle(4, 0x000000, 1);
        g.moveTo(startX, startY);

        const startI = Math.floor(timer * adjustedChargePower * cellSize * cellSize / 20 * (selectedFunction === 'tan' ? 0.5 : 1)); // CHANGE THIS TO CHANGE SPEED
        const stopI = Math.min(startI, targetDistance - adjustedOrigoX)
        let lastPoint = { x: startX, y: startY };
        const paintAccuracyMultiplier = (Math.abs(amplitude) > 2 || Math.abs(angularFrequency) > 2) ? 0.5 : 1;
        const yConstant = startY - verticalShift * cellSize;
        for (
          let i = startI - sineLength;
          i < stopI;
          i += 1.5 * paintAccuracyMultiplier
        ) {
          const opacity = (1 - (startI - i) / sineLength) * 0.3;
          g.lineStyle(4, 0x000000, opacity);
          const x = startX + i;
          if (x < startX) continue;
          let currentFunction = selectedFunction;
          functionPickups.forEach((pickup) => {
            if (pickup.x < x) {
              currentFunction = pickup.func;
            }
          })
          const func = getFunction(currentFunction);
          const y = yConstant - amplitude * func((angularFrequency * i) / cellSize) * cellSize;
          drawPoint(x, y);
          lastPoint = { x, y };
        }
        if (lastPoint.x !== startX || lastPoint.y !== startY) {
          if (indexForStuffThatsGoingToHappen < stuffThatsGoingToHappen.length) {
            const currentStuff = stuffThatsGoingToHappen[indexForStuffThatsGoingToHappen];
            if (lastPoint.x > currentStuff.x * cellSize + adjustedOrigoX) {
              setIndexForStuffThatsGoingToHappen(indexForStuffThatsGoingToHappen + 1);
              setCoinIndexJustColled(currentStuff.index);
            }
          }
          setBulletCollider(new Rectangle(lastPoint.x, lastPoint.y, 1, 1));
        }
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
