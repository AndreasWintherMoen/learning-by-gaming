import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Sprite, Stage} from '@pixi/react';
import {Texture} from 'pixi.js';
import SineController from './components/SineController';
import InfoModal from "./components/InfoModal";
import QuestionButton from "./components/QuestionButton";
import React from "react";
import ScoreCard from "./components/ScoreCard";

export default function Game({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <div className='flex gap-4 items-center relative'>
          <Stage width={1200} height={800}>
            {/* For some reason, this empty sprite MUST be here to enable onclick events in the canvas */}
            {/* See https://github.com/pixijs/pixi-react/issues/402 for updates... */}
            <Sprite texture={Texture.WHITE} width={0} height={0} />
            <Provider store={store}>{children}</Provider>
          </Stage>
          <SineController />
          <QuestionButton />
        </div>
        {<ScoreCard score={230} scores={[110, 220, 310]}  />}
        <InfoModal />
      </Provider>
    </div>
  );
}
