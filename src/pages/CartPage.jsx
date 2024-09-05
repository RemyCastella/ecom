import React from "react";
import { useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import checkout from "../functions/checkout";
import IncDecButton from "../components/IncDecButton";
import DeleteButton from "../components/DeleteButton";

function CartPage({ cart, setCart, products }) {
  let cartElements = [];
  let total = 0;

  function handleAddItem(productId) {
    setCart((prevCart) => [...prevCart, productId]);
  }

  function handleRemoveItem(productId) {
    const selectedProduct = cart.filter((products) => products === productId);
    if (selectedProduct.length === 1) return;
    const index = cart.indexOf(productId);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function handleDeleteItem(productId) {
    const newCart = cart.filter((product) => product !== productId);
    setCart(newCart);
  }

  const frequencyObject = cart.reduce((acc, val) => {
    return acc[val] ? ++acc[val] : (acc[val] = 1), acc;
  }, {});

  for (let item in frequencyObject) {
    const product = products.find((product) => product.id === Number(item));
    const subTotal = product.price * frequencyObject[item];
    total += subTotal;
    cartElements.push(
      <div
        key={product.id}
        className="flex w-full max-w-xl flex-col gap-4 p-4 shadow-lg sm:flex-row"
      >
        <div className="w-full">
          <p className="w-60 truncate text-ellipsis text-lg font-medium">
            {product.title}
          </p>
          <img
            className="max-h-40 max-w-40"
            src={product.image}
            alt="product image"
          />
        </div>
        <div className="flex w-full flex-col sm:items-end">
          <p className="text-3xl font-medium">
            ${Math.ceil(subTotal * 100) / 100}
          </p>
          <IncDecButton
            add={handleAddItem}
            remove={handleRemoveItem}
            qty={frequencyObject[item]}
            id={product.id}
          />
          <DeleteButton
            productId={product.id}
            handleDelete={handleDeleteItem}
          />
        </div>
      </div>,
    );
  }

  return (
    <main className="mt-8 flex w-full flex-col items-center px-4">
      <h1 className="text-4xl font-bold">Checkout</h1>
      <div className="mt-8 flex w-full flex-col items-center gap-8">
        {cartElements}
      </div>
      <p className="mt-8 text-2xl">
        Total:
        <span className="ml-4 text-4xl font-medium">
          ${Math.ceil(total * 100) / 100}
        </span>
      </p>
      <div
        className={`mt-16 flex w-40 cursor-pointer items-center justify-center gap-2 bg-cyan-100 p-4 text-xl`}
        onClick={() => {
          checkout();
        }}
      >
        <IoBagCheckOutline />
        <p>Checkout</p>
      </div>
    </main>
  );
}

export default CartPage;
