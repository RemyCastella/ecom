import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NavLayout from "./layouts/NavLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import StorePage from "./pages/StorePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const noElectronics = data.filter(
          (item) => item.category !== "electronics",
        );
        setProducts(noElectronics);
        setLoading(false);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout cart={cart} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <HomePage setCart={setCart} products={products} loading={loading} />
          ),
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "store",
          element: <StorePage products={products} loading={loading} />,
        },
        {
          path: "cart",
          element: <CartPage cart={cart} products={products} />,
        },
        {
          path: "store/:category",
          element: <CategoryPage products={products} />,
        },
        {
          path: "store/:category/:id",
          element: <ProductPage setCart={setCart} products={products} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
