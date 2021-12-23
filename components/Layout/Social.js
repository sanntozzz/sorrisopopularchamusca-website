import Link from "next/link";
//
import { socialLinks } from "../Data";

export default function Footer() {
  return (
    <>
      <div className="layout">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-center md:text-left">
            <div className="tracking-widest ">Segue-nos nas redes sociais</div>
            <div className="title text-primary">Mostra o teu sorriso!</div>
          </div>
          <div className="mx-auto mt-6 space-x-4 md:mr-0 md:mt-0">
            {socialLinks.map((item) => {
              return (
                <div key={item.id} className="inline-block">
                  <Link href={item.path} passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 bg-gray-100 rounded-lg text-neutral-500 hover:bg-primary hover:text-white"
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div className="ml-4 leading-none">
                        <div className="text-xs">Segue-nos no</div>
                        <div className="mt-1 font-medium">{item.text}</div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
