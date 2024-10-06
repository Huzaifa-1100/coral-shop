import Image from "next/image";

import React from "react";

const ProductDiscounts = () => {
  return (
    <div className="bg-gray-100 w-full ">
      <div className="wrapper">
        <h2 className="font-bold text-4xl text-center pt-10 md:mt-10">
          Follow products and discounts on Instagram
        </h2>
        <div className="py-12">
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 ">
            <li>
              <Image
                className="mx-auto"
                src={`/product-discount/card (1).png`}
                height={200}
                width={200}
                alt="Discount Product"
              />
            </li>
            <li>
              <Image
                className="mx-auto"
                src={`/product-discount/card (2).png`}
                height={200}
                width={200}
                alt="Discount Product"
              />
            </li>
            <li>
              <Image
                className="mx-auto"
                src={`/product-discount/card (3).png`}
                height={200}
                width={200}
                alt="Discount Product"
              />
            </li>
            <li>
              <Image
                className="mx-auto"
                src={`/product-discount/card (4).png`}
                height={200}
                width={200}
                alt="Discount Product"
              />
            </li>
            <li>
              <Image
                className="mx-auto"
                src={`/product-discount/card (5).png`}
                height={200}
                width={200}
                alt="Discount Product"
              />
            </li>
            <li>
              <Image
                className="mx-auto"
                src={`/product-discount/card (6).png`}
                height={200}
                width={200}
                alt="Discount Product"
              />
            </li>
          </ul>
        </div>
        <h2 className="font-bold text-4xl text-center  md:mt-10">
          Or Subscribe To The Newsletter
        </h2>
        <div className="md:flex items-center justify-center py-16 md:space-x-5 ">
          <input
            className="py-2 w-full md:w-[50%] border-b-2 border-black focus:outline-none  bg-transparent"
            type="text"
            value={""}
            placeholder="Email Address"
          />

          <button className="py-2 w-full md:w-[10%] border-b-2 border-black hover:bg-black hover:text-white hover:duration-500">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDiscounts;
