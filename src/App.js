import { groupArrayElements } from "./groupArrayElements.js";

import "./App.css";
const input = [1, 2, 3, 4, 5];
const size = 3;
const result = groupArrayElements(input, size);

function App() {
  return (
    <div className="App">
      <pre>Input :{JSON.stringify(input)} </pre>
      <pre>size :{JSON.stringify(size)} </pre>
      <pre>Output :{JSON.stringify(result)}</pre>
    </div>
  );
}

export default App;
