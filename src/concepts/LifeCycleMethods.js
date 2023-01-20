import React, { useEffect, useState } from "react";

// Lifecycle methods in React
// 1. Creation - mounting
// 2. Updation - updating
// 3. Deletion - unmounting

// useEffect - syntax
// 1. function 2. dependency array

function LifeCycleMethods() {
  const [number1, setNumber1] = useState(10);
  const [number2, setNumber2] = useState(100);
  const [number3, setNumber3] = useState(100);

  // 1. on mounting only - []
  // 2. on mounting + on updation of something - [name]
  // 3. everytime

  useEffect(() => {
    console.log("I am useEffect");
  }, []);

  function changeNumber1() {
    setNumber1(number1 + 10);
  }

  function changeNumber2() {
    setNumber2(number2 + 100);
  }

  function changeNumber3(e) {
    console.log(e);
    setNumber3(number3 + 100);
  }

  return (
    <div>
      <p>I am running</p>
      <p>{number1}</p>
      <button onClick={changeNumber1}>Change Number 1 </button>

      <p>{number2}</p>
      <button onClick={changeNumber2}>Change Number 2 </button>

      <p>{number3}</p>
      <button onClick={changeNumber3}>Change Number 3 </button>
    </div>
  );
}

export default LifeCycleMethods;
