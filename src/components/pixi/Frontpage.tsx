import {Sprite, Text} from '@pixi/react';
import {TextStyle} from '@pixi/text';
import useCanvasSize from '../../hooks/useCanvasSize';
import useData from '../../hooks/useData';
import useTween from '../../hooks/useTween';
import Button from './Button';
import {sound} from '@pixi/sound';

const animationDuration = 1.6;

export default function Frontpage() {
  const { pixelWidth, pixelHeight } = useCanvasSize();

  const { nextLevel, level } = useData();

  const [topPos, startTopPosAnimation] = useTween({
    func: 'easeInOutCubic',
    start: -100,
    end: -270,
    duration: animationDuration,
  });
  const [bottomPos, startBottomPosAnimation] = useTween({
    func: 'easeInOutCubic',
    start: pixelHeight - 350,
    end: pixelHeight - 200,
    duration: animationDuration,
  });
  const [titlePos, startTitlePosAnimation] = useTween({
    func: 'easeInOutCubic',
    start: pixelHeight / 2 - 100,
    end: pixelHeight / 2 - 300,
    duration: animationDuration,
  });
  const [titleFontsize, startTitleFontsizeAnimation] = useTween({
    func: 'easeOutQuint',
    start: 100,
    end: 50,
    duration: animationDuration,
  });
  const [subtitleOpacity, startSubtitleOpacityAnimation] = useTween({
    func: 'easeOutQuint',
    start: 1,
    end: 0,
    duration: animationDuration,
  });

  const startAllAnimations = () => {
    startTopPosAnimation();
    startBottomPosAnimation();
    startTitlePosAnimation();
    startTitleFontsizeAnimation();
    startSubtitleOpacityAnimation();
  };

  const handleStart = () => {
    if (level !== 0) return;
    sound.play('button-click');
    startAllAnimations();
    nextLevel();
  };


  return (
    <>
      <Sprite image='top.png' width={pixelWidth} height={500} y={topPos} />
      <Sprite
        image='bottom.png'
        width={pixelWidth}
        height={500}
        y={bottomPos}
      />
      <Text
        text='AFTERMATH'
        anchor={0.5}
        x={pixelWidth / 2}
        y={titlePos}
        style={
          new TextStyle({
            fontFamily:
              'Sofija, Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: titleFontsize,
            fill: '#1d1d1d',
            fontWeight: 'bold',
          })
        }
      />
      <Text
        text='A MATHEMATICAL JOURNEY'
        anchor={0.5}
        x={pixelWidth / 2}
        y={pixelHeight / 2 - 10}
        style={
          new TextStyle({
            fontFamily:
              'Sofija, Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 42,
            fill: `rgba(100, 100, 100, ${subtitleOpacity})`,
          })
        }
      />
      <Text
        text='FROM ORIGO TO INFINITY'
        anchor={0.5}
        x={pixelWidth / 2}
        y={pixelHeight / 2 + 50}
        style={
          new TextStyle({
            fontFamily:
              'Sofija, Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 42,
            fill: `rgba(100, 100, 100, ${subtitleOpacity})`,
          })
        }
      />
      <Button
        onClick={handleStart}
        image='startbutton.png'
        x={pixelWidth / 2}
        y={pixelHeight / 2 + 150}
        opacity={subtitleOpacity}
      />
    </>
  );
}
