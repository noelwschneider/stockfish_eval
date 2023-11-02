import './App.css';

import Example from '../Example/Example';
import makePositionFromFEN from '../../utilities/fenToPosition';

let testFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
console.log("test FEN to position:", makePositionFromFEN(testFEN));


function App() {
  return (
    <div className="App">
      {/* YOUR JSX HERE */}
      <h1>App.jsx is on the DOM</h1>
      <Example />
    </div>
  );
}

export default App;
