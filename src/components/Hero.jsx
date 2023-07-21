/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full h-[70vh]  md:flex bg-gray-100 mb-5">
      <div className="flex items-center justify-center w-[90%] mx-auto h-full ">
        <div className="left w-[50%] ml-20 space-y-5">
          <h1 className="text-6xl uppercase">Summer Sale</h1>
          <p className="text-base font-thin tracking-wide text-gray-600 capitalize">
            Don't Compromise on Style! get flat 30% off <br />
            for new arrivals
          </p>
          <button className="px-5 py-2 uppercase transition-all duration-200 border outline-none border-slate-900 hover:bg-slate-900 hover:text-white">
            SHop Now
          </button>
        </div>
        <div className="right flex items-center justify-center w-[50%]">
          <Image
            className="object-fill overflow-hidden"
            src="/hero.png"
            width={350}
            height={500}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
