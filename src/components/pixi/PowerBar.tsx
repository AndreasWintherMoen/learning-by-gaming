import { Graphics, useTick } from '@pixi/react';
import { useCallback, useEffect, useState } from 'react';
import useCanvasSize from '../../hooks/useCanvasSize';
import useData from '../../hooks/useData';
import { Draw } from '../../types';
import lerpColor from '../../utils/lerpColor';

const colors = {
  border: 0x000000,
  background: 0xffffff,
  maxPower: 0xff0000,
  midPower: 0xffff00,
  minPower: 0x00ff00,
};

export default function PowerBar() {
  // const [power, setPower] = useState(0);
  const { pixelHeight } = useCanvasSize();
  const { isCharging, chargePower, setChargePower } = useData();

  const maxHeight = 200;
  const width = 50;
  const xPos = 50;
  const yPos = pixelHeight - maxHeight - 150;
  const borderWidth = 4;
  const chargeTime = 2000;

  useTick((_, ticker) => {
    if (!isCharging) return;
    const newValue = chargePower + ticker.deltaMS / chargeTime;
    setChargePower(Math.max(Math.min(newValue, 1), 0));
  });

  const draw = useCallback<Draw>(
    (g) => {
      g.clear();
      g.beginFill(colors.border);
      g.drawRect(xPos, yPos, width, maxHeight);
      g.beginFill(colors.background);
      g.drawRect(
        xPos + borderWidth / 2,
        yPos + borderWidth / 2,
        width - borderWidth,
        maxHeight - borderWidth
      );
      const barColor =
        chargePower < 0.5
          ? lerpColor(colors.minPower, colors.midPower, chargePower * 2)
          : lerpColor(
              colors.midPower,
              colors.maxPower,
              (chargePower - 0.5) * 2
            );
      g.beginFill(barColor);
      g.drawRect(
        xPos + borderWidth / 2,
        yPos + borderWidth / 2 + maxHeight - chargePower * maxHeight,
        width - borderWidth,
        chargePower * (maxHeight - borderWidth)
      );
      g.endFill();
    },
    [chargePower]
  );

  return <Graphics draw={draw} />;
}
