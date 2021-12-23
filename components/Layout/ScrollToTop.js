import { useEffect, useState } from "react";
//
import * as Io5 from "react-icons/io5";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {showButton && (
        <button
          className="fixed z-10 p-3 text-2xl text-white border border-white rounded-full shadow-lg bg-primary bottom-5 right-5"
          onClick={scrollToTop}
        >
          <Io5.IoArrowUp />
        </button>
      )}
    </>
  );
}
