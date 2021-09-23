import * as FaIcons from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    title: "Dra. Valéria Prudente",
    text: "Diretora Clínica",
  },
  {
    title: "Dra. Ana Castro",
    text: "Médica Dentista",
  },
  {
    title: "Dra. Diana",
    text: "Médica Dentista",
  },
];

export default function Medicos() {
  return (
    <>
      <section class="max-w-screen-2xl mx-auto px-6 py-12 space-y-12">
        <div class="text-center md:text-left">
          <div class="text-darkBlue text-2xl font-bold">Os nossos médicos</div>
          <div className="text-gray-600">
            Conheça os nossos profissionais de saúde oral.
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-12">
          {data.map((item, index) => {
            return (
              <div>
                <div className="flex justify-center">
                  <div className="bg-darkBlue rounded-full p-6">
                    <FaIcons.FaUserMd className="text-white text-3xl" />
                  </div>
                </div>
                <div class="text-center mt-4">
                  <div class="text-gray-900 font-medium tracking-wider">
                    {item.title}
                  </div>
                  <div class="text-gray-600">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/corpo-clinico">
            <div className="cursor-pointer text-darkBlue bg-white rounded-lg py-4 w-full max-w-xs drop-shadow-lg flex justify-center">
              <span className="font-bold uppercase leading-none">Ver mais</span>
              <FaIcons.FaChevronRight className="ml-2" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
