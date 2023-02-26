import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Stage } from '@pixi/react';
import SineController from './components/SineController';

export default function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Provider store={store}>
        <Stage
          options={{
            height: 600,
            width: 800,
          }}
        >
          <Provider store={store}>{children}</Provider>
        </Stage>
        <SineController />
      </Provider>
    </div>
  );
}
