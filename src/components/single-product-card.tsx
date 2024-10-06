import React from "react";
import { Product } from "./products-card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
interface IProps {
  product: Product;
}
// use shopping cart for cart functions

// streaming
// caching

const SingleProductCard = ({ product }: IProps) => {
  return (
    <div>
      {/* Image */}
      <div>
        <Image
          src={urlFor(product.image).url()}
          width={312}
          height={400}
          alt={product.name}
        />
      </div>
      {/* Product Details */}
      <div>
        <h3 className="my-3 font-bold">{product.name}</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-gray-400">{product.description}</h3>
        <h3 className="font-bold">{`$${product.price}`}</h3>
      </div>
    </div>
  );
};

export default SingleProductCard;
