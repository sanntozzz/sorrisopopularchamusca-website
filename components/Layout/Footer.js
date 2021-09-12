import Image from "next/image";
import * as FaIcons from "react-icons/fa";

// Logo
import Logo from "../../public/logo/Logo.svg";

const data = [
  {
    title: "Links",
    links: [
      {
        path: "/sobre-nos",
        text: "Sobre nós",
      },
      {
        path: "/especialidades",
        text: "Especialidades",
      },
      {
        path: "/acordos",
        text: "Acordos",
      },
      {
        path: "/contacte-nos",
        text: "Contacte-nos",
      },
    ],
  },
  {
    title: "RGPD",
    links: [
      {
        path: "/termos-e-condicoes",
        text: "Termos e condições",
      },
      {
        path: "/politicas-de-privacidade",
        text: "Política de privacidade",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-4 gap-12">
            <div>
              <div className="w-32">
                <a href="/">
                  <Image src={Logo} alt="Logo" />
                </a>
              </div>
              <div className="text-xs mt-3">
                © 2021 - Clínica Dentária Sorriso Popular. Criado por João
                Santos
              </div>
            </div>
            {data.map((item, index) => {
              return (
                <>
                  <div key={index} className="order-3 sm:order-2">
                    <div className="text-sm font-bold uppercase">
                      {item.title}
                    </div>
                    <div className="mt-3 space-y-3">
                      {item.links.map((item, index) => {
                        return (
                          <>
                            <div key={index}>
                              <a
                                href={item.path}
                                className="text-sm hover:underline"
                              >
                                {item.text}
                              </a>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
            <div className="order-2 sm:order-3">
              <div className="text-sm font-bold uppercase">Siga-nos</div>
              <div className="flex items-center text-3xl space-x-6 mt-3">
                <a
                  href="https://www.facebook.com/SorrisoPopularChamusca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcons.FaFacebook className="hover:text-darkBlue" />
                </a>
                <a
                  href="https://www.instagram.com/sorrisopopularchamusca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcons.FaInstagram className="hover:text-darkBlue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
