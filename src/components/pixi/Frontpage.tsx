import { Sprite, Text, useApp } from '@pixi/react';
import { TextStyle } from '@pixi/text';
import Button from './Button';

export default function Frontpage() {
  const app = useApp();
  const { width, height } = app.view;
  return (
    <>
      <Sprite image='top.png' width={width} height={500} y={-100} />
      <Sprite image='bottom.png' width={width} height={500} y={height - 350} />
      <Text
        text='AFTERMATH'
        anchor={0.5}
        x={width / 2}
        y={height / 2 - 100}
        style={
          new TextStyle({
            fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 100,
            fill: '#111111',
            fontWeight: 'bold',
          })
        }
      />
      <Text
        text='THE JOURNEY OF SIR CUMFERENCE'
        anchor={0.5}
        x={width / 2}
        y={height / 2 - 10}
        style={
          new TextStyle({
            fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 36,
            fill: '#555555',
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
            fontFamily: 'Handdrawn, "Source Sans Pro", Helvetica, sans-serif',
            fontSize: 42,
            fill: '#555555',
          })
        }
      />
      <Button
        onClick={() => console.log('starting game')}
        image='startbutton.png'
        x={width / 2}
        y={height / 2 + 150}
      />
    </>
  );
}
