import { client } from "@/sanity/lib/client";
import React from "react";
import { Image } from "sanity";
import SingleProductCard from "./single-product-card";

import { FaFilter } from "react-icons/fa6";

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: Image;
  description: string;
};

const ProductsCard = async () => {
  const productData: Product[] = await client.fetch(
    `*[_type=="product"]{
    _id,
    name,
    price,
    image,
    description,
}`,
    undefined,
    {
      cache: "no-cache",
    }
  );

  return (
    <div className="wrapper">
      <h2 className="font-bold text-4xl text-center md:mt-10">
        Or subscribe to the newsletter{" "}
      </h2>
      <div className="hidden md:flex justify-between items-center  py-10">
        <div className="flex gap-10">
          <p className="text-black text-lg hover:font-bold">All products</p>
          <p className="text-black text-lg hover:font-bold">T-Shirt</p>
          <p className="text-black text-lg hover:font-bold">Hoodeis</p>
          <p className="text-black text-lg hover:font-bold">Jacket</p>
        </div>
        <div>
          <button className="bg-black text-white flex items-center justify-center p-2 px-5 gap-3 w-auto hover:bg-gray-300 hover:text-black rounded-sm duration-100">
            <FaFilter /> Filter
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productData.map((prodData) => {
          return (
            <div className="py-2" key={prodData._id}>
              <SingleProductCard product={prodData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
