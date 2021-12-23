import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
//
import * as FaIcons from "react-icons/fa";
//
import { Dialog } from "@headlessui/react";
//
import Layout from "../components/Layout/Layout";
//
import Dentisteria from "../public/images/Servicos/Dentisteria.png";
import Endodontia from "../public/images/Servicos/Endodontia.png";
import Ortodontia from "../public/images/Servicos/Ortodontia.png";
import Periodontia from "../public/images/Servicos/Periodontia.png";
import Implantologia from "../public/images/Servicos/Implantologia.png";
import Odontopediatria from "../public/images/Servicos/Odontopediatria.png";
//
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Especialidades() {
  return (
    <>
      <Head>
        <title>Especialidades | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <div className="space-y-8 layout">
          <div className="text-center">
            <div className="title text-primary">Os nossos serviços</div>
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
        </div>
      </Layout>
    </>
  );
}

function Cards() {
  const [showDentisteria, setDentisteria] = useState(false);
  const [showEndodontia, setEndodontia] = useState(false);
  const [showOrtodontia, setOrtodontia] = useState(false);
  const [showPeriodontia, setPeriodontia] = useState(false);
  const [showImplantologia, setImplantologia] = useState(false);
  const [showOdontopediatria, setOdontopediatria] = useState(false);

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
    {
      id: 4,
      onClose: setPeriodontia,
      isOpen: showPeriodontia,
      image: Periodontia,
      title: "Periodontia",
      text: "A Periodontia dedica-se aos tecidos que suportam os dentes.",
      description: [
        "A periodontite ou doença periodontal, popularmente conhecida como piorreia, é uma infeção bacteriana que envolve o periodonto (tecidos de suporte dos dentes). É uma patologia oral bastante frequente. Cerca de 50% dos adultos apresentam problemas periodontais.",
        "Trata-se de um processo infecioso da gengiva que também atinge os tecidos de suporte como o osso e o ligamento periodontal (veja fotos superiores). Na base desta doença estão certos microrganismos associados à presença de placa bacteriana.",
        "Na periodontite podemos observar perda óssea e de gengiva (a gengiva desce e a raiz do dente fica exposta) e a gengiva sangra com frequência. Entre a raiz e o osso podem desenvolver-se bolsas periodontais (espaços) que permitem uma acrescida acumulação de tártaro e alimentos/microrganismos. A existência deste espaço pode desencadear o surgimento de abcessos periodontais.",
      ],
    },
    {
      id: 5,
      onClose: setImplantologia,
      isOpen: showImplantologia,
      image: Implantologia,
      title: "Implantologia",
      text: " A reabilitação oral com implantes consiste na substituição de um ou mais dentes.",
      description: [
        " A reabilitação oral com implantes consiste na substituição de um ou mais dente(s) ausente(s), por um implante (“parafuso” biocompatível) que vai funcionar como uma raiz artificial. Esse “parafuso” será posteriormente o suporte para a coroa ou a prótese dentária.",
        "Este tratamento visa recuperar a estética e a função mastigatória, com resultados muito semelhantes aos dos dentes naturais. Sendo que é uma solução que transmite grande conforto no dia a dia.",
        "A colocação de implantes é uma alternativa segura, fiável e duradoura, para quem tem ausência de dentes, ou pretende uma fixação adicional e mais cómoda das próteses.",
      ],
    },
    {
      id: 6,
      onClose: setOdontopediatria,
      isOpen: showOdontopediatria,
      image: Odontopediatria,
      title: "Odontopediatria",
      text: "A Odontopediatria preserva e contribui para muitos sorrisos.",
      description: [
        "A Odontopediatria é a área da medicina dentária dedicada à saúde oral de bebés, crianças e adolescentes e que tem como principal objetivo a realização de tratamentos preventivos mas também curativos para que a criança atinja a idade adulta com uma boca sã, estética e funcional.",
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
              <div className="text-neutral-600">{item.text}</div>
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
