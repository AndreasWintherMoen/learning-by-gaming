import { Sprite, Text } from '@pixi/react';
import { TextStyle } from '@pixi/text';
import useCanvasSize from '../../hooks/useCanvasSize';
import useData from '../../hooks/useData';
import useTween from '../../hooks/useTween';
import Button from './Button';
import { sound } from '@pixi/sound';


const animationDuration = 1.6;
sound.add('button-click', {url:'src/assets/sounds/mouse-click.mp3', preload: true, });

export default function Frontpage() {
  const { width, height } = useCanvasSize();

  const { nextLevel } = useData();

  const [topPos, startTopPosAnimation] = useTween({
    func: 'easeInOutCubic',
    start: -100,
    end: -270,
    duration: animationDuration,
  });
  const [bottomPos, startBottomPosAnimation] = useTween({
    func: 'easeInOutCubic',
    start: height - 350,
    end: height - 220,
    duration: animationDuration,
  });
  const [titlePos, startTitlePosAnimation] = useTween({
    func: 'easeInOutCubic',
    start: height / 2 - 100,
    end: height / 2 - 300,
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

  const handleClick = () => {
    sound.play('button-click');
    startAllAnimations();
    nextLevel();
  };

  return (
    <>
      <Sprite image='top.png' width={width} height={500} y={topPos} />
      <Sprite image='bottom.png' width={width} height={500} y={bottomPos} />
      <Text
        text='AFTERMATH'
        anchor={0.5}
        x={width / 2}
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
        x={width / 2}
        y={height / 2 - 10}
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
        x={width / 2}
        y={height / 2 + 50}
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
        onClick={handleClick}
        image='startbutton.png'
        x={width / 2}
        y={height / 2 + 150}
        opacity={subtitleOpacity}
      />
    </>
  );
}