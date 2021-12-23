import { dataAbout } from "../Data";

export default function About() {
  return (
    <>
      <div className="space-y-8 layout">
        {dataAbout.map((item) => {
          return (
            <div key={item.id}>
              <div className="pb-2">
                <div className="title text-primary">{item.title}</div>
                <div className="font-medium text-neutral-500">
                  {item.subtitle}
                </div>
              </div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
