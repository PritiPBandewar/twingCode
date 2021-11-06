import { chunkedArrayFunction } from "./chunkedArray.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Welcome</p>
      {console.log(
        "Output",
        chunkedArrayFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)
      )}
    </div>
  );
}

export default App;
