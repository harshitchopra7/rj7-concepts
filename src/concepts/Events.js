import React, { useState } from "react";

function Events() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <p>Name</p>
      <input
        placeholder="Enter your name"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <p>{inputValue}</p>
      <button onClick={(e) => console.log("Button event", e)}>button</button>
    </div>
  );
}

export default Events;
