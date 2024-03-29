import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Sprite, Stage} from '@pixi/react';
import {Texture} from 'pixi.js';
import SineController from './components/SineController';
import InfoModal from "./components/InfoModal";
import QuestionButton from "./components/QuestionButton";
import React from "react";
import ScoreCard from "./components/ScoreCard";
import SoundButton from "./components/SoundButton";
import NewPowerBar from "./components/NewPowerBar";
import LevelsModal from "./components/LevelsModal";
import LevelsButton from "./components/LevelsButton";

export default function Game({ children }: { children: React.ReactNode }) {
  return (
    <div style={{overflow:'hidden'}}>
      <Provider store={store}>
        <div className='flex gap-4 items-center relative'>
          <Stage width={1200} height={800} style={{borderRadius: 20}}>
            {/* For some reason, this empty sprite MUST be here to enable onclick events in the canvas */}
            {/* See https://github.com/pixijs/pixi-react/issues/402 for updates... */}
            <Sprite texture={Texture.WHITE} width={0} height={0} />
            <Provider store={store}>{children}</Provider>
          </Stage>
          <SineController />
          <NewPowerBar />
          <QuestionButton />
          <LevelsButton />
          <SoundButton />
          <InfoModal />
          <LevelsModal />
        </div>
        <ScoreCard />
      </Provider>
    </div>
  );
}
