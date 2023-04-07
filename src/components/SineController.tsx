import useData from '../hooks/useData';
import React, { useEffect } from 'react';
import useTheme from '../hooks/useTheme';
import FunctionInputPicker from './FunctionInputPicker';
import SineFunctionIndicator from './SineFunctionIndicator';
import useTween from '../hooks/useTween';
import useLevel from '../hooks/useLevel';
import FunctionSelctor from "./FunctionSelctor";

export const levelIntroduced = {
  'amplitude': 2,
  'vertical-shift': 3,
  'angular-frequency': 4,
  'phase-shift': 5,
  'cos': 1,
  'arcsin': 6,
  'arccos': 7,
}

export default function SineController() {
  const theme = useTheme();
  const {
    amplitude,
    angularFrequency,
    phaseShift,
    verticalShift,
    isFiring,
    setAmplitude,
    setAngularFrequency,
    setPhaseShift,
    setVerticalShift,
    fire,
    startCharge,
    level,
    selectedFunction,
    showTutorial,
  } = useData();
  const levelInfo = useLevel(level);

  const [position, startPositionAnimation] = useTween({
    func: 'easeInOutCubic',
    start: -200,
    end: 0,
    duration: 2,
  });

  useEffect(() => {
    if (level === 1) {
      startPositionAnimation();
    }
  }, [level]);

  useEffect(() => {
    //Listen for keypresses and fire the sine wave
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (isFiring || showTutorial) return;
      if (ev.key === 'Enter' || ev.key === ' ') {
        if (levelInfo?.showPowerBar) {
          startCharge();
        } else {
          fire();
        }
      } else if (ev.key === 'ArrowUp') {
        setVerticalShift(verticalShift + 0.1);
      } else if (ev.key === 'ArrowDown') {
        setVerticalShift(verticalShift - 0.1);
      } else if (ev.key === 'ArrowLeft') {
        setPhaseShift(phaseShift - 0.1);
      } else if (ev.key === 'ArrowRight') {
        setPhaseShift(phaseShift + 0.1);
      }
    };
    const handleKeyUp = (ev: KeyboardEvent) => {
      if (isFiring || showTutorial) return;
      if (ev.key === 'Enter' || ev.key === ' ') {
        fire();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isFiring, phaseShift, showTutorial]);

  if (level === 0) return null;


  return (
    <div
      className='select-none'
      style={{
        fontSize: 32,
        color: theme.text.primary,
        height: 130,
        width: 800,
        position: 'absolute',
        bottom: position,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', width: '100%', top: 0, zIndex: - 1}}>
        <svg
          viewBox='0 0 1320 216'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 9.64865L318.5 3L1307 9.64865L1299.5 200.243L681.5 190.824L346.5 196.919L29.5 208L21 9.64865Z'
            fill='#E2E2E2'
          />
          <path
            d='M177.052 3.0278C107.327 5.38073 38.9689 6.38914 25.2972 5.71687C-2.72959 4.03621 -4.78033 5.71688 6.15696 19.8345C9.57487 24.5403 12.9928 61.8511 12.9928 103.196C13.6764 144.54 15.7271 186.893 17.7778 197.649C21.1958 215.8 23.2465 217.145 36.2345 215.464C82.7181 208.741 263.183 202.019 525.679 196.641C693.84 193.279 951.55 196.304 1134.07 203.699C1188.75 206.052 1250.27 206.725 1270.78 205.38L1308.38 203.027V155.296C1308.38 129.078 1311.11 84.7082 1314.53 56.8091L1320 6.05299L870.204 3.70007C622.064 2.69167 393.747 1.01101 361.619 0.338745C329.491 -0.669655 246.778 0.674869 177.052 3.0278ZM453.903 8.40593C510.64 10.4227 670.598 11.7673 809.365 11.7673C948.815 11.7673 1115.61 12.7757 1181.23 14.1202L1300.18 16.137L1289.24 56.8091C1285.82 90.4225 1283.77 130.758 1284.45 146.557L1289.92 195.632L1253.01 197.985C1232.5 198.993 1179.87 198.657 1136.12 196.641C916.004 187.565 524.312 186.557 341.112 194.624C172.267 202.355 38.2853 206.725 34.1838 205.044C32.133 203.699 30.0823 161.01 30.0823 109.918V16.8093L91.6046 14.1202C169.533 11.095 304.198 6.05301 330.858 5.71687C342.479 5.38074 397.849 6.72526 453.903 8.40593Z'
            fill='#3D3D3D'
          />
        </svg>
      </div>
      {/* Function selector */}
      {levelIntroduced['cos'] <= level && (
        <FunctionSelctor isFiring={isFiring}/>
      )}
      {/* Function interaction  */}
      <div
        style={{
          marginLeft: 20,
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingBottom: 22,
          paddingTop: 5
        }}
      >
        <p>f(x)=</p>
        { level >= levelIntroduced['amplitude'] && (
          <FunctionInputPicker
            isFiring={isFiring}
            variable={amplitude}
            onClick={(value) => { if (!isFiring) setAmplitude(value)}}
            color={theme.color.green}
          />)}
        <p>{`${selectedFunction}(`}</p>
        {level >= levelIntroduced['angular-frequency'] && (
          <FunctionInputPicker
            isFiring={isFiring}
            variable={angularFrequency}
            onClick={(value) => { if (!isFiring) setAngularFrequency(value)}}
            color={theme.color.brown}
          />)
        }
        {level >= levelIntroduced['phase-shift'] ? (
          <>
            <p>(x{phaseShift >= 0 && '+'}</p>
            <FunctionInputPicker
              isFiring={isFiring}
              variable={phaseShift}
              onClick={(value) => { if (!isFiring) setPhaseShift(value)}}
              color={theme.color.purple}
            />
          </>) : <p>x</p>}
        {level >= levelIntroduced['vertical-shift'] ? (
          <>
            <p>)){verticalShift >= 0 && '+'}</p>
            <FunctionInputPicker
              isFiring={isFiring}
              variable={verticalShift}
              onClick={(value) => { if (!isFiring) setVerticalShift(value)}}
              color={theme.color.pink}
          />
          </>
        ) : <p>)</p>}
      </div>
      {/* Sine wave illustration */}
      <SineFunctionIndicator
        selectedFunction={selectedFunction}
        amplitude={amplitude}
        angularFrequency={angularFrequency}
        isFiring
        verticalShift={verticalShift}
        phaseShift={phaseShift}
      />
    </div>
  );
}
