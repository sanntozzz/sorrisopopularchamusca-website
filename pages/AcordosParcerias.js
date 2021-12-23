import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
//
import * as FaIcons from "react-icons/fa";
//
import Layout from "../components/Layout/Layout";
//
import { dataAcordos } from "../components/Data";
//
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Acordos() {
  return (
    <>
      <Head>
        <title>Acordos e Parcerias | Clínica Dentária Sorriso Popular</title>
      </Head>
      <Layout>
        <div className="space-y-12 layout">
          <div>
            <div className="title text-primary">Acordos e Parcerias</div>
            <div className="font-medium text-neutral-500">
              A Clínica Dentária Sorriso Popular Chamusca disponibiliza aos seus
              útentes acordos e parcerias com diversas entidades que facilitam o
              acesso a diversos tratamentos.
            </div>
          </div>
          {dataAcordos.map((item) => {
            return (
              <>
                <div key={item.id} className="grid gap-8">
                  <div className="inline-flex items-center gap-2">
                    <div className="title">{item.title}</div>
                    <Link href={item.link}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        <FaIcons.FaLink />
                      </a>
                    </Link>
                  </div>
                  <div className="max-w-sm">
                    <Image src={item.image} alt={item.title} />
                  </div>
                  <div className="grid gap-4">
                    {item.description.map((item, index) => {
                      return (
                        <>
                          <div key={index}>{item}</div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
