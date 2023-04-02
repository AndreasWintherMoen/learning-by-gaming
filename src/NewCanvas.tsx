import Frontpage from './components/pixi/Frontpage';
import TextbookBackground from './components/pixi/TextbookBackground';
import SineWave from './components/pixi/SineWave';
import Axes from './components/pixi/Axes';
import useLevel from './hooks/useLevel';
import Coin from './components/pixi/Coin';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Rectangle} from 'pixi.js';
import useData from './hooks/useData';
import useCanvasSize from './hooks/useCanvasSize';
import LevelText from './components/pixi/LevelText';
import {sound} from '@pixi/sound';
import delay from './utils/delay';
import PowerBar from './components/pixi/PowerBar';

export default function Canvas() {
  const { level: levelIndex, nextLevel, setAmplitude, amplitude } = useData();
  const { origoPosition } = useCanvasSize();
  const level = useLevel(levelIndex);
  const [bulletRect, setBulletRect] = useState<Rectangle | null>(null);
  const [isChangingLevel, setIsChangingLevel] = useState(false);

  const coinsVisibilities = useRef<boolean[]>([]);
  useEffect(() => {
    coinsVisibilities.current = level?.coinPositions.map(() => true) ?? [];
  }, [levelIndex, level, coinsVisibilities?.current]);

  const onHitCoin = async (index: number) => {
    console.log('onHitCoin', index);
    sound.play('hit-coin');
    coinsVisibilities.current[index] = false;
    if (!isChangingLevel && coinsVisibilities.current.every((v) => !v)) {
      setIsChangingLevel(true);
      await delay(2000);
      nextLevel();
      setIsChangingLevel(false);
      setAmplitude(amplitude + 1);
      setTimeout(() => setAmplitude(amplitude), 0);
    }
  };

  const handleBulletChange = useCallback((rect: Rectangle) => {
    setBulletRect(rect);
  }, []);

  return (
    <>
      <TextbookBackground />
      {levelIndex > 0 && <Axes />}
      {levelIndex > 0 && <SineWave ref={handleBulletChange} />}
      {levelIndex > 0 && <LevelText />}
      {level?.showPowerBar && <PowerBar />}
      {level &&
        level.coinPositions.map(([x, y], i) => (
          <Coin
            key={i}
            x={(origoPosition.x + x) * level.cellSize}
            y={(origoPosition.y + y) * level.cellSize}
            show={coinsVisibilities.current?.[i] ?? false}
            bullet={bulletRect}
            onHit={() => onHitCoin(i)}
          />
        ))}
      <Frontpage />
    </>
  );
}
