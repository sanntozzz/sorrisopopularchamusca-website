import Image from "next/image";

// Images
import Med1 from "../../public/images/Medicos/Med1.jpg";
import Med2 from "../../public/images/Medicos/Med2.jpg";
import Med3 from "../../public/images/Medicos/Med3.jpg";

const data = [
  {
    image: Med1,
    title: "Dra. Silva",
    text: "Diretora Clínica",
  },
  {
    image: Med2,
    title: "Dr. Ernesto Prates",
    text: "Ortodontia",
  },
  {
    image: Med3,
    title: "Dra. Ana",
    text: "Ortodontista",
  },
];

export default function Medicos() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 py-12">
          <div className="space-y-12">
            <div className="text-4xl text-center font-bold">
              <span className="text-darkBlue">Os nossos médicos</span>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {data.map((item, index) => {
                return (
                  <div key={index} className="space-y-6">
                    <div className="flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xl">{item.title}</div>
                      <div className="text-sm">{item.text}</div>
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
