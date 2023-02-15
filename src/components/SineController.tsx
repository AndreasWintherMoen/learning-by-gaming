import { SineProps, SetSineProps } from '../types';

export default function SineController({
  amplitude,
  angularFrequency,
  phaseShift,
  setAmplitude,
  setAngularFrequency,
  setPhaseShift,
}: SineProps & SetSineProps) {
  return (
    <div className='flex flex-col'>
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
