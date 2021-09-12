const text = [
  {
    title: "A nossa Missão",
    subtitle: "Garantir um serviço diferenciado pela qualidade e proximidade.",
    text: "Oferecer à sociedade uma resposta completa às necessidades de saúde e bem estar, através da disponibilização de um conjunto alargado de especialidades clínicas.",
  },
  {
    title: "A nossa Visão",
    text: "Uma visão sustentada por fazer mais e melhor em qualidade de serviço e oferta ao cliente.",
  },
];

export default function Section1() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="">
              <div className="space-y-12">
                {text.map((item, index) => {
                  return (
                    <div key={index} className="space-y-3 font-bold">
                      <div className="text-2xl text-darkBlue">{item.title}</div>
                      <div className="text-gray-700 text-lg">
                        {item.subtitle}
                      </div>
                      <div className="font-normal">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
