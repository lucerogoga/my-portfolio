import React from "react";
import "./styles/index.css";
import "./styles/rotate.css";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Services from "./Services";
import Footer from "./Footer";
import Skills from "./Skills";

const App = () => {
  return (
    <>
      <Home />
      <Services />
      <Projects />
      <Resume />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
