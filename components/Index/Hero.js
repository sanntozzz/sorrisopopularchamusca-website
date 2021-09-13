import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const text = [
  "Marque a sua consulta",
  "Avaliação gratuita",
  "Receba o seu plano de tratamento",
];

export default function Hero() {
  return (
    <>
      <div className="bgHero">
        <div className="bg-darkBlue bg-opacity-70 h-full flex items-center px-6 lg:px-12 lg:max-w-2xl ml-auto">
          <div className="text-white space-y-9">
            <div className="space-y-6">
              {text.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 font-bold"
                  >
                    <FaIcons.FaCheckCircle className="flex-none text-lg" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="font-bold">
              E já está, tenha o sorriso que sempre sonhou!
            </div>
            <Link href="/contacte-nos" passHref>
              <div className="bg-white rounded-md py-3 w-full flex justify-center cursor-pointer">
                <div className="flex items-center space-x-3 text-darkBlue">
                  <span className="text-base text-center font-bold uppercase">
                    Marque já aqui a sua consulta
                  </span>
                  <FaIcons.FaChevronRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
