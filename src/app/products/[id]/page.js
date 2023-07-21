"use client";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-12 px-12 py-5 w-[90%] mx-auto product">
      {/* {product?.map((item) => ( */}
      <>
        <div className="flex flex-1 gap-3 left">
          <div className="w-full mainImg ">
            <img
              className="max-h-[600px] w-full object-contain px-5"
              src="https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center flex-1 gap-7 right">
          <h1 className="text-xl font-semibold">Kapil</h1>
          <span className="text-base price w-max text-[#999] font-[500] border-b-[1px] ">
            $2000
          </span>
          <p className="text-[18px] font-[300] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit id
            libero quis. Obcaecati, culpa saepe!
          </p>
          <div className="flex items-center quantity gap-[14px] ">
            <button
              className="flex items-center justify-center w-12 h-12 bg-transparent cursor-pointer text-[20px] border-[1px] border-[#999]"
              onClick={(e) =>
                setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
              }>
              -
            </button>
            {quantity}
            <button
              className="flex items-center justify-center w-12 h-12 bg-transparent cursor-pointer text-[20px] border-[1px] border-[#999]"
              onClick={(e) => setQuantity((prev) => prev + 1)}>
              +
            </button>
          </div>
          <button className="w-[200px] p-3 bg-transparent text-slate-900 cursor-pointer flex items-center justify-center gap-[10px] border-[1px] border-slate-900 transition-all duration-200  ease-in-out hover:bg-slate-900 hover:text-white add">
            <AddShoppingCartOutlinedIcon /> ADD TO CART
          </button>
        </div>
      </>
      {/* ))} */}
    </div>
  );
};

export default Product;
