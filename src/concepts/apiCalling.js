import React, { useEffect, useState } from "react";
import "./ApiCalling.css";

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

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="products">
      {apiData.map((value) => (
        <div className="product_container">
          <img src={value.image} />
          <p className="title">{value.title}</p>
          <p className="price">Rs {value.price}</p>
          <p className="category">{value.category}</p>
          <p className="rating">{value.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}
export default ApiCalling;
