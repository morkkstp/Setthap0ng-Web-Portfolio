import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import ShowCertificate from "./showCertificate";

const WUCertificate = () => {
  return (
  <StrictMode>
    <Navbar />
    <ShowCertificate />
    <Footer />
  </StrictMode>
  )
}

export default WUCertificate;
