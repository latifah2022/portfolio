import React from 'react';

// import components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Port from './components/Port';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Port />
      <Services />
      <Contact />
      <Footer />
      <Scroll />
      <div style={{ height: "2000px"}}></div>

    </div>
  );
};

export default App;
