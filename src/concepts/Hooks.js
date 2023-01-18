import React, { useState } from "react";
import "./Hooks.css";

function Hooks() {
  // useState

  const [number, setNumber] = useState(0);
  // value -> Variable
  // setValue -> function

  // useState ->
  // syntax
  // const [variableName, setVariableName] = useState(initialValue)

  function addOne() {
    if (number == 10) {
      return;
    }

    setNumber(number + 1);
  }

  function subtractOne() {
    if (number == 0) {
      return;
    }

    setNumber(number - 1);
  }

  function reset() {
    setNumber(0);
  }

  return (
    <div>
      <p>Click on press me button to add value 1 to the number</p>
      <p className="number">{number}</p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={subtractOne}>Subtract 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Hooks;
