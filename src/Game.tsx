import { Stage } from '@pixi/react';
import SineController from './components/SineController';
import SineWave from './components/pixi/SineWave';
import SineText from './components/pixi/SineText';
import { DataProvider } from './DataContext';

export default function Game() {
  return (
    <div>
      <DataProvider>
        <Stage>
          <SineWave />
          <SineText />
        </Stage>
        <SineController />
      </DataProvider>
    </div>
  );
}
