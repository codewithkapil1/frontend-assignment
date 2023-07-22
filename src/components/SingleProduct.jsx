"use client";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { add } from "@/redux/cartSlice";

const SingleProduct = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row gap-12 px-12 py-5 w-[90%] mx-auto product">
      <div className="flex flex-1 gap-3 left">
        <div className="w-full mainImg ">
          <img
            className="max-h-[600px] w-full object-contain px-5"
            src={data.image}
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center flex-1 gap-7 right">
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <span className="text-base price w-max text-[#999] font-[500] border-b-[1px] ">
          ${data.price}
        </span>
        <p className="text-[18px] font-[300] text-justify">
          {data.description}
        </p>

        {/* <Link href="/cart"> */}
        <button
          className="w-[200px] p-3 bg-transparent text-slate-900 cursor-pointer flex items-center justify-center gap-[10px] border-[1px] border-slate-900 transition-all duration-200  ease-in-out hover:bg-slate-900 hover:text-white add"
          onClick={() => dispatch(add(data))}>
          <AddShoppingCartOutlinedIcon /> ADD TO CART
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default SingleProduct;
