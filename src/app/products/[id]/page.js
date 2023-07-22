"use client";
import Loader from "@/components/Loader";
import SingleProduct from "@/components/SingleProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const Product = ({ params }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const allData = async (id) => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    allData(params.id);
  }, []);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <div className="flex gap-12 px-12 py-5 w-[90%] mx-auto product">
          <SingleProduct data={data} />
        </div>
      )}
    </>
  );
};

// export async function generateStaticParams() {
//   const data = await getProduct(params.id);
//   return data.map((data) => ({
//     id: data.id.toString(),
//   }));
// }

export default Product;
