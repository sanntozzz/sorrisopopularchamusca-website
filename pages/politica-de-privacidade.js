import Head from "next/head";
import Link from "next/link";

// Layout
import Layout from "../components/Layout/Layout";

export default function Acordos() {
  return (
    <>
      <Head>
        <title>
          Política de Privacidade | Clínica Dentária Sorriso Popular
        </title>
      </Head>
      <Layout>
        <section className="max-w-screen-2xl mx-auto px-6 py-12">
          <div className="space-y-4">
            <div className="text-2xl text-darkBlue font-bold mb-12">
              Política de Privacidade
            </div>
            <div>
              Todas as suas informações pessoais recolhidas, serão usadas para o
              ajudar a tornar a sua visita no nosso site o mais produtiva e
              agradável possível.
            </div>
            <div>
              A garantia da confidencialidade dos dados pessoais dos
              utilizadores do nosso site é importante para nós.
            </div>
            <div>
              Usamos a sua informação para suportar e melhorar a nossa relação
              consigo.
            </div>
            <div>
              A Clínica Dentária Sorriso Popular na qualidade de proprietário do
              domínio é responsável pelo tratamento de ficheiros automáticos
              gerados por nós garante a integridade e cumprimento integral da
              legislação aplicável nomeadamente do disposto na Lei n.º 67/98 de
              26 de Outubro (Lei da Proteção de Dados Pessoais), na versão em
              vigor ou na versão que venha a suceder.
            </div>
            <div>
              O uso do{" "}
              <Link href="/">
                <a className="text-darkBlue hover:underline">
                  www.sorrisopopularchamusca.com/
                </a>
              </Link>{" "}
              pressupõe a aceitação desta POLITICA DE PRIVACIDADE. A Clínica
              Dentária Sorriso Popular reserva-se ao direito de alterar os
              termos da POLITICA DE PRIVACIDADE sem aviso prévio. Deste modo,
              recomendamos que consulte a nossa política de privacidade com
              regularidade de forma a estar sempre atualizado.
            </div>
            <div>
              O seu direito à privacidade e segurança dos dados é uma
              preocupação prioritária. É por isso que, quando visita o nosso Web
              site, nós ajudamo-lo a manter o controlo sobre a sua informação
              pessoal.
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
