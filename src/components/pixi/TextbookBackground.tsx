import { Graphics, useApp } from '@pixi/react';
import { useCallback } from 'react';
import { Draw } from '../../types';

const GRID_CELL_SIZE = 30;

export default function TextbookBackground() {
  const app = useApp();
  const { width, height } = app.view;

  const draw = useCallback<Draw>((g) => {
    g.clear();
    g.beginFill(0xffffff);
    g.drawRect(0, 0, app.screen.width, app.screen.height);
    g.beginFill(0x000000, 0.1);
    for (let i = 0; i < width; i += GRID_CELL_SIZE) {
      g.drawRect(i, 0, 2, height);
    }
    for (let i = 0; i < height; i += GRID_CELL_SIZE) {
      g.drawRect(0, i, width, 2);
    }
    g.endFill();
  }, []);

  return <Graphics draw={draw} />;
}
