import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import CaptionNeverStopLearning from "./captionNeverStopLearning";
import MindmapSkill from "./mindmapSkill";
import ProgrammingSkill from "./programmingSkill";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Skill = () => {
  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <title>{"Skill - Setthap0ng"}</title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <CaptionNeverStopLearning />
      <MindmapSkill />
      <ProgrammingSkill />
      <Footer />
    </StrictMode>
  );
};

export default Skill;
