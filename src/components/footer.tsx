import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  FaArrowUp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* Footer Upper Section */}
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-24 mt-10 ">
        <div className=" py-5 ">
          <Image src={"/Images/logo.png"} width={180} height={34} alt="logo" />
          <p className="py-7 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div>
            <ul className="flex gap-8 ">
              <li>
                {" "}
                <FaFacebookF />{" "}
              </li>
              <li>
                {" "}
                <FaTwitter />{" "}
              </li>
              <li>
                {" "}
                <FaLinkedinIn />{" "}
              </li>
              <li>
                {" "}
                <FaInstagram />{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className=" py-5 ">
          <h2 className="text-xl font-bold">CATALOG</h2>
          <ul className="space-y-2 py-5">
            <li>Necklaces</li>
            <li>hoodies</li>
            <li>Jewelry Box</li>
            <li>t-shirt</li>
            <li>jacket</li>
          </ul>
        </div>
        <div className=" py-5 ">
          <h2 className="text-xl font-bold">ABOUT US</h2>
          <ul className="space-y-2 py-5">
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className=" py-5 ">
          <h2 className="text-xl font-bold">CUSTOMER SERVICES</h2>
          <ul className="space-y-2 py-5">
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book an Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      {/* footer Lower section */}
      <div className="bg-black w-full">
        <div className="wrapper md:flex md:justify-between">
          <p className="text-white py-3 text-center">© 2022 Coral , Inc. </p>
          <Image
            src={`/footer/icons-pay.png`}
            width={283}
            height={24}
            alt="Payments"
            className="h-6 my-3 mx-auto"
          />
          <p className="text-white flex items-center gap-3 justify-center">
            Scroll to top <FaArrowUp />
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
