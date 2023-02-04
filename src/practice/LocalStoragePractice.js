import React, { useEffect, useState } from "react";

function LocalStoragePractice() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  function setProducts() {
    localStorage.setItem("products", JSON.stringify(productsData));
  }

  return (
    <div>
      <button onClick={setProducts}>set products</button>
    </div>
  );
}

export default LocalStoragePractice;
