// client side rendering

import { useEffect, useState } from "react";
import { getProduct, getProducts } from "../lib/api";

export default function SSR(props) {
  function clickHandler() {
    const x = localStorage.getItem("x");
    console.log("x", x);
  }

  return (
    <main>
      <h1>Productos:</h1>
      <button onClick={clickHandler}>Dame click perro</button>
      {props.products.map((product, idx) => {
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

// server side rendering
// se ejecuta en cada request a la pagina
// se ejecuta en el servidor
export async function getServerSideProps() {
  console.log("Hola desde getServerSideProps");

  const products = await getProducts();

  return {
    props: {
      message: "Hola desde el server",
      text: "hola perro desde el server",
      products,
    },
  };
}
