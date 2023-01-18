import "./App.css";
import Navbar from "./Navbar";
import Test from "./Test";
import Hooks from "./concepts/Hooks";
import Calculator from "./practice/Calculator";
import ApiCalling from "./concepts/apiCalling";

function App() {
  // this area is used to write js
  console.log("Hellooooooo");

  return (
    // this area is used to write HTML
    <div className="App">
      {/* <Hooks /> */}
      {/* <Calculator /> */}
      <ApiCalling />
    </div>
  );
}

export default App;
