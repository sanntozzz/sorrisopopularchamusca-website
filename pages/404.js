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
        <div className="min-h-screen px-6 py-12 flex justify-center items-center">
          <div>
            <div class="text-white text-center">
              <div class="text-2xl font-bold uppercase">
                404 | Página não encontrada
              </div>
              <div className="text-xl mt-2">
                A página que procuras parece não existir
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/">
                <div className="cursor-pointer text-darkBlue bg-white rounded-lg py-2 w-full max-w-xs drop-shadow-lg flex justify-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold uppercase">
                      Voltar á página inicial
                    </span>
                    <FaIcons.FaHome />
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
