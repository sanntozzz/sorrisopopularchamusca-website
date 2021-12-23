import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//
import * as FaIcons from "react-icons/fa";
//
import { Dialog } from "@headlessui/react";
//
import Dentisteria from "../../public/images/Servicos/Dentisteria.png";
import Endodontia from "../../public/images/Servicos/Endodontia.png";
import Ortodontia from "../../public/images/Servicos/Ortodontia.png";

export default function Servicos() {
  return (
    <>
      <section className="bg-primary">
        <div className="space-y-8 layout">
          <div className="text-center text-white">
            <div className="title">Os nossos serviços</div>
            <div>
              <FaIcons.FaInfoCircle className="inline-flex items-center mr-2" />
              <span>
                Clique em cima de um dos serviços para obter mais informações
              </span>
            </div>
          </div>
          <div className="grid gap-8 mx-auto md:grid-cols-3">
            <Cards />
          </div>
          <Button />
        </div>
      </section>
    </>
  );
}

function Cards() {
  const [showDentisteria, setDentisteria] = useState(false);
  const [showEndodontia, setEndodontia] = useState(false);
  const [showOrtodontia, setOrtodontia] = useState(false);

  const dataEspecialidades = [
    {
      id: 1,
      onClose: setDentisteria,
      isOpen: showDentisteria,
      image: Dentisteria,
      title: "Dentisteria",
      text: "A Dentisteria é área que trata da restauração de forma definitiva.",
      description: [
        "A dentisteria é a área da Medicina Dentária que tem como objetivo restabelecer ou melhorar a estética e função dentária.",
      ],
    },
    {
      id: 2,
      onClose: setEndodontia,
      isOpen: showEndodontia,
      image: Endodontia,
      title: "Endodontia",
      text: "Este tratamento tem como objetivo conservar os dentes.",
      description: [
        "Consiste na eliminação da polpa (nervo) do interior da câmara pulpar e dos canais radiculares e, posteriormente, no selamento destes de forma hermética com material sólido que evite futuras complicações, permitindo assim manter o dente a ocupar o seu espaço e a sua função.",
      ],
    },
    {
      id: 3,
      onClose: setOrtodontia,
      isOpen: showOrtodontia,
      image: Ortodontia,
      title: "Ortodontia",
      text: "O tratamento ortodôntico pretende-se conseguir o alinhamento dentário.",
      description: [
        "Ortodontia é uma especialidade odontológica que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal.",
        "Também causam um estresse adicional aos músculos de mastigação que pode levar a dores de cabeça, síndrome da ATM e dores na região do pescoço, dos ombros e das costas. Os dentes tortos ou mal posicionados também prejudicam a sua aparência.",
        "O tratamento ortodôntico torna a boca mais saudável, proporciona uma aparência mais agradável e dentes com possibilidade de durar a vida toda.",
      ],
    },
  ];

  return (
    <>
      {dataEspecialidades.map((item) => {
        return (
          <>
            <div
              key={item.id}
              onClick={() => item.onClose(true)}
              className="px-4 py-6 text-center bg-white rounded-lg cursor-pointer select-none drop-shadow-lg"
            >
              <div className="w-8 mx-auto">
                <Image src={item.image} alt={item.title} />
              </div>
              <div className="py-2 text-xl font-medium">{item.title}</div>
              <div className="text-neutral-600 ">{item.text}</div>
            </div>

            <Dialog
              open={item.isOpen}
              onClose={() => item.onClose(false)}
              className="fixed inset-0 z-20 overflow-y-auto"
            >
              <div className="flex items-center justify-center min-h-screen p-4">
                <Dialog.Overlay className="fixed inset-0 bg-opacity-75 bg-neutral-900" />

                <div className="relative max-w-2xl p-8 mx-auto bg-white rounded-lg">
                  <div className="w-8 mx-auto">
                    <Image src={item.image} alt={item.title} />
                  </div>
                  <Dialog.Title className="py-2 text-xl font-medium text-center">
                    {item.title}
                  </Dialog.Title>
                  <div className="space-y-4 text-justify">
                    {item.description.map((item) => {
                      return (
                        <>
                          <Dialog.Description>{item}</Dialog.Description>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Dialog>
          </>
        );
      })}
    </>
  );
}

function Button() {
  return (
    <>
      <div className="flex justify-center">
        <Link href="/Especialidades" passHref>
          <a className="inline-flex items-center justify-center w-full max-w-xs gap-4 px-8 py-2 font-bold uppercase duration-150 bg-white rounded-lg shadow-lg text-primary">
            <span>Ver mais</span>
            <FaIcons.FaChevronRight />
          </a>
        </Link>
      </div>
    </>
  );
}
