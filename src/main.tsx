import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { sound } from '@pixi/sound';
import FontFaceObserver from 'fontfaceobserver';

sound.add('button-click', {
  url: 'sounds/mouse-click.mp3',
  preload: true,
});
sound.add('intro-music', {
  url: 'sounds/intro-music-2.mp3',
  preload: true,
  loop: true,
  volume: 1,
  autoPlay: true,
});
sound.add('hit-coin', {
  url: 'sounds/hit-coin.wav',
  preload: true,
});
sound.add('bomb-hit', {
  url: 'sounds/explosion.mp3',
  preload: true,
});

await new FontFaceObserver('Handdrawn').load();
await new FontFaceObserver('Sofija').load();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
