import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

// Servicos
import Dentisteria from "../../public/images/Servicos/Dentisteria.png";
import Endodontia from "../../public/images/Servicos/Endodontia.png";
import Ortodontia from "../../public/images/Servicos/Ortodontia.png";

export default function Especialidades() {
  const [showDentisteria, setDentisteria] = useState(false);

  const openDentisteria = () => {
    setDentisteria(!showDentisteria);
  };

  const [showEndodontia, setEndodontia] = useState(false);

  const openEndodontia = () => {
    setEndodontia(!showEndodontia);
  };

  const [showOrtodontia, setOrtodontia] = useState(false);

  const openOrtodontia = () => {
    setOrtodontia(!showOrtodontia);
  };

  const Data = [
    {
      onClick: openDentisteria,
      class: showDentisteria,
      image: Dentisteria,
      title: "Dentisteria",
      text: "A Dentisteria é área que trata da restauração de forma definitiva.",
      modaText: [
        "A dentisteria é a área da Medicina Dentária que tem como objetivo restabelecer ou melhorar a estética e função dentária.",
      ],
    },
    {
      onClick: openEndodontia,
      class: showEndodontia,
      image: Endodontia,
      title: "Endodontia",
      text: "Este tratamento tem como objetivo conservar os dentes.",
      modaText: [
        "Consiste na eliminação da polpa (nervo) do interior da câmara pulpar e dos canais radiculares e, posteriormente, no selamento destes de forma hermética com material sólido que evite futuras complicações, permitindo assim manter o dente a ocupar o seu espaço e a sua função.",
      ],
    },
    {
      onClick: openOrtodontia,
      class: showOrtodontia,
      image: Ortodontia,
      title: "Ortodontia",
      text: "O tratamento ortodôntico pretende-se conseguir o alinhamento dentário.",
      modaText: [
        "Ortodontia é uma especialidade odontológica que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal. Também causam um estresse adicional aos músculos de mastigação que pode levar a dores de cabeça, síndrome da ATM e dores na região do pescoço, dos ombros e das costas. Os dentes tortos ou mal posicionados também prejudicam a sua aparência.",
        "O tratamento ortodôntico torna a boca mais saudável, proporciona uma aparência mais agradável e dentes com possibilidade de durar a vida toda.",
      ],
    },
  ];

  return (
    <>
      <section className="bgContainer">
        <div class="max-w-screen-2xl mx-auto px-6 py-12 space-y-12">
          <div class="text-white text-center">
            <div class="text-2xl font-bold">Os nossos serviços</div>
            <div>
              <FaIcons.FaInfoCircle className="inline-block" />
              <span className="ml-1">
                Clique em cima de um dos serviços para obter mais informações
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Data.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={item.onClick}
                    class="bg-white p-6 rounded-lg text-center space-y-2 drop-shadow-lg select-none cursor-pointer"
                  >
                    <div className="w-10 mx-auto">
                      <Image src={item.image} alt={item.title} />
                    </div>
                    <div class="text-xl font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div class="text-sm text-gray-600">{item.text}</div>
                  </div>
                  {/*  */}
                  <div
                    className={`${
                      item.class ? "" : "hidden"
                    } fixed inset-0 z-10 bg-gray-900 bg-opacity-95`}
                  >
                    <div className="min-h-screen px-6 text-center">
                      <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                      ></span>
                      <div className="bg-white inline-block w-full max-w-3xl p-12 my-6 align-middle   rounded-lg select-none space-y-2">
                        <div
                          onClick={item.onClick}
                          className="flex justify-end"
                        >
                          <FaIcons.FaTimes className="cursor-pointer text-xl" />
                        </div>
                        <div className="w-10 mx-auto ">
                          <Image src={item.image} alt={item.title} />
                        </div>
                        <div className="text-xl font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="space-y-3">
                          {item.modaText.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="text-left text-sm text-gray-600 "
                              >
                                {item}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Link href="/especialidades">
              <div className="cursor-pointer text-darkBlue bg-white rounded-lg py-4 w-full max-w-xs drop-shadow-lg flex justify-center">
                <span className="font-bold uppercase leading-none">
                  Ver mais
                </span>
                <FaIcons.FaChevronRight className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
