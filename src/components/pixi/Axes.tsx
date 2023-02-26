import { Graphics } from '@pixi/react';
import { useCallback } from 'react';
import { Draw } from '../../types';
import useConstants from '../../hooks/useConstants';

export default function Axes({
  showHorizontalLines = false,
  showVerticalLines = false,
}) {
  const { LEFT_OFFSET } = useConstants();
  const draw = useCallback<Draw>((g) => {
    g.clear();
    g.beginFill(0xffffff, 0.5);
    for (let i = 0; i < 600; i += 50) {
      g.drawRect(LEFT_OFFSET, i, 2, 30);
    }
    for (let i = 0; i < 800; i += 50) {
      g.drawRect(i, 598, 30, 2);
    }
    if (showHorizontalLines) {
      g.beginFill(0xffffff, 0.1);
      g.drawRect(0, 99, 800, 2);
      g.drawRect(0, 199, 800, 2);
      g.drawRect(0, 299, 800, 2);
      g.drawRect(0, 399, 800, 2);
      g.drawRect(0, 499, 800, 2);
    }
    if (showVerticalLines) {
      g.beginFill(0xffffff, 0.1);
      g.drawRect(314 + LEFT_OFFSET, 0, 2, 600);
      g.drawRect(314 * 2 + LEFT_OFFSET, 0, 2, 600);
    }
    g.endFill();
  }, []);

  return <Graphics draw={draw} />;
}
