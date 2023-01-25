import React, { useEffect, useState } from "react";

function UseEffect() {
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, [search]);

  return (
    <div>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />

        <input value={search2} onChange={(e) => setSearch2(e.target.value)} />

        <input value={search3} onChange={(e) => setSearch3(e.target.value)} />
      </div>

      {products?.map((value) => (
        <p>{value.title}</p>
      ))}
    </div>
  );
}

export default UseEffect;
