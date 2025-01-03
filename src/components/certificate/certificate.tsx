import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import CertificateButton from "./certificateButton";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Certificate = () => {
  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>{"Certificate - Setthap0ng"}</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <CertificateButton />
      <Footer />
    </StrictMode>
  );
};

export default Certificate;
