import { StrictMode } from "react";
import "../../index.css";
import Navbar from "../navbar";
import Footer from "../footer";
import CaptionNeverStopLearning from "./captionNeverStopLearning";
import MindmapSkill from "./mindmapSkill";
import ProgrammingSkill from "./programmingSkill";

const Skill = () => {
  return (
    <StrictMode>
      <Navbar />
      <CaptionNeverStopLearning />
      <MindmapSkill />
      <ProgrammingSkill />
      <Footer />
    </StrictMode>
  );
};

export default Skill;
