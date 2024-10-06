import Image from "next/image";
import React from "react";

const ZaraCollections = () => {
  return (
    <div className="py-10">
      <div className="bg-cover bg-center h-screen relative bg-[url('/zara-collections/zara-banner.png')]">
        <div>
          <Image
            className="absolute hidden lg:flex top-10 left-auto right-0 md:h-28 md:w-64 lg:h-52 lg:w-80 2xl:h-[400px] 2xl:w-[732px] "
            src={"/zara-collections/ZaraLogo.png"}
            height={200}
            width={250}
            alt="Zara"
          />
          <Image
            className="absolute md:top-40 md:left-auto md:right-36 lg:right-[310px] top-10 left-auto right-5 2xl:top-72 2xl:left-auto 2xl:right-[720px] 2xl:h-28 2xl:w-72 "
            src={"/zara-collections/zaraSmallLogo.png"}
            height={50}
            width={150}
            alt="Zara"
          />
        </div>

        <h1 className=" text-white left-auto right-3 md:w-64 top-28 w-40  absolute md:top-64 md:left-auto md:right-10 lg:w-80 lg:right-[140px] lg:top-64  2xl:top-[480px] 2xl:text-4xl 2xl:left-auto 2xl:right-[300px] 2xl:h-28 2xl:w-[720px] ">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </h1>
        <button className="p-3 bg-white top-80 left-auto right-10 hover:bg-black hover:text-white hover:duration-500 absolute md:top-96 md:left-auto md:right-40 lg:right-[330px] lg:top-96  2xl:px-10 2xl:top-[800px] 2xl:text-4xl 2xl:left-auto 2xl:right-[695px]  ">
          See Collections
        </button>
      </div>
    </div>
  );
};

export default ZaraCollections;
