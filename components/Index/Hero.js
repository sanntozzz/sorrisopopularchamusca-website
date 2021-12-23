import Link from "next/link";
//
import * as FaIcons from "react-icons/fa";

const dataHero = [
  "Marque a sua consulta",
  "Avaliação gratuita",
  "Receba o seu plano de tratamento",
];

export default function Hero() {
  return (
    <>
      <div className="bgHero">
        <div className="layout">
          <div className="space-y-8 text-white">
            <div className="title">À procura do sorriso que sempre sonhou?</div>
            <div className="space-y-4">
              {dataHero.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="inline-flex items-center gap-2">
                      <FaIcons.FaCheckCircle />
                      <span className="font-medium">{item}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

function Button() {
  return (
    <>
      <Link href="/OndeEstamos" passHref>
        <a className="inline-flex items-center justify-center gap-4 px-8 py-2 font-bold uppercase duration-150 bg-white rounded-lg shadow-lg text-primary">
          <span>Marque já a sua consulta</span>
          <FaIcons.FaChevronRight />
        </a>
      </Link>
    </>
  );
}
