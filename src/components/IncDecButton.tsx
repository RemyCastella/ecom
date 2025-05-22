import React from "react";

interface IncDecButtonProps {
  id: number,
  qty: number,
  add: (productId: number) => void,
  remove: (productId: number) => void
}

export default function IncDecButton({
  id,
  qty,
  add,
  remove }: IncDecButtonProps) {
  return (
    <div className="flex w-16 items-center justify-center gap-3">
      <button className="text-3xl" onClick={() => remove(id)}>
        –
      </button>
      <p className="text-2xl">{qty}</p>
      <button className="text-3xl" onClick={() => add(id)}>
        +
      </button>
    </div>
  );
}
