import useData from '../hooks/useData';
import React, { useEffect, useState } from 'react';
import useTheme from '../hooks/useTheme';
import FunctionInputPicker from './FunctionInputPicker';
import SineFunctionIndicator from './SineFunctionIndicator';
import useTween from '../hooks/useTween';
import useLevel from '../hooks/useLevel';
import FunctionSelctor from "./FunctionSelctor";

export const levelIntroduced = {
  'amplitude': 2,
  'verticalShift': 4,
  'angularFrequency': 9,
  'phaseShift': 10,
  'cos': 11,
  'arcsin': 12,
  'arccos': 13,
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
    displayScore,
  } = useData();
  const levelInfo = useLevel(level);

  const [position, startPositionAnimation] = useTween({
    func: 'easeInOutCubic',
    start: -200,
    end: 0,
    duration: 2,
  });

  const [disabledControls, setDisabledControls] = useState(true);

  useEffect(() => {
    if (level === 1) {
      startPositionAnimation();
    }
  }, [level]);

  useEffect(() => {
    if (showTutorial) setDisabledControls(false);
  }, [showTutorial]);

  useEffect(() => {
    if (!levelInfo || disabledControls) return;
    //Listen for keypresses and fire the sine wave
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (isFiring || showTutorial || displayScore) return;
      if (ev.key === 'Enter' || ev.key === ' ') {
        if (levelInfo.showPowerBar) {
          startCharge();
        } else {
          fire();
        }
      } 
    };
    const handleKeyUp = (ev: KeyboardEvent) => {
      if (isFiring || showTutorial || displayScore) return;
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
  }, [isFiring, phaseShift, showTutorial, displayScore, levelInfo]);

  function handleFunctionParameterChange(
    parameter: 'amplitude' | 'angular-frequency' | 'phase-shift' | 'vertical-shift',
  ) {
    return (value: number) => {
      if (isFiring) return;
      switch (parameter) {
        case 'amplitude':
          if (levelInfo && Math.abs(value) > levelInfo.maxAmplitude) break;
          setAmplitude(value);
          break;
        case 'angular-frequency':
          if (levelInfo && Math.abs(value) > levelInfo.maxAngularFrequency) break;
          setAngularFrequency(value);
          break;
        case 'phase-shift':
          setPhaseShift(value);
          break;
        case 'vertical-shift':
          if (levelInfo && Math.abs(value) > levelInfo.maxVerticalShift) break;
          setVerticalShift(value);
          break;
      }
    };
  }

  if (level === 0 || !levelInfo) return null;

  return (
    <div
      className='select-none'
      style={{
        fontSize: 28,
        color: theme.text.primary,
        height: 138,
        width: 850,
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
        className={'noselecttext'}
        style={{
          marginLeft: 20,
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf:'center',
          justifyContent: 'center',
          paddingBottom: 22,
          paddingTop: 5,
        }}
      >
        <p>f(x)=</p>
        { level >= levelIntroduced['amplitude'] && (
          <>
            <FunctionInputPicker
              trigType={'amplitude'}
              max={levelInfo.maxAmplitude}
              isFiring={isFiring}
              variable={amplitude}
              onClick={handleFunctionParameterChange('amplitude')}
              color={theme.color.green}
              accuracy={levelInfo?.highAccuracy ? 0.1 : 0.5}
            />
        </>)}
        <p>{`${selectedFunction}(`}</p>
        {level >= levelIntroduced['angularFrequency'] && (
          <>
            <FunctionInputPicker
              trigType={'angularFrequency'}
              max={levelInfo.maxAngularFrequency}
              isFiring={isFiring}
              variable={angularFrequency}
              onClick={handleFunctionParameterChange('angular-frequency')}
              color={theme.color.brown}
              accuracy={levelInfo?.highAccuracy ? 0.1 : 0.5}
            />
          </>)
        }
        {level >= levelIntroduced['phaseShift'] ? (
          <>
            <p>(x</p>
            <FunctionInputPicker
              trigType={'phaseShift'}
              max={3}
              isFiring={isFiring}
              variable={phaseShift}
              onClick={handleFunctionParameterChange('phase-shift')}
              color={theme.color.purple}
              accuracy={levelInfo?.highAccuracy ? 0.1 : 0.5}
            />
          </>) : <p>x</p>}
        {level >= levelIntroduced['verticalShift'] ? (
          <>
            <p>))</p>
            <FunctionInputPicker
              trigType={'verticalShift'}
              max={levelInfo.maxVerticalShift}
              isFiring={isFiring}
              variable={verticalShift}
              onClick={handleFunctionParameterChange('vertical-shift')}
              color={theme.color.pink}
              accuracy={levelInfo?.highAccuracy ? 0.1 : 0.5}
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
