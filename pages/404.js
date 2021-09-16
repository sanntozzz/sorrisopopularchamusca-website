import Head from "next/head";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Clínica Dentária Sorriso Popular</title>
      </Head>
      <div className="bgContainer">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="text-white text-center">
            <div className="text-3xl xl:text-4xl font-bold uppercase">
              404 | Página não encontrada
            </div>
            <div className="text-xl xl:text-2xl mt-3 mb-12">
              A página que procuras parece não existir
            </div>
            <div className="flex justify-center">
              <Link href="/" passHref>
                <div className="bg-white w-full max-w-xs py-3 rounded flex justify-center cursor-pointer">
                  <div className="text-darkBlue">
                    <div className="space-x-3 flex items-center">
                      <span className="text-sm xl:text-base font-bold uppercase">
                        Voltar á página inicial
                      </span>
                      <FaIcons.FaHome />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
