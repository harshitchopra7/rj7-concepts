import React, { useContext } from "react";
import { UserContext } from "../contexts/user";

function LoggedIn() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      User is logged in
      <p> Hello, {userName}</p>
    </div>
  );
}

export default LoggedIn;
