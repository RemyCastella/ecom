import React from "react";
import { useParams, Link } from "react-router-dom";

function CategoryPage({ products }) {
  const param = useParams();

  const filteredProducts =
    param.category === "mensclothing"
      ? products.filter((product) => product.category === "men's clothing")
      : param.category === "womensclothing"
        ? products.filter((product) => product.category === "women's clothing")
        : param.category === "jewelery"
          ? products.filter((product) => product.category === "jewelery")
          : [];

  if (filteredProducts.length === 0) {
    return (
      <main>
        <h1>This page does not exist!</h1>
      </main>
    );
  }

  return (
    <main>
      <h2 className="text-4xl font-bold">Jewelery</h2>
    </main>
  );
}

export default CategoryPage;
