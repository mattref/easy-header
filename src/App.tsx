import { createSignal } from 'solid-js';
import './App.css';

function App() {
  const [counter, setCounter] = createSignal(0);

  return (
    <>
      <div>Hello World</div>
      <p>T: {counter()}</p>
      <button onClick={() => setCounter((c) => c + 1)}>Test</button>
    </>
  );
}

export default App;
