import React, { useState } from "react";

function ConditionalOperators() {
  const [age, setAge] = useState(17);

  const [isLoggedIn, setLoggedIn] = useState(false);

  if (age >= 18) {
    console.log("eligible to vote");
  } else {
    console.log("not eligible to vote");
  }

  return (
    <div>
      {/* Ternary Operators  */}
      {/* {age >= 18 ? (
        <p>You are eligible to vote</p>
      ) : (
        <p>You are not eligible to vote</p>
      )} */}

      {/* {age >= 18 && <p>You are eligible to vote</p>} */}

      {/* <button onClick={() => setAge(20)}>Change age </button> */}

      {isLoggedIn === false ? (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
}

export default ConditionalOperators;
