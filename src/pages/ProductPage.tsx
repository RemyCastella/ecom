import React, { Dispatch, SetStateAction } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import AddToCartButton from "../components/AddToCartButton";
import { ProductData } from "../types/products";

interface ProductPageProps {
  products: ProductData[],
  setCart: Dispatch<SetStateAction<number[]>>
}

function ProductPage({ products, setCart }: ProductPageProps) {
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

  if(selectedProduct) {
    return (
      <main className="mt-8 max-w-4xl px-4">
        <h1 className="text-4xl font-bold">{selectedProduct.title}</h1>
        <div className="mt-8 flex flex-col sm:flex-row sm:gap-16 sm:items-start">
          <img
            src={selectedProduct.image}
            alt="product image"
            className="w-1/2 md:w-1/4"
          />
          <div className="mt-4">
            <p className="text-xl py-4">{selectedProduct.description}</p>
            <p className="text-3xl py-4">${selectedProduct.price}</p>
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
}

export default ProductPage;
