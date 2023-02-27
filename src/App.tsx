import Canvas from './Canvas';
import Game from './Game';
import NewCanvas from './NewCanvas';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center mt-8'>
      <Game>
        {/* <Canvas /> */}
        <NewCanvas />
      </Game>
    </div>
  );
}

export default App;
