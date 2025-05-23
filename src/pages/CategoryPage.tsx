import React, { Dispatch, SetStateAction } from "react";
import { useParams, Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import { ProductData } from "../types/products";

interface CategoryPageProps {
  products: ProductData[],
  setCart: Dispatch<SetStateAction<number[]>>
}

function CategoryPage({ products, setCart }: CategoryPageProps) {
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
    <div className="p-2 bg-slate-50 flex flex-col items-center rounded-md shadow-md">
      <Link
        to={`${product.id}`}
        key={product.id}
      >
        <img src={product.image} alt="product" className="h-64"/>
      </Link>

      <h2 className="w-full text-center truncate text-ellipsis text-lg font-medium">
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
    <main className="w-full px-4">
      {param.category === "mensclothing" && (
        <h2 className="text-center text-4xl font-bold">Men's Clothing</h2>
      )}
      {param.category === "womensclothing" && (
        <h2 className="text-center text-4xl font-bold">Women's Clothing</h2>
      )}
      {param.category === "jewelery" && (
        <h2 className="text-center text-4xl font-bold">Jewelery</h2>
      )}
      <div className="p-2 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">{productElements}</div>
    </main>
  );
}

export default CategoryPage;
