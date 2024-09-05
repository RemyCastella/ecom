import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import AddToCartButton from "../components/AddToCartButton";

function ProductPage({ products, setCart }) {
  const { category, id } = useParams();

  if (
    category !== "mensclothing" &&
    category !== "womensclothing" &&
    category !== "jewelery"
  ) {
    return (
      <main>
        <h1>There are no products in this category!</h1>
        <Link className="text-xl text-cyan-500 hover:underline" to="/">
          Back to home
        </Link>
      </main>
    );
  }

  const selectedProduct = products.find((product) => product.id === Number(id));

  return (
    <main className="mt-8 max-w-4xl flex-col items-center px-4">
      <h1 className="text-4xl font-bold">{selectedProduct.title}</h1>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <img
          src={selectedProduct.image}
          alt="product image"
          className="w-1/3"
        />
        <div className="flex flex-col gap-4 p-8">
          <p className="text-xl">{selectedProduct.description}</p>
          <p className="text-3xl">${selectedProduct.price}</p>
          <AddToCartButton
            products={products}
            productId={selectedProduct.id}
            setCart={setCart}
          />
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
