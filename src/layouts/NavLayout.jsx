import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function NavLayout({ cart }) {
  return (
    <>
      <header className="flex w-full items-center justify-center bg-cyan-50 p-4">
        <div className="flex w-full max-w-6xl flex-col items-center md:flex-row md:justify-between">
          <Link to="/" className="ml-4 text-5xl font-bold tracking-widest">
            Shinano
          </Link>
          <nav className="mt-4 flex gap-8">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-xl font-bold underline" : "text-xl"
              }
            >
              About
            </NavLink>
            <NavLink
              to="store"
              className={({ isActive }) =>
                isActive ? "text-xl font-bold underline" : "text-xl"
              }
            >
              Store
            </NavLink>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive
                  ? "relative text-xl font-bold underline"
                  : "relative text-xl"
              }
            >
              Cart
              <div className="absolute -right-5 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 p-2 text-sm">
                {cart.length}
              </div>
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      {/* add footer */}
    </>
  );
}

export default NavLayout;
