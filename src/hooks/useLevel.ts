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
    cellSize: 80,
    origoPosition: {
      y: 0,
      x: 2,
    },
    enemyPositions: [
      [0, 0],
      [0, 1],
    ],
    coinPositions: [
      [3.14 * 0.5, -1],
      [3.14 * 1, 0],
      [3.14 * 1.5, 1],
      [3.14 * 2, 0],
      [3.14 * 2.5, -1],
      [3.14 * 3, 0],
      [3.14 * 3.5, 1],
      [3.14 * 4, 0],
    ],
  },
  {
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    enemyPositions: [[0, 0]],
    coinPositions: [
      [3.14 * 0.5, -2],
      [3.14 * 1, 0],
      [3.14 * 1.5, 2],
      [3.14 * 2, 0],
      [3.14 * 2.5, -2],
      [3.14 * 3, 0],
      [3.14 * 3.5, 2],
      [3.14 * 4, 0],
      [3.14 * 4.5, -2],
      [3.14 * 5, 0],
      [3.14 * 5.5, 2],
      [3.14 * 6, 0],
      [3.14 * 6.5, -2],
    ],
  },
  {
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    enemyPositions: [[0, 0]],
    coinPositions: [
      [3.14 * 0.5, -3],
      [3.14 * 1, -1],
      [3.14 * 1.5, 1],
      [3.14 * 2, -1],
      [3.14 * 2.5, -3],
      [3.14 * 3, -1],
      [3.14 * 3.5, 1],
      [3.14 * 4, -1],
      [3.14 * 4.5, -3],
      [3.14 * 5, -1],
      [3.14 * 5.5, 1],
      [3.14 * 6, -1],
      [3.14 * 6.5, -3],
    ],
  },
  {
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    enemyPositions: [[0, 0]],
    coinPositions: [
      [3.14 * 0.5 /2, -2],
      [3.14 * 1 /2, 0],
      [3.14 * 1.5 /2, 2],
      [3.14 * 2 /2, 0],
      [3.14 * 2.5 /2, -2],
      [3.14 * 3 /2, 0],
      [3.14 * 3.5 /2, 2],
      [3.14 * 4 /2, 0],
      [3.14 * 4.5 /2, -2],
      [3.14 * 5 /2, 0],
      [3.14 * 5.5 /2, 2],
      [3.14 * 6 /2, 0],
      [3.14 * 6.5 /2, -2],
    ],
  },
  {
    cellSize: 50,
    origoPosition: {
      y: 0,
      x: 2,
    },
    enemyPositions: [[3.14 * 0.5 /2, -2]],
    coinPositions: [
      [3.14 * 1 /2, 0],
      [3.14 * 1.5 /2, 2],
      [3.14 * 2 /2, 0],
      [3.14 * 2.5 /2, -2],
      [3.14 * 3 /2, 0],
      [3.14 * 3.5 /2, 2],
      [3.14 * 4 /2, 0],
      [3.14 * 4.5 /2, -2],
      [3.14 * 5 /2, 0],
      [3.14 * 5.5 /2, 2],
      [3.14 * 6 /2, 0],
      [3.14 * 6.5 /2, -2],
    ],
  },
];

export default function useLevel(index: number) {
  const zeroIndexed = index - 1;
  if (zeroIndexed > levels.length) return null;
  return levels[zeroIndexed];
}
