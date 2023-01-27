import React, { createContext, useState } from "react";

// 1. Context
export const UserContext = createContext();

// 2. Provider
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
