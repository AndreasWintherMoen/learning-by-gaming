import { useEffect, useRef, useState } from 'react';
import Game from './game';

export default function GameRenderer() {
  const gameRef = useRef<HTMLDivElement>(null);
  const [gameSimulator, setGameSimulator] = useState<Game | null>(null);
  const [amplitude, setAmplitude] = useState(1);
  const [angularFrequency, setAngularFrequency] = useState(1);
  const [phaseShift, setPhaseShift] = useState(0);

  useEffect(() => {
    if (!gameRef || !gameRef?.current) return;
    if (!!gameSimulator) return;
    const newGame = new Game(gameRef.current, {
      amplitude,
      angularFrequency,
      phaseShift,
    });
    setGameSimulator(newGame);
  }, [gameRef, gameSimulator]);

  useEffect(() => {
    if (!gameSimulator) return;
    gameSimulator.setAmplitude(amplitude);
  }, [amplitude]);

  useEffect(() => {
    if (!gameSimulator) return;
    gameSimulator.setAngularFrequency(angularFrequency);
  }, [angularFrequency]);

  useEffect(() => {
    if (!gameSimulator) return;
    gameSimulator.setPhaseShift(phaseShift);
  }, [phaseShift]);

  return (
    <div className='flex flex-col self-center items-center'>
      <div ref={gameRef}></div>
      <div>
        <input
          type='range'
          min='0'
          max='2'
          value={amplitude}
          step='0.1'
          onChange={(ev) => setAmplitude(Number.parseFloat(ev?.target?.value))}
        />
      </div>
      <div>
        <input
          type='range'
          min='0'
          max='4'
          value={angularFrequency}
          step='0.1'
          onChange={(ev) =>
            setAngularFrequency(Number.parseFloat(ev?.target?.value))
          }
        />
      </div>
      <div>
        <input
          type='range'
          min='-2'
          max='2'
          value={phaseShift}
          step='0.2'
          onChange={(ev) => setPhaseShift(Number.parseFloat(ev?.target?.value))}
        />
      </div>
    </div>
  );
}
