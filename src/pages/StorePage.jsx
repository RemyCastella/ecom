import React from "react";

import { useState } from "react";

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
    <main className="mt-8 flex max-w-4xl flex-col items-center">
      <h1 className="text-4xl font-bold">Products</h1>
      <div className="my-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-14">
        <div className="flex w-48 cursor-pointer flex-col items-center">
          <h2 className="text-xl font-medium">Men's Clothing</h2>
          <img
            src={mensClothing.image}
            alt="mens clothing"
            className="mt-4 max-h-60"
          />
        </div>
        <div className="mt-8 flex w-48 cursor-pointer flex-col items-center sm:mt-0">
          <h2 className="text-xl font-medium">Women's Clothing</h2>
          <img
            src={womensClothing.image}
            alt="mens clothing"
            className="mt-4 max-h-60"
          />
        </div>
        <div className="mt-8 flex w-48 cursor-pointer flex-col items-center sm:mt-0">
          <h2 className="text-xl font-medium">Jewelery</h2>
          <img
            src={jewelery.image}
            alt="mens clothing"
            className="mt-4 max-h-60"
          />
        </div>
      </div>
    </main>
  );
}

export default StorePage;
