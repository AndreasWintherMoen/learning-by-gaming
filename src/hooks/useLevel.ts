import { useState } from 'react';

type Level = {
  cellSize: number;
  origoPosition: {
    x: number;
    y: number;
  };
  enemyPositions: number[][];
  coinPositions: number[][];
};
const levels: Level[] = [
  {
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    enemyPositions: [
      [0, 0],
      [0, 1],
    ],
    coinPositions: [
      [0, 2],
      [0, 3],
      [0, 4],
    ],
  },
];

export default function useLevel() {
  const [level, setLevel] = useState(0);

  function nextLevel() {
    setLevel(level + 1);
  }

  function resetLevel() {
    setLevel(0);
  }

  return {
    level: levels[level],
    levelIndex: level,
    nextLevel,
    resetLevel,
  };
}
