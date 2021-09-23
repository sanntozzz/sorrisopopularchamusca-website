import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const Data = [
  "Marque a sua consulta",
  "Avaliação gratuita",
  "Receba o seu plano de tratamento",
];

export default function Hero() {
  return (
    <>
      <div className="bgHero">
        <div className="max-w-screen-2xl mx-auto px-6 py-12 h-full flex items-center">
          <div className="text-white space-y-9">
            <div className="text-2xl font-bold tracking-widest">
              À procura do sorriso que sempre sonhou?
            </div>
            <div className="space-y-6">
              {Data.map((item, index) => {
                return (
                  <div key={index}>
                    <FaIcons.FaCheckCircle className="inline-block" />
                    <span className="font-medium ml-2">{item}</span>
                  </div>
                );
              })}
            </div>
            <Link href="/onde-estamos" passHref>
              <div className="cursor-pointer text-darkBlue bg-white rounded-lg py-4 w-full max-w-xs drop-shadow-lg flex justify-center">
                <span className="font-bold uppercase leading-none">
                  Marque já a sua consulta
                </span>
                <FaIcons.FaChevronRight className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
