import React from "react";
import "./styles/index.css";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Services from "./Services";

const App = () => {
  return (
    <>
      <Home />
      <Services />
      <Resume />
      <Projects />
    </>
  );
};

export default App;
