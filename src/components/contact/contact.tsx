import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import AnyContact from "./anyContact";
import SendEmail from "./sendEmail";

const Contact = () => {
  return (
    <StrictMode>
      <Navbar />
      <AnyContact />
      <SendEmail />
      <Footer />
    </StrictMode>
  );
};

export default Contact;
