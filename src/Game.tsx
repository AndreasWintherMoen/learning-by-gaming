import { Stage } from '@pixi/react';
import { useState } from 'react';
import SineController from './components/SineController';
import SineWave from './components/pixi/SineWave';
import SineText from './components/pixi/SineText';

export default function Game() {
  const [amplitude, setAmplitude] = useState(1);
  const [angularFrequency, setAngularFrequency] = useState(1);
  const [phaseShift, setPhaseShift] = useState(0);

  return (
    <div>
      <Stage>
        <SineWave
          amplitude={amplitude}
          angularFrequency={angularFrequency}
          phaseShift={phaseShift}
        />
        <SineText
          amplitude={amplitude}
          angularFrequency={angularFrequency}
          phaseShift={phaseShift}
        />
      </Stage>
      <SineController
        amplitude={amplitude}
        angularFrequency={angularFrequency}
        phaseShift={phaseShift}
        setAmplitude={setAmplitude}
        setAngularFrequency={setAngularFrequency}
        setPhaseShift={setPhaseShift}
      />
    </div>
  );
}
