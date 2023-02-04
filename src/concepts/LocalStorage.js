import React from "react";

function LocalStorage() {
  // 1. set something in local storage = setItem(key, value)
  // 1. get something from local storage = getItem(key)
  // 3. remove a particular thing from local storage = removeItem(key)
  // 4. remove everything from local storage = clear()

  function storeDataInLocalStorage() {
    localStorage.setItem("Name", "Harshit");
    localStorage.setItem("Age", "Any Age");
    localStorage.setItem("Gender", "Male");
    localStorage.setItem("Designation", "SDE");
  }

  function removeAge() {
    localStorage.removeItem("Age");
  }

  function clearStorage() {
    localStorage.clear();
  }

  return (
    <div>
      <button onClick={storeDataInLocalStorage}>Store some data</button>

      <p>Name: {localStorage.getItem("Name")}</p>
      <p>Age: {localStorage.getItem("Age")}</p>
      <p>Gender: {localStorage.getItem("Gender")}</p>
      <p>Designation: {localStorage.getItem("Designation")}</p>

      <button onClick={removeAge}>Remove Age</button>

      <button onClick={clearStorage}>Clear storage</button>
    </div>
  );
}

export default LocalStorage;
