import React from "react";
import { useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";

function CartPage({ cart, products }) {
  let cartElements = [];
  let total = 0;

  const frequencyObject = cart.reduce((acc, val) => {
    return acc[val] ? ++acc[val] : (acc[val] = 1), acc;
  }, {});

  for (let item in frequencyObject) {
    const product = products.find((product) => product.id === Number(item));
    const subTotal = product.price * frequencyObject[item];
    total += subTotal;
    cartElements.push(
      <div className="flex w-full max-w-xl justify-between p-4 shadow-lg">
        <div className="w-2/3">
          <p className="truncate text-ellipsis text-lg font-medium">
            {product.title}
          </p>
          <img className="w-1/3" src={product.image} alt="product image" />
        </div>
        <div>
          <p className="flex items-center gap-2">
            Quantity: <span className="text-2xl">{frequencyObject[item]}</span>
          </p>
          <p className="mt-4 text-3xl font-medium">${subTotal}</p>
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
          setEffect(true);
          alert("Thank you for shopping!");
        }}
      >
        <IoBagCheckOutline />
        <p>Checkout</p>
      </div>
    </main>
  );
}

export default CartPage;
