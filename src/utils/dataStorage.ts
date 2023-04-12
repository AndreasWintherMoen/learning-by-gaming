import { levels } from '../hooks/useLevel';

export function saveLevelData(level: number, score: number): void {
  const levelData = loadAllLevelData();
  const currentScore = levelData[level - 1];
  if (!!currentScore && currentScore > score) return;
  levelData[level - 1] = score;
  const dataString = levelData.map(Math.round).join(',');
  localStorage.setItem('levelData', dataString);
}

export function getLevelData(level: number): number {
  const dataString = localStorage.getItem('levelData') ?? "";
  const data = dataString.split(',').map((score) => parseInt(score, 10));
  return data[level] ?? -1;
}

export function loadAllLevelData(): number[] {
  const numLevels = levels.length;
  const dataString = localStorage.getItem('levelData');
  if (!dataString) return Array(numLevels).fill(-1);
  const data = dataString.split(',').map((score) => parseInt(score, 10));
  if (data.length < numLevels) {
    return [...data, ...Array(numLevels - data.length).fill(-1)];
  }
  return data;
}

export function getLevelCount(): number {
  const dataString = localStorage.getItem('levelData');
  if (!dataString) return 0;
  return dataString.split(',').length;
}
