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

export default function AboutUs() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-6 py-12 space-y-12">
        {text.map((item, index) => {
          return (
            <div key={index} className="space-y-3">
              <div className="text-2xl text-darkBlue font-bold">
                {item.title}
              </div>
              <div className="text-gray-600 font-medium">{item.subtitle}</div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}
