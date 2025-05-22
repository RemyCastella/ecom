import { Dispatch, SetStateAction } from "react";
import { ProductData } from "../types/products";

export default function addToCart(
  allProducts: ProductData[],
  productId: number,
  setCart: Dispatch<SetStateAction<number[]>>
) {
  const product = allProducts.find((item) => item.id === productId);
  if(product){
    setCart((prevCart) => [...prevCart, product.id]);
  }
}
