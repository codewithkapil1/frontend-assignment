import Link from "next/link";
import Image from "next/image";
import { BsPinterest } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#fff] mt-12">
      <div className="footer w-[70%] h-full mx-auto flex flex-col justify-center ">
        <div className="flex flex-col items-start justify-center gap-2 space-y-5 md:h-72 md:justify-evenly md:flex-row md:items-center">
          <div className="border-r-2 store">
            <h1 className="text-2xl font-light tracking-wide uppercase">
              OnlineStore
            </h1>
            <h1 className="mr-3">Saddobato Kathmandu, Nepal</h1>
            <h1>Monday-Friday: 9:00-20:00</h1>
            <h1>Saturday: 10:00-11:00</h1>
            <span className="text-[#4d1489] cursor-pointer border-b-[1px]">
              Show on map
            </span>
          </div>
          <div className="help">
            <h1 className="text-2xl font-light tracking-wide uppercase">
              Need Help
            </h1>
            <h1 className="text-base font-light tracking-wide uppercase">
              +9779847361464
            </h1>
            <h1>Monday-Friday: 9:00-20:00</h1>
            <h1>Saturday: 10:00-11:00</h1>
            <span>codewithkapil@gmail.com</span>
          </div>
          <div className="flex flex-col customer ">
            <h1 className="text-2xl font-light tracking-wide uppercase">
              Customer
            </h1>
            <span>My account</span>
            <span>My orders</span>
            <span>Return</span>
            <span>Compare</span>
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col information">
            <h1 className="text-2xl font-light tracking-wide uppercase">
              Information
            </h1>
            <span>About us</span>
            <span>Contact us</span>
            <span>Store list</span>
            <span>Shipping & retrun</span>
            <span>FAQ</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 icons">
          <div className="flex gap-5 text-2xl ">
            <Link href="/">
              {" "}
              <FaFacebookF />{" "}
            </Link>
            <FaInstagram />
            <Link href="/">
              <BsPinterest />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row bottom ">
          <div className="flex items-center logo">
            <span className="text-4xl logofont">OnlineStore</span>
            <img className="w-10" src="./images/logo.png" alt="" />
          </div>
          <span> @Copyright All right Reserved.</span>
          <Image src='/payment.png' alt="payment" width={200} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
