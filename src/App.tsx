import GameRenderer from './GameRenderer';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold mb-12'>Triggered!</h1>
        <h2 className='text-xl'>
          Et masterprosjekt av Andreas Winther Moen & Haakon Reithaug Jacobsen
        </h2>
      </div>
      <GameRenderer />
    </div>
  );
}

export default App;
