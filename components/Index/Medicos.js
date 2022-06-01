import Link from "next/link";
//
import * as FaIcons from "react-icons/fa";
//
import { dataMedicos } from "../Data";

export default function Medicos() {
  return (
    <>
      <div className="space-y-8 layout">
        <div className="text-center md:text-left">
          <div className="title text-primary">Os nossos médicos</div>
          <div className="font-medium text-neutral-500">
            Conheça os nossos profissionais de saúde oral.
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Cards />
        </div>
        <Button />
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      {dataMedicos.slice(0, 3).map((item) => {
        return (
          <div key={item.id}>
            <FaIcons.FaUserMd className="mx-auto text-6xl text-primary" />
            <div className="mt-4 text-center">
              <div className="font-medium text-primary">{item.title}</div>
              <div className="text-neutral-500">{item.text}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function Button() {
  return (
    <>
      <div className="flex justify-center">
        <Link href="/CorpoClinico" passHref>
          <a className="inline-flex items-center justify-center w-full max-w-xs gap-4 px-8 py-2 font-bold uppercase duration-150 bg-white rounded-lg shadow-lg text-primary ">
            <span>Ver mais</span>
            <FaIcons.FaChevronRight />
          </a>
        </Link>
      </div>
    </>
  );
}
