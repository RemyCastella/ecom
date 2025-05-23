import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster, toast } from "sonner";
import "./index.css";
import NavLayout from "./layouts/NavLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import StorePage from "./pages/StorePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { ProductData } from "./types/products";

function App() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: ProductData[]) => {
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
          element: (
            <CartPage cart={cart} setCart={setCart} products={products} />
          ),
        },
        {
          path: "store/:category",
          element: <CategoryPage products={products} setCart={setCart} />,
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors position="top-left" />
    <App />
  </StrictMode>,
);
