import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function DeleteButton({ productId, handleDelete }) {
  return (
    <button
      className="mt-4 flex w-36 items-center justify-center bg-red-600 p-2 font-medium text-white sm:mt-auto"
      onClick={() => handleDelete(productId)}
    >
      <p>Delete Item</p>
      <MdDeleteForever size={25} />
    </button>
  );
}
