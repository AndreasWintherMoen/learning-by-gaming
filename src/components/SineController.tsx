import { useData } from '../DataContext';

export default function SineController() {
  const {
    amplitude,
    angularFrequency,
    phaseShift,
    setAmplitude,
    setAngularFrequency,
    setPhaseShift,
  } = useData();

  return (
    <div className='flex w-full justify-around items-center'>
      <div className='flex flex-col'>
        <div>
          <h3>Amplitude</h3>
          <input
            type='range'
            min='0'
            max='2'
            value={amplitude}
            step='0.1'
            onChange={(ev) =>
              setAmplitude(Number.parseFloat(ev?.target?.value))
            }
          />
        </div>
        <div>
          <h3>Angular Frequency</h3>
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
          <h3>Phase Shift</h3>
          <input
            type='range'
            min='-2'
            max='2'
            value={phaseShift}
            step='0.2'
            onChange={(ev) =>
              setPhaseShift(Number.parseFloat(ev?.target?.value))
            }
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <button
          className='text-5xl font-bold py-4 px-12 rounded-lg bg-red-500 text-white'
          onClick={() => console.log('FIRING')}
        >
          Fire!
        </button>
      </div>
    </div>
  );
}
