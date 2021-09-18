import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";

// Logo
import Logo from "../../public/logo/Logo.svg";

const menu = [
  {
    path: "/",
    text: "Home",
  },
  // {
  //   path: "/sobre-nos",
  //   text: "Sobre nós",
  // },
  {
    path: "/especialidades",
    text: "Especialidades",
  },
  // {
  //   path: "/acordos",
  //   text: "Acordos",
  // },
  {
    path: "/contacte-nos",
    text: "Contacte-nos",
  },
];

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="hidden lg:block w-full bg-darkBlue text-white text-sm py-2 px-6">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <FaIcons.FaPhoneAlt />
                <span>249 761 128</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaIcons.FaInbox />
                <span>Clinchamusca25@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaIcons.FaMapMarkerAlt />
              <span>Av. Almirante Gago Coutinho 25, 2140-053 Chamusca</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            <Link href="/">
              <a className="flex items-center w-28">
                <Image src={Logo} alt="Logo" />
              </a>
            </Link>
            <div className="hidden lg:block space-x-9">
              {menu.map((item, index) => {
                return (
                  <div key={index} className="inline-block">
                    <Link href={item.path}>
                      <a className="text-gray-900 hover:text-darkBlue text-sm font-bold border-b-2 px-2 border-transparent  hover:border-darkBlue">
                        {item.text}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <FaIcons.FaBars
              className="lg:hidden text-darkBlue text-2xl cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "right-0" : "-right-full"
        } lg:hidden z-20 fixed top-0 w-full h-full bg-white flex items-center justify-center transition-all duration-500`}
      >
        <div className="flex justify-center items-center">
          <div className="text-center space-y-12">
            {menu.map((item, index) => {
              return (
                <div key={index}>
                  <Link href={item.path}>
                    <a
                      className="block text-gray-900 hover:text-darkBlue text-xl border-b-2  border-transparent  hover:border-darkBlue"
                      onClick={handleClick}
                    >
                      {item.text}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
