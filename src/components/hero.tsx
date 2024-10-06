import Image from "next/image";
import React from "react";
import HeroImage from "../../public/Images/hero-image.png";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" bg-gray-100 ">
      {/* Right Hand Side */}
      <div className="md:flex wrapper">
        <div className="  py-7 px-8 my-auto ">
          <h1 className="text-black text-4xl 2xl:text-7xl ">Collections</h1>
          <p className=" py-8 text-xl md:w-[300px] lg:w-[500px] 2xl:text-4xl 2xl:w-[850px]  ">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="flex items-center gap-2 rounded-sm bg-black font-bold text-white p-3 2xl:text-4xl 2xl:px-6 hover:bg-gray-500 duration-500">
            <FaShoppingBag />
            Shop Now
          </button>
        </div>

        {/* Left Hand Side */}
        <div className="wrapper">
          <div className="my-10">
            <Image
              src={HeroImage}
              height={500}
              width={500}
              alt="Image"
              className=" 2xl:rounded-tl-[200px] rounded-tl-[100px] pb-10 h-96 w-72 mx-auto  2xl:h-[700px] 2xl:w-[500px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
