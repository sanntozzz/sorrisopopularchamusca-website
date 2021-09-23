import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";

// Logo
import Logo from "../../public/logo/Logo_Transparent.svg";

const Menu = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/especialidades",
    text: "Especialidades",
  },
  {
    path: "/corpo-clinico",
    text: "Corpo Clínico",
  },
  {
    path: "/acordos-parcerias",
    text: "Acordos / Parcerias",
  },
  {
    path: "/onde-estamos",
    text: "Onde estamos",
  },
];

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <a className="flex items-center w-24">
                <Image src={Logo} alt="Logo" />
              </a>
            </Link>
            <div className="hidden lg:block space-x-12">
              {Menu.map((item, index) => {
                return (
                  <div key={index} className="inline-block">
                    <Link href={item.path}>
                      <a className="text-gray-900 font-medium hover:text-darkBlue">
                        {item.text}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <FaIcons.FaBars
              className="lg:hidden text-2xl text-darkBlue cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "right-0" : "-right-full"
        } lg:hidden z-50 fixed top-0 w-full min-h-full bg-white flex items-center justify-center transition-all duration-200`}
      >
        <div className="text-center space-y-12">
          {Menu.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.path}>
                  <a
                    className="text-gray-900 font-medium hover:text-darkBlue"
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
    </>
  );
}
