import Frontpage from './components/pixi/Frontpage';
import TextbookBackground from './components/pixi/TextbookBackground';
import SineWave from './components/pixi/SineWave';
import Axes from './components/pixi/Axes';
import useLevel from './hooks/useLevel';
import Coin from './components/pixi/Coin';
import {useCallback, useEffect, useState} from 'react';
import {Rectangle} from 'pixi.js';
import useData from './hooks/useData';
import useCanvasSize from './hooks/useCanvasSize';
import LevelText from './components/pixi/LevelText';
import {sound} from '@pixi/sound';
import delay from './utils/delay';
import PowerBar from './components/pixi/PowerBar';
import Bomb from "./components/pixi/Bomb";

export default function Canvas() {
  const { level: levelIndex, setDisplayScore, setAmplitude, amplitude, coins, collectCoin, stopFire, collectBomb} = useData();
  const { origoPosition } = useCanvasSize();
  const level = useLevel(levelIndex);
  const [bulletRect, setBulletRect] = useState<Rectangle | null>(null);
  const [isChangingLevel, setIsChangingLevel] = useState(false);

  const onHitCoin = (index: number) => {
    console.log('onHitCoin', index);
    sound.play('hit-coin');
    collectCoin(index);
  };

  useEffect(() => {
    async function changeLevel() {
      setIsChangingLevel(true);
      await delay(2000);
      setDisplayScore(true);
      setIsChangingLevel(false);
      setAmplitude(amplitude + 1);
      setTimeout(() => setAmplitude(amplitude), 0);
    }
    if (isChangingLevel) return;
    if (levelIndex === 0) return;
    const coinCoins = coins.filter((coin) => coin.type === 'coin');
    if (coinCoins.length === 0) return;
    if (coinCoins.some((coin) => !coin.isCollected)) return;
    changeLevel();
  }, [coins]);

  const onHitBomb = async (index: number) => {
    console.log('onHitBomb', index);
    sound.play('bomb-hit');
    // Subtract points
    //TODO: Do this

    // Stop the sine wave
    stopFire();
    // Animate explosion
    collectBomb(index);
  };

  const handleBulletChange = useCallback((rect: Rectangle) => {
    setBulletRect(rect);
  }, []);

  const coinCoins = coins.filter((coin) => coin.type === 'coin');
  const bombCoins = coins.filter((coin) => coin.type === 'bomb');

  return (
    <>
      <TextbookBackground />
      {levelIndex > 0 && <Axes />}
      {levelIndex > 0 && <SineWave ref={handleBulletChange} />}
      {levelIndex > 0 && <LevelText />}
      {level?.showPowerBar && <PowerBar />}
      {level &&
        coinCoins.map((coin) => coin.position).map(([x, y], i) => (
          <Coin
            key={i}
            x={(origoPosition.x + x) * level.cellSize}
            y={(origoPosition.y + y) * level.cellSize}
            xCord={x}
            yCord={y}
            show={!coinCoins[i].isCollected}
            bullet={bulletRect}
            onHit={() => onHitCoin(i)}
          />
        ))}
      {level &&
        bombCoins.map((coin) => coin.position).map(([x, y], i) => (
          <Bomb
            key={i}
            x={(origoPosition.x + x) * level.cellSize}
            y={(origoPosition.y + y) * level.cellSize}
            xCord={x}
            yCord={y}
            show={!bombCoins[i].isCollected}
            bullet={bulletRect}
            onHit={() => onHitBomb(i)}
          />
        ))}
      <Frontpage />
    </>
  );
}
