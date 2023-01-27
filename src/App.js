import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Test from "./Test";
import Hooks from "./concepts/Hooks";
import Calculator from "./practice/Calculator";
import ApiCalling from "./concepts/apiCalling";
import LifeCycleMethods from "./concepts/LifeCycleMethods";
import Events from "./concepts/Events";
import ConditionalOperators from "./concepts/ConditionalOperators";
import UseEffect from "./concepts/UseEffect";
import { UserProvider } from "./contexts/user";
import Login from "./practice/Login";
import LoggedIn from "./practice/LoggedIn";

function App() {
  // this area is used to write js
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // this area is used to write HTML
    <div className="App">
      <Hooks />
      {/* <Calculator /> */}
      {/* <ApiCalling /> */}
      {/* <LifeCycleMethods /> */}
      {/* <Events /> */}
      {/* <ConditionalOperators /> */}
      {/* <UseEffect /> */}
      {isLoggedIn ? <LoggedIn /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
