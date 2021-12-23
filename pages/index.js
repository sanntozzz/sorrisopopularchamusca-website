import Layout from "../components/Layout/Layout";
import Hero from "../components/Index/Hero";
import About from "../components/Index/About";
import Servicos from "../components/Index/Servicos";
import Medicos from "../components/Index/Medicos";
import Testemunhos from "../components/Index/Testemunhos";
//
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Servicos />
        <Medicos />
        <Testemunhos />
      </Layout>
    </>
  );
}
