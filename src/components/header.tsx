import Image from "next/image";
import { BiSearch, BiSolidUser } from "react-icons/bi";
import logo from "../../public/Images/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    name: "Jewelry & Accessories",
    link: "/shop",
  },
  {
    name: "Clothing U Shoes",
    link: "/shop",
  },
  {
    name: "Home & Living",
    link: "/shop",
  },
  {
    name: "Wedding & Party",
    link: "/shop",
  },
  {
    name: "Toys & Entertainment",
    link: "/shop",
  },
  {
    name: "Art & Collectibles",
    link: "/shop",
  },
  {
    name: "Craft SUpplies & Tools",
    link: "/about",
  },
];
export default function Header() {
  return (
    <div className="bg-gray-100">
      {/* Header Top */}
      <div className="flex justify-between wrapper py-4 items-center border-b">
        <BiSearch className="hidden md:flex" />
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="hidden md:flex gap-x-5">
          <div className="flex items-center gap-x-3">
            <BiSolidUser />
            <p>Account</p>
          </div>
          <div className=" flex items-center gap-x-3">
            <FaShoppingBag />
            <p>Shopping</p>
          </div>
        </div>
      </div>
      {/* Header bottom */}
      <ul className="hidden md:flex justify-between gap-x-4 py-4 wrapper">
        {links.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
