const Data = [
  {
    name: "Sr. Armando Jesus",
    text: "“Gostei muito do atendimento da Dra Ana Castro. O serviço prestado foi ótimo.”",
  },
  {
    name: "Maria dos Anjos Nunes",
    text: "“Vim por recomendação do meu marido. Gosto de toda a equipa, mas em especial da Dra. Ana Castro“",
  },
  {
    name: "Sónia Conceição",
    text: "“Atendimento bom, as Dras são ótimas, preços acessíveis. Recomendo”",
  },
];

export default function Testemunhos() {
  return (
    <>
      <section className="bgContainer">
        <div className="max-w-screen-2xl mx-auto px-6 py-12 space-y-6">
          <div className="text-center md:text-left">
            <div class="text-white text-2xl font-bold">
              Testemunho dos nossos clientes
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center text-sm"
                >
                  <div className="text-gray-900 font-medium tracking-wider">
                    {item.name}
                  </div>
                  <div className="text-gray-600 mt-1">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
