import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//
import { useTranslation } from "next-i18next";
//
import * as Hi from "react-icons/hi";
//
import Logo from "../../public/logo/Logo_Transparent.svg";
//
import { navLinks } from "../Data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="border-b">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <Link href="/" passHref>
            <a className="flex items-center w-16">
              <Image src={Logo} alt="Logo" />
            </a>
          </Link>
          <div className="hidden lg:flex">
            {navLinks.map((item) => {
              return (
                <div key={item.id}>
                  <Link href={item.href} passHref>
                    <a className="mx-4 font-medium duration-150 cursor-pointer text-neutral-500 hover:text-primary">
                      {t(item.text)}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-3xl cursor-pointer lg:hidden text-primary">
            <Hi.HiMenu onClick={handleClick} />
          </div>
        </div>
      </div>

      {/* Off-Side Navbar */}
      <div
        className={`${
          menuOpen ? "right-0" : "-right-full"
        }  lg:hidden z-50 fixed top-0 w-full min-h-screen bg-neutral-50 flex flex-col items-center justify-center duration-700`}
      >
        <div>
          {navLinks.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <Link href={item.href} onClick={handleClick} passHref>
                    <a className="block mt-8 text-xl font-medium tracking-widest text-center duration-150 cursor-pointer text-primary hover:underline">
                      {t(item.text)}
                    </a>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
