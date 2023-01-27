import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const { setUserName } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setUserName(name);
    setIsLoggedIn(true);
  }

  return (
    <div className="login_container">
      <div className="login_box">
        <div className="input_field_container">
          <p>Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <p>Email</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
