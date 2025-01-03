import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import AnyContact from "./anyContact";
import SendEmail from "./sendEmail";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contact = () => {
  return (
    <StrictMode>
      <HelmetProvider>
      <Helmet>
        <title>{"Contact - Setthap0ng"}</title>
      </Helmet>
      </HelmetProvider>
      <Navbar />
      <AnyContact />
      <SendEmail />
      <Footer />
    </StrictMode>
  );
};

export default Contact;
