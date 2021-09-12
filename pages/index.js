import Layout from "../components/Layout/Layout";

import Hero from "../components/Index/Hero";
import Section1 from "../components/Index/Section1";
import Especialidades from "../components/Index/Especialidades";
import Medicos from "../components/Index/Medicos";
import Clientes from "../components/Index/Clientes";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Section1 />
        <Especialidades />
        <Medicos />
        <Clientes />
      </Layout>
    </>
  );
}
