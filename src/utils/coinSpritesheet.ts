import { Texture } from 'pixi.js';

const spritesheet = [
  'coins/coin-0.png',
  'coins/coin-1.png',
  'coins/coin-2.png',
  'coins/coin-3.png',
  'coins/coin-4.png',
  'coins/coin-3.png',
  'coins/coin-2.png',
  'coins/coin-1.png',
];

export default spritesheet.map((url) => Texture.from(url));