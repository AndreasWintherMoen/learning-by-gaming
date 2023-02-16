import { Stage } from '@pixi/react';
import SineController from './components/SineController';
import SineWave from './components/pixi/SineWave';
import SineText from './components/pixi/SineText';
import Axes from './components/pixi/Axes';
import { Provider } from 'react-redux';
import store from './store';

export default function Game() {
  return (
    <div>
      <Provider store={store}>
        <Stage
          options={{
            height: 600,
            width: 800,
          }}
        >
          <Provider store={store}>
            <SineWave />
            <SineText />
            <Axes showHorizontalLines={false} showVerticalLines={false} />
          </Provider>
        </Stage>
        <SineController />
      </Provider>
    </div>
  );
}
