import { StrictMode } from "react";
import "../../index.css";
import Introduction from "./introduction";
import CaptionSteveJobs from "./captionSteveJobs";
import CaptionWithContact from "./captionWithContact";
import Navbar from "../navbar";
import Footer from "../footer";

const HomePage = () => {
  return (
    <StrictMode>
      <Navbar />
      <Introduction />
      <CaptionSteveJobs />
      <CaptionWithContact />
      <Footer />
    </StrictMode>
  );
};

export default HomePage;
