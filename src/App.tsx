import React from "react";
import "./styles/index.css";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Services from "./Services";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Home />
      <Services />
      <Resume />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
