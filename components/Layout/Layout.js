import Navbar from "./Navbar";
import Social from "./Social";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Social />
      <div className="container px-4 mx-auto">
        <div className="border-t-2"></div>
      </div>
      <Footer />
    </>
  );
}
