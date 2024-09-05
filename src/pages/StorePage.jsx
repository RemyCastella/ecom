import React from "react";
import { Link } from "react-router-dom";

function StorePage({ products }) {
  const mensClothing = products.filter(
    (product) => product.category === "men's clothing",
  )[1];

  const womensClothing = products.filter(
    (product) => product.category === "women's clothing",
  )[0];

  const jewelery = products.filter(
    (product) => product.category === "jewelery",
  )[0];

  return (
    <main className="mt-8 flex w-full flex-col items-center gap-24">
      <h1 className="text-4xl font-bold">Collection</h1>
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-24">
        <Link
          to="mensclothing"
          className="flex w-full cursor-pointer flex-col items-center md:w-auto"
        >
          <h2 className="text-4xl font-medium">Men's Clothing</h2>
          <img
            src={mensClothing.image}
            alt="mens clothing"
            className="mt-4 max-h-80 max-w-80"
          />
        </Link>
        <Link
          to="womensclothing"
          className="mt-8 flex w-full cursor-pointer flex-col items-center md:mt-0 md:w-auto"
        >
          <h2 className="text-4xl font-medium">Women's Clothing</h2>
          <img
            src={womensClothing.image}
            alt="mens clothing"
            className="mt-4 max-h-80 max-w-80"
          />
        </Link>
        <Link
          to="jewelery"
          className="mt-8 flex w-full cursor-pointer flex-col items-center md:mt-0 md:w-auto"
        >
          <h2 className="text-4xl font-medium">Jewelery</h2>
          <img
            src={jewelery.image}
            alt="mens clothing"
            className="mt-4 max-h-80 max-w-80"
          />
        </Link>
      </div>
    </main>
  );
}

export default StorePage;
