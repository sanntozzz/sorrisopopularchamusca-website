import Head from "next/head";
//
import * as FaIcons from "react-icons/fa";
//
import Layout from "../components/Layout/Layout";
//
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function CorpoClinico() {
  return (
    <>
      <Head>
        <title>Corpo Clínico | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <div className="space-y-8 layout">
          <div className="text-center md:text-left">
            <div className="title text-primary">Os nossos médicos</div>
            <div className="font-medium text-neutral-500">
              Conheça os nossos profissionais de saúde oral.
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Cards />
          </div>
        </div>
      </Layout>
    </>
  );
}

function Cards() {
  const dataMedicos = [
    {
      id: 1,
      title: "Dra. Valéria Prudente",
      text: "Diretora Clínica",
    },
    {
      id: 2,
      title: "Dra. Ana Castro",
      text: "Médica Dentista",
    },
    {
      id: 3,
      title: "Dra. Diana",
      text: "Médica Dentista",
    },
    {
      id: 4,
      title: "Dr. Nuno Cruz",
      text: "Ortodontista",
    },
  ];
  return (
    <>
      {dataMedicos.map((item) => {
        return (
          <div key={item.id}>
            <FaIcons.FaUserMd className="mx-auto text-6xl text-primary" />
            <div className="mt-4 text-center">
              <div className="font-medium text-primary">{item.title}</div>
              <div className="text-neutral-500">{item.text}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
