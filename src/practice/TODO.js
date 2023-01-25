import React, { useState } from "react";

function TODO() {
  const [array, setArray] = useState([
    "Wash clothes",
    "Do homework",
    "buy grocery",
  ]);
  const [item, setItem] = useState("");

  function addItem() {
    const copyArray = array;
    copyArray.push(item);
    setArray(copyArray);
    // setItem("");
  }

  console.log(array);

  return (
    <div className="TODO_container">
      <input
        placeholder="Enter TODO item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add Item</button>

      {array.map((value) => (
        <p>{value}</p>
      ))}
    </div>
  );
}

export default TODO;
