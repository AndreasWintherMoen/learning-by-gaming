import { Texture } from 'pixi.js';

const bombSpritesheet = [
  'bomb/explosion-1.png',
  'bomb/explosion-2.png',
  'bomb/explosion-3.png',
];

export default bombSpritesheet.map((url) => Texture.from(url));
