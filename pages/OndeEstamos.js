import Head from "next/head";
import Link from "next/link";
//
import Layout from "../components/Layout/Layout";
//
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//
import { dataOndeEstamos } from "../components/Data";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function OndeEstamos() {
  return (
    <>
      <Head>
        <title>Onde Estamos | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <div className="bg-primary">
          <div className="text-white layout">
            <div className="pb-4 title">Estamos localizados na Chamusca.</div>
            <div>
              Iniciámos a nossa atividade, na Chamusca, mas fomos
              progressivamente crescendo e diversificando a oferta de serviços
              ao cliente. Chamusca, localização privilegiada. Terra de forte
              tradição Ribatejana, o seu artesanato, as suas Feiras e Festas
              populares têm uma importância crassa nesta região, sendo exemplo a
              Feira da Ascensão, a bonita Procissão dos Fogaréus, o Entrudo e,
              claro está, as Festas de Touros, que têm lugar na Praça de Touros,
              ou Arena Chamusquense.
            </div>
          </div>
        </div>
        <div className="layout">
          <div className="flex flex-wrap gap-8 md:flex-nowrap">
            <iframe
              className="w-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.946597373685!2d-8.48072498437406!3d39.35744592729931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18614266fddbf9%3A0x60ff5668cbe8444c!2sSorriso%20Popular!5e0!3m2!1sen!2spt!4v1632339310221!5m2!1sen!2spt"
            ></iframe>
            <div className="grid w-full gap-4 text-center md:w-1/2 md:text-left">
              <div>
                <div className="font-medium tracking-widest">Horário</div>
                <div>
                  Segunda a Sexta: <b>09h às 13h e 15h às 19h</b>
                </div>
                <div>
                  Sábados e Domingos: <b>Encerrado</b>
                </div>
              </div>
              {dataOndeEstamos.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="font-medium tracking-widest">
                      {item.title}
                    </div>
                    <Link href={item.path}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.text}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
