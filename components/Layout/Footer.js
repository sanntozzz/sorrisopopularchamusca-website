import Link from "next/link";
import Image from "next/image";
//
import { useTranslation } from "next-i18next";
//
import Logo from "../../public/logo/Logo_Transparent.svg";
//
import { footerLinks } from "../Data";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      <div className="layout">
        <div className="text-center md:text-left">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="w-24 mx-auto md:m-0">
              <Link href="/">
                <a>
                  <Image src={Logo} alt="Logo" />
                </a>
              </Link>
            </div>
            {footerLinks.map((item) => {
              return (
                <div key={item.id} className="text-sm">
                  <div className="font-medium tracking-widest">
                    {item.title}
                  </div>
                  {item.links.map((item) => {
                    return (
                      <div key={item.id} className="mt-2">
                        <Link href={item.href}>
                          <a className="text-gray-500 hover:text-primary hover:underline">
                            {t(item.text)}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className="bg-neutral-100">
        <div className="container px-4 py-4 mx-auto">
          <div className="text-sm text-center text-neutral-500 md:text-left">
            © {yearNow} - Sorriso Popular Chamusca. Criado por
            <Link href="https://joaofcsantos.vercel.app/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-neutral-600 hover:underline"
              >
                João F. C. Santos
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
