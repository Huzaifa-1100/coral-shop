import Image from "next/image";
import React from "react";

const GridLayout = () => {
  return (
    <div className="lg:flex">
      <div className=" w-10 flex items-center relative  ">
        <h3 className="lg:-rotate-90 font-semiboldd text-xl absolute whitespace-pre -right-16  ">
          Lorem ipsum dolor{" "}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 row-span-2 ">
          <Image
            src={"/img/01.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/img/02.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/img/04.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/img/03.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/img/05.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
