import { AnimatedCursorWindow } from "./components/animatedCursor/AnimatedCursor";
import Magnative from "./components/magnativejs/Magnative";
import "./App.css";

function App() {

// let animationCurser2 = document.querySelector(".animationCurser2")

// console.log(animationCurser2.innerHTML = "pawan")

//   function myFunction(windowWidth) {
//     if (windowWidth.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
// // Create a MediaQueryList object
// let windowWidth = window.matchMedia("(max-width: 768px)")

// // Call listener function at run time
// myFunction(windowWidth);

// // Attach listener function on state changes
// windowWidth.addEventListener("change", function() {
//   myFunction(windowWidth);
// });

  return (
    <div className="App">
       <AnimatedCursorWindow />

      <Magnative />
    </div>
  );
}

export default App;
