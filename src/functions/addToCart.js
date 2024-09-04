export default function addToCart(allProducts, productId, setCart) {
  const product = allProducts.filter((item) => item.id === productId);
  setCart((prevCart) => [...prevCart, product[0].id]);
}
