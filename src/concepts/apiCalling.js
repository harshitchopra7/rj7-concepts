import React, { useEffect, useState } from "react";

// Javascript is single threaded synchronous language

function ApiCalling() {
  const [apiData, setApiData] = useState([]);

  const [numbers, setNumbers] = useState(0);
  const [addedNumbers, setAddedNumbers] = useState(10);

  // end point - https://fakestoreapi.com/products

  // 1. fetch
  // 2. axios

  async function callApi() {
    // syntax
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setApiData(data);
  }

  return (
    <div>
      <p>Heyyyyy</p>

      <button onClick={callApi()}>Get Data</button>

      {apiData.map((value) => (
        <p>{value.id}</p>
      ))}
    </div>
  );
}
export default ApiCalling;
