import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import FontFaceObserver from 'fontfaceobserver';
await new FontFaceObserver('Handdrawn').load();
await new FontFaceObserver('Sofija').load();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
