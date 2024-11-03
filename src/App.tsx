import "./index.css";
import Home from "./components/home/home";
import Aboutme from "./components/aboutme/aboutme";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Contact from "./components/contact/contact";
import Skill from "./components/skill/skill";
import Certificate from "./components/certificate/certificate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/aboutme"
          element={
            <>
              <Aboutme />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="/skill"
          element={
            <>
              <Skill />
            </>
          }
        ></Route>
        <Route
          path="/certificate"
          element={
            <>
              <Certificate />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
