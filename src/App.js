import React from "react";

import Header from "./componets/Header";
import Home from "./componets/Home";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Portfolio from "./componets/Portfolio";
import Services from "./componets/Services";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Scroll from "./componets/Scroll";

function App() {
  return (
    <div className="text-4xl font-bold ">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
