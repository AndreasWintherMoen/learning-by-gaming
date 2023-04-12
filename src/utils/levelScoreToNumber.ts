import { LevelScore } from '../types';

export default function levelScoreToNumber(levelScore: LevelScore): number {
  if (typeof levelScore === 'number') return levelScore;
  return 0;
}