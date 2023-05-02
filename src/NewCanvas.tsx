import Frontpage from './components/pixi/Frontpage';
import TextbookBackground from './components/pixi/TextbookBackground';
import SineWave from './components/pixi/SineWave';
import Axes from './components/pixi/Axes';
import useLevel from './hooks/useLevel';
import Coin from './components/pixi/Coin';
import React, {useCallback, useEffect, useState} from 'react';
import {Rectangle} from 'pixi.js';
import useData from './hooks/useData';
import useCanvasSize from './hooks/useCanvasSize';
import LevelText from './components/pixi/LevelText';
import {sound} from '@pixi/sound';
import delay from './utils/delay';
import Bomb from "./components/pixi/Bomb";
import StartCoin from "./components/pixi/StartCoin";
import BackgroundItems from "./components/pixi/BackgroundItems";
import { saveLevelData } from './utils/dataStorage';
import Pickup from './components/pixi/Pickup';

export default function Canvas() {
  const { level: levelIndex, setDisplayScore, setAmplitude, amplitude, coins, collectCoin, stopFire, collectBomb, currentScore} = useData();
  const { origoPosition } = useCanvasSize();
  const level = useLevel(levelIndex);
  const [bulletRect, setBulletRect] = useState<Rectangle | null>(null);
  const [isChangingLevel, setIsChangingLevel] = useState(false);

  const onHitCoin = (index: number) => {
    sound.play('hit-coin');
    collectCoin(index);
  };

  useEffect(() => {
    async function changeLevel() {
      setIsChangingLevel(true);
      await saveLevelData(levelIndex, currentScore);
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
    sound.play('bomb-hit');
    // Stop the sine wave
    stopFire();
    // Animate explosion
    collectBomb(index);
  };

  const handleBulletChange = useCallback((rect: Rectangle) => {
    setBulletRect(rect);
  }, []);

  const newCoins = coins.map((coin, index) => ({...coin, index}));
  const coinCoins = newCoins.filter((coin) => coin.type === 'coin');
  const bombCoins = newCoins.filter((coin) => coin.type === 'bomb');
  const sinCoins  = newCoins.filter((coin) => coin.type === 'sin');
  const cosCoins  = newCoins.filter((coin) => coin.type === 'cos');
  const tanCoins  = newCoins.filter((coin) => coin.type === 'tan');

  return (
    <>
      <TextbookBackground />
      <BackgroundItems />
      {levelIndex > 0 && <Axes />}
      {levelIndex > 0 && <SineWave ref={handleBulletChange} />}
      {levelIndex > 0 && <LevelText />}
      {level &&
        coinCoins.map((coin, i) => (
          <Coin
            key={i.toString() + 'coin'}
            x={(origoPosition.x + coin.position[0]) * level.cellSize}
            y={(origoPosition.y + coin.position[1]) * level.cellSize}
            text={coin.text}
            show={!coinCoins[i].isCollected}
            bullet={bulletRect}
            onHit={() => onHitCoin(coin.index)}
            myIndex={coin.index}
          />
        ))}
      {level &&
        bombCoins.map((coin, i) => (
          <Bomb
            key={i.toString() + 'bomb'}
            x={(origoPosition.x + coin.position[0]) * level.cellSize}
            y={(origoPosition.y + coin.position[1]) * level.cellSize}
            text={coin.text}
            show={!(bombCoins[coin.index]?.isCollected)}
            bullet={bulletRect}
            onHit={() => onHitBomb(coin.index)}
            myIndex={coin.index}
          />
        ))}
      {level &&
        sinCoins.map((coin, i) => (
          <Pickup
            key={i.toString() + 'sin'}
            x={(origoPosition.x + coin.position[0]) * level.cellSize}
            y={(origoPosition.y + coin.position[1]) * level.cellSize}
            text={coin.text}
            bullet={bulletRect}
            pickupType='sin'
            myIndex={coin.index}
           />
        ))}
      {level &&
        cosCoins.map((coin, i) => (
          <Pickup
            key={i.toString() + 'cos'}
            x={(origoPosition.x + coin.position[0]) * level.cellSize}
            y={(origoPosition.y + coin.position[1]) * level.cellSize}
            text={coin.text}
            bullet={bulletRect}
            pickupType='cos'
            myIndex={coin.index}
           />
        ))}
      {level &&
        tanCoins.map((coin, i) => (
          <Pickup
            key={i.toString() + 'tan'}
            x={(origoPosition.x + coin.position[0]) * level.cellSize}
            y={(origoPosition.y + coin.position[1]) * level.cellSize}
            text={coin.text}
            bullet={bulletRect}
            pickupType='tan'
            myIndex={coin.index}
           />
        ))}
      <StartCoin />
      <Frontpage />
    </>
  );
}
