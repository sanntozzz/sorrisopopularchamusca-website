import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

// Layout
import Layout from "../components/Layout/Layout";

import SorrisoMais from "../public/images/AcordosParcerias/SorrisoMais.png";
import EasyHealth from "../public/images/AcordosParcerias/EasyHealth.png";

export default function Acordos() {
  return (
    <>
      <Head>
        <title>Acordos e Parcerias | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <section className="max-w-screen-2xl mx-auto px-6 py-12">
          <div className="space-y-3">
            <div className="text-2xl text-darkBlue font-bold">
              Acordos e Parcerias
            </div>
            <div className="text-gray-600 font-medium">
              A Clínica Dentária Sorriso Popular Chamusca disponibiliza aos seus
              útentes acordos e parcerias com diversas entidades que facilitam o
              acesso a diversos tratamentos.
            </div>
          </div>
          <div className="space-y-4 mt-12">
            <div className="text-xl text-gray-900 font-bold">
              <span>Sorriso Mais / Agilcare</span>
              <Link href="https://www.sorrisomais.pt/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-darkBlue"
                >
                  <FaIcons.FaLink className="inline-block ml-2" />
                </a>
              </Link>
            </div>
            <div className="w-96">
              <Image src={SorrisoMais} alt="SorrisoMais" />
            </div>
            <div className="space-y-2">
              <p>
                A SORRISO MAIS é um Plano de Saúde que tem 11 anos de
                experiência Nacional reconhecida e é uma referência na qualidade
                nos serviços prestados, com mais de 450.000 beneficiários.
              </p>
              <p>
                O PLANO DE SAÚDE SORRISO MAIS proporciona aos seus utentes os
                melhores cuidados ao nível da saúde dentária, tão importantes
                para o bem estar e qualidade de vida de todas as pessoas, assim
                como oferece outros serviços e cuidados de Saúde, num leque cada
                vez mais alargado e criterioso ao nível da qualidade, a preços
                bastante reduzidos.
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-12">
            <div className="text-xl text-gray-900 font-bold">
              <span>Easy Health</span>
              <Link href="https://www.easyhealth.pt/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-darkBlue"
                >
                  <FaIcons.FaLink className="inline-block ml-2" />
                </a>
              </Link>
            </div>
            <div className="w-32">
              <Image src={EasyHealth} alt="EasyHealth" />
            </div>
            <div className="space-y-2">
              <p>
                A EasyHealth é uma empresa que se dedica à Saúde e,
                consequentemente, à melhoria da qualidade de vida física,
                mental, social e ambiental.
              </p>
              <p>
                Apesar de haver cada vez mais informação sobre o conjunto de
                medidas e ações determinantes para a prevenção de doenças e
                melhoria da esperança de vida, Saúde tornou-se um objetivo
                confuso, complicado e inatingível para a maioria das pessoas.
              </p>
              <p>
                Por outro lado, de acordo com a Organização Mundial de Saúde
                (OMS), os principais determinantes da Saúde incluem ambiente
                social, ambiente económico, ambiente físico e características
                individuais da pessoa. Saúde é cada vez mais reconhecido como um
                conceito multidimensional pois depende de aspetos físicos,
                mentais, sociais e ambientais.
              </p>
              <p>
                A EasyHealth é uma empresa de consultoria, formação e serviços
                na área da saúde, atuando sempre com a missão de simplificar o
                acesso a saúde.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
