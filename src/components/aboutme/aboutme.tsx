import { StrictMode } from "react";
import "../../index.css";
import Information from "./information";
import Navbar from "../navbar";
import Footer from "../footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Aboutme = () => {
  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>{"About Me - Setthap0ng"}</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Information />
      <Footer />
    </StrictMode>
  );
};

export default Aboutme;
