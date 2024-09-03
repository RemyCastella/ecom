import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <>
      <header className="flex w-full items-center justify-center bg-cyan-50 px-4 py-8">
        <div className="flex w-full max-w-7xl items-center">
          <Link to="/" className="ml-4 text-5xl font-bold tracking-widest">
            Shinano
          </Link>
          <nav className="ml-auto mr-12 flex gap-8">
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
                isActive ? "text-xl font-bold underline" : "text-xl"
              }
            >
              Cart
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="mt-auto flex w-full items-center justify-center bg-cyan-50 px-4 py-8">
        © 2024 Remy Castella. All rights reserved.
      </footer>
    </>
  );
}

export default NavLayout;
