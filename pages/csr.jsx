// client side rendering

import { useEffect, useState } from "react";
import { getProduct, getProducts } from "../lib/api";

export default function CSR() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.error(err));
  }, []);

  function clickHandler() {
    const x = localStorage.getItem("x");
    console.log("x", x);
  }

  return (
    <main>
      <h1>Productos:</h1>
      <button onClick={clickHandler}>Dame click perro</button>
      {products.map((product, idx) => {
        return (
          <article key={idx}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </article>
        );
      })}
    </main>
  );
}
