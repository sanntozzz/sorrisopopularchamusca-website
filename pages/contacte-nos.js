// Layout
import Layout from "../components/Layout/Layout";

export default function ContacteNosPage() {
  return (
    <>
      <Layout>
        <div className="bgChamusca">
          <div className="max-w-screen-2xl mx-auto px-6 py-12 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:order-2">
                <div className="space-y-12">
                  <div className="text-white space-y-3 ">
                    <div className="text-2xl font-bold">
                      Estamos localizados na Chamusca.
                    </div>
                    <div className="text-base">
                      Iniciámos a nossa atividade , na Chamusca, mas fomos
                      progressivamente crescendo e diversificando a oferta de
                      serviços ao cliente. Chamusca, localização privilegiada.
                      Terra de forte tradição Ribatejana, o seu artesanato, as
                      suas Feiras e Festas populares têm uma importância crassa
                      nesta região, sendo exemplo a Feira da Ascensão, a bonita
                      Procissão dos Fogaréus, o Entrudo e, claro está, as Festas
                      de Touros, que têm lugar na Praça de Touros, ou Arena
                      Chamusquense.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-screen-2xl mx-auto px-6 py-12">
            <div className="space-y-12">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="text-xl font-bold">Morada</div>
                  <a
                    href="https://www.google.com/maps?ll=39.357409,-8.478555&z=16&t=m&hl=en&gl=PT&mapclient=embed&q=Av.+Alm.+Gago+Coutinho+25+Chamusca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Av. Almirante Gago Coutinho nº25 2140-053 Chamusca
                  </a>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-xl font-bold">Horários</div>
                  <div>
                    <div className="space-x-2">
                      <span>Segunda a Sexta:</span>
                      <span className="font-bold">09h às 13h e 15h às 19h</span>
                    </div>
                    <div className="space-x-2">
                      <span>Sábados e Domingos:</span>
                      <span className="font-bold">Encerrado</span>
                    </div>
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-xl font-bold">Contacte-nos</div>
                  <div>
                    <div className="space-x-2">
                      <span>Email:</span>
                      <a
                        href="mailto:Clinchamusca25@gmail.com"
                        className="font-bold hover:underline"
                      >
                        Clinchamusca25@gmail.com
                      </a>
                    </div>
                    <div className="space-x-2">
                      <span>Telefone:</span>
                      <a
                        href="tel:249 761 128"
                        className="font-bold hover:underline"
                      >
                        249 761 128
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-72">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.9480458138196!2d-8.480744084374031!3d39.357413127301186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18601bf6fa5901%3A0xf7018daf30a9b0e4!2sAv.%20Alm.%20Gago%20Coutinho%2025%2C%20Chamusca!5e0!3m2!1sen!2spt!4v1631057909527!5m2!1sen!2spt"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
