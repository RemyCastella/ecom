import React from "react";
import { useParams, Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

function CategoryPage({ products, setCart }) {
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
        <h1>There are no products in this category!</h1>
        <Link className="text-xl text-cyan-500 hover:underline" to="/">
          Back to home
        </Link>
      </main>
    );
  }

  const productElements = filteredProducts.map((product) => (
    <div className="flex w-full flex-col items-center">
      <Link
        to={`${product.id}`}
        key={product.id}
        className="flex h-auto cursor-pointer flex-col items-center p-2"
      >
        <img src={product.image} alt="product" className="w-full max-w-xs" />
      </Link>

      <h2 className="w-48 truncate text-ellipsis text-lg font-medium">
        {product.title}
      </h2>
      <p>${product.price}</p>
      <AddToCartButton
        products={products}
        productId={product.id}
        setCart={setCart}
      />
    </div>
  ));

  return (
    <main className="mt-8 w-full flex-col items-center px-4">
      {param.category === "mensclothing" && (
        <h2 className="text-center text-4xl font-bold">Men's Clothing</h2>
      )}
      {param.category === "womensclothing" && (
        <h2 className="text-center text-4xl font-bold">Women's Clothing</h2>
      )}
      {param.category === "jewelery" && (
        <h2 className="text-center text-4xl font-bold">Jewelery</h2>
      )}
      <div className="my-8 flex flex-col gap-16">{productElements}</div>
    </main>
  );
}

export default CategoryPage;
