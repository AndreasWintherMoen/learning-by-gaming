import useData from '../hooks/useData';

export default function SineController() {
  const {
    amplitude,
    angularFrequency,
    phaseShift,
    isFiring,
    setAmplitude,
    setAngularFrequency,
    setPhaseShift,
    fire,
  } = useData();

  return (
    <div className='flex w-full justify-around items-center'>
      <div className='flex flex-col'>
        <div>
          <h3>Amplitude</h3>
          <input
            disabled={isFiring}
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
            disabled={isFiring}
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
            disabled={isFiring}
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
          className={`text-5xl font-bold py-4 px-12 rounded-lg bg-red-500 text-white ${
            isFiring && 'disabled focus:outline-none bg-red-300'
          } `}
          onClick={fire}
          disabled={isFiring}
        >
          Fire!
        </button>
      </div>
    </div>
  );
}
