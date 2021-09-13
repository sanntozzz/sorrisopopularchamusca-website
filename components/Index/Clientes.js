import Image from "next/image";

// Images
import Cliente1 from "../../public/images/Clientes/Cliente1.webp";
import Cliente2 from "../../public/images/Clientes/Cliente2.webp";
import Cliente3 from "../../public/images/Clientes/Cliente3.webp";

const data = [
  {
    image: Cliente1,
    title: "Sr. Armando Jesus",
    text: "“Gostei muito do atendimento da Dra Ana Castro. O serviço prestado foi ótimo.”",
  },
  {
    image: Cliente2,
    title: "Maria dos Anjos Nunes",
    text: "“Vim por recomendação do meu marido. Gosto de toda a equipa, mas em especial da Dra. Ana Castro“",
  },
  {
    image: Cliente3,
    title: "Sónia Conceição",
    text: "“Atendimento bom, as Dras são ótimas, preços acessíveis. Recomendo”",
  },
];

export default function Clientes() {
  return (
    <>
      <div className="bgContainer">
        <div className="max-w-screen-2xl mx-auto px-6 py-12">
          <div className="space-y-12">
            <div className="text-4xl text-center font-bold">
              <span className="text-white">A opinião dos nossos clientes</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative bg-white rounded-md w-full p-6 pt-16 drop-shadow-md mt-14"
                  >
                    <div className="flex justify-center">
                      <div>
                        <div className="text-center font-bold">
                          {item.title}
                        </div>
                        <div className="text-center text-sm">{item.text}</div>
                      </div>
                      <div className="absolute top-[-50px] w-24">
                        <Image
                          className="rounded-full"
                          src={item.image}
                          alt={item.title}
                          layout="responsive"
                          width={0}
                          height={0}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
