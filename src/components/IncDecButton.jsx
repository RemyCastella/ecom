import React from "react";

export default function IncDecButton({ add, remove, qty, id }) {
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
