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

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      element: <NavLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage products={products} loading={loading} />,
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
          element: <CartPage />,
        },
        {
          path: "store/:category",
          element: <CategoryPage products={products} />,
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
