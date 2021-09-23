import Layout from "../components/Layout/Layout";

import Hero from "../components/Index/Hero";
import AboutUs from "../components/Index/AboutUs";
import Especialidades from "../components/Index/Especialidades";
import Medicos from "../components/Index/Medicos";
import Testemunhos from "../components/Index/Testemunhos";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutUs />
        <Especialidades />
        <Medicos />
        <Testemunhos />
      </Layout>
    </>
  );
}
