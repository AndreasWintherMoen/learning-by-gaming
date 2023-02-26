import { useCallback, useState } from 'react';
import SineWave from './components/pixi/SineWave';
import SineText from './components/pixi/SineText';
import Axes from './components/pixi/Axes';
import Player from './components/pixi/Player';
import Enemy from './components/pixi/Enemy';
import { Rectangle } from 'pixi.js';
import Fireworks from './components/pixi/Fireworks';
import Coin from './components/pixi/Coin';
import LevelText from './components/pixi/LevelText';
import useData from './hooks/useData';

const allCoinPositions = {
  1: [
    [113 + 314 / 4, 200],
    [113 + (314 / 4) * 3, 400],
  ],
  2: [
    [113 + (314 / 4) * 3, 100],
    [113 + (314 / 4) * 6, 400],
  ],
};

export default function Canvas() {
  const [showEnemy, setShowEnemy] = useState(true);
  const [showFirstCoin, setShowFirstCoin] = useState(true);
  const [showSecondCoin, setShowSecondCoin] = useState(true);
  const [coinPositions, setCoinPositions] = useState(allCoinPositions[1]);
  const [bulletRect, setBulletRect] = useState<Rectangle | null>(null);

  const { nextLevel } = useData();

  const handleBulletChange = useCallback((rect: Rectangle) => {
    setBulletRect(rect);
  }, []);

  const onHitEnemy = () => {
    setShowEnemy(false);
    setTimeout(() => {
      setShowEnemy(true);
      setCoinPositions(allCoinPositions[2]);
      setShowFirstCoin(true);
      setShowSecondCoin(true);
      nextLevel();
    }, 2000);
  };

  const onHitCoin = (index: number) => {
    if (index === 0) {
      setShowFirstCoin(false);
    }
    if (index === 1) {
      setShowSecondCoin(false);
    }
  };

  return (
    <>
      <SineWave ref={handleBulletChange} />
      <SineText />
      <LevelText />
      <Axes showHorizontalLines={true} showVerticalLines={true} />
      <Player />
      {showEnemy ? (
        <Enemy x={750} y={300} bullet={bulletRect} onHit={onHitEnemy} />
      ) : (
        <Fireworks x={750} y={300} />
      )}
      {coinPositions.map(([x, y], i) => (
        <Coin
          key={i}
          x={x}
          y={y}
          show={i === 0 ? showFirstCoin : showSecondCoin}
          bullet={bulletRect}
          onHit={() => onHitCoin(i)}
        />
      ))}
    </>
  );
}
