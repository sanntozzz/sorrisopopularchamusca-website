import Head from "next/head";
import Link from "next/link";

// Layout
import Layout from "../components/Layout/Layout";

const Data = [
  {
    title: "Morada",
    path: "https://www.google.com/maps?ll=39.357442,-8.478536&z=16&t=m&hl=en&gl=PT&mapclient=embed&cid=6989400154799883340",
    text: "Av. Almirante Gago Coutinho 25, 2140-053 Chamusca",
  },
  {
    title: "Email",
    path: "mailto:clinchamusca25@gmail.com",
    text: "clinchamusca25@gmail.com",
  },
  {
    title: "Telefone",
    path: "tel:249761128",
    text: "249 761 128",
  },
  {
    title: "Whatsapp",
    path: "https://wa.me/969952234",
    text: "969 952 234",
  },
];

export default function OndeEstamos() {
  return (
    <>
      <Head>
        <title>Onde Estamos | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <section className="bgChamusca">
          <div className="max-w-screen-2xl mx-auto px-6 py-12 text-white">
            <div className="text-2xl text-white font-bold">
              Estamos localizados na Chamusca.
            </div>
            <div className="mt-4">
              Iniciámos a nossa atividade , na Chamusca, mas fomos
              progressivamente crescendo e diversificando a oferta de serviços
              ao cliente. Chamusca, localização privilegiada. Terra de forte
              tradição Ribatejana, o seu artesanato, as suas Feiras e Festas
              populares têm uma importância crassa nesta região, sendo exemplo a
              Feira da Ascensão, a bonita Procissão dos Fogaréus, o Entrudo e,
              claro está, as Festas de Touros, que têm lugar na Praça de Touros,
              ou Arena Chamusquense.
            </div>
          </div>
        </section>
        <section class="max-w-screen-2xl px-6 py-12 mx-auto flex flex-wrap md:flex-nowrap space-y-12 md:space-y-0 md:space-x-12">
          <iframe
            className="w-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.946597373685!2d-8.48072498437406!3d39.35744592729931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18614266fddbf9%3A0x60ff5668cbe8444c!2sSorriso%20Popular!5e0!3m2!1sen!2spt!4v1632339310221!5m2!1sen!2spt"
          ></iframe>
          <div class="w-full md:w-1/2 space-y-4 text-center md:text-left md:py-2">
            <div>
              <div class="font-medium text-gray-900 tracking-widest">
                Horário
              </div>
              <div>
                Segunda a Sexta: <b>09h às 13h e 15h às 19h</b>
              </div>
              <div>
                Sábados e Domingos: <b>Encerrado</b>
              </div>
            </div>
            {Data.map((item, index) => {
              return (
                <div>
                  <div class="font-medium text-gray-900 tracking-widest">
                    {item.title}
                  </div>
                  <Link href={item.path}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block text-gray-600 hover:underline"
                    >
                      {item.text}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
