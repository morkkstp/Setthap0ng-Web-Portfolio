import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import CertificateButton from "./certificateButton";

const Certificate = () => {
  return (
  <StrictMode>
    <Navbar />
    <CertificateButton />
    <Footer />
  </StrictMode>
  )
}

export default Certificate;
