import {sound} from "@pixi/sound";
import { useEffect, useState } from 'react';

interface StarProps {
  selected: boolean;
  size: number;
  style?: React.CSSProperties;
  className?: string;
  score?: number;
  index: number;
}


function playSound(delayInMilliseconds: number) {
  setTimeout(() => {
    sound.play('score', {
      volume: 0.2,
    });
  }, delayInMilliseconds);
}

export default function Star({ className, selected, size, style, score, index }: StarProps) {
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  useEffect(() => {
    if (selected && !hasPlayedSound) {
      playSound(index * 300);
      setHasPlayedSound(true);
    }
  }, []);

  return (
    <div className={`star ${className}`} style={{...style}}>
      <svg height={size} width={size} viewBox="0 0 112 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.9701 38.5808C32.9701 38.5808 43.1264 5.55692 47.7698 3.04702C50.4372 1.60516 68.5334 33.806 68.5334 33.806C68.5334 33.806 107.897 29.9859 108.956 33.806C110.28 38.5808 81.0138 63.2324 81.0138 63.2324C81.0138 63.2324 93.5983 108.235 91.2852 109.537C85.1249 113.006 54.9487 82.887 54.9487 82.887C54.9487 82.887 11.8361 114.298 8.67219 114.978C3.03938 116.189 22.5883 66.0084 22.5883 66.0084C22.5883 66.0084 1.98015 50.6746 3.03948 47.2422C3.99545 44.1446 32.9701 38.5808 32.9701 38.5808Z" fill={selected ? '#FAFC8C': '#E2E2E2'} stroke="#3D3D3D" strokeWidth="5"/>
      </svg>
      {score && <p style={{ alignSelf: 'center', textAlign:'center'}}>{score}</p>}
    </div>
  )};
