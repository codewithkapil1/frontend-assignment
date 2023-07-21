import Link from "next/link";
import { notFound } from "next/navigation";
import Loader from "./Loader";

async function getProduct() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const Products = async () => {
  const data = await getProduct();
  return (
    <>
      {data ? (
        <div className="w-full h-full">
          <div className="w-[90%]  mx-auto">
            <h1 className="text-4xl text-center ">Products</h1>
            <div className="grid grid-cols-1 gap-8 mx-auto my-5 md:grid-cols-4 wrapper">
              {data.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="card p-3 max-h-[600px] w-[18rem] border hover:shadow-md rounded-md">
                    <div className="top">
                      <img
                        className="w-full px-1 h-[18rem]  object-cover"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center my-5 space-y-3 bottom">
                      <h1 className="text-xl font-light tracking-wide">
                        {product.title}
                      </h1>
                      <span className="text-gray-500">${product.price}</span>
                      {/* <button className="px-5 py-2 uppercase transition-all duration-200 border outline-none border-slate-900 hover:bg-slate-900 hover:text-white">
                    ADD to Cart
                  </button> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
