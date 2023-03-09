import Frontpage from './components/pixi/Frontpage';
import TextbookBackground from './components/pixi/TextbookBackground';
import SineWave from './components/pixi/SineWave';
import Axes from './components/pixi/Axes';
import useData from './hooks/useData';

export default function Canvas() {
  const { level } = useData();
  return (
    <>
      <TextbookBackground />
      {level > 0 && <Axes />}
      {level > 0 && <SineWave />}
      <Frontpage />
    </>
  );
}
