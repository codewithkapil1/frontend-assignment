"use client";
import Loader from "@/components/Loader";
import axios from "axios";
import Link from "next/link";
import { GoSearch } from "react-icons/go";

import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const allData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        return setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    allData();
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      data &&
      data.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  return (
    <>
      <div className=" w-[70%] mx-auto ">
        <label
          htmlFor="search products..."
          className="mb-2 text-sm font-medium text-gray-900 sr-only ">
          Search
        </label>
        <div className="relative flex gap-5 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <GoSearch size={25} className="text-gray-300 " />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search Products..."
            required
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {!data ? (
        <Loader />
      ) : (
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 gap-8 mx-auto my-5 md:grid-cols-4 wrapper">
            {searchData && searchData.length !== 0 ? (
              <>
                {searchData &&
                  searchData.map((product, i) => (
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
                          <span className="text-gray-500">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </>
            ) : (
              <>
                {data?.map((product) => (
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
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
