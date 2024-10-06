import Image from "next/image";
import React from "react";
import img1 from "../../public/brand-logo/brand-1.png";
import img2 from "../../public/brand-logo/brand-2.png";
import img3 from "../../public/brand-logo/brand-3.png";
import img4 from "../../public/brand-logo/brand-4.png";
import img5 from "../../public/brand-logo/brand-5.png";

const Brand = () => {
  return (
    <div className="wrapper">
      {/* Top Bard Images */}
      <div className="hidden md:flex justify-between p-5 ">
        <Image src={img1} alt="brand" width={100} height={100} />
        <Image src={img2} alt="brand" width={100} height={100} />
        <Image src={img3} alt="brand" width={100} height={100} />
        <Image src={img4} alt="brand" width={100} height={100} />
        <Image src={img5} alt="brand" width={100} height={100} />
      </div>
      <div className="lg:flex">
      <div className=" md:w-10 md:flex md:items-center md:relative  ">
        <h3 className="lg:-rotate-90 font-semiboldd text-xl md:absolute whitespace-pre lg:-right-16  ">Lorem ipsum dolor </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-7">
        <div className="col-span-2 row-span-2 ">
          <Image
            src={"/brand-images/card.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div >
          <Image
            src={"/brand-images/01.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/brand-images/02.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/brand-images/03.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={"/brand-images/04.png"}
            alt="image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Brand;
