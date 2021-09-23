import Head from "next/head";
import * as FaIcons from "react-icons/fa";

// Layout
import Layout from "../components/Layout/Layout";

const Data = [
  {
    title: "Dra. Valéria Prudente",
    text: "Diretora Clínica",
  },
  {
    title: "Dra. Ana Castro",
    text: "Médica Dentista",
  },
  {
    title: "Dra. Diana",
    text: "Médica Dentista",
  },
  {
    title: "Dr. César Cruz",
    text: "Médico Dentista",
  },
  {
    title: "Dr. Nuno Cruz",
    text: "Ortodontista",
  },
];
export default function CorpoClinico() {
  return (
    <>
      <Head>
        <title>Corpo Clínico | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <section className="max-w-screen-2xl mx-auto px-6 py-12 space-y-12">
          <div className="text-center md:text-left">
            <div className="text-darkBlue text-2xl font-bold">
              Os nossos médicos
            </div>
            <div className="text-gray-600">
              Conheça os nossos profissionais de saúde oral.
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {Data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-center">
                    <div className="bg-darkBlue rounded-full p-6">
                      <FaIcons.FaUserMd className="text-white text-3xl" />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-gray-900 font-medium tracking-wider">
                      {item.title}
                    </div>
                    <div className="text-gray-600">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
