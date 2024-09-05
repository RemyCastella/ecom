import React, { useState } from "react";
import heroImg from "../assets/ecom-hero-zag.png";
import { FaCartPlus } from "react-icons/fa";
import addToCart from "../functions/addToCart";
import { Toaster, toast } from "sonner";
import AddToCartButton from "../components/AddToCartButton";
import { Link } from "react-router-dom";

function HomePage({ products, loading, setCart }) {
  const featuredProducts = products.slice(0, 5);
  const productElements = featuredProducts.map((product) => {
    const productCategory =
      product.category === "men's clothing"
        ? "mensclothing"
        : product.category === "women's clothing"
          ? "womensclothing"
          : "jewelery";

    return (
      <div
        key={product.id}
        className="flex h-auto w-1/2 cursor-pointer flex-col items-center p-2 md:w-40"
      >
        <Link to={`/store/${productCategory}/${product.id}`}>
          <img src={product.image} alt="product" className="h-48" />
        </Link>
        <div className="flex w-full flex-col truncate">
          <h2 className="truncate text-ellipsis text-lg font-medium">
            {product.title}
          </h2>
        </div>
        <p>${product.price}</p>
        <AddToCartButton
          products={products}
          productId={product.id}
          setCart={setCart}
        />
      </div>
    );
  });

  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <section className="flex w-full flex-col items-center md:flex-row md:justify-center md:gap-8">
        <div className="text ml-4 mt-8 self-start md:mt-20">
          <h1 className="text-7xl font-semibold">Simple</h1>
          <h1 className="text-7xl font-semibold">Good</h1>
          <h1 className="text-7xl font-semibold">Products</h1>
        </div>
        <img
          className="mt-8 w-full md:mt-32 md:max-w-lg"
          src={heroImg}
          alt="woman on beach"
        />
      </section>
      <section className="my-24 flex h-auto w-full flex-col items-center">
        <h2 className="text-3xl font-medium">Trending</h2>
        {loading ? (
          <h2 className="mt-10">Loading products...</h2>
        ) : (
          <div className="my-8 flex flex-wrap items-center justify-center gap-8">
            {productElements}
          </div>
        )}
      </section>
    </main>
  );
}

export default HomePage;
