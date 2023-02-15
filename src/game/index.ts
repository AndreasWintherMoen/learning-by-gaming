import { Application, Graphics, Text } from 'pixi.js';

class Game {
  private app: Application;
  private sineGraphics: Graphics;
  private sineFormula: Text;
  private startX = 0;
  private startY = 300;
  private pixelsPerUnit = 100;
  private amplitude: number;
  private angularFrequency: number;
  private phaseShift: number;

  constructor(
    parentNode: HTMLDivElement,
    initialSineValues: InitialSineValues
  ) {
    console.log('**************** Game constructor called ****************');
    this.app = new Application({
      backgroundColor: 0x1049ab,
      width: window.outerWidth - 400,
      height: window.outerHeight - 400,
    });
    while (parentNode.children.length > 0) {
      parentNode.removeChild(parentNode.children[0]);
    }
    parentNode.appendChild(this.app.view);

    this.amplitude = initialSineValues.amplitude;
    this.angularFrequency = initialSineValues.angularFrequency;
    this.phaseShift = initialSineValues.phaseShift;

    this.sineGraphics = new Graphics();
    this.sineGraphics.lineStyle(4, 0xffff00, 1);
    this.app.stage.addChild(this.sineGraphics);

    this.sineFormula = new Text('', { fill: 0xffffff });
    this.sineFormula.x = 10;
    this.sineFormula.y = this.app.screen.bottom - 50;
    this.app.stage.addChild(this.sineFormula);

    this.drawSine();
    this.drawSineFormula();
  }

  public setAmplitude(amplitude: number) {
    this.amplitude = amplitude;
    this.drawSine();
    this.drawSineFormula();
  }

  public setAngularFrequency(angularFrequency: number) {
    this.angularFrequency = angularFrequency;
    this.drawSine();
    this.drawSineFormula();
  }

  public setPhaseShift(phaseShift: number) {
    this.phaseShift = phaseShift;
    this.drawSine();
    this.drawSineFormula();
  }

  private drawPoint(x: number, y: number) {
    this.sineGraphics.beginFill(0xffff00);
    this.sineGraphics.drawCircle(x, y, 1);
  }

  private drawSine() {
    this.sineGraphics.clear();
    this.sineGraphics.lineStyle(4, 0xffff00, 1);
    this.sineGraphics.moveTo(this.startX, this.startY);
    for (let i = 0; i < this.app.screen.width; i++) {
      const x = this.startX + i;
      const y =
        this.startY +
        this.amplitude *
          Math.sin((this.angularFrequency * i) / this.pixelsPerUnit) *
          this.pixelsPerUnit +
        this.phaseShift * this.pixelsPerUnit;
      this.drawPoint(x, y);
    }
  }

  private drawSineFormula() {
    const amplitudeText = this.amplitude !== 1 ? this.amplitude : '';
    const angularFrequencyText =
      this.angularFrequency !== 1 ? this.angularFrequency : '';
    const phaseShiftText = this.phaseShift !== 0 ? ` + ${this.phaseShift}` : '';
    this.sineFormula.text = `y = ${amplitudeText}sin(${angularFrequencyText}x${phaseShiftText})`;
  }
}

export default Game;

type InitialSineValues = {
  amplitude: number;
  angularFrequency: number;
  phaseShift: number;
};
