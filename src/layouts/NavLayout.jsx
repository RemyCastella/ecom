import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <>
      <header className="flex w-full max-w-4xl items-center">
        <Link to="/" className="text-5xl font-bold tracking-widest">
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
      </header>
      <Outlet />
      <footer className="mt-auto">
        © 2024 Remy Castella. All rights reserved.
      </footer>
    </>
  );
}

export default NavLayout;
