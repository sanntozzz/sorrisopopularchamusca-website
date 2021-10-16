import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

export default function ScrollToTop() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-5 right-5 text-xl text-darkBlue bg-white p-4 rounded-full shadow-md"
        >
          <FaIcons.FaArrowUp />
        </button>
      )}
    </>
  );
}
