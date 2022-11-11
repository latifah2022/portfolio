import React from "react";

import Header from "./componets/Header";
import Home from "./componets/Home";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Portfolio from "./componets/Portfolio";

function App() {
  return (
    <div className="text-4xl font-bold ">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
