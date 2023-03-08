import {Graphics} from '@pixi/react';
import {useCallback} from 'react';
import useCanvasSize from '../../hooks/useCanvasSize';
import {Draw} from '../../types';


export default function TextbookBackground() {
  const { pixelWidth, pixelHeight, cellSize } = useCanvasSize();

  const draw = useCallback<Draw>((g) => {
    g.clear();
    g.beginFill(0xffffff);
    g.drawRect(0, 0, pixelWidth, pixelHeight);
    g.beginFill(0x000000, 0.1);
    for (let i = 0; i < pixelWidth; i += cellSize) {
      g.drawRect(i, 0, 2, pixelHeight);
    }
    for (let i = 0; i < pixelHeight; i += cellSize) {
      g.drawRect(0, i, pixelWidth, 2);
    }
    g.endFill();
  }, [cellSize]);

  return <Graphics draw={draw} />;
}
