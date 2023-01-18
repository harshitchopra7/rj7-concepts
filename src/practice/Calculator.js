import React, { useState } from "react";

function Calculator() {
  const zeroValue = 0;

  const [value, setValue] = useState(zeroValue);

  const add = (num1, num2) => {
    setValue(num1 + num2);
  };

  //   value = 0

  return (
    <div>
      <p>{value}</p>

      <button onClick={() => add(10, 20)}>Add</button>
    </div>
  );
}

export default Calculator;
