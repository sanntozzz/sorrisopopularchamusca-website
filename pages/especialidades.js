import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";

// Layout
import Layout from "../components/Layout/Layout";

// Servicos
import Dentisteria from "../public/images/Servicos/Dentisteria.png";
import Endodontia from "../public/images/Servicos/Endodontia.png";
import Ortodontia from "../public/images/Servicos/Ortodontia.png";
import Periodontia from "../public/images/Servicos/Periodontia.png";
import Implantologia from "../public/images/Servicos/Implantologia.png";
import Odontopediatria from "../public/images/Servicos/Odontopediatria.png";

export default function EspecialidadesPage() {
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

  const [showPeriodontia, setPeriodontia] = useState(false);

  const openPeriodontia = () => {
    setPeriodontia(!showPeriodontia);
  };

  const [showImplantologia, setImplantologia] = useState(false);

  const openImplantologia = () => {
    setImplantologia(!showImplantologia);
  };

  const [showOdontopediatria, setOdontopediatria] = useState(false);

  const openOdontopediatria = () => {
    setOdontopediatria(!showOdontopediatria);
  };

  const data = [
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
    {
      onClick: openPeriodontia,
      class: showPeriodontia,
      image: Periodontia,
      title: "Periodontia",
      text: "A Periodontia dedica-se aos tecidos que suportam os dentes.",
      modaText: [
        "A periodontite ou doença periodontal, popularmente conhecida como piorreia, é uma infeção bacteriana que envolve o periodonto (tecidos de suporte dos dentes). É uma patologia oral bastante frequente. Cerca de 50% dos adultos apresentam problemas periodontais.",
        "Trata-se de um processo infecioso da gengiva que também atinge os tecidos de suporte como o osso e o ligamento periodontal (veja fotos superiores). Na base desta doença estão certos microrganismos associados à presença de placa bacteriana.",
        "Na periodontite podemos observar perda óssea e de gengiva (a gengiva desce e a raiz do dente fica exposta) e a gengiva sangra com frequência. Entre a raiz e o osso podem desenvolver-se bolsas periodontais (espaços) que permitem uma acrescida acumulação de tártaro e alimentos/microrganismos. A existência deste espaço pode desencadear o surgimento de abcessos periodontais.",
      ],
    },
    {
      onClick: openImplantologia,
      class: showImplantologia,
      image: Implantologia,
      title: "Implantologia",
      text: " A reabilitação oral com implantes consiste na substituição de um ou mais dentes.",
      modaText: [
        " A reabilitação oral com implantes consiste na substituição de um ou mais dente(s) ausente(s), por um implante (“parafuso” biocompatível) que vai funcionar como uma raiz artificial. Esse “parafuso” será posteriormente o suporte para a coroa ou a prótese dentária.",
        "Este tratamento visa recuperar a estética e a função mastigatória, com resultados muito semelhantes aos dos dentes naturais. Sendo que é uma solução que transmite grande conforto no dia a dia.",
        "A colocação de implantes é uma alternativa segura, fiável e duradoura, para quem tem ausência de dentes, ou pretende uma fixação adicional e mais cómoda das próteses.",
      ],
    },
    {
      onClick: openOdontopediatria,
      class: showOdontopediatria,
      image: Odontopediatria,
      title: "Odontopediatria",
      text: "A Odontopediatria preserva e contribui para muitos sorrisos.",
      modaText: [
        "A Odontopediatria é a área da medicina dentária dedicada à saúde oral de bebés, crianças e adolescentes e que tem como principal objetivo a realização de tratamentos preventivos mas também curativos para que a criança atinja a idade adulta com uma boca sã, estética e funcional.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Especialidades | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <div className="bgContainer">
          <div className="max-w-screen-2xl mx-auto px-6 py-12">
            <div className="space-y-12">
              <div className="space-y-3">
                <div className="text-4xl text-white text-center font-bold">
                  Os nossos serviços
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center text-center space-y-2 sm:space-x-2 sm:space-y-0 text-gray-200">
                  <FaIcons.FaInfoCircle />
                  <div className="font-bold">
                    Clique em cima de um dos serviços para obter mais
                    informações
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {data.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={item.onClick}
                        className="bg-white rounded-md w-full p-6 drop-shadow-md cursor-pointer"
                      >
                        <div className="w-10 mx-auto">
                          <Image src={item.image} alt={item.title} />
                        </div>
                        <div className="text-lg text-center font-bold uppercase mt-3">
                          {item.title}
                        </div>
                        <div className="text-sm text-center">{item.text}</div>
                      </div>
                      <div
                        className={`${
                          item.class ? "" : "hidden"
                        } fixed inset-0 z-10 bg-gray-900 bg-opacity-95`}
                      >
                        <div className="min-h-screen px-4 text-center">
                          <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                          ></span>
                          <div className="inline-block w-full max-w-3xl p-12 my-6 overflow-hidden align-middle transition-all transform bg-white rounded-md select-none">
                            <div
                              onClick={item.onClick}
                              className="flex justify-end text-xl cursor-pointer"
                            >
                              <FaIcons.FaTimes />
                            </div>
                            <div className="mx-auto w-16">
                              <Image src={item.image} alt={item.title} />
                            </div>
                            <div className="text-xl text-center font-bold uppercase mt-6 mb-3">
                              {item.title}
                            </div>
                            <div className="space-y-3">
                              {item.modaText.map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="text-sm text-left"
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
