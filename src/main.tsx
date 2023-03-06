import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {sound} from "@pixi/sound";
import FontFaceObserver from 'fontfaceobserver';

sound.add('button-click', {url:'src/assets/sounds/mouse-click.mp3', preload: true, });
sound.add('intro-music', {
  url:'src/assets/sounds/intro-music.mp3',
  preload: true,
  loop: true,
  volume: 0.0,
  autoPlay: true,
});

await new FontFaceObserver('Handdrawn').load();
await new FontFaceObserver('Sofija').load();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
