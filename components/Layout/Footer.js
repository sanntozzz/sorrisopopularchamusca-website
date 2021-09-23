import Link from "next/link";
import Image from "next/image";

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Logo
import Logo from "../../public/logo/Logo_Transparent.svg";

const FooterLinks = [
  {
    title: "Links",
    links: [
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
    ],
  },
  {
    title: "RGPD",
    links: [
      {
        path: "/politica-de-privacidade",
        text: "Política de privacidade",
      },
    ],
  },
];

const SocialLinks = [
  {
    icon: <SiIcons.SiFacebook />,
    path: "https://www.facebook.com/SorrisoPopularChamusca/",
    text: "Facebook",
  },
  {
    icon: <SiIcons.SiInstagram />,
    path: "https://www.instagram.com/sorrisopopularchamusca/",
    text: "Instagram",
  },
];

export default function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="flex items-center md:flex-row flex-col">
          <div className="text-center md:text-left">
            <div className="text-xs font-medium tracking-widest mb-1">
              Segue-nos nas redes sociais
            </div>
            <div className="text-2xl font-bold text-darkBlue tracking-wider">
              Mostra o teu sorriso!
            </div>
          </div>
          <div className="space-x-4 mx-auto md:mr-0 mt-6 md:mt-0">
            {SocialLinks.map((item, index) => {
              return (
                <Link href={item.path} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 text-gray-600 py-2 px-6 rounded-lg hover:bg-darkBlue hover:text-white"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div className="leading-none ml-4">
                      <div className="text-xs">Segue-nos no</div>
                      <div className="font-medium mt-1">{item.text}</div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="border-t-2"></div>
      </div>
      <section className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="text-center md:text-left">
          <div class="grid md:grid-cols-3 gap-12">
            <div className="w-32 mx-auto md:m-0">
              <Link href="/">
                <a>
                  <Image src={Logo} alt="Logo" />
                </a>
              </Link>
            </div>
            {FooterLinks.map((item, index) => {
              return (
                <div key={index} className="text-sm">
                  <div class="text-gray-900 font-medium tracking-widest">
                    {item.title}
                  </div>
                  {item.links.map((item, index) => {
                    return (
                      <div className="mt-2">
                        <Link href={item.path}>
                          <a key={index} class=" text-gray-600 hover:underline">
                            {item.text}
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
      </section>
      <section className="bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {yearNow} - Sorriso Popular Chamusca. Criado por
            <Link href="https://joaosantos.vercel.app/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline ml-1"
              >
                João Santos
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
