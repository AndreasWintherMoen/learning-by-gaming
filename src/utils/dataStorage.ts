import { levels } from '../hooks/useLevel';
import { LevelScore } from '../types';

export function saveLevelData(level: number, score: number): void {
  
  const levelData = loadAllLevelData();
  const currentScore = levelData[level - 1];
  const starScore = scoreToLevelScore(score, level - 1);
  if (!!currentScore && typeof currentScore === 'number' && typeof starScore === 'number' && currentScore > starScore) return;
  levelData[level - 1] = starScore;
  const dataString = levelData.map(serialize).join(',');
  localStorage.setItem('levelData', dataString);
}

export function getLevelData(level: number): LevelScore {
  const data = loadAllLevelData();
  return data[level];
}

export function loadAllLevelData(): LevelScore[] {
  const numLevels = levels.length;
  const dataString = localStorage.getItem('levelData');
  if (!dataString) return ["not played", ...Array(numLevels - 1).fill("locked")];
  const data = dataString.split(',').map(deserialize);
  if (data.length < numLevels) {
    return [...data, "not played", ...Array(numLevels - data.length - 1).fill("locked")];
  }
  return data;
}

export function getLevelCount(): number {
  const dataString = localStorage.getItem('levelData');
  if (!dataString) return 0;
  return dataString.split(',').length;
}

function serialize(levelScore: LevelScore): string {
  if (levelScore === "not played") return "0";
  if (levelScore === "locked") return "-1";
  return levelScore.toString();
}

function deserialize(text: string, index: number): LevelScore {
  if (text === '-1') return "locked";
  if (text === '0') return "not played";
  const number = parseInt(text, 10);
  if (number <= 0 || number > 3) return "not played";
  return number as | 1 | 2 | 3;
}

function scoreToLevelScore(score: number, index: number): LevelScore {
  const { starScores } = levels[index];
  if (score < starScores[0]) return 0;
  if (score < starScores[1]) return 1;
  if (score < starScores[2]) return 2;
  return 3;
}
