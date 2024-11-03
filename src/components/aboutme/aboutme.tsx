import { StrictMode } from "react";
import "../../index.css";
import Information from "./information";
import Navbar from "../navbar";
import Footer from "../footer";

const Aboutme = () => {
  return (
  <StrictMode>
    <Navbar />
    <Information/>
    <Footer />
  </StrictMode>
  )
}

export default Aboutme;
