import { groupArrayElements } from "./groupArrayElements.js";

import "./App.css";

let input = [1, 2, 3, 4, 5];
let size = 3;
let result = groupArrayElements(input.slice(), size);

function App() {
  return (
    <div className="App">
      <pre>Input :{JSON.stringify(input)}</pre>
      <pre>size :{JSON.stringify(size)} </pre>
      <pre>Output :{JSON.stringify(result)}</pre>
    </div>
  );
}
export default App;
