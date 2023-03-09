import Game from './Game';
import NewCanvas from './NewCanvas';
import SineController from "./components/SineController";

function App() {
  return (
    <div className='w-screen overflow-x-hidden flex justify-center'>
      <Game>
        {/* <Canvas /> */}
        <NewCanvas />
      </Game>
    </div>
  );
}

export default App;
