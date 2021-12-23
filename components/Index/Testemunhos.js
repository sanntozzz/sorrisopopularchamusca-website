import { dataTestemunhos } from "../Data";

export default function Testemunhos() {
  return (
    <>
      <div className="bg-primary">
        <div className="space-y-8 layout">
          <div className="text-center text-white title md:text-left">
            Testemunho dos nossos clientes
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      {dataTestemunhos.map((item) => {
        return (
          <div key={item.id} className="p-4 text-center bg-white rounded-lg">
            <div className="font-medium">{item.name}</div>
            <div className="text-neutral-500">{item.text}</div>
          </div>
        );
      })}
    </>
  );
}
