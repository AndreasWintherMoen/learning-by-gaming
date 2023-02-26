import Canvas from './Canvas';
import Game from './Game';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold mb-6 mt-4'>Triggered!</h1>
        <h2 className='text-xl'>
          Et masterprosjekt av Andreas Winther Moen & Haakon Reithaug Jacobsen
        </h2>
      </div>
      <Game>
        <Canvas />
      </Game>
    </div>
  );
}

export default App;
