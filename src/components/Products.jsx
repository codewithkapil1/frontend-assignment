import Link from "next/link";

const Products = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center ">Products</h1>
      <div className="flex flex-wrap gap-8 my-5 wrapper">
        <Link href="/product/1">
          <div className="card p-3 h-[25rem] w-[16rem] border hover:shadow-md rounded-md">
            <div className="top">
              <img
                className="w-[15rem] h-[18rem]  object-cover"
                src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center my-5 space-y-3 bottom">
              <h1 className="text-xl font-light tracking-wide">
                Product Title
              </h1>
              <h1 className="text-gray-500">$2000</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Products;
