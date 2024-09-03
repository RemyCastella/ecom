import heroImg from "../assets/ecom-hero-zag.png";

function HomePage({ products, loading }) {
  const randomIndex = Math.floor(Math.random() * 9);
  const featuredProducts = products.slice(randomIndex, randomIndex + 5);
  const productElements = featuredProducts.map((product) => (
    <div
      key={product.id}
      className="flex h-auto w-1/2 cursor-pointer flex-col items-center p-2 sm:w-36 md:w-40 lg:w-48"
    >
      <img src={product.image} alt="product" className="sm:max-w-1/2 h-48" />
      <div className="flex w-full flex-col truncate">
        <h2 className="truncate text-ellipsis text-lg font-medium">
          {product.title}
        </h2>
      </div>
      <p>{product.price}</p>
    </div>
  ));

  return (
    <main className="flex w-full flex-col items-center">
      <section className="flex justify-center gap-8">
        <div className="text mt-20">
          <h1 className="text-7xl font-semibold">Simple</h1>
          <h1 className="text-7xl font-semibold">Good</h1>
          <h1 className="text-7xl font-semibold">Products</h1>
        </div>
        <img className="mt-32 max-w-lg" src={heroImg} alt="woman on beach" />
      </section>
      <section className="my-8 flex h-auto w-full flex-col items-center">
        <h2 className="text-3xl font-medium">Trending</h2>
        {loading ? (
          <h2 className="mt-10">Loading products...</h2>
        ) : (
          <div className="my-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end">
            {productElements}
          </div>
        )}
      </section>
    </main>
  );
}

export default HomePage;
