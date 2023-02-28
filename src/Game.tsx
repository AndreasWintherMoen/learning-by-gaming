import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Sprite, Stage } from '@pixi/react';
import SineController from './components/SineController';
import { Texture } from 'pixi.js';

export default function Game({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <div className='flex gap-4'>
          <Stage width={1200} height={800}>
            {/* For some reason, this empty sprite MUST be here to enable onclick events in the canvas */}
            {/* See https://github.com/pixijs/pixi-react/issues/402 for updates... */}
            <Sprite texture={Texture.WHITE} width={0} height={0} />
            <Provider store={store}>{children}</Provider>
          </Stage>
          <SineController />
        </div>
      </Provider>
    </div>
  );
}
