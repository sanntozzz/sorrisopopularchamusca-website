import Head from "next/head";
//
import * as FaIcons from "react-icons/fa";
//
import Layout from "../components/Layout/Layout";
//
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dataMedicos } from "../components/Data";

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
