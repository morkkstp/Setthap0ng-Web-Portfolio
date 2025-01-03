import { StrictMode } from "react";
import "../../index.css";
import Introduction from "./introduction";
import CaptionSteveJobs from "./captionSteveJobs";
import CaptionWithContact from "./captionWithContact";
import Navbar from "../navbar";
import Footer from "../footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>{"Home - Setthap0ng"}</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <Introduction />
      <CaptionSteveJobs />
      <CaptionWithContact />
      <Footer />
    </StrictMode>
  );
};

export default HomePage;
