import { AnimatedCursorWindow } from "./components/animatedCursor/AnimatedCursor";
import Magnative from "./components/magnativejs/Magnative";
import "./App.css";

function App() {
  return (
    <div className="App">
       <span className="animateCursor"><AnimatedCursorWindow /></span>
      <Magnative />
    </div>
  );
}

export default App;