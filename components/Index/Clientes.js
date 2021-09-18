const data = [
  {
    title: "Sr. Armando Jesus",
    text: "“Gostei muito do atendimento da Dra Ana Castro. O serviço prestado foi ótimo.”",
  },
  {
    title: "Maria dos Anjos Nunes",
    text: "“Vim por recomendação do meu marido. Gosto de toda a equipa, mas em especial da Dra. Ana Castro“",
  },
  {
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
                    className="bg-white rounded-md w-full p-6 drop-shadow-md"
                  >
                    <div className="text-center font-bold">{item.title}</div>
                    <div className="text-center text-sm">{item.text}</div>
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
