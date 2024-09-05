import React from "react";
import { FaCartPlus } from "react-icons/fa";
import addToCart from "../functions/addToCart";
import { Toaster, toast } from "sonner";

export default function AddToCartButton({ products, productId, setCart }) {
  return (
    <div
      className="mt-4 flex w-36 cursor-pointer items-center bg-cyan-100 p-2 text-lg"
      onClick={() => {
        toast.success("Item added to cart");
        addToCart(products, productId, setCart);
      }}
    >
      <FaCartPlus />
      <p className="ml-2">Add to cart</p>
    </div>
  );
}
