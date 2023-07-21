"use client";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { LiaCartPlusSolid } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.cart.cart);
  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full h-8 my-auto text-sm font-light tracking-wider text-white bg-slate-950 ">
        <p>Super Deal Free Shipping on Order Over $50</p>
      </div>
      <div
        className="md:w-[90%] h-16
        px-4
        mx-auto 
        flex
        items-center
        justify-between
        ">
        <div className="hidden ml-2 md:block">
          <ul className="block gap-2 md:flex">
            <Link href="/">
              <li className="px-4 py-2 transition-all duration-200 ease-in hover:bg-slate-900 hover:text-gray-300">
                Home
              </li>
            </Link>
            <Link href="/products">
              <li className="px-3 py-2 transition-all duration-300 ease-in-out hover:bg-slate-900 hover:text-gray-300">
                Products
              </li>
            </Link>
          </ul>
        </div>
        <div className="mr-20">
          <h1 className="text-xl font-semibold tracking-wider uppercase">
            <Link href="/">OnlineStore</Link>
          </h1>
        </div>
        <div className="cursor-pointer md:hidden">
          <AiOutlineMenu size={28} />
        </div>
        <div className="items-center hidden gap-5 mr-6 cursor-pointer md:flex items Icons">
          <Link href="/search">
            <GoSearch size={22} />
          </Link>
          <div className="relative">
            <Link href="/cart">
              <LiaCartPlusSolid size={28} />
            </Link>
            <span className="absolute right-[-10px] px-[6px] text-sm rounded-full top-[-10px] text-white  bg-lime-500">
              {data.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
