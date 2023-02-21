import useData from '../hooks/useData';
import {useEffect} from "react";
import {setVerticalShift} from "../store";

export default function SineController() {
  const {
    amplitude,
    angularFrequency,
    phaseShift,
    verticalShift,
    isFiring,
    setAmplitude,
    setAngularFrequency,
    setPhaseShift,
    fire,
  } = useData();

  useEffect(() => {
    //Listen for keypresses and fire the sine wave
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (isFiring) return;
      if (ev.key === 'Enter') {
        fire();
      } else if (ev.key === 'ArrowUp') {
        setPhaseShift(phaseShift + 0.1);
      } else if (ev.key === 'ArrowDown') {
        setPhaseShift(phaseShift - 0.1);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isFiring, phaseShift]);

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
          <h3>Vertical Shift</h3>
          <input
            disabled={isFiring}
            type='range'
            min='-2'
            max='2'
            value={verticalShift}
            step='0.2'
            onChange={(ev) =>
              setVerticalShift(Number.parseFloat(ev?.target?.value))
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
