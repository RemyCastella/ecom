import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

function NavLayout({ cart }) {
  return (
    <>
      <header className="sticky top-0 flex w-full items-center justify-center bg-white p-4">
        <div className="flex w-full max-w-6xl flex-col items-center md:mr-8 md:flex-row md:justify-between">
          <Link to="/" className="ml-4 text-6xl font-medium tracking-widest">
            Shinano
          </Link>
          <nav className="mt-8 flex gap-8 md:mt-0">
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
              <FaCartPlus size={30} />

              <div className="absolute -right-5 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 p-2 text-sm">
                {cart.length}
              </div>
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="mt-auto flex w-full items-center justify-center bg-white pt-8">
        © 2024 Remy Castella. All rights reserved.
      </footer>
    </>
  );
}

export default NavLayout;

//figure out sticky header positioning
